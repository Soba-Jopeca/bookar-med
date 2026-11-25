import { LessonStatus } from '@/components/bookar/LessonProgress';
import { otherLessons } from '@/data/otherLessons';
import { biologyProgress } from '@/data/biologyProgress';
import { MathProfile } from '@/components/bookar/MathProfile';
import { mathProgress } from '@/data/mathProgress';
import { MathLessonLink } from '@/components/bookar/MathLessonLink';
import { mathReview } from '@/data/mathReview';
import { curriculum } from '@/data/curriculum';
import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { subjects, pageHead } from '@/data/bookar';
export const Route = createFileRoute('/disciplinas/$disciplina')({
  loader: async ({ params }) => { const subject = subjects.find(s => s.id === params.disciplina); if (!subject) throw notFound(); return { ...subject, biology: subject.id === "biologia" ? await biologyProgress() : null, progress: subject.id === "matematica" ? await mathProgress() : null }; },
  head: ({ loaderData }) => pageHead(loaderData?.name ?? 'Disciplina indisponível', `Estuda ${loaderData?.name ?? 'as disciplinas'} com o Bookar Med, preparação para o acesso à Medicina em Angola.`), component: Subject,
});
function Subject() {
  const subject = Route.useLoaderData();
  return <><nav className="breadcrumb" aria-label="Percurso"><Link to="/catalogo">Trilhas de estudo</Link><ChevronRight size={13}/><span>{subject.name}</span></nav><header className="page-heading"><div className="eyebrow">{subject.name}</div><h1>{subject.name}</h1><p>{subject.description}</p></header>

    {subject.progress && <MathProfile status={subject.progress}/>}
    <h2>Tópicos de estudo</h2>
    <div className="topic-list">
      {subject.progress ? Array.from({length: 20}, (_, i) => i + 1).map(n => {
        const title = n === 1 ? 'Potências e radicais' : n === 6 ? 'Função quadrática e parábola' : mathReview.find(u => u.number === n)?.title;
        const unlocked = subject.progress!.reviewOpen || n <= subject.progress!.completed+1;
        return <section className="topic-row" key={n}>
          <div><span className="pill">Tópico {n}</span><h2>{title}</h2>
            <LessonStatus id={`math-${n}`} approved={n <= subject.progress!.completed}/></div>
          <Button asChild>{unlocked ? <MathLessonLink topic={n}>Abrir aula <ArrowRight/></MathLessonLink>
            : <Link to="/avaliacao/matematica/$topico" params={{topico:String(n)}}>Teste de acesso <ArrowRight/></Link>}</Button>
        </section>;
      }) : curriculum[subject.id]?.map((topic,index) => <section className="topic-row" key={topic.id}>
        <div><span className="pill">{topic.id}</span><h2>{otherLessons[topic.id]?.title ?? topic.title}</h2>
          <LessonStatus id={topic.id} approved={!!subject.biology && index<subject.biology.completed}/></div>
        <Button asChild>{subject.biology
          ? subject.biology.reviewOpen || index <= subject.biology.completed
            ? <Link to="/biologia/$topico" params={{topico:topic.id}}>Abrir aula <ArrowRight/></Link>
            : <Link to="/avaliacao/biologia/$topico" params={{topico:String(index+1)}}>Teste de acesso <ArrowRight/></Link>
          : <Link to="/estudo/$topico" params={{topico:topic.id}}>Abrir aula <ArrowRight/></Link>}</Button>
      </section>)}
    </div></>;
}
