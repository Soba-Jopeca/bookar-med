const comparisons: Record<string, { headers: [string,string,string]; rows: [string,string,string][]; caption: string }> = {
  'QUI-01': {headers:['Período 3','Z','Grupo'], rows:[['Na','11','1'],['Mg','12','2'],['Cl','17','17']],
    caption:'Os três elementos pertencem ao mesmo período. O grupo muda ao percorrer a linha.'},
  'QUI-02': {headers:['Elemento','2 H₂ + O₂','2 H₂O'], rows:[['H','2 × 2 = 4','2 × 2 = 4'],['O','1 × 2 = 2','2 × 1 = 2']],
    caption:'Verifica cada elemento separadamente. O coeficiente multiplica todos os átomos da fórmula.'},
  'QUI-05': {headers:['[H₃O⁺] (mol/L)','pH aproximado','A 25 °C'], rows:[['10⁻³','3','Ácido'],['10⁻⁷','7','Neutro'],['10⁻¹¹','11','Básico']],
    caption:'Uma diferença de uma unidade de pH corresponde a um factor 10 na concentração, em solução diluída.'},
  'QUI-06': {headers:['Partícula','Carga relativa','Localização'], rows:[['Protão','+1','Núcleo'],['Neutrão','0','Núcleo'],['Electrão','−1','Região electrónica']],
    caption:'Para obter a carga do ião, compara a quantidade de protões com a de electrões.'},
  'QUI-07': {headers:['Ligação','Modelo','Exemplo'], rows:[['Iónica','Atracção entre iões','NaCl'],['Covalente','Partilha electrónica','Cl₂'],['Metálica','Electrões deslocalizados','Cu']],
    caption:'A fórmula e o tipo de constituintes ajudam a interpretar como o material se mantém unido.'},
  'QUI-08': {headers:['Eléctrodo','Processo','Semirreacção'], rows:[['Ânodo','Oxidação','Zn → Zn²⁺ + 2e⁻'],['Cátodo','Redução','Cu²⁺ + 2e⁻ → Cu']],
    caption:'Os electrões saem do ânodo e chegam ao cátodo pelo circuito externo.'},
  'QUI-10': {headers:['Família','Estrutura','Exemplo'], rows:[['Alcano','Apenas ligações simples C–C','CH₃–CH₃'],['Alceno','Uma ligação dupla C=C','CH₂=CH₂'],['Alcino','Uma ligação tripla C≡C','HC≡CH']],
    caption:'Uma ligação dupla ou tripla afecta o número de hidrogénios de uma cadeia aberta.'},
  'QUI-11': {headers:['Grupo','Exemplo','Função ilustrativa'], rows:[['Glícidos','Glicose','Fonte de energia'],['Lípidos','Fosfolípidos','Membranas'],['Proteínas','Enzimas','Catálise'],['Ácidos nucleicos','DNA','Informação hereditária']],
    caption:'Estas funções são exemplos. Cada grupo pode desempenhar outras funções.'},
  'POR-01': {headers:['Tipo','Pista','Exemplo'], rows:[['Informativo','Apresenta factos','O posto abre às sete.'],['Narrativo','Sequência de acontecimentos','A porta abriu e Lúcia entrou.'],['Dramático','Fala e indicação cénica','ANA — (senta-se) Já chegaste?'],['Lírico','Voz e expressão subjectiva','Oh, mar que levas a saudade.']],
    caption:'Classifica o texto com base nas marcas do excerto e na sua finalidade.'},
  'POR-13': {headers:['Constituinte','Função','Como reconhecer'], rows:[['A Lúcia','Sujeito','Concorda com entregou'],['o livro','Objecto directo','Pode ser substituído por o'],['ao colega','Objecto indirecto','Pode ser substituído por lhe']],
    caption:'Análise de «A Lúcia entregou o livro ao colega». Começa pelo verbo e verifica as substituições.'},
  'POR-22': {headers:['Elemento','Discurso directo','Discurso indirecto'], rows:[['Pessoa','Eu','Ela'],['Verbo','Vou','Ia'],['Tempo','Agora','Naquele momento']],
    caption:'As mudanças dependem de quem relata e de quando relata.'},
};
export function StudyVisual({ id }: { id: string }) {
  const data = comparisons[id];
  if (!data) return null;
  return <figure className="concept">
    <div className="overflow-x-auto"><table className="w-full border-collapse text-left">
      <thead><tr>{data.headers.map(header => <th className="border-b p-2" scope="col" key={header}>{header}</th>)}</tr></thead>
      <tbody>{data.rows.map(([name, second, third]) => <tr key={name}><th scope="row" className="border-b p-2">{name}</th><td className="border-b p-2">{second}</td><td className="border-b p-2">{third}</td></tr>)}</tbody>
    </table></div>
    <figcaption className="mt-2 text-sm">{data.caption}</figcaption>
  </figure>;
}
