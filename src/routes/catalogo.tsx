import { createFileRoute } from '@tanstack/react-router';
import { SubjectCards } from '@/components/bookar/SubjectCards';
import { pageHead } from '@/data/bookar';
export const Route = createFileRoute('/catalogo')({ head: () => pageHead('Trilhas de estudo', 'Explora Matemática, Biologia, Química e Língua Portuguesa para o acesso à Medicina na UAN, 2026/2027.'), component: Catalog });
function Catalog() {
  return <><header className="page-heading"><div className="eyebrow">O teu mapa de aprendizagem</div><h1>Trilhas de estudo</h1><p>Quatro disciplinas. Um objectivo em comum.</p></header><div className="catalog-intro"><span className="pill green">Ciências da Saúde · UAN</span><span className="pill">Edição 2026/2027</span></div><p className="notice"><strong>Uma primeira aula para explorar.</strong> A demonstração MAT-FQ está disponível em Matemática. O restante conteúdo está em preparação e será revisto pela equipa editorial.</p><SubjectCards/></>;
}
