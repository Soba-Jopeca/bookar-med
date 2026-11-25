import { useEffect, useState } from 'react';
import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import { mathProgress, startAssessment, submitAssessment } from '@/data/mathProgress';
import { MathLessonLink } from '@/components/bookar/MathLessonLink';

export const Route = createFileRoute('/avaliacao/matematica/$topico')({
  loader: async ({ params }) => {
    const topic = Number(params.topico);
    if (!/^(?:[1-9]|1[0-9]|20)$/.test(params.topico)) throw notFound();
    return { topic, ...await mathProgress() };
  },
  component: Assessment,
});

function Assessment() {
  const { topic, configured, completed } = Route.useLoaderData();
  return <AssessmentForm key={topic} topic={topic} configured={configured} initialCompleted={completed}/>;
}

function AssessmentForm({ topic, configured, initialCompleted }: {
  topic: number; configured: boolean; initialCompleted: number;
}) {
  const [attempt, setAttempt] = useState<Awaited<ReturnType<typeof startAssessment>>>();
  const [result, setResult] = useState<Awaited<ReturnType<typeof submitAssessment>>>();
  const [answers, setAnswers] = useState<string[]>([]);
  const [busy, setBusy] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  const [error, setError] = useState('');
  const completed = result?.completed ?? initialCompleted;
  const placement = topic > completed + 1;
  const count = placement ? (Math.max(5, 2*(topic-1))) : 5;
  async function begin() {
    setBusy(true); setError('');
    try {
      const next = await startAssessment({ data: { target: topic, placement } });
      setAttempt(next); setAnswers(next.questions.map(() => '')); setResult(undefined);
    } catch { setError('Não foi possível iniciar. Actualiza a página e tenta novamente.'); }
    finally { setBusy(false); }
  }
  async function submit() {
    if (!attempt || answers.some(a => !/^[+-]?\d+$/.test(a.trim()))) return;
    setBusy(true); setError('');
    try {
      setResult(await submitAssessment({ data: { id: attempt.id, answers: answers.map(Number) } }));
      setAttempt(undefined);
    } catch { setError('Não foi possível corrigir esta tentativa. Tenta novamente ou inicia uma nova.'); }
    finally { setBusy(false); }
  }
  return <article className="lesson-body">
    <Link to="/disciplinas/$disciplina" params={{ disciplina: 'matematica' }}>Voltar a Matemática</Link>
    <h1>{placement ? 'Teste de acesso directo' : 'Avaliação do tópico'} · {topic}</h1>
    {!configured ? <p className="notice">As avaliações estão a aguardar a configuração da sessão do site.</p> :
      <p>{placement ? 'O teste inclui perguntas de todos os tópicos anteriores.' : 'A avaliação verifica o que aprendeste neste tópico.'} Precisas de pelo menos 80%. {count} questões nesta modalidade.</p>}
    {error && <p role="alert">{error}</p>}
    {result && <section role="status" className="concept">
      <strong>{result.passed ? 'Aprovado' : 'Volta a tentar'} · {result.correct}/{result.total} ({(100*result.correct/result.total).toFixed(1)}%)</strong>
      <ul>{Object.entries(result.results).map(([n, score]) => <li key={n}>Tópico {n} · {score.correct}/{score.total}</li>)}</ul>
      {result.passed && result.completed < 20 && <MathLessonLink topic={result.completed+1}>Abrir tópico {result.completed+1}</MathLessonLink>}
      {result.passed && result.completed === 20 && <p>Trilha de Matemática concluída.</p>}
    </section>}
    {configured && <button className="underline" disabled={!ready || busy} onClick={begin}>{attempt || result ? 'Iniciar nova tentativa' : 'Começar teste'}</button>}
    {attempt && <form onSubmit={event => { event.preventDefault(); void submit(); }}>
      {attempt.questions.map(({ topic: n, prompt }, i) => <div className="concept" key={i}>
        <label htmlFor={`answer-${i}`}><strong>{i+1}. Tópico {n}</strong> · {prompt}</label>
        <input className="block border p-2" id={`answer-${i}`} inputMode="numeric" required pattern="(?:\+|-)?[0-9]+" value={answers[i]}
          onChange={e => setAnswers(old => old.map((answer, j) => j === i ? e.target.value : answer))}/>
      </div>)}
      <button className="underline" type="submit" disabled={busy}>Entregar avaliação</button>
    </form>}
  </article>;
}
