type Item = { prompt: string; answer: number; explanation: string };
function item(prompt: string, answer: number, explanation: string): Item {
  return { prompt, answer, explanation: explanation + ' Resultado: ' + answer + '.' };
}

export function questionsFor(topic: number, n: number): [Item, Item] {
  const a = n + 2;
  const b = a + 1;
  switch (topic) {
    case 1: return [
      item(`Calcula 2 elevado a ${n + 2}.`, 2 ** (n + 2), 'Multiplica factores iguais a 2, tantos quantos indica o expoente.'),
      item(`Calcula √${a*a}.`, a, `Verifica que ${a} × ${a} dá o radicando. Escolhe a raiz não negativa.`),
    ];
    case 2: return [
      item(`Qual é o coeficiente de x em (x + ${a})(x + ${b})?`, a+b, `Distribui os termos. Os produtos cruzados são ${a}x e ${b}x.`),
      item(`Qual é o resto da divisão de x² + ${a} por x − ${b}?`, b*b+a, `Pelo teorema do resto, substitui x por ${b}. Obténs ${b*b} + ${a}.`),
    ];
    case 3: return [
      item(`Se x² − ${a*a} = (x − k)(x + k) e k > 0, quanto vale k?`, a, `A diferença de quadrados é x² − k². Resolve k² = ${a*a} com k positivo.`),
      item(`Qual é a menor raiz de x² − ${a+b}x + ${a*b}?`, a, `Os números ${a} e ${b} somam ${a+b} e multiplicam ${a*b}. Factoriza e aplica a regra do produto nulo.`),
    ];
    case 4: return [
      item(`Qual é o menor x no domínio real de f(x) = √(x − ${a})?`, a, `Exige x − ${a} ≥ 0. O extremo dá raiz zero.`),
      item(`Em f(x) = 2x + ${a}, que entrada dá ${2*b+a}?`, b, `Subtrai ${a} da saída e divide o resultado por 2.`),
    ];
    case 5: return [
      item(`Qual é a maior solução de |x − ${a}| = ${b}?`, a+b, `Percorre ${b} unidades à direita de ${a} na recta numérica.`),
      item(`Qual é o extremo esquerdo de |x + ${a}| ≤ ${b}?`, -a-b, `O centro é −${a}. O extremo esquerdo fica ${b} unidades antes do centro.`),
    ];
    case 6: return [
      item(`Qual é a abcissa do vértice de f(x) = x² − ${2*a}x + 1?`, a, `Aplica xᵥ = −b/(2a) aos coeficientes: −(−${2*a})/2.`),
      item(`Qual é o valor máximo de f(x) = ${b} − (x − ${a})²?`, b, `O quadrado é sempre não negativo. Vale zero em x = ${a}, onde a função atinge o máximo.`),
    ];
    case 7: return [
      item(`Resolve 4ˣ = 2 elevado a ${2*a}.`, a, `Reescreve 4 como 2² e iguala os expoentes: 2x = ${2*a}.`),
      item(`Uma quantidade de ${8*a} reduz-se a metade a cada hora. Quanto resta depois de 3 horas?`, a, 'Divide por 2 três vezes, o que equivale a dividir por 8.'),
    ];
    case 8: return [
      item(`Calcula log na base 2 de 2 elevado a ${a}.`, a, 'O logaritmo devolve o expoente que produz o argumento.'),
      item(`Resolve log na base 3 de (x − ${a}) igual a 2.`, a+9, `O argumento deve ser positivo. Converte em x − ${a} = 3² = 9.`),
    ];
    case 9: return [
      item(`Num triângulo rectângulo, a hipotenusa mede ${2*a} cm e o ângulo é de 30°. Qual é o cateto oposto, em cm?`, a, 'Seno de 30° é 1/2. Multiplica a hipotenusa por 1/2.'),
      item(`O cateto adjacente mede ${a} cm e a tangente é 2. Qual é o cateto oposto em cm?`, 2*a, 'A tangente é oposto dividido pelo adjacente. Multiplica os dois valores.'),
    ];
    case 10: return [
      item(`Qual é a amplitude de y = −${a} sen(${b}x)?`, a, 'O seno varia entre −1 e 1. A amplitude é o módulo do factor exterior.'),
      item(`O período de cos(${a}x) é 2π/k. Quanto vale k?`, a, `O argumento deve aumentar 2π. Por isso divide 2π pela frequência ${a}.`),
    ];
    case 11: return [
      item(`Calcula o limite de (${a}n + 1)/(n + ${b}) quando n cresce indefinidamente.`, a, 'Divide em cima e em baixo por n. Os termos com 1/n desaparecem no limite.'),
      item(`Qual é o 4.º termo da sucessão uₙ = ${a} + ${b}(n − 1)?`, a+3*b, 'Substitui n por 4. Há três aumentos desde o primeiro termo.'),
    ];
    case 12: return [
      item(`Para provar por indução que a soma dos n primeiros ímpares é n², começa em n = ${a}. Quanto deve valer a soma no caso base?`, a*a, 'A base compara a soma no primeiro índice com o quadrado desse índice.'),
      item(`Na prova de que a soma dos n primeiros ímpares é n², qual é a parcela a adicionar ao passar de k = ${b} para k + 1?`, 2*b+1, 'A parcela de índice k+1 é 2(k+1)−1=2k+1. Somada a k², resulta em (k+1)².'),
    ];
    case 13: return [
      item(`Calcula o limite de (x² − ${a*a})/(x − ${a}) quando x tende a ${a}.`, 2*a, 'Factoriza o numerador e cancela para x diferente do ponto. Depois substitui em x mais o ponto.'),
      item(`Calcula o limite de (${b}x² + 1)/(x² + 2) quando x tende a +∞.`, b, 'Divide pelo termo x² e usa que 1/x² tende a zero.'),
    ];
    case 14: return [
      item(`Define f(x) = 2x + 1 para x ≠ ${a}. Que valor deve ter f(${a}) para haver continuidade?`, 2*a+1, 'Os limites laterais coincidem com a substituição em 2x + 1. Fixa o valor nesse resultado.'),
      item(`À esquerda de x = ${a}, f(x) = x + ${b}. À direita, f(x) = k. Que k iguala os limites laterais?`, a+b, 'Calcula o limite esquerdo substituindo no ramo x mais a constante. Igualar os lados ainda exige fixar f no ponto para ter continuidade.'),
    ];
    case 15: return [
      item(`Calcula f′(${a}) se f(x) = x² + ${b}x.`, 2*a+b, `Deriva termo a termo: 2x + ${b}. Depois substitui x por ${a}.`),
      item(`Onde f(x) = x² − ${2*a}x atinge o mínimo? Dá a abcissa.`, a, `Iguala 2x − ${2*a} a zero. A derivada muda de negativa para positiva.`),
    ];
    case 16: return [
      item(`Calcula a integral definida de 2x, entre 0 e ${a}.`, a*a, 'Uma primitiva é x². Subtrai o valor na origem do valor no limite superior.'),
      item(`Calcula a integral da função constante ${a} entre 0 e ${b}.`, a*b, 'A área é a de um rectângulo: altura vezes largura.'),
    ];
    case 17: return [
      item(`De ${a} pessoas, quantas duplas sem ordem podes formar?`, a*(a-1)/2, 'Conta as escolhas ordenadas, n(n−1), e divide por 2, pois trocando a ordem a dupla é a mesma.'),
      item(`De ${a} pessoas, de quantas maneiras podes escolher primeiro e segundo lugares distintos?`, a*(a-1), 'Multiplica as escolhas sucessivas. A ordem conta, pelo que não divides por 2.'),
    ];
    case 18: return [
      item(`Qual é o coeficiente de x em (1 + x) elevado a ${a}?`, a, 'Escolhe um único factor para fornecer x. Os restantes fornecem 1.'),
      item(`Qual é o coeficiente de x² em (1 + x) elevado a ${b}?`, b*(b-1)/2, 'Escolhe dois factores para fornecer x. A ordem dos factores escolhidos não importa.'),
    ];
    case 19: return [
      item(`Num saco há ${a} bolas vermelhas e ${20-a} azuis. Tirando uma ao acaso, qual é a probabilidade de vermelho, em percentagem?`, 5*a, `Há ${a} casos favoráveis entre 20. Divide por 20 e multiplica por 100.`),
      item(`Um dado de 20 faces, numeradas de 1 a 20, tem todas as faces igualmente prováveis. Qual é a probabilidade de sair um número maior que ${a}, em percentagem?`, 5*(20-a), `Há ${20-a} números de ${a+1} até 20, inclusive. Divide por 20 e multiplica por 100.`),
    ];
    case 20: return [
      item(`Calcula a média de ${a}, ${a+2} e ${a+4}.`, a+2, 'Soma as três observações e divide por 3. Os extremos são equidistantes do valor central.'),
      item(`Calcula a amplitude de ${a}, ${b}, ${2*b} e ${3*b}.`, 3*b-a, 'Subtrai o valor mínimo ao valor máximo.'),
    ];
    default: throw new Error('Tópico desconhecido');
  }
}
