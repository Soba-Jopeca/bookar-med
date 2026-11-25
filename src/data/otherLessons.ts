export const otherLessons: Record<string, { title: string; concept: string; example: string; question: string; answer: string; practice: [string,string][] }> = {
  "QUI-01": {
    "title": "Tabela periódica",
    "concept": "O número atómico Z é o número de protões. Os elementos estão ordenados por Z, e os grupos são colunas. No mesmo período, o raio tende a diminuir da esquerda para a direita.",
    "example": "Na linha do sódio ao cloro, aumenta a carga nuclear e os electrões de valência ocupam a mesma camada principal. Em geral, o raio diminui.",
    "question": "Qual tem maior raio: Na ou Cl?",
    "answer": "Na. Ambos estão no mesmo período e o cloro está mais à direita.",
    "practice": [
      [
        "Mg e Na pertencem ao mesmo período. Qual está mais à direita?",
        "Mg, porque Z=12 e o sódio tem Z=11."
      ]
    ]
  },
  "QUI-02": {
    "title": "Reacções e equações químicas",
    "concept": "Uma equação conserva o número de átomos de cada elemento. Ajusta coeficientes à frente das fórmulas, mantendo os índices de cada substância.",
    "example": "Em H₂ + O₂ → H₂O, põe 2 em H₂O para igualar O. Ficam 4 H à direita: ajusta 2 H₂ à esquerda.",
    "question": "Equilibra N₂ + H₂ → NH₃.",
    "answer": "N₂ + 3 H₂ → 2 NH₃. Confere 2 N e 6 H em ambos os membros.",
    "practice": [
      [
        "Se 2 CO + O₂ → 2 CO₂, quantos átomos de O há em cada membro?",
        "Quatro: dois no CO e dois no O₂ à esquerda, quatro no CO₂ à direita."
      ]
    ]
  },
  "QUI-03": {
    "title": "Cinética química",
    "concept": "A velocidade é a variação da concentração por unidade de tempo. Temperatura, concentração, área de contacto e catalisadores podem alterar a velocidade.",
    "example": "Se um reagente passa de 0,80 para 0,50 mol/L em 10 s, a velocidade média de desaparecimento é (0,80−0,50)/10 = 0,030 mol/(L·s).",
    "question": "Qual a velocidade média de desaparecimento de 0,20 mol/L em 5 s?",
    "answer": "0,040 mol/(L·s). Divide a diminuição pelo tempo.",
    "practice": [
      [
        "Por que um catalisador acelera uma reacção?",
        "Oferece uma via com menor barreira de energia de activação."
      ]
    ]
  },
  "QUI-04": {
    "title": "Equilíbrio químico",
    "concept": "No equilíbrio dinâmico as velocidades directa e inversa são iguais. As concentrações mantêm-se constantes, mas podem ser diferentes. Para aA ⇌ bB, em solução ideal, K = [B]ᵇ/[A]ᵃ.",
    "example": "Em A ⇌ B, com [B]=0,6 e [A]=0,2 no equilíbrio, K=3. Para as mesmas condições, se Q=1, a reacção líquida favorece B.",
    "question": "Se Q>K, a reacção líquida favorece reagentes ou produtos?",
    "answer": "Reagentes, até Q voltar ao valor de K.",
    "practice": [
      [
        "Para A ⇌ B, K=2. Se [A]=0,30 e [B]=0,60, calcula Q.",
        "Q=0,60/0,30=2. Como Q=K, não há sentido líquido favorecido."
      ]
    ]
  },
  "QUI-05": {
    "title": "Ácidos, bases e sais",
    "concept": "Um ácido de Brønsted doa um protão e uma base aceita-o. Em soluções diluídas, pH ≈ −log₁₀[H₃O⁺]. A neutralização entre ácido e base fortes pode produzir sal e água.",
    "example": "Em HCl + NaOH → NaCl + H₂O, H₃O⁺ reage com OH⁻ formando água. Na⁺ e Cl⁻ permanecem como iões espectadores.",
    "question": "Qual é o pH se [H₃O⁺]=10⁻³ mol/L?",
    "answer": "3. O logaritmo é −3 e a definição troca o sinal.",
    "practice": [
      [
        "Identifica a base em NH₃ + H₂O ⇌ NH₄⁺ + OH⁻.",
        "NH₃ aceita um protão da água e forma NH₄⁺."
      ]
    ]
  },
  "QUI-06": {
    "title": "Estrutura do átomo",
    "concept": "Protões e neutrões estão no núcleo. A=Z+N, onde A é o número de massa e N o número de neutrões. Isótopos têm o mesmo Z e diferente N.",
    "example": "Um átomo neutro com Z=17 e A=35 tem 17 protões, 18 neutrões e 17 electrões. Se ganhar um electrão, torna-se um anião.",
    "question": "Quantos electrões tem Mg²⁺ se Z=12?",
    "answer": "10. O ião perdeu dois electrões.",
    "practice": [
      [
        "Compara átomos neutros com Z=6 e A=12 ou 14.",
        "Ambos têm 6 protões e 6 electrões. O primeiro tem 6 neutrões e o segundo tem 8. São isótopos."
      ]
    ]
  },
  "QUI-07": {
    "title": "Ligações químicas",
    "concept": "Na ligação covalente há partilha de electrões. Num sólido iónico predominam atracções entre iões. Na ligação metálica, electrões deslocalizados contribuem para a coesão.",
    "example": "Em NaCl sólido, iões Na⁺ e Cl⁻ formam uma rede. Em H₂, dois átomos partilham um par electrónico.",
    "question": "Que tipo de ligação une os átomos em Cl₂?",
    "answer": "Covalente. Os átomos partilham um par de electrões.",
    "practice": [
      [
        "Por que NaCl sólido e NaCl fundido têm condutividade diferente?",
        "No fundido os iões podem deslocar-se, enquanto no sólido ocupam posições fixas na rede."
      ]
    ]
  },
  "QUI-08": {
    "title": "Electroquímica",
    "concept": "Oxidação perde electrões e redução ganha electrões. O ânodo é o eléctrodo onde ocorre a oxidação e o cátodo é onde ocorre a redução.",
    "example": "Numa pilha Zn/Cu, Zn → Zn²⁺ + 2e⁻ no ânodo. No cátodo, Cu²⁺ + 2e⁻ → Cu. Os electrões atravessam o circuito externo.",
    "question": "Em Fe²⁺ → Fe³⁺ + e⁻, ocorreu oxidação ou redução?",
    "answer": "Oxidação: o ferro perdeu um electrão.",
    "practice": [
      [
        "Em Cu²⁺ + 2e⁻ → Cu, que processo ocorre e em que eléctrodo?",
        "Redução, no cátodo. O ião ganha dois electrões."
      ]
    ]
  },
  "QUI-09": {
    "title": "Compostos de coordenação",
    "concept": "Um complexo inclui um centro metálico e ligandos que doam pares electrónicos. O número de coordenação conta átomos doadores ligados ao centro.",
    "example": "Em [Cu(NH₃)₄]²⁺, quatro ligandos neutros NH₃ fornecem um átomo doador cada. O número de coordenação é 4 e o cobre é +2.",
    "question": "Em [Ag(NH₃)₂]⁺, qual é o número de coordenação?",
    "answer": "2. Cada NH₃ oferece um átomo doador.",
    "practice": [
      [
        "Em [CoCl₄]²⁻, cada ligando é Cl⁻. Determina o estado de oxidação do cobalto.",
        "x+4(−1)=−2. Logo x=+2."
      ]
    ]
  },
  "QUI-10": {
    "title": "Hidrocarbonetos",
    "concept": "Hidrocarbonetos contêm C e H. Alcanos acíclicos têm CₙH₂ₙ₊₂, alcenos acíclicos com uma dupla têm CₙH₂ₙ e alcinos acíclicos com uma tripla têm CₙH₂ₙ₋₂. Aromáticos como benzeno têm electrões deslocalizados.",
    "example": "CH₃–CH=CH₂ é propeno. A cadeia tem três carbonos e uma dupla ligação. Alcenos podem sofrer adição. Alcanos, como combustíveis, sofrem combustão e podem sofrer substituição em condições apropriadas.",
    "question": "Escreve a fórmula molecular do alcano acíclico com quatro carbonos.",
    "answer": "C₄H₁₀. Butano e 2-metilpropano têm essa fórmula, mas ligações organizadas de modo diferente.",
    "practice": [
      [
        "Distingue propano, propeno e propino pelas fórmulas.",
        "C₃H₈, C₃H₆ e C₃H₄. A ligação dupla e a tripla reduzem o número de hidrogénios."
      ]
    ]
  },
  "QUI-11": {
    "title": "Biomoléculas",
    "concept": "Glícidos, lípidos, proteínas e ácidos nucleicos diferem na composição e função. Proteínas são cadeias de aminoácidos, ácidos nucleicos são cadeias de nucleótidos e muitos lípidos contêm ácidos gordos.",
    "example": "Dois aminoácidos podem unir-se por uma ligação peptídica. O grupo carboxilo de um liga-se ao grupo amino do outro, com libertação de água na representação da condensação.",
    "question": "Que unidades constituem o DNA?",
    "answer": "Nucleótidos, com açúcar, fosfato e base nitrogenada.",
    "practice": [
      [
        "Uma molécula contém uma cadeia de aminoácidos. A que grupo pertence?",
        "Proteínas ou péptidos, conforme a cadeia. A ligação entre resíduos é peptídica."
      ]
    ]
  },
  "POR-01": {
    "title": "Tipos de texto",
    "concept": "Textos informativos explicam factos, narrativos relatam acontecimentos, dramáticos apresentam acções em cena e líricos dão forma a uma voz e às suas emoções.",
    "example": "«O posto abre às sete horas.» informa. «A porta abriu e Lúcia entrou.» relata uma sequência narrativa.",
    "question": "Que marca distingue «ANA — (senta-se) Já chegaste?» como passagem dramática?",
    "answer": "O nome da personagem e a indicação cénica.",
    "practice": [
      [
        "Em «O vento levou o chapéu e o menino correu», que tipo predomina e porquê?",
        "Narrativo: há acontecimentos apresentados em sequência."
      ]
    ]
  },
  "POR-02": {
    "title": "Coesão e coerência textual",
    "concept": "Coesão são as ligações linguísticas entre partes de um texto. Coerência é a possibilidade de construir um sentido global consistente.",
    "example": "«A Ana chegou. Ela trouxe o livro.» usa o pronome ela para retomar Ana. A relação entre frases ajuda a interpretar o texto como um todo.",
    "question": "Que expressão pode ligar «Estudou muito. Ficou nervoso.» indicando contraste?",
    "answer": "«Mesmo assim». A relação estabelecida é de concessão ou contraste.",
    "practice": [
      [
        "Em «O João chegou. O rapaz sentou-se», que expressão retoma João?",
        "«O rapaz», por substituição lexical, se o contexto confirmar que é a mesma pessoa."
      ]
    ]
  },
  "POR-03": {
    "title": "Funções da linguagem",
    "concept": "Uma mensagem pode informar, exprimir emoções, influenciar o destinatário, manter o contacto, explicar o código ou destacar a forma. O contexto permite identificar a função dominante.",
    "example": "«Alô, estás a ouvir?» centra-se no canal e tem função fática. «O que significa metáfora?» centra-se no código.",
    "question": "Qual é a função dominante de uma definição de «pronome»?",
    "answer": "Metalinguística: a língua explica uma unidade da própria língua.",
    "practice": [
      [
        "Identifica a função dominante em «Silêncio, por favor».",
        "Apelativa: pede uma acção ao interlocutor."
      ]
    ]
  },
  "POR-04": {
    "title": "Registos de língua",
    "concept": "A escolha de palavras, construções e fórmulas de tratamento depende do destinatário e da situação. Uma mensagem formal e uma conversa entre amigos podem comunicar a mesma ideia.",
    "example": "«Envia-me isso hoje» é um pedido directo. «Solicito o envio do documento até ao final do dia» é adequado a um contexto institucional.",
    "question": "Reformula «Manda as notas» para um pedido formal.",
    "answer": "«Solicito o envio das classificações, por favor.»",
    "practice": [
      [
        "Entre «Olá, tudo bem?» e «Exmo. Senhor», qual é mais adequada para iniciar um ofício?",
        "«Exmo. Senhor», fórmula de tratamento formal."
      ]
    ]
  },
  "POR-05": {
    "title": "Sistema de línguas",
    "concept": "Uma língua é um sistema de sinais e regras partilhado por uma comunidade. Distingue língua, linguagem, fala e variedade.",
    "example": "O português apresenta variedades em Angola e noutros países. A diversidade de usos não elimina a possibilidade de comunicação entre falantes.",
    "question": "Um uso regional é automaticamente um erro?",
    "answer": "Não. A adequação depende do contexto e da norma pedida na tarefa.",
    "practice": [
      [
        "Distingue língua de fala num exemplo.",
        "A língua oferece regras e sinais partilhados. A frase dita por uma pessoa numa conversa é uma realização concreta de fala."
      ]
    ]
  },
  "POR-06": {
    "title": "Estudo da palavra",
    "concept": "Na análise da palavra, distingue forma, classe e significado. Algumas palavras mudam de classe conforme o uso.",
    "example": "Em «O jovem chegou», jovem é substantivo. Em «Um professor jovem chegou», jovem caracteriza professor e funciona como adjectivo.",
    "question": "Que classe tem «canto» em «Eu canto»?",
    "answer": "Verbo, primeira pessoa do singular de cantar.",
    "practice": [
      [
        "Em «o jantar está pronto» e «vamos jantar», classifica jantar.",
        "Substantivo na primeira frase, verbo na segunda."
      ]
    ]
  },
  "POR-07": {
    "title": "Formação de palavras",
    "concept": "Morfema é uma unidade com função lexical ou gramatical. Em livros, livr- fornece a base lexical e -s marca plural.",
    "example": "Em «reler», re- acrescenta a ideia de repetição ao verbo ler. Em «lemos», a terminação fornece informação gramatical.",
    "question": "Que segmento marca o plural em «casas»?",
    "answer": "O segmento -s.",
    "practice": [
      [
        "Identifica a marca de plural em «pomares».",
        "A terminação «-es»."
      ]
    ]
  },
  "POR-08": {
    "title": "Base e afixos",
    "concept": "A base é a forma a que se acrescenta um afixo. O prefixo vem antes e o sufixo depois. A divisão deve produzir unidades justificadas.",
    "example": "Em «infeliz», in- precede feliz e altera o significado. Em «felizmente», -mente segue feliz e forma um advérbio.",
    "question": "Qual é o sufixo em «lentamente»?",
    "answer": "«-mente», acrescentado à base «lenta».",
    "practice": [
      [
        "Em «desligar», indica o prefixo e a base.",
        "des- e ligar. O prefixo indica inversão neste contexto."
      ]
    ]
  },
  "POR-09": {
    "title": "Flexão, derivação e composição",
    "concept": "Flexão gera formas gramaticais de uma palavra. Derivação cria uma palavra a partir de uma base. Composição combina bases.",
    "example": "«Casa → casas» é flexão. «Feliz → infeliz» é derivação. «Guarda-chuva» resulta de composição.",
    "question": "Classifica «flor → florista».",
    "answer": "Derivação por sufixação.",
    "practice": [
      [
        "«Livro → livros» cria uma nova entrada lexical?",
        "Não. A mudança de número é flexão."
      ]
    ]
  },
  "POR-10": {
    "title": "Relações lexicais",
    "concept": "Sinónimos têm sentidos próximos no contexto. Antónimos exprimem oposição. Homófonos têm a mesma pronúncia, homógrafos têm a mesma grafia, e parónimos têm formas parecidas mas significado distinto.",
    "example": "«Descrição» é o acto de descrever. «Discrição» é reserva ou prudência. A proximidade formal faz delas parónimos.",
    "question": "Que relação há entre «comprido» e «curto» ao descrever tamanho?",
    "answer": "Antonímia.",
    "practice": [
      [
        "Que relação há entre «sessão» e «seção» nas variedades que as pronunciam do mesmo modo?",
        "Homofonia. Têm som igual nesse contexto e grafias e significados diferentes."
      ]
    ]
  },
  "POR-11": {
    "title": "Hierarquia lexical",
    "concept": "O hiperónimo designa a classe geral e o hipónimo descreve um membro dessa classe. A relação é relativa à comparação.",
    "example": "«Ave» é hiperónimo de «galinha». «Animal» é hiperónimo de «ave».",
    "question": "Identifica o hiperónimo de «mangueira» no sentido botânico.",
    "answer": "«Árvore».",
    "practice": [
      [
        "Dá dois hipónimos de «fruta».",
        "Manga e banana são exemplos."
      ]
    ]
  },
  "POR-12": {
    "title": "Coordenação e subordinação",
    "concept": "Orações coordenadas não dependem sintacticamente uma da outra. A subordinada desempenha uma função em relação a outra oração.",
    "example": "«Estudou, mas hesitou» coordena com contraste. «Hesitou porque estava cansado» subordina com valor causal.",
    "question": "Que relação exprime «Embora chovesse, saiu»?",
    "answer": "Subordinação concessiva. A chuva poderia impedir a saída, mas a saída ocorreu.",
    "practice": [
      [
        "Classifica «Passei porque estudei».",
        "Oração subordinada causal introduzida por porque."
      ]
    ]
  },
  "POR-13": {
    "title": "Funções sintácticas",
    "concept": "Identifica o verbo e procura os constituintes exigidos por ele. O sujeito pode concordar com o verbo. O objecto directo pode, em muitos casos, ser substituído por o, a, os ou as.",
    "example": "Em «A Lúcia entregou o livro ao colega», A Lúcia é sujeito, o livro é objecto directo e ao colega é objecto indirecto.",
    "question": "Identifica o sujeito de «Chegaram os alunos».",
    "answer": "«Os alunos», apesar de vir depois do verbo.",
    "practice": [
      [
        "Qual é o objecto directo em «Eles devolveram as chaves»?",
        "«As chaves». A frase pode passar a «Eles devolveram-nas»."
      ]
    ]
  },
  "POR-14": {
    "title": "Verbos: tempos, modos e vozes",
    "concept": "O tempo situa a acção. O modo indica como se apresenta o acontecimento. Na passiva, o elemento que recebe a acção é sujeito gramatical.",
    "example": "«Os alunos leram o texto» está na activa. «O texto foi lido pelos alunos» está na passiva. O auxiliar conserva o tempo.",
    "question": "Passa «A equipa preparou a sala» para a passiva.",
    "answer": "«A sala foi preparada pela equipa.»",
    "practice": [
      [
        "Em «Espero que ele venha», qual é o modo de «venha»?",
        "Conjuntivo. O verbo apresenta o acontecimento como desejado, em vez de o afirmar."
      ]
    ]
  },
  "POR-15": {
    "title": "Pronominalização",
    "concept": "Substitui um constituinte por um pronome que mantenha a função e a referência. A colocação depende da construção.",
    "example": "«Li os livros» pode tornar-se «Li-os». Em «Não li os livros», a negação favorece próclise: «Não os li».",
    "question": "Substitui «a carta» em «Entreguei a carta».",
    "answer": "«Entreguei-a.»",
    "practice": [
      [
        "Substitui «ao Rui» em «Entreguei o livro ao Rui».",
        "«Entreguei-lhe o livro.»"
      ]
    ]
  },
  "POR-16": {
    "title": "Preposições",
    "concept": "Uma preposição liga unidades e pode exprimir relações como origem, destino, companhia e meio. Também pode ser exigida pela palavra que a selecciona.",
    "example": "Em «Veio de Benguela para Luanda», de indica origem e para indica destino.",
    "question": "Que relação exprime «com» em «Escreveu com uma caneta»?",
    "answer": "Instrumento.",
    "practice": [
      [
        "Que relação tem «de» em «Voltou de Huambo»?",
        "Origem ou ponto de partida."
      ]
    ]
  },
  "POR-17": {
    "title": "Regência nominal e verbal",
    "concept": "A regência indica a relação entre uma palavra e o complemento que selecciona. A preposição pode depender do sentido.",
    "example": "«Gostar de música» tem regência verbal. «Necessidade de estudo» tem regência nominal.",
    "question": "Completa «Ela gosta ___ ler».",
    "answer": "«de». O verbo gostar selecciona complemento com de.",
    "practice": [
      [
        "Completa «O grupo precisa ___ material».",
        "«de», porque o verbo precisar selecciona essa preposição nesse sentido."
      ]
    ]
  },
  "POR-18": {
    "title": "Concordância",
    "concept": "Na concordância verbal, o verbo ajusta-se ao sujeito. Na nominal, determinantes e adjectivos concordam com o nome quando a forma admite variação.",
    "example": "«As folhas verdes caíram.» tem sujeito plural, verbo plural e adjectivo feminino plural.",
    "question": "Corrige «Aquelas aluno chegaram cedo».",
    "answer": "«Aqueles alunos chegaram cedo.»",
    "practice": [
      [
        "Corrige «Chegou os candidatos».",
        "«Chegaram os candidatos.» O sujeito plural pede verbo no plural."
      ]
    ]
  },
  "POR-19": {
    "title": "Crase",
    "concept": "A crase é a fusão de duas vogais iguais. Na escrita, a contracção da preposição a com o artigo a resulta em à.",
    "example": "Em «Fui à escola», ir selecciona a e escola admite o artigo a. Com masculino: «Fui ao mercado».",
    "question": "Completa «Entreguei o livro ___ professora».",
    "answer": "«à», fusão de a com a.",
    "practice": [
      [
        "Completa «Fui ___ mercado».",
        "«ao», contracção de a com o. A forma à pressupõe a fusão com artigo feminino."
      ]
    ]
  },
  "POR-20": {
    "title": "Acentuação",
    "concept": "Primeiro localiza a sílaba tónica. Distingue palavras agudas, graves e esdrúxulas. A acentuação gráfica depende da posição da tónica e da terminação.",
    "example": "Em «lâmpada», a primeira de três sílabas é tónica. É esdrúxula e recebe acento.",
    "question": "Classifica «médico» pela posição da sílaba tónica.",
    "answer": "Esdrúxula: a sílaba tónica é «mé».",
    "practice": [
      [
        "Identifica a posição tónica em «café».",
        "A tónica é a última sílaba, por isso a palavra é aguda."
      ]
    ]
  },
  "POR-21": {
    "title": "Pontuação",
    "concept": "A pontuação organiza a leitura e mostra relações sintácticas. A vírgula pode isolar o vocativo ou um inciso.",
    "example": "«João, fecha a porta» usa vírgula para separar o vocativo. «João fechou a porta» tem sujeito seguido do verbo, sem vírgula.",
    "question": "Pontua «Ana podes fechar a janela».",
    "answer": "«Ana, podes fechar a janela?»",
    "practice": [
      [
        "Pontua «Sim eu vou».",
        "«Sim, eu vou.» A vírgula destaca a resposta afirmativa."
      ]
    ]
  },
  "POR-22": {
    "title": "Discurso relatado",
    "concept": "No discurso directo, a fala é apresentada como foi dita. No indirecto, o narrador integra a fala na sua frase. No indirecto livre, voz da personagem e narração podem aproximar-se.",
    "example": "«Ana disse: “Vou sair agora.”» pode passar a «Ana disse que ia sair naquele momento». Ajustam-se pessoa, tempo e referência temporal.",
    "question": "Transforma «Rui disse: “Estou cansado.”» em discurso indirecto.",
    "answer": "«Rui disse que estava cansado.»",
    "practice": [
      [
        "Transforma «A Joana disse: “Chego amanhã.”» usando o momento original como passado.",
        "«A Joana disse que chegava no dia seguinte.»"
      ]
    ]
  },
  "POR-23": {
    "title": "Funções expressiva, apelativa, fática e referencial",
    "concept": "Expressiva centra-se no emissor, apelativa no destinatário, fática no contacto e referencial no assunto.",
    "example": "«Fecha a porta, por favor.» solicita uma acção. A função dominante é apelativa, mesmo com uma fórmula de cortesia.",
    "question": "Qual predomina em «Que alegria voltar a casa!»?",
    "answer": "Expressiva, pelo destaque dado à emoção do emissor.",
    "practice": [
      [
        "Identifica a função dominante em «A aula começa às oito».",
        "Referencial. O foco é a informação sobre o horário."
      ]
    ]
  },
  "POR-24": {
    "title": "Figuras de estilo",
    "concept": "Figuras de estilo produzem efeitos específicos. A metáfora aproxima ideias, a comparação explicita a semelhança e a personificação dá traços humanos a algo não humano.",
    "example": "«O vento sussurrou» personifica o vento. «A voz era como um trovão» estabelece uma comparação explícita.",
    "question": "Identifica a figura em «Esperei um século por ti», num contexto quotidiano.",
    "answer": "Hipérbole: exagero para intensificar a espera.",
    "practice": [
      [
        "Em «A cidade acordou», que recurso ocorre se cidade designa o espaço urbano?",
        "Personificação, ao atribuir à cidade uma acção humana."
      ]
    ]
  },
  "POR-25": {
    "title": "Obras de autores angolanos",
    "concept": "Ao estudar uma obra, distingue autor real, narrador, personagens, contexto e tema. Apoia interpretações em passagens concretas e em fontes verificáveis.",
    "example": "Ao leres um excerto narrado na primeira pessoa, identifica quem fala e o que essa voz sabe. A primeira pessoa, por si só, não torna o texto autobiográfico.",
    "question": "Como sustentas a interpretação de que uma personagem mudou?",
    "answer": "Compara uma passagem do início com outra posterior e explica a mudança nas palavras ou nas acções.",
    "practice": [
      [
        "Um narrador diz «não percebi por que ela saiu». Que limite de perspectiva há?",
        "O narrador relata a própria incerteza. O motivo da outra personagem exige outras pistas."
      ]
    ]
  }
};
