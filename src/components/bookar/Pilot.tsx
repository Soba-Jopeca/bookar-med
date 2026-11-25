import { useState } from "react";
import { control, practice } from "@/data/pilot";
export function PracticeSet() {
  return (
    <section className="lesson-body">
      <h2>Prática graduada</h2>
      <p>Resolve no caderno. Abre a resolução depois de tentares cada exercício.</p>
      {practice.map(([question, solution], i) => (
        <article className="concept" key={question}>
          <strong>
            MAT-FQ-P{String(i + 1).padStart(2, "0")} ·{" "}
            {["Bases", "Aplicação", "Interpretação", "Transferência"][Math.floor(i / 3)]}
          </strong>
          <p>{question}</p>
          <details>
            <summary>Conferir resolução</summary>
            <p>{solution}</p>
          </details>
        </article>
      ))}
    </section>
  );
}
export function PilotReview() {
  const [note, setNote] = useState("");
  function download() {
    const url = URL.createObjectURL(
      new Blob(["Bookar Med · MAT-FQ · piloto v0.1\n" + note], {
        type: "text/plain;charset=utf-8",
      }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = "Bookar-Med-feedback.txt";
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return (
    <section className="lesson-body">
      <h2 id="controlo">Controlo individual</h2>
      <p>Resolve sem consultar a aula. Guarda as tuas justificações no caderno.</p>
      <ol>
        {control.map((q, i) => (
          <li key={q}>
            C0{i + 1} · {q}
          </li>
        ))}
      </ol>
      <h2>Validação pelos alunos</h2>
      <p>
        Durante os sete dias após o lançamento do piloto, experimenta a aula e envia o teu retorno
        ao João pelo canal onde recebeste o convite.
      </p>
      <label htmlFor="pilot-note">
        Indica a página ou exercício, o que aconteceu e a alteração que sugeres.
      </label>
      <textarea
        id="pilot-note"
        rows={5}
        className="w-full border p-3"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button className="underline" disabled={!note.trim()} onClick={download}>
        Descarregar comentário para enviar
      </button>
      <p>O ficheiro fica no teu dispositivo até o enviares.</p>
    </section>
  );
}

import { gradePilot } from "@/data/grade";
const questions = [
  [
    "Qual expressão tem vértice (2,3) e abertura para baixo?",
    ["(x−2)²+3", "−(x+2)²+3", "−(x−2)²+3", "−(x−2)²−3"],
  ],
  [
    "Um cartaz rectangular tem perímetro 24 dm. Qual é a maior área possível?",
    ["24 dm²", "48 dm²", "36 dm²", "144 dm²"],
  ],
] as const;
export function PilotExam() {
  const [answers, setAnswers] = useState<[number, number]>([-1, -1]);
  const [result, setResult] = useState("");
  const [busy, setBusy] = useState(false);
  async function submit() {
    setBusy(true);
    try {
      const { score } = await gradePilot({ data: answers });
      setResult("Resultado: " + score + " de 2.");
    } catch {
      setResult("Não foi possível corrigir agora. Tenta novamente.");
    } finally {
      setBusy(false);
    }
  }
  return (
    <section className="lesson-body" id="simulado">
      <h2>Simulado de treino · MAT-FQ</h2>
      <p>Duas questões originais do piloto.</p>
      {questions.map(([q, opts], i) => (
        <fieldset disabled={busy} className="concept" key={q}>
          <legend>{q}</legend>
          {opts.map((opt, j) => (
            <label className="block p-2" key={opt}>
              <input
                type="radio"
                name={"sim" + i}
                checked={answers[i] === j}
                onChange={() => {
                  const next: [number, number] = [...answers];
                  next[i] = j;
                  setAnswers(next);
                  setResult("");
                }}
              />{" "}
              {opt}
            </label>
          ))}
        </fieldset>
      ))}
      <button className="underline" disabled={busy || answers.includes(-1)} onClick={submit}>
        Entregar simulado
      </button>
      <p role="status">{result}</p>
    </section>
  );
}
