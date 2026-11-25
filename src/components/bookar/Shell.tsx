import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import { BookOpen, House, GraduationCap, ArrowRight, Menu, X, NotebookPen, ClipboardCheck, Timer, Search, Sprout } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useProgress } from './Progress';
export function Brand() { return <><span className="brandmark"><BookOpen size={31}/><span>+</span></span><span>bookar<span className="brand-light">med</span></span></>; }
export function Shell({ children }: { children: ReactNode }) {
  const pathname = useLocation({ select: l => l.pathname });
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);
  const sidebarRef = useRef<HTMLElement>(null);
  const { storageUnavailable } = useProgress();
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    if (!open) return;
    sidebarRef.current?.querySelector<HTMLAnchorElement>('a')?.focus();
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpen(false); menuRef.current?.focus(); }
      if (e.key === 'Tab') {
        const elements = sidebarRef.current?.querySelectorAll<HTMLElement>('a,button');
        const first = elements?.[0]; const last = elements?.[elements.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open]);
  return <div className="app-shell">
    <a href="#main-content" className="skip-link">Saltar para o conteúdo</a>
    {open && <div className="menu-scrim" onClick={() => { setOpen(false); menuRef.current?.focus(); }} />}
    <aside ref={sidebarRef} className={`sidebar ${open ? 'open' : ''}`} aria-label="Navegação principal">
      <div className="sidebar-brand"><Link to="/" className="brand" aria-label="Bookar Med, início"><Brand/></Link><Button className="close-menu" variant="ghost" size="icon" aria-label="Fechar menu" onClick={() => { setOpen(false); menuRef.current?.focus(); }}><X/></Button></div>
      <p className="brand-tagline">O teu próximo capítulo começa aqui.</p>
      <div className="nav-label">O teu espaço</div>
      <nav className="side-nav">
        <Link to="/" className={pathname === '/' ? 'active' : ''}><House size={19}/>Início</Link>
        <Link to="/catalogo" className={pathname.includes('catalogo') || pathname.includes('disciplinas') || pathname.startsWith('/aula') ? 'active' : ''}><BookOpen size={19}/>Trilhas de estudo<span className="nav-count">4</span></Link>
      </nav>
      <div className="nav-label">Aprender & avaliar</div>
      <nav className="side-nav">
        <Link to="/pratica/MAT-FQ" className={pathname.startsWith('/pratica') ? 'active' : ''}><NotebookPen size={19}/>Prática<span className="nav-count">1</span></Link>
        <Link to="/modalidades" className={pathname === '/modalidades' ? 'active' : ''}><ClipboardCheck size={19}/>Controlo<span className="nav-soon">Em breve</span></Link>
        <Link to="/modalidades"><Timer size={19}/>Simulado<span className="nav-soon">Em breve</span></Link>
      </nav>
      <div className="sidebar-bottom"><div className="side-note"><Sprout size={22}/><strong>Pequenos passos.<br/>Grandes futuros.</strong><p>Um tópico de cada vez, mais perto do teu sonho.</p><Link to="/catalogo">Começar a aprender <ArrowRight size={14}/></Link></div>
      <div className="user-profile"><span className="avatar">EC</span><div><strong>Estudante convidado</strong><small>Perfil de demonstração</small></div></div></div>
    </aside>
    <div className="main-shell"><div className="demo-ribbon">PROVA DE CONCEITO <span>·</span> Dados de demonstração <span>·</span> Conteúdo sujeito a revisão pedagógica</div>
      <header className="topbar"><Button ref={menuRef} variant="ghost" size="icon" className="mobile-menu" aria-label="Abrir menu" aria-expanded={open} onClick={() => setOpen(true)}><Menu/></Button><span className="topbar-label"><Search size={17}/>O que vamos aprender hoje?</span><div className="topright"><span className="pill"><i className="status-dot"/>UAN · Base 2026/2027</span><GraduationCap size={21}/><span className="avatar">EC</span></div></header>
      <div className="quick-access"><Button asChild><Link to="/catalogo">Iniciar estudos <ArrowRight/></Link></Button><Button variant="outline" asChild><Link to="/modalidades">Modalidades</Link></Button><span>Um passo de cada vez, ao teu ritmo.</span></div>
      <main id="main-content" tabIndex={-1} className="content">{storageUnavailable && <p className="notice" role="status">O navegador não permite guardar progresso. Podes estudar, mas a retoma não estará disponível após fechar a página.</p>}{children}</main>
      <footer className="brand-footer">Bookar Med By: Soba Academy - Mentoria do Soba<small>Preparação para o acesso à Medicina em Angola · UAN 2026/2027</small></footer>
    </div>
  </div>;
}
