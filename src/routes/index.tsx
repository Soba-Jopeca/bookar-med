import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowRight, BookOpen, CheckCircle2, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SubjectCards } from '@/components/bookar/SubjectCards';
import { pageHead } from '@/data/bookar';

export const Route = createFileRoute('/')({
  head: () => pageHead('Preparação para Medicina', 'Bookar Med, um projecto da Soba Academy - Mentoria do Soba, por João Caneca.'),
  component: Landing,
});

function Landing() {
  return <>
    <section className="overflow-hidden rounded-3xl bg-[#163d34] p-6 text-[#f4f8ef] sm:p-10">
      <div className="grid items-center gap-9 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-semibold text-[#cbdea1]">Soba Academy · Mentoria do Soba</p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">Prepara-te para o acesso à Medicina.</h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-[#d8e5dc]">Estuda ao teu ritmo, resolve exercícios com feedback e identifica os tópicos que precisas de rever.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild variant="lime"><Link to="/catalogo">Iniciar estudos <ArrowRight/></Link></Button>
            <Button asChild variant="secondary"><Link to="/login"><LogIn/> Entrar</Link></Button>
          </div>
          <p className="mt-6 text-sm text-[#d8e5dc]">Bookar Med · Um projecto de João Caneca</p>
        </div>
        <div className="rounded-2xl bg-[#f4f8ef] p-5 text-[#163d34] sm:p-7">
          <p className="flex items-center gap-2 text-sm font-semibold"><BookOpen size={18}/> Experimenta uma aula</p>
          <h2 className="mt-3 text-2xl font-semibold">Potências e radicais</h2>
          <p className="mt-2">Quanto vale √49?</p>
          <details className="my-4 rounded-xl border border-[#789386] p-3">
            <summary className="cursor-pointer font-medium">Conferir resolução</summary>
            <p className="mt-2 flex gap-2"><CheckCircle2 size={19}/> 7, porque 7 × 7 = 49 e a raiz quadrada é não negativa.</p>
          </details>
          <Link className="font-semibold underline" to="/aula/MAT-01">Abrir aula de demonstração</Link>
        </div>
      </div>
    </section>
    <section className="mt-8"><h2 className="mb-3 text-2xl font-semibold">Trilhas de estudo</h2><SubjectCards/></section>
    <p className="mt-6"><Link className="underline" to="/estudar">Abrir área de estudo</Link></p>
  </>;
}
