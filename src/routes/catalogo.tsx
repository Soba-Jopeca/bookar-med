import { createFileRoute } from '@tanstack/react-router';
import { SubjectCards } from '@/components/bookar/SubjectCards';
import { pageHead } from '@/data/bookar';
export const Route = createFileRoute('/catalogo')({ head: () => pageHead('Trilhas de estudo', 'Explora Matemática, Biologia, Química e Língua Portuguesa para o acesso à Medicina em Angola.'), component: Catalog });
function Catalog() {
  return <><header className="page-heading"><div className="eyebrow">O teu mapa de aprendizagem</div><h1>Trilhas de estudo</h1><p>Quatro disciplinas. Um objectivo em comum.</p></header><div className="catalog-intro"><span className="pill green">Ciências da Saúde</span></div><SubjectCards/></>;
}
