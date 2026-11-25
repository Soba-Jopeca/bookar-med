import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import { mathReview } from '@/data/mathReview';
import { pageHead } from '@/data/bookar';

export const Route = createFileRoute('/matematica/$topico')({
  loader: ({ params }) => {
    const lesson = mathReview.find(item => String(item.number) === params.topico);
    if (!lesson) throw notFound();
    return lesson;
  },
  head: ({ loaderData }) => pageHead(loaderData?.title ?? 'Matemática', 'Aula de autoestudo Bookar Med'),
  component: Lesson,
});

function Lesson() {
  const lesson = Route.useLoaderData();
  const n = lesson.number;
  return <article className="lesson-body">
    <Link to="/disciplinas/$disciplina" params={{ disciplina: 'matematica' }}>Voltar a Matemática</Link>
    <h1>{n}. {lesson.title}</h1>
    <p className="notice">Prévia para revisão geral.</p>
    <h2>{n}.1 · O que é?</h2><p>{lesson.definition}</p>
    <h2>{n}.2 · Como resolver</h2><p>{lesson.method}</p>
    <h2>{n}.3 · Exemplo resolvido</h2>
    <section className="concept">
      <strong>{lesson.example}</strong>
      <ol>{lesson.steps.map((step, i) => <li key={step}>
        <strong>{i === 2 ? 'Verifica e interpreta' : `Passo ${i + 1}`}. </strong>{step}
      </li>)}</ol>
    </section>
    <h2>{n}.4 · A tua vez</h2><p>{lesson.question}</p>
    <details><summary>Conferir resolução</summary><p>{lesson.answer}</p></details>
    <p className="editorial-note">UAN · Medicina · 2026/2027 · Tópicos para o Exame de Acesso, PDF p. 2 / impressa p. 1 · Marcadores {lesson.markers.join(', ')}.</p>
  </article>;
}
