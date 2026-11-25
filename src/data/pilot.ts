export const examples = [
  [
    "Substituir um valor",
    "Para f(x)=2x²−3, calcula f(−2)=2·(−2)²−3=5. Verifica que f(2)=5. Os pontos estão à mesma altura.",
  ],
  [
    "Encontrar as raízes",
    "x²−4x+3=(x−1)(x−3). O produto vale zero em 1 e 3. Substituindo: 1−4+3=0 e 9−12+3=0.",
  ],
  [
    "Construir o esboço",
    "O eixo passa a meio das raízes: x=(1+3)/2=2. Como f(2)=−1, marca (2,−1), as raízes e os pontos simétricos (0,3) e (4,3). A expressão (x−2)²−1 confirma o mínimo.",
  ],
  [
    "Maximizar uma área",
    "Uma horta rectangular tem 20 m de perímetro. Para largura x entre 0 e 10 m, o comprimento é 10−x. A área x(10−x)=25−(x−5)² atinge 25 m² com lados de 5 m. Verifica: 4·5=20 m.",
  ],
];
export const practice = [
  ["Identifica a, b, c e a abertura em −2x²+5x−1.", "−2, 5 e −1. Abre para baixo pois a<0."],
  ["Calcula g(−2) para g(x)=3x²−2x+1.", "3·4+4+1=17."],
  ["Quais são quadráticas: x²+1, 4x−3, x(x+2)?", "A primeira e a terceira: x(x+2)=x²+2x."],
  ["Encontra as raízes de x²−7x+12.", "(x−3)(x−4)=0 dá 3 e 4. Verifica: 9−21+12=0."],
  ["Determina o vértice e o mínimo de x²+6x+5.", "(x+3)²−4 tem vértice (−3,−4) e mínimo −4."],
  [
    "Encontra as intersecções com os eixos e o máximo de −x²+4x.",
    "x(4−x)=0 dá (0,0) e (4,0). O eixo vertical encontra a curva na origem. O máximo é 4 em x=2.",
  ],
  ["Quantas raízes reais tem 2x²+2x+3?", "Nenhuma: o discriminante é 4−24=−20."],
  [
    "Esboça (x−3)²−4. Marca raízes, vértice e dois pontos simétricos.",
    "Raízes 1 e 5, vértice (3,−4), pontos (2,−3) e (4,−3). Abre para cima.",
  ],
  [
    "O mínimo de x²−8x+10 é 4? Explica.",
    "4 é a abcissa do vértice. A imagem mínima é 16−32+10=−6.",
  ],
  [
    "Determina a função com raízes −1 e 3 que passa por (0,6).",
    "f(x)=a(x+1)(x−3). Como −3a=6, f(x)=−2(x+1)(x−3).",
  ],
  [
    "Para que k a curva y=x²−6x+k toca o eixo horizontal num único ponto?",
    "36−4k=0 dá k=9. O quadrado (x−3)² anula-se em (3,0).",
  ],
  [
    "Um rectângulo tem perímetro 28 cm. Define o domínio e encontra a maior área.",
    "0<x<14. A=x(14−x)=49−(x−7)². A maior área é 49 cm².",
  ],
];
export const control = [
  "Determina as raízes e o eixo de simetria de 2x²−8x+6.",
  "Indica o vértice, o tipo de extremo e o seu valor em −2(x+1)²+8.",
  "Esboça x²+2x+1 e explica por que a curva toca o eixo horizontal sem o atravessar.",
  "O eixo de simetria é x=3 e f(1)=7. Determina f(5) e justifica.",
];
