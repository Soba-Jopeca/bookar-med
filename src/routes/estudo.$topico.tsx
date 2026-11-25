import { StudyVisual } from '@/components/bookar/StudyVisual';
import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import { LessonProgress } from '@/components/bookar/LessonProgress';
import { curriculum } from '@/data/curriculum';
import { otherLessons } from '@/data/otherLessons';
import { pageHead } from '@/data/bookar';

export const Route = createFileRoute('/estudo/$topico')({
  loader: ({params}) => {
    const lesson = otherLessons[params.topico];
    const discipline = params.topico.startsWith('QUI-') ? 'quimica' : 'portugues';
    const topics = curriculum[discipline] ?? [];
    const index = topics.findIndex(topic => topic.id === params.topico);
    if (!lesson || index === -1) throw notFound();
    return {lesson, discipline, id: params.topico, number: index+1, next: topics[index+1]?.id};
  },
  head: ({loaderData}) => pageHead(loaderData?.lesson.title ?? 'Estudo', 'Bookar Med · Autoestudo'),
  component: Lesson,
});

function Lesson() {
  const {lesson, discipline, id, number, next} = Route.useLoaderData();
  return <article className="lesson-body">
    <Link to="/disciplinas/$disciplina" params={{disciplina:discipline}}>Voltar aos tópicos</Link>
    <h1>{number}. {lesson.title}</h1>
    <p className="notice">Prévia editorial · Aula introdutória.</p>
    <h2>{number}.1 · Conceitos essenciais</h2><p>{lesson.concept}</p>
    <h2>{number}.2 · Exemplo explicado</h2><figure className="concept"><figcaption>{lesson.example}</figcaption></figure>
    <StudyVisual id={id}/><h2>{number}.3 · A tua vez</h2><p>{lesson.question}</p>
    <details><summary>Conferir resolução</summary><p>{lesson.answer}</p></details>
    {lesson.practice.map(([question, answer]) => <section className="concept" key={question}>
      <p>{question}</p><details><summary>Conferir resolução</summary><p>{answer}</p></details>
    </section>)}
    <LessonProgress id={id}/>
    {next && <Link to="/estudo/$topico" params={{topico:next}}>Avançar para a próxima aula</Link>}
  </article>;
}
