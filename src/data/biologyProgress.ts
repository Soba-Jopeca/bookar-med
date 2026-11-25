import { studyProgressionEnabled } from './studyAccess.server';
import { createServerFn } from '@tanstack/react-start';
import { useSession } from '@tanstack/react-start/server';
import { z } from 'zod';
import { biologyBank } from './biologyBank.server';
import { mathProgress } from './mathProgress';

type Key = { topic: number; item: number };
type Attempt = { id: string; target: number; placement: boolean; keys: Key[] };
type Session = { completed?: number; attempt?: Attempt | null; previous?: Key[] };
const topicSchema = z.number().int().min(1).max(12);

async function biologySession() {
  const password = process.env['BOOKAR_SESSION_SECRET'];
  if (!password || password.length < 32) throw new Error('Sessão indisponível.');
  return useSession<Session>({
    name: 'bookar-biology', password, maxAge: 60 * 60 * 24 * 90,
    cookie: { httpOnly: true, sameSite: 'lax', secure: process.env['NODE_ENV'] === 'production' },
  });
}

export const biologyProgress = createServerFn({ method: 'GET' }).handler(async () => {
  const { configured, reviewOpen } = await mathProgress();
  return { configured, reviewOpen, enforced: studyProgressionEnabled(), completed: configured ? (await biologySession()).data.completed ?? 0 : 0 };
});

function shuffle<T>(items: T[]): T[] {
  for (let i = items.length - 1; i > 0; i--) {
    const j = crypto.getRandomValues(new Uint32Array(1))[0]! % (i+1);
    [items[i], items[j]] = [items[j]!, items[i]!];
  }
  return items;
}

function statement({ topic, item }: Key) {
  return biologyBank[topic-1]![Math.floor(item/2)]![item % 2]!;
}

export const startBiologyAssessment = createServerFn({ method: 'POST' })
  .validator(z.object({ target: topicSchema, placement: z.boolean() }))
  .handler(async ({ data }) => {
    const current = await biologySession();
    const completed = current.data.completed ?? 0;
    if (data.placement !== (studyProgressionEnabled() && data.target > completed + 1)) throw new Error('Modalidade indisponível.');
    const topics = data.placement ? Array.from({ length: data.target - 1 }, (_, i) => i + 1) : [data.target];
    const previous = current.data.attempt?.keys ?? current.data.previous ?? [];
    const keys = topics.flatMap(topic => {
      const count = topics.length === 1 ? 5 : topics.length === 2 && topic === 1 ? 3 : 2;
      const unavailable = new Set(previous.filter(key => key.topic === topic).map(key => key.item));
      // Pick distinct concepts per attempt, choosing only variants absent from the last attempt.
      const concepts = biologyBank[topic-1]!.map((_, i) =>
        shuffle([2*i, 2*i+1].filter(item => !unavailable.has(item)))[0]!);
      return shuffle(concepts).slice(0,count).map(item => ({ topic, item }));
    });
    const attempt = { id: crypto.randomUUID(), ...data, keys: shuffle(keys) };
    await current.update({ attempt, previous: [] });
    return { id: attempt.id, questions: attempt.keys.map(key => ({ topic: key.topic, prompt: statement(key) })) };
  });

export const submitBiologyAssessment = createServerFn({ method: 'POST' })
  .validator(z.object({ id: z.string().uuid(), answers: z.array(z.boolean()).min(5).max(22) }))
  .handler(async ({ data }) => {
    const current = await biologySession();
    const attempt = current.data.attempt;
    if (!attempt || attempt.id !== data.id || attempt.keys.length !== data.answers.length) {
      throw new Error('Inicia uma nova tentativa.');
    }
    const results: Record<number, { correct: number; total: number }> = {};
    let correct = 0;
    attempt.keys.forEach((key, i) => {
      const group = results[key.topic] ??= { correct: 0, total: 0 };
      group.total++;
      if (data.answers[i] === (key.item % 2 === 0)) {
        correct++;
        group.correct++;
      }
    });
    const total = attempt.keys.length;
    const passed = correct * 5 >= total * 4;
    const completed = Math.max(current.data.completed ?? 0, passed && studyProgressionEnabled() ? attempt.target - Number(attempt.placement) : 0);
    await current.update({ completed, attempt: null, previous: attempt.keys });
    return { correct, total, passed, completed, results };
  });
