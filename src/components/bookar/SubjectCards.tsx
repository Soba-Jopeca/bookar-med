import { Link } from '@tanstack/react-router';
import { ArrowUpRight, Calculator, Dna, FlaskConical, Languages } from 'lucide-react';
import { curriculum } from '@/data/curriculum';
import { subjects } from '@/data/bookar';
const icons = { math: Calculator, biology: Dna, chemistry: FlaskConical, language: Languages };
export function SubjectCards() {
  return <div className="subject-grid">{subjects.map(subject => {
    const Icon = icons[subject.symbol];
    return <Link key={subject.id} to="/disciplinas/$disciplina" params={{ disciplina: subject.id }} className={`subject-card ${subject.tone}`}>
      <div className="subject-top"><span className="subject-tile"><Icon size={23}/></span><ArrowUpRight size={18} className="text-muted-foreground"/></div>
      <h3>{subject.name}</h3><p>{subject.description}</p>
      <div className="subject-divider"/><div className="subject-status"><span>{subject.id === 'matematica' ? 20 : curriculum[subject.id]?.length} tópicos</span></div>
    </Link>;
  })}</div>;
}
