import { createFileRoute, Link } from '@tanstack/react-router';
import { examples, practice } from '@/data/powers';
import { pageHead } from '@/data/bookar';

export const Route = createFileRoute('/aula/MAT-01')({
  head: () => pageHead('Potências e radicais', 'Aprende a simplificar potências e radicais e a verificar soluções.'),
  component: PowersLesson,
});

function PowersLesson() {
  return <article className="lesson-body">
    <Link to="/disciplinas/$disciplina" params={{ disciplina: 'matematica' }}>Voltar a Matemática</Link>
    <h1>Potências e radicais</h1>
    <p>Aprende a simplificar potências e radicais, a verificar o domínio e a confirmar soluções.</p>
    <h2>Antes de começar</h2>
    <p>Revê a ordem das operações e a multiplicação com números negativos. Calcula (−3)², −3² e √25.</p>
    <details><summary>Conferir o diagnóstico</summary><p>9, −9 e 5. O sinal exterior em −3² é aplicado depois da potência. √25 é a raiz não negativa.</p></details>
    <h2>Como funcionam as potências</h2>
    <p>Em 2³, a base é 2 e o expoente indica três factores iguais a 2. Ao multiplicar potências da mesma base, somamos os expoentes. Ao dividir, subtraímos os expoentes e a base deve ser diferente de zero.</p>
    <p>Para a ≠ 0, a⁰ = 1 e a⁻ⁿ = 1/aⁿ. Em (aᵐ)ⁿ, multiplicamos os expoentes inteiros quando as potências estão definidas.</p>
    <h2>Como ler uma raiz</h2>
    <p>Nos reais, √x exige x ≥ 0 e expressa um valor não negativo. Assim, √(x²) = |x|. Para simplificar √72, separa o factor quadrado perfeito 36 e obtém 6√2.</p>
    <figure className="concept">
      <div className="flex flex-wrap gap-2" aria-label="Três factores 2 do primeiro grupo e dois do segundo">
        <span className="pill green">2 × 2 × 2</span><span>×</span><span className="pill">2 × 2</span><span>= 2⁵</span>
      </div>
      <figcaption>Juntar os dois grupos dá cinco factores iguais a 2.</figcaption>
    </figure>
    <h2>Quatro exemplos resolvidos</h2>
    <ol>{examples.map(example => <li key={example}>{example.split(' Visual:')[0].split(' Na recta numérica,')[0]}</li>)}</ol>
    <div className="concept"><strong>Verificação em √(x+5)=x−1</strong><p>O lado direito só pode representar uma raiz se x ≥ 1. O candidato −1 fica fora dessa região. O candidato 4 pertence a ela e confirma a igualdade na equação original.</p></div>
    <h2>Prática · 12 exercícios</h2>
    {practice.map(([id, question, feedback]) => <section className="concept" key={id}>
      <strong>{id}</strong><p>{question}</p><details><summary>Conferir resolução</summary><p>{feedback}</p></details>
    </section>)}
    <h2>Controlo individual</h2>
    <ol><li>Simplifica 2⁷/2⁹.</li><li>Simplifica √108.</li><li>Encontra o domínio de √(5−x).</li><li>Resolve √(x+6)=x e verifica na equação inicial.</li></ol>
    <details><summary>Conferir após terminar o controlo</summary><p>1. 1/4. 2. 6√3. 3. x ≤ 5. 4. x = 3. Ao elevar ao quadrado aparecem 3 e −2. Só 3 verifica a igualdade inicial: √9 = 3.</p></details>
    <p className="editorial-note">MAT-01 · UAN · Medicina · 2026/2027 · Tópicos para o Exame de Acesso, página PDF 2 / impressa 1.</p>
  </article>;
}
