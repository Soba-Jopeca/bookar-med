export const subjects = [
  { id: 'matematica', name: 'Matemática', description: 'Desenvolve o raciocínio, passo a passo.', tone: 'math', symbol: 'math', available: true },
  { id: 'biologia', name: 'Biologia', description: 'Compreende a vida, da célula à diversidade.', tone: 'biology', symbol: 'biology', available: false },
  { id: 'quimica', name: 'Química', description: 'Explora a matéria e as suas transformações.', tone: 'chemistry', symbol: 'chemistry', available: false },
  { id: 'portugues', name: 'Língua Portuguesa', description: 'Lê, interpreta e comunica com clareza.', tone: 'language', symbol: 'language', available: false },
] as const;
export const lesson = {
  id: 'MAT-FQ', title: 'Função quadrática e parábola',
  objectives: ['Reconhecer o gráfico de uma função quadrática.', 'Identificar as raízes, o vértice e o eixo de simetria.', 'Calcular o valor da função num ponto.'],
  prerequisites: 'Operações com números inteiros, potências e coordenadas no plano cartesiano.',
  question: 'Qual é o valor de f(2)?',
  options: [{ id: 'a', value: 3 }, { id: 'b', value: 1 }, { id: 'c', value: -1 }, { id: 'd', value: -3 }],
};
export function quadratic(x: number) { return x * x - 4 * x + 3; }
export function isCorrect(value: number) { return value === quadratic(2); }
export type Activity = 'lesson' | 'practice';
export type Progress = { version: 1; activity: Activity; lessonVisited: boolean; answer: number | null; checked: boolean };
export const progressKey = 'bookar-med:demo-progress:v1';
export function parseProgress(raw: string | null): Progress | null {
  if (!raw) return null;
  try {
    const p: unknown = JSON.parse(raw);
    if (typeof p !== 'object' || p === null) return null;
    const r = p as Record<string, unknown>;
    if (r['version'] !== 1 || (r['activity'] !== 'lesson' && r['activity'] !== 'practice') || typeof r['lessonVisited'] !== 'boolean' || typeof r['checked'] !== 'boolean') return null;
    const answer = r['answer'];
    if (answer !== null && (typeof answer !== 'number' || !lesson.options.some(o => o.value === answer))) return null;
    if (r['checked'] && answer === null) return null;
    return { version: 1, activity: r['activity'], lessonVisited: r['lessonVisited'], answer, checked: r['checked'] };
  } catch { return null; }
}
export function pageHead(title: string, description: string) {
  return { meta: [{ title: `${title} · Bookar Med` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} · Bookar Med` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] };
}
