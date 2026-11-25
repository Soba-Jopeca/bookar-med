import { quadratic } from '@/data/bookar';
export function Parabola() {
  const px = (x: number) => 46 + x * 70;
  const py = (y: number) => 258 - y * 35;
  const points = Array.from({ length: 101 }, (_, i) => { const x = -0.35 + i * 0.047; return `${px(x)},${py(quadratic(x))}`; }).join(' ');
  return <figure className="parabola-figure"><svg viewBox="0 0 370 340" role="img" aria-labelledby="graph-title graph-description">
    <title id="graph-title">Gráfico de f(x) = x² − 4x + 3</title><desc id="graph-description">Parábola voltada para cima, com raízes (1, 0) e (3, 0), vértice (2, −1) e eixo de simetria x = 2.</desc>
    <defs><clipPath id="plot-area"><rect x="18" y="20" width="327" height="298"/></clipPath></defs>
    {[0,1,2,3,4].map(x => <line key={`x${x}`} x1={px(x)} x2={px(x)} y1="28" y2="310" className="graph-grid"/>)}
    {[-1,0,1,2,3,4,5,6].map(y => <line key={`y${y}`} x1="18" x2="345" y1={py(y)} y2={py(y)} className="graph-grid"/>)}
    <line x1="18" x2="350" y1={py(0)} y2={py(0)} className="graph-axis"/><line x1={px(0)} x2={px(0)} y1="20" y2="310" className="graph-axis"/>
    <text x="350" y="250">x</text><text x="53" y="21">y</text>
    {[0,1,2,3,4].map(x => <text key={x} x={px(x)-4} y="278">{x}</text>)}
    {[-1,1,2,3,4,5,6].map(y => <text key={y} x="25" y={py(y)+5}>{y === -1 ? '−1' : y}</text>)}
    <line x1={px(2)} x2={px(2)} y1="28" y2="309" className="graph-symmetry"/><text x="197" y="39" className="graph-caption">x = 2</text>
    <polyline points={points} clipPath="url(#plot-area)" className="graph-curve"/>
    <circle cx={px(1)} cy={py(0)} r="5" className="graph-point"/><circle cx={px(3)} cy={py(0)} r="5" className="graph-point"/>
    <text x="69" y="244" className="graph-caption">(1, 0)</text><text x="293" y="249" className="graph-caption">(3, 0)</text>
    <circle cx={px(2)} cy={py(-1)} r="6" className="graph-vertex"/><text x="199" y="310" className="graph-caption">V (2, −1)</text>
  </svg><figcaption>A parábola abre para cima e cruza o eixo x em (1, 0) e (3, 0). O ponto mais baixo é o vértice (2, −1). A linha tracejada x = 2 divide o gráfico em duas partes simétricas.</figcaption></figure>;
}
