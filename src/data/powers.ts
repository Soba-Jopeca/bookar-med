export const examples = [
  [
    "Multiplicar potências com a mesma base",
    "Em 2³ × 2², os dois expoentes contam quantos factores iguais a 2 aparecem.",
    "Abre cada potência: 2³ = 2 × 2 × 2 e 2² = 2 × 2.",
    "Junta os dois grupos. Há 3 + 2 = 5 factores, portanto 2³ × 2² = 2⁵ = 32.",
    "Confere calculando primeiro cada potência: 8 × 4 = 32."
  ],
  [
    "Dividir e interpretar o expoente negativo",
    "Em 5²/5⁴, a base é a mesma e o denominador é diferente de zero.",
    "Escreve (5 × 5)/(5 × 5 × 5 × 5). Cancela dois factores 5 em cima e em baixo.",
    "Sobram dois factores no denominador: 1/(5 × 5) = 1/25. Pela regra dos expoentes, 5²⁻⁴ = 5⁻².",
    "Confere: 25/625 = 1/25 porque 625 = 25 × 25."
  ],
  [
    "Simplificar um radical",
    "Em √72, procura um factor de 72 que seja quadrado perfeito. Como 72 = 36 × 2, escolhe 36.",
    "Os dois factores são não negativos, portanto √(36 × 2) = √36 × √2.",
    "Como 6² = 36 e 6 é positivo, √36 = 6. Logo √72 = 6√2.",
    "Confere: (6√2)² = 36 × 2 = 72. Como 64 < 72 < 81, a resposta também deve ficar entre 8 e 9."
  ],
  [
    "Resolver uma equação com radical",
    "Em √(x + 5) = x − 1, precisamos de x + 5 ≥ 0 e x − 1 ≥ 0. Juntas, as condições dão x ≥ 1.",
    "Eleva os dois lados ao quadrado: x + 5 = (x − 1)² = x² − 2x + 1.",
    "Passa tudo para um lado: x² − 3x − 4 = 0. Como −4 + 1 = −3 e (−4) × 1 = −4, factoriza como (x − 4)(x + 1) = 0.",
    "Os candidatos são 4 e −1. Rejeita −1 porque x ≥ 1. Na equação inicial, x = 4 dá √9 = 3 e 4 − 1 = 3. A solução é 4."
  ]
];
export const practice: [string, string, string[]][] = [
  [
    "MAT-01-P01",
    "Calcula 3⁴.",
    [
      "Escreve quatro factores iguais a 3.",
      "Agrupa: (3 × 3) × (3 × 3) = 9 × 9 = 81."
    ]
  ],
  [
    "MAT-01-P02",
    "Calcula (−2)⁴ e −2⁴.",
    [
      "Em (−2)⁴, multiplica quatro factores −2. Cada par dá 4, logo 4 × 4 = 16.",
      "Em −2⁴, calcula primeiro 2⁴ = 16 e só depois aplica o sinal: −16."
    ]
  ],
  [
    "MAT-01-P03",
    "Calcula √81.",
    [
      "Procura um número não negativo cujo quadrado seja 81.",
      "Como 9 × 9 = 81, √81 = 9."
    ]
  ],
  [
    "MAT-01-P04",
    "Simplifica 7³·7².",
    [
      "Confirma que ambas as potências têm base 7.",
      "Soma os expoentes: 7³ × 7² = 7³⁺² = 7⁵."
    ]
  ],
  [
    "MAT-01-P05",
    "Calcula 4²/4⁵.",
    [
      "Cancela dois dos cinco factores 4 do denominador.",
      "Fica 1/4³ = 1/(4 × 4 × 4) = 1/64."
    ]
  ],
  [
    "MAT-01-P06",
    "Simplifica (3²)³.",
    [
      "Elevar ao cubo significa multiplicar três cópias de 3².",
      "Cada cópia tem dois factores 3, pelo que o resultado é 3⁶."
    ]
  ],
  [
    "MAT-01-P07",
    "Simplifica √50.",
    [
      "Separa o quadrado perfeito: 50 = 25 × 2.",
      "√50 = √25 × √2 = 5√2. Confere elevando 5√2 ao quadrado."
    ]
  ],
  [
    "MAT-01-P08",
    "Simplifica √(x²) para x<0.",
    [
      "A raiz quadrada de x² é |x|, porque o resultado deve ser não negativo.",
      "Se x < 0, então −x é positivo e tem quadrado x². Logo √(x²) = −x."
    ]
  ],
  [
    "MAT-01-P09",
    "Determina o domínio de √(2x−6).",
    [
      "Para a raiz existir nos reais, impõe 2x − 6 ≥ 0.",
      "Soma 6 aos dois lados e divide por 2: x ≥ 3. Confere o limite: em x = 3, a raiz é zero."
    ]
  ],
  [
    "MAT-01-P10",
    "Simplifica 2√27−√12.",
    [
      "√27 = 3√3 e √12 = 2√3, pois 27 = 9 × 3 e 12 = 4 × 3.",
      "Substitui e agrupa os termos com √3: 2 × 3√3 − 2√3 = 4√3."
    ]
  ],
  [
    "MAT-01-P11",
    "Resolve √(x+1)=3.",
    [
      "Eleva os dois lados ao quadrado: x + 1 = 9.",
      "Subtrai 1: x = 8. Confere na equação inicial: √(8 + 1) = 3."
    ]
  ],
  [
    "MAT-01-P12",
    "Resolve √(x+2)=x.",
    [
      "O lado direito deve ser não negativo, logo x ≥ 0.",
      "Eleva ao quadrado: x + 2 = x². Reorganiza: (x − 2)(x + 1) = 0.",
      "Os candidatos são 2 e −1. Rejeita −1. Confere x = 2: √4 = 2."
    ]
  ]
];
