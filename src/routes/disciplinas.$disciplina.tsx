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
  return <><nav className="breadcrumb" aria-label="Percurso"><Link to="/catalogo">Trilhas de estudo</Link><ChevronRight size={13}/><span>{subject.name}</span></nav><header className="page-heading"><div className="eyebrow">UAN 2026/2027 · {subject.name}</div><h1>{subject.name}</h1><p>{subject.description}</p></header><p className="notice">Programa UAN de Ciências da Saúde · 2026/2027. A lista segue a cópia fornecida de Tópicos para o Exame de Acesso. A edição integral e a bibliografia de obras angolanas continuam por confirmar.</p>
    {subject.progress && <section className="lesson-body"><h2>Sequência de autoestudo</h2><MathProfile status={subject.progress}/><ol className="list-none">
      {Array.from({length: 20}, (_, i) => i + 1).map(n => {
        const title = n === 1 ? 'Potências e radicais' : n === 6 ? 'Função quadrática e parábola' : mathReview.find(u => u.number === n)?.title;
        return <li key={n}>{subject.progress!.reviewOpen || n <= subject.progress!.completed+1
          ? <MathLessonLink topic={n}>{n}. {title}</MathLessonLink>
          : <Link to="/avaliacao/matematica/$topico" params={{topico: String(n)}}>{n}. {title} · Teste de acesso</Link>}
          {n <= subject.progress!.completed && <span> · Concluído</span>}</li>;
      })}

    </ol></section>}
    <h2>Programa de referência</h2>
    <div className="topic-list">{curriculum[subject.id]?.map((topic, index) => (
      <section className="topic-row" key={topic.id}>
        <div><span className="pill">{topic.id}</span><h2>{topic.title}</h2>
        <p>Fonte: programa UAN, página {topic.page} do PDF / impressa {topic.page - 1}.</p></div>
        {topic.id === 'MAT-FQ' ? <Button asChild><Link to="/aula/MAT-FQ">Abrir aula piloto <ArrowRight/></Link></Button> : topic.id === 'MAT-01' ? <Button asChild><Link to="/aula/MAT-01">Abrir aula <ArrowRight/></Link></Button> : subject.id === 'matematica' ? <span className="pill">Consultar sequência acima</span> : subject.biology ? <Button asChild>{subject.biology.reviewOpen || index <= subject.biology.completed
          ? <Link to="/biologia/$topico" params={{topico:topic.id}}>{index < subject.biology.completed ? 'Rever aula concluída' : 'Abrir aula'} <ArrowRight/></Link>
          : <Link to="/avaliacao/biologia/$topico" params={{topico:String(index+1)}}>Teste de acesso <ArrowRight/></Link>}</Button> : <span className="pill">Aula em preparação</span>}
      </section>
    ))}</div></>;
}
