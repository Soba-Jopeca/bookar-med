import { studyProgressionEnabled } from './studyAccess.server';
import { createServerFn } from '@tanstack/react-start';
import { useSession } from '@tanstack/react-start/server';
import { z } from 'zod';
import { questionsFor } from './mathQuestions';

type QuestionKey = { topic: number; variant: number; skill: 0 | 1 };
type Attempt = { id: string; target: number; placement: boolean; keys: QuestionKey[] };
type Progress = { reviewerUntil?: number; completed?: number; attempt?: Attempt | null; previous?: QuestionKey[] };
const topicSchema = z.number().int().min(1).max(20);

async function session() {
  const password = process.env['BOOKAR_SESSION_SECRET'];
  if (!password || password.length < 32) throw new Error('Configuração de sessão Bookar Med em falta.');
  return useSession<Progress>({ name: 'bookar-math', password, maxAge: 60 * 60 * 24 * 90,
    cookie: { httpOnly: true, sameSite: 'lax', secure: process.env['NODE_ENV'] === 'production' } });
}

const reviewerCode = () => process.env['BOOKAR_REVIEW_CODE'];

export const mathProgress = createServerFn({ method: 'GET' }).handler(async () => {
  if ((process.env['BOOKAR_SESSION_SECRET']?.length ?? 0) < 32) {
    return { enforced: false, configured: false, reviewOpen: true, canReview: false, reviewer: false, completed: 0 };
  }
  const { data } = await session();
  const canReview = (reviewerCode()?.length ?? 0) >= 32;
  const reviewer = canReview && (data.reviewerUntil ?? 0) > Date.now();
  return { enforced: studyProgressionEnabled(), configured: true, reviewOpen: reviewer || !studyProgressionEnabled(), canReview, reviewer, completed: data.completed ?? 0 };
});

export const changeMathProfile = createServerFn({ method: 'POST' })
  .validator(z.object({ code: z.string().max(256).nullable() }))
  .handler(async ({ data }) => {
    const current = await session();
    if (data.code === null) {
      await current.update({ reviewerUntil: 0 });
      return true;
    }
    const expected = reviewerCode();
    if (!expected || expected.length < 32) return false;
    const bytes = (value: string) => new TextEncoder().encode(value);
    const digest = async (value: string) => new Uint8Array(await crypto.subtle.digest('SHA-256', bytes(value)));
    const [actual, reference] = await Promise.all([digest(data.code), digest(expected)]);
    let mismatch = 0;
    for (let i = 0; i < reference.length; i++) mismatch |= actual[i]! ^ reference[i]!;
    if (mismatch !== 0) return false;
    await current.update({ reviewerUntil: Date.now() + 8 * 60 * 60 * 1000 });
    return true;
  });

function randomIndex(size: number) {
  return crypto.getRandomValues(new Uint32Array(1))[0]! % size;
}

export const startAssessment = createServerFn({ method: 'POST' })
  .validator(z.object({ target: topicSchema, placement: z.boolean() }))
  .handler(async ({ data }) => {
    const current = await session();
    const completed = current.data.completed ?? 0;
    if (data.placement !== (studyProgressionEnabled() && data.target > completed + 1)) {
      throw new Error('O teste pedido não está disponível para o teu progresso.');
    }
    const picks: QuestionKey[] = [];
    const topics = data.placement ? Array.from({ length: data.target - 1 }, (_, i) => i + 1) : [data.target];
    for (const topic of topics) {
      const skills = data.placement && topics.length >= 2 ? ([0, 1, ...(topics.length === 2 && topic === 1 ? [0 as const] : [])] as const) : [0, 1, 0, 1, 0] as const;
      for (const skill of skills) {
        const used = [...picks, ...(current.data.attempt?.keys ?? current.data.previous ?? [])]
          .filter(key => key.topic === topic && key.skill === skill).map(key => key.variant);
        const candidates = Array.from({ length: 7 }, (_, i) => i).filter(i => !used.includes(i));
        picks.push({ topic, skill, variant: candidates[randomIndex(candidates.length)]! });
      }
    }
    for (let i = picks.length - 1; i > 0; i--) {
      const j = randomIndex(i + 1);
      [picks[i], picks[j]] = [picks[j]!, picks[i]!];
    }
    const attempt: Attempt = { id: crypto.randomUUID(), ...data, keys: picks };
    await current.update({ attempt, previous: [] });
    return { id: attempt.id, questions: picks.map(({ topic, skill, variant }) => ({
      topic, prompt: questionsFor(topic, variant)[skill].prompt,
    })) };
  });

export const submitAssessment = createServerFn({ method: 'POST' })
  .validator(z.object({ id: z.string().uuid(), answers: z.array(z.number().finite()).min(5).max(38) }))
  .handler(async ({ data }) => {
    const current = await session();
    const attempt = current.data.attempt;
    if (!attempt || attempt.id !== data.id || attempt.keys.length !== data.answers.length) {
      throw new Error('Esta tentativa deixou de estar activa. Inicia um novo teste.');
    }
    const results: Record<number, { correct: number; total: number }> = {};
    let correct = 0;
    attempt.keys.forEach(({ topic, variant, skill }, i) => {
      const group = results[topic] ??= { correct: 0, total: 0 };
      group.total++;
      if (data.answers[i] === questionsFor(topic, variant)[skill].answer) {
        correct++;
        group.correct++;
      }
    });
    const total = attempt.keys.length;
    const passed = correct * 5 >= total * 4;
    const completed = Math.max(current.data.completed ?? 0, passed && studyProgressionEnabled() ? attempt.target - Number(attempt.placement) : 0);
    await current.update({ completed, attempt: null, previous: attempt.keys });
    return { correct, total, passed, results, completed };
  });

export const extraMathPractice = createServerFn({ method: 'GET' })
  .validator(topicSchema)
  .handler(({ data: topic }) => {
    // Keep the worked exercises on different parameter values from assessments.
    return Array.from({ length: 8 }, (_, i) => questionsFor(topic, i + 10)).flat();
  });
