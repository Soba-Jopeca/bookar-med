import { Link } from '@tanstack/react-router';
import type { extraMathPractice } from '@/data/mathProgress';

export function MathPractice({ topic, items }: { topic: number; items: Awaited<ReturnType<typeof extraMathPractice>> }) {
  return <>
    <h2>{topic}.5 · Mais exemplos resolvidos</h2>
    {items.slice(0, 4).map(({ prompt, explanation }) => <div className="concept" key={prompt}>
      <strong>{prompt}</strong><p>{explanation}</p>
    </div>)}
    <h2>{topic}.6 · Prática com resolução</h2>
    {items.slice(4).map(({ prompt, explanation }, i) => <div className="concept" key={prompt}>
      <p><strong>{i+1}.</strong> {prompt}</p>
      <details><summary>Conferir resolução</summary><p>{explanation}</p></details>
    </div>)}
  </>;
}
export function MathAssessmentLink({topic, heading}: { topic: number; heading: string }) {
  return <section className="concept"><h2>{heading} · Avaliação de conclusão</h2>
    <p>Resolve cinco questões e acerta pelo menos quatro para fechar o tópico.</p>
    <Link className="underline" to="/avaliacao/matematica/$topico" params={{ topico: String(topic) }}>Fazer avaliação do tópico {topic}</Link>
  </section>;
}
