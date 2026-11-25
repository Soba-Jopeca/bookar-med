export const mathReview = [
  {
    "number": 2,
    "title": "Operações com polinómios",
    "definition": "Um polinómio é uma soma de termos axⁿ, com expoente inteiro não negativo. O grau é o maior expoente com coeficiente diferente de zero.",
    "method": "Na soma e subtracção, agrupa termos com o mesmo expoente. Na multiplicação, distribui cada termo. Na divisão, escreve P=DQ+R, com grau de R menor que o de D.",
    "example": "Divide x²+3x+2 por x+1.",
    "steps": [
      "Divide x² por x: obténs x. Retira x(x+1) e fica 2x+2.",
      "Divide 2x por x: obténs 2. Retira 2(x+1) e fica zero.",
      "Confere: (x+1)(x+2)=x²+3x+2."
    ],
    "question": "Multiplica (x+2)(x+3).",
    "answer": "Distribui e junta os termos semelhantes: x²+5x+6.",
    "markers": [
      4
    ]
  },
  {
    "number": 3,
    "title": "Factorização",
    "definition": "Factorizar é escrever uma soma como produto. A expansão pela distributiva permite conferir.",
    "method": "Procura primeiro um factor comum. Depois testa diferenças de quadrados, quadrados perfeitos ou, num trinómio mónico, dois números com a soma e o produto adequados.",
    "example": "Factoriza 2x²−18.",
    "steps": [
      "Põe 2 em evidência: 2(x²−9).",
      "Usa u²−v²=(u−v)(u+v): 2(x−3)(x+3).",
      "Expande: 2(x²−9)=2x²−18."
    ],
    "question": "Factoriza x²−5x+6.",
    "answer": "−2 e −3 somam −5 e multiplicam 6. Logo (x−2)(x−3).",
    "markers": [
      4
    ]
  },
  {
    "number": 4,
    "title": "Funções e leitura de gráficos",
    "definition": "Uma função associa a cada entrada do domínio exactamente uma saída. A imagem é o conjunto das saídas obtidas.",
    "method": "Para desenhar, escolhe entradas admissíveis, calcula as saídas e marca (x,f(x)). Uma recta vertical não pode cortar o gráfico em dois pontos.",
    "example": "Determina o domínio e a imagem de f(x)=√(x−2).",
    "steps": [
      "Exige x−2≥0, logo x≥2.",
      "As saídas são não negativas. Para obter qualquer y≥0, escolhe x=y²+2.",
      "Confere três pontos: (2,0), (3,1) e (6,2)."
    ],
    "question": "Que entrada dá f(x)=4?",
    "answer": "Resolve x−2=16, logo x=18. Confere √16=4.",
    "markers": [
      3,
      11,
      13
    ]
  },
  {
    "number": 5,
    "title": "Função módulo",
    "definition": "O módulo é a distância até zero. Assim ∣x∣=x para x≥0 e ∣x∣=−x para x<0.",
    "method": "Lê ∣x−a∣ como distância entre x e a. Em ∣x−a∣=r, se r>0 há duas posições, a−r e a+r.",
    "example": "Resolve ∣x−3∣=2.",
    "steps": [
      "Marca 3 na recta numérica.",
      "Anda duas unidades para a esquerda e duas para a direita: x=1 ou x=5.",
      "Confere: ∣1−3∣=2 e ∣5−3∣=2."
    ],
    "question": "Resolve ∣x+1∣≤3.",
    "answer": "A distância até −1 é no máximo 3. Logo −4≤x≤2.",
    "markers": [
      3
    ]
  },
  {
    "number": 7,
    "title": "Exponenciais",
    "definition": "Uma função exponencial básica tem a forma f(x)=aˣ, com a>0 e a≠1.",
    "method": "Se a>1, a função cresce. Se 0<a<1, decresce. Para potências da mesma base, a igualdade das saídas implica igualdade dos expoentes.",
    "example": "Resolve 4ˣ=8.",
    "steps": [
      "Escreve 4=2² e 8=2³.",
      "Obténs 2²ˣ=2³, então 2x=3 e x=3/2.",
      "Confere: 4³ᐟ²=(√4)³=8."
    ],
    "question": "Uma quantidade de 80 reduz-se para metade a cada hora. Quanto resta após 3 horas?",
    "answer": "80×(1/2)³=10.",
    "markers": [
      12
    ]
  },
  {
    "number": 8,
    "title": "Logaritmos",
    "definition": "logₐ(b) é o expoente que se dá à base a para obter b, com a>0, a≠1 e b>0.",
    "method": "Converte logₐ(b)=c em aᶜ=b. Verifica que todos os argumentos são positivos antes de transformar.",
    "example": "Resolve log₂(x−1)=3.",
    "steps": [
      "Impõe x−1>0, logo x>1.",
      "Converte em x−1=2³=8. Soma 1 e obténs x=9.",
      "Confere: log₂(9−1)=log₂(8)=3."
    ],
    "question": "Calcula log₃(1/9).",
    "answer": "Como 1/9=3⁻², o logaritmo é −2.",
    "markers": [
      12
    ]
  },
  {
    "number": 9,
    "title": "Trigonometria",
    "definition": "Num triângulo rectângulo, o seno é oposto/hipotenusa e o cosseno é adjacente/hipotenusa. A tangente é oposto/adjacente.",
    "method": "No círculo unitário, cos θ é a coordenada horizontal e sen θ é a vertical. O quadrante fixa os sinais.",
    "example": "Uma escada de 5 m faz 30° com o chão. Que altura alcança?",
    "steps": [
      "A escada é a hipotenusa e a altura é o cateto oposto.",
      "Usa sen 30°=1/2: altura/5=1/2, logo altura=2,5 m.",
      "A altura é positiva e menor que 5 m. Em 30° o cateto oposto é metade da hipotenusa."
    ],
    "question": "Determina o sinal de sen 150° e cos 150°.",
    "answer": "No segundo quadrante o seno é positivo e o cosseno é negativo.",
    "markers": [
      5
    ]
  },
  {
    "number": 10,
    "title": "Funções trigonométricas",
    "definition": "Seno e cosseno são periódicos. Um período é um deslocamento horizontal após o qual todos os valores se repetem.",
    "method": "Em A sen(Bx), com A e B não nulos, a amplitude é ∣A∣ e o período é 2π/∣B∣. Para tan x, o período é π e excluímos x=π/2+kπ.",
    "example": "Esboça um ciclo de y=2 sen(2x).",
    "steps": [
      "Calcula a amplitude 2 e o período π.",
      "Divide o período em quatro. Em x=0, π/4, π/2, 3π/4, π, as alturas são 0, 2, 0, −2, 0.",
      "Em x+π, o argumento aumenta 2π e a altura repete-se."
    ],
    "question": "Qual é o período de cos(3x)?",
    "answer": "2π/3, pois o argumento percorre 2π nesse intervalo.",
    "markers": [
      13
    ]
  },
  {
    "number": 11,
    "title": "Sucessões e limites",
    "definition": "Uma sucessão associa a cada índice inteiro positivo n um termo uₙ. Um limite descreve o comportamento para índices cada vez maiores.",
    "method": "Em fracções de polinómios em n, divide pelo maior grau do denominador e estuda as parcelas com 1/n.",
    "example": "Determina o limite de (2n+1)/(n+3).",
    "steps": [
      "Divide numerador e denominador por n: (2+1/n)/(1+3/n).",
      "Como 1/n tende a zero, o limite é 2/1=2.",
      "Testa n=1000: 2001/1003 fica perto de 2. Isso ilustra o limite demonstrado pelo cálculo."
    ],
    "question": "Determina o limite de 3/(n+1).",
    "answer": "Divide por n: (3/n)/(1+1/n) tende a zero.",
    "markers": [
      6
    ]
  },
  {
    "number": 12,
    "title": "Indução matemática",
    "definition": "A indução prova uma afirmação para todos os inteiros a partir de um índice inicial.",
    "method": "Prova a base. Supõe a afirmação para um índice arbitrário k. Usa essa hipótese para provar a afirmação em k+1.",
    "example": "Prova 1+2+…+n=n(n+1)/2.",
    "steps": [
      "Base n=1: ambos os lados dão 1.",
      "Supondo a fórmula em k, soma k+1: k(k+1)/2+(k+1)=(k+1)(k+2)/2.",
      "Obtiveste a fórmula de índice k+1. A base e o passo ligam todos os índices seguintes."
    ],
    "question": "Verifica a base de 1+3+…+(2n−1)=n².",
    "answer": "Em n=1, a soma vale 1 e 1²=1.",
    "markers": [
      6
    ]
  },
  {
    "number": 13,
    "title": "Limites de funções",
    "definition": "O limite em a descreve a aproximação de f(x) quando x se aproxima de a por valores diferentes de a.",
    "method": "Testa a substituição quando a função é contínua. Se surgir 0/0, procura uma simplificação válida perto de a. Compara os lados.",
    "example": "Calcula o limite de (x²−4)/(x−2) quando x→2.",
    "steps": [
      "Factoriza x²−4=(x−2)(x+2).",
      "Para x≠2 cancela o factor comum. Fica x+2, que se aproxima de 4 de ambos os lados.",
      "O limite é 4, embora a expressão original esteja indefinida em 2."
    ],
    "question": "Calcula o limite de (x²−1)/(x−1) em 1.",
    "answer": "Para x≠1, a expressão é x+1, cujo limite é 2.",
    "markers": [
      7,
      13
    ]
  },
  {
    "number": 14,
    "title": "Continuidade",
    "definition": "Uma função é contínua em a quando f(a) está definida, o limite em a existe e esse limite é f(a).",
    "method": "Calcula os limites laterais antes de comparar com o valor. Uma descontinuidade removível pode ser corrigida escolhendo o valor do limite.",
    "example": "Define f(x)=x+2 se x≠1 e f(1)=k. Encontra k para continuidade.",
    "steps": [
      "À esquerda e à direita de 1, a expressão é x+2.",
      "Ambos os limites dão 3. Impõe f(1)=3.",
      "Ao escolher k=3, os limites e o valor coincidem."
    ],
    "question": "Se o limite esquerdo é 2 e o direito é 4, mudar f(a) resolve?",
    "answer": "Não. Os limites laterais diferentes impedem a existência do limite bilateral.",
    "markers": [
      7,
      13
    ]
  },
  {
    "number": 15,
    "title": "Derivadas",
    "definition": "A derivada é o limite da taxa média de variação. No gráfico, representa a inclinação da tangente quando existe.",
    "method": "Usa [f(x+h)−f(x)]/h quando queres justificar pela definição. Para potências inteiras positivas, a derivada de xⁿ é nxⁿ⁻¹.",
    "example": "Calcula e interpreta a derivada de f(x)=x² em x=3.",
    "steps": [
      "Expande: (x+h)²−x²=2xh+h².",
      "Divide por h≠0: obténs 2x+h. Quando h→0, fica 2x.",
      "Em x=3, a inclinação da tangente é 6. Confere pela regra da potência."
    ],
    "question": "Deriva x³−2x.",
    "answer": "Aplica a regra termo a termo: 3x²−2.",
    "markers": [
      8
    ]
  },
  {
    "number": 16,
    "title": "Integrais",
    "definition": "Uma primitiva F de f satisfaz F′=f. A integral definida de uma função contínua calcula a área com sinal.",
    "method": "Pelo teorema fundamental, ∫ₐᵇ f(x)dx=F(b)−F(a). Nas áreas geométricas, trata separadamente os intervalos abaixo do eixo.",
    "example": "Calcula a integral de 2x entre 0 e 3.",
    "steps": [
      "Escolhe F(x)=x², porque F′(x)=2x.",
      "Calcula F(3)−F(0)=9−0=9.",
      "O gráfico forma um triângulo com base 3 e altura 6. A área 3×6/2 confirma 9."
    ],
    "question": "Integra x² entre 0 e 3.",
    "answer": "A primitiva é x³/3. A diferença é 27/3−0=9.",
    "markers": [
      13
    ]
  },
  {
    "number": 17,
    "title": "Análise combinatória",
    "definition": "A combinatória conta resultados sem os listar todos. A ordem distingue uma fila de uma equipa.",
    "method": "Multiplica as escolhas de etapas sucessivas. Quando escolhes k elementos distintos sem ordem entre n, divide n!/(n−k)! por k!.",
    "example": "Quantas equipas de 2 pessoas se formam com 5 pessoas?",
    "steps": [
      "Para a primeira posição há 5 escolhas e para a segunda 4.",
      "Conta 20 pares ordenados. Para equipas, cada par foi contado duas vezes.",
      "Divide por 2 e obténs 10. Confere separando pelo primeiro nome numa lista fixa: 4+3+2+1=10."
    ],
    "question": "Quantas filas de 3 pessoas se formam com 5 pessoas?",
    "answer": "A ordem conta: 5×4×3=60.",
    "markers": [
      9
    ]
  },
  {
    "number": 18,
    "title": "Binómio de Newton",
    "definition": "A expansão de (a+b)ⁿ soma termos C(n,k)aⁿ⁻ᵏbᵏ, para k de 0 a n.",
    "method": "O coeficiente C(n,k) conta de quantas maneiras se escolhem os k factores que contribuem com b.",
    "example": "Encontra o coeficiente de x² em (x+2)⁴.",
    "steps": [
      "Para obter x², escolhe dois factores para fornecer x e os outros dois para fornecer 2.",
      "Há C(4,2)=6 escolhas e cada uma dá x²×2²=4x².",
      "Logo o coeficiente é 6×4=24."
    ],
    "question": "Qual é o termo constante de (x−3)³?",
    "answer": "Usa −3 nos três factores: (−3)³=−27.",
    "markers": [
      9
    ]
  },
  {
    "number": 19,
    "title": "Probabilidade",
    "definition": "Uma probabilidade mede a possibilidade de um evento e vai de 0 a 1. Se os resultados elementares são equiprováveis, divide casos favoráveis pelo total.",
    "method": "Em etapas sucessivas, multiplica a probabilidade inicial pela probabilidade da etapa seguinte dadas as escolhas anteriores. Soma trajectos incompatíveis.",
    "example": "Há 3 bolas vermelhas e 2 azuis. Qual a probabilidade de tirar duas vermelhas sem reposição?",
    "steps": [
      "A primeira vermelha tem probabilidade 3/5.",
      "Depois dela ficam 2 vermelhas entre 4 bolas. A probabilidade condicional é 2/4.",
      "O produto é 6/20=3/10. Confere contando pares: há 3 pares vermelhos entre 10."
    ],
    "question": "Qual é a probabilidade de sair pelo menos um 6 em dois lançamentos de um dado justo?",
    "answer": "O complemento é nenhum 6: (5/6)²=25/36. Logo 11/36.",
    "markers": [
      9
    ]
  },
  {
    "number": 20,
    "title": "Estatística",
    "definition": "A média é a soma dos valores dividida pela quantidade. A mediana é o centro da lista ordenada. A amplitude é máximo menos mínimo.",
    "method": "Para comparar grupos, usa uma medida de centro e outra de dispersão. Um valor extremo pode deslocar a média mais que a mediana.",
    "example": "Compara média, mediana e amplitude de 2, 3, 3, 4, 18.",
    "steps": [
      "Soma 30 e divide por 5: média 6.",
      "O valor central é 3. A amplitude é 18−2=16.",
      "Sem 18, a média seria 12/4=3. O extremo ajuda a explicar a diferença entre média e mediana."
    ],
    "question": "Calcula a mediana de 4, 2, 10, 6.",
    "answer": "Ordena 2, 4, 6, 10. A média dos dois centrais dá 5.",
    "markers": [
      10
    ]
  }
];
