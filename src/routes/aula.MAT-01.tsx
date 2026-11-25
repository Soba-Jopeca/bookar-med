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
    <h1>1. Potências e radicais</h1>
    <p>Aprende a simplificar potências e radicais, a verificar o domínio e a confirmar soluções.</p>
    <h2>1.1 · Antes de começar</h2>
    <p>Revê a ordem das operações e a multiplicação com números negativos. Calcula (−3)², −3² e √25.</p>
    <details><summary>Conferir o diagnóstico</summary><p>9, −9 e 5. O sinal exterior em −3² é aplicado depois da potência. √25 é a raiz não negativa.</p></details>
    <h2>1.2 · O que é uma potência?</h2>
    <p>Em 2³, lê «dois elevado a três» ou «dois ao cubo». O 2 é a base e o 3 é o expoente. Escreve 2 × 2 × 2: primeiro 2 × 2 = 4, depois 4 × 2 = 8.</p>
    <h3>Propriedades e condições</h3>
    <ul>
      <li><strong>Produto:</strong> aᵐ × aⁿ = aᵐ⁺ⁿ. Usa esta regra quando a base é a mesma. Para expoentes positivos, basta contar os factores dos dois grupos.</li>
      <li><strong>Quociente:</strong> aᵐ/aⁿ = aᵐ⁻ⁿ, com a ≠ 0. A subtracção conta os factores que ficam depois do cancelamento.</li>
      <li><strong>Potência de potência:</strong> (aᵐ)ⁿ = aᵐⁿ. Por exemplo, (2³)² = 2³ × 2³ = 2⁶.</li>
    </ul>
    <p>Em 2³, a base é 2 e o expoente indica três factores iguais a 2. Ao multiplicar potências da mesma base, somamos os expoentes. Ao dividir, subtraímos os expoentes e a base deve ser diferente de zero.</p>
    <p>Para a ≠ 0, a⁰ = 1 e a⁻ⁿ = 1/aⁿ. Em (aᵐ)ⁿ, multiplicamos os expoentes inteiros quando as potências estão definidas.</p>
    <h2>1.3 · O que é uma raiz quadrada?</h2>
    <p>Para calcular √49, procura o número não negativo que multiplicado por si próprio dá 49. Esse número é 7. Em √49, o 49 chama-se radicando. Se a pergunta for «quais números satisfazem x² = 49?», testa também −7: (−7)² = 49.</p>
    <h3>Propriedade do produto</h3>
    <p>Para u e v não negativos, √(uv) = √u × √v. O produto √u × √v é não negativo e o seu quadrado é uv. Por isso, ele cumpre a definição de √(uv). Para uma soma, verifica com um exemplo: √(9 + 16) = 5, enquanto √9 + √16 = 7.</p>
    <h3>Como escolher o método</h3>
    <ul><li>Se pedem o valor de uma potência, começa por identificar a base, incluindo os parênteses.</li><li>Se pedem para simplificar uma raiz, procura um factor quadrado perfeito: 4, 9, 16, 25, 36…</li><li>Se há uma incógnita dentro da raiz, escreve as condições, isola o radical, eleva ao quadrado e testa cada candidato na equação original.</li></ul>
    <p>Nos reais, √x exige x ≥ 0 e expressa um valor não negativo. Assim, √(x²) = |x|. Para simplificar √72, separa o factor quadrado perfeito 36 e obtém 6√2.</p>
    <figure className="concept">
      <div className="flex flex-wrap gap-2" aria-label="Três factores 2 do primeiro grupo e dois do segundo">
        <span className="pill green">2 × 2 × 2</span><span>×</span><span className="pill">2 × 2</span><span>= 2⁵</span>
      </div>
      <figcaption>Juntar os dois grupos dá cinco factores iguais a 2.</figcaption>
    </figure>
    <h2>1.4 · Quatro exemplos resolvidos</h2>
    {examples.map(([title, ...steps], index) => <section className="concept" key={title}>
      <h3><strong>Exemplo {index + 1} · {title}</strong></h3>
      <ol>{steps.map((step, i) => <li key={step}><strong>{i === steps.length - 1 ? "Verifica e interpreta" : `Passo ${i + 1}`}. </strong>{step}</li>)}</ol>
    </section>)}
    <div className="concept"><strong>Verificação em √(x+5)=x−1</strong><p>O lado direito só pode representar uma raiz se x ≥ 1. O candidato −1 fica fora dessa região. O candidato 4 pertence a ela e confirma a igualdade na equação original.</p></div>
    <h2>1.5 · Prática · 12 exercícios</h2>
    {practice.map(([id, question, feedback]) => <section className="concept" key={id}>
      <strong>{id}</strong><p>{question}</p><details><summary>Conferir resolução</summary><ol>{feedback.map(step => <li key={step}>{step}</li>)}</ol></details>
    </section>)}
    <h2>1.6 · Controlo individual</h2>
    <ol><li>Simplifica 2⁷/2⁹.</li><li>Simplifica √108.</li><li>Encontra o domínio de √(5−x).</li><li>Resolve √(x+6)=x e verifica na equação inicial.</li></ol>
    <details><summary>Conferir após terminar o controlo</summary><p>1. 1/4. 2. 6√3. 3. x ≤ 5. 4. x = 3. Ao elevar ao quadrado aparecem 3 e −2. Só 3 verifica a igualdade inicial: √9 = 3.</p></details>
    <p className="editorial-note">MAT-01 · UAN · Medicina · 2026/2027 · Tópicos para o Exame de Acesso, página PDF 2 / impressa 1.</p>
  </article>;
}
