const diagrams: Record<number, { caption: string; labels: string[] }> = {
  1: { caption: 'Comparação esquemática, sem escala. O DNA principal está dentro do núcleo apenas na célula eucariótica típica.', labels: ['Procariótica: membrana → citoplasma → nucleóide', 'Eucariótica: membrana → citoplasma → núcleo com envoltório'] },
  2: { caption: 'Os dois percursos podem ocorrer na mesma folha durante o dia.', labels: ['Luz + CO₂ + água → fotossíntese → matéria orgânica e oxigénio', 'Matéria orgânica + oxigénio → respiração aeróbia → ATP, CO₂ e água'] },
  3: { caption: 'Segue a informação da sequência de DNA até à cadeia de aminoácidos.', labels: ['DNA', 'Transcrição → RNA mensageiro', 'Tradução → cadeia de aminoácidos'] },
  4: { caption: 'Conta os cromossomas por núcleo, distinguindo homólogos e cromátides irmãs.', labels: ['2n = 8 antes da divisão', 'Meiose I → cada núcleo com n = 4 cromossomas duplicados', 'Meiose II → cada núcleo com n = 4 cromossomas não duplicados'] },
  11: { caption: 'Chave simplificada para comparar grupos vegetais.', labels: ['Sem vasos verdadeiros → Briófitas', 'Vasos, sem sementes → Fetos', 'Sementes sem fruto → Gimnospérmicas', 'Flores e frutos → Angiospérmicas'] },
};
export function BiologyDiagram({ topic }: { topic: number }) {
  if (topic === 1) return <figure className="concept">
    <div className="grid grid-cols-2 gap-3 text-center" role="img" aria-label="À esquerda, DNA no nucleóide sem envoltório. À direita, DNA dentro de um núcleo delimitado.">
      <div><strong>Procariótica</strong><div className="my-2 rounded-full border-2 border-emerald-700 bg-emerald-50 p-3 text-emerald-950"><span className="block">Membrana</span><span className="inline-block rounded bg-amber-100 p-1">DNA no nucleóide</span></div></div>
      <div><strong>Eucariótica</strong><div className="my-2 rounded-full border-2 border-emerald-700 bg-emerald-50 p-3 text-emerald-950"><span className="block">Membrana</span><span className="inline-block rounded-full border-2 border-blue-700 bg-blue-50 p-1">DNA no núcleo</span></div></div>
    </div>
    <figcaption>{diagrams[1]?.caption} A linha azul representa o envoltório nuclear.</figcaption>
  </figure>;
  if (topic === 5) return <figure className="concept overflow-x-auto">
    <table className="w-full border-collapse text-center">
      <caption className="pb-2 font-semibold">Quadro de Punnett · Aa × Aa</caption>
      <thead><tr><th scope="col">Gâmetas</th><th scope="col">A</th><th scope="col">a</th></tr></thead>
      <tbody><tr><th scope="row">A</th><td className="border p-2">AA</td><td className="border p-2">Aa</td></tr>
        <tr><th scope="row">a</th><td className="border p-2">Aa</td><td className="border p-2 font-bold">aa</td></tr></tbody>
    </table>
    <figcaption className="mt-2">Cada combinação tem probabilidade de 1/4 no modelo. O genótipo aa aparece num dos quatro quadrados.</figcaption>
  </figure>;
  const diagram = diagrams[topic];
  if (!diagram) return null;
  return <figure className="concept">
    <ul className="grid gap-2 p-0 list-none">{diagram.labels.map(label =>
      <li className="rounded border bg-background p-3 font-medium" key={label}>{label}</li>)}</ul>
    <figcaption>{diagram.caption}</figcaption>
  </figure>;
}
