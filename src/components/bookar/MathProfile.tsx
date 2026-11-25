import { useEffect, useState } from 'react';
import { useRouter } from '@tanstack/react-router';
import { changeMathProfile, mathProgress } from '@/data/mathProgress';

export function MathProfile({ status }: { status: Awaited<ReturnType<typeof mathProgress>> }) {
  const router = useRouter();
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);
  const [busy, setBusy] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  async function change(value: string | null) {
    setBusy(true);
    setError(false);
    try {
      if (await changeMathProfile({ data: { code: value } })) {
        setCode('');
        await router.invalidate();
      } else setError(true);
    } catch { setError(true); }
    finally { setBusy(false); }
  }

  if (!status.configured) return <p className="notice">Modo de preparação. Todas as aulas estão abertas para revisão. As avaliações ficam disponíveis após a configuração do servidor.</p>;
  if (!status.canReview) return null;
  return <details className="concept">
    <summary>{status.reviewer ? 'Perfil de revisão activo' : 'Acesso da equipa'}</summary>
    {status.reviewer ? <button className="underline" disabled={!ready || busy} onClick={() => void change(null)}>Voltar ao perfil de aluno</button> :
      <form onSubmit={event => { event.preventDefault(); void change(code); }}>
        <label htmlFor="math-review-code">Código de revisão</label>
        <input id="math-review-code" className="block border p-2" type="password" autoComplete="off" required maxLength={256} value={code} onChange={event => setCode(event.target.value)}/>
        <button className="underline" disabled={!ready || busy} type="submit">Abrir aulas para revisão</button>
      </form>}
    {error && <p role="alert">Não foi possível mudar de perfil. Confere o código e tenta novamente.</p>}
  </details>;
}
