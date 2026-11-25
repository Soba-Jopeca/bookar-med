import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import { ArrowRight, ChevronRight, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { subjects, lesson, pageHead } from '@/data/bookar';
export const Route = createFileRoute('/disciplinas/$disciplina')({
  loader: ({ params }) => { const subject = subjects.find(s => s.id === params.disciplina); if (!subject) throw notFound(); return subject; },
  head: ({ loaderData }) => pageHead(loaderData?.name ?? 'Disciplina indisponível', `Estuda ${loaderData?.name ?? 'as disciplinas'} com o Bookar Med, preparação para o acesso à Medicina em Angola.`), component: Subject,
});
function Subject() {
  const subject = Route.useLoaderData();
  return <><nav className="breadcrumb" aria-label="Percurso"><Link to="/catalogo">Trilhas de estudo</Link><ChevronRight size={13}/><span>{subject.name}</span></nav><header className="page-heading"><div className="eyebrow">UAN 2026/2027 · {subject.name}</div><h1>{subject.name}</h1><p>{subject.description}</p></header>{subject.available ? <><p className="notice">Aula demonstrativa · Conteúdo ilustrativo, sujeito a revisão pedagógica.</p><div className="topic-list"><section className="topic-row"><span className="topic-number">01</span><div><span className="pill green">Demonstração · {lesson.id}</span><h2>{lesson.title}</h2><p>Compreender o gráfico, identificar pontos e praticar.</p></div><Button asChild><Link to="/aula/MAT-FQ">Abrir aula <ArrowRight/></Link></Button></section></div></> : <section className="empty-state"><BookOpen size={44}/><span className="pill">Em preparação</span><h2>Conteúdo em preparação</h2><p>As aulas de {subject.name} estarão disponíveis numa próxima edição.</p><Button asChild variant="outline"><Link to="/catalogo">Voltar ao catálogo</Link></Button></section>}</>;
}
