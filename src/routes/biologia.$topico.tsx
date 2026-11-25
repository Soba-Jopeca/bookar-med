import { biologyProgress } from '@/data/biologyProgress';
import { BiologyDiagram } from '@/components/bookar/BiologyDiagram';
import { createFileRoute, Link, notFound, redirect } from '@tanstack/react-router';
import { biology } from '@/data/biology';
import { curriculum } from '@/data/curriculum';
import { pageHead } from '@/data/bookar';

export const Route = createFileRoute('/biologia/$topico')({
  loader: async ({params}) => {
    const index = curriculum['biologia']?.findIndex(topic => topic.id === params.topico) ?? -1;
    const topic = curriculum['biologia']?.[index];
    const lesson = biology[index];
    if (!topic || !lesson) throw notFound();
    const progress = await biologyProgress();
    if (!progress.reviewOpen && index > progress.completed) {
      throw redirect({to:'/avaliacao/biologia/$topico',params:{topico:String(index+1)}});
    }
    return {topic, lesson, number: index+1, reviewOpen: progress.reviewOpen, completed: progress.completed};
  },
  head: ({loaderData}) => pageHead(loaderData?.topic.title ?? 'Biologia', 'Aula de Biologia para revisão editorial'),
  component: Lesson,
});

function Lesson() {
  const {topic, lesson, number, reviewOpen, completed} = Route.useLoaderData();
  const next = curriculum['biologia']?.[number];
  return <article className="lesson-body">
    <Link to="/disciplinas/$disciplina" params={{disciplina:'biologia'}}>Voltar a Biologia</Link>
    <h1>{number}. {topic.title}</h1>
    <p className="notice">Prévia editorial para revisão geral.</p>
    <p><strong>Objectivo.</strong> {lesson.objective}</p>
    <h2>{number}.1 · Antes de começar</h2><p>{lesson.before}</p>
    <h2>{number}.2 · Conceitos essenciais</h2><p>{lesson.body}</p>
    <figure className="concept"><figcaption><strong>Esquema de leitura.</strong> {lesson.visual}</figcaption></figure>
    <h2>{number}.3 · Exemplos resolvidos</h2>
    {lesson.examples.map((example, i) => <section className="concept" key={example}><strong>Exemplo {i+1}</strong><p>{example}</p></section>)}
    <BiologyDiagram topic={number}/>
    <h2>{number}.4 · Prática com feedback</h2>
    {lesson.practice.map(([question, answer]) => <section className="concept" key={question}><p>{question}</p><details><summary>Conferir resolução</summary><p>{answer}</p></details></section>)}
    <p className="editorial-note">UAN · Medicina · 2026/2027 · Tópicos para o Exame de Acesso, PDF p. {topic.page} / impressa p. {topic.page-1}. Referência didáctica: <a href="https://openstax.org/details/books/biology-2e">OpenStax Biology 2e</a>, capítulos {lesson.chapters}.</p>
    <section className="concept">
      <h2>{number}.5 · Avaliação de conclusão</h2>
      <p>Cinco questões. Acerta pelo menos quatro (80%) para desbloquear o tópico seguinte.</p>
      <Link className="underline" to="/avaliacao/biologia/$topico" params={{topico:String(number)}}>Fazer avaliação do tópico {number}</Link>
    </section>
    {next && (reviewOpen || number <= completed) && <Link to="/biologia/$topico" params={{topico:next.id}}>Próxima aula · {next.title}</Link>}
  </article>;
}
