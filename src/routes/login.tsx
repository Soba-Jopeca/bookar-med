import { useState } from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { getSupabase } from '@/data/supabase';
import { useLessonProgress } from '@/components/bookar/LessonProgress';
import { pageHead } from '@/data/bookar';

export const Route = createFileRoute('/login')({
  head: () => pageHead('Entrar', 'Acede à tua conta de estudo Bookar Med.'),
  component: Account,
});

function Account() {
  const { session, ready } = useLessonProgress();
  const [register, setRegister] = useState(false);
  const [busy, setBusy] = useState(false);
  const [message,setMessage] = useState('');
  const configured = ready && !!getSupabase();

  return <article className="lesson-body mx-auto max-w-lg">
    <p className="text-sm font-semibold">Bookar Med · Soba Academy</p>
    <h1>{session ? 'A tua conta' : register ? 'Criar conta' : 'Entrar na tua conta'}</h1>
    {session ? <>
      <p>{session.user.email}</p>
      <div className="flex flex-wrap gap-3">
        <Button asChild><Link to="/catalogo">Iniciar estudos</Link></Button>
        <Button variant="outline" disabled={busy} onClick={async () => {
          setBusy(true);
          try { const res = await getSupabase()?.auth.signOut(); if (res?.error) setMessage('Não foi possível sair agora.'); }
          catch { setMessage('Não foi possível sair agora.'); } finally { setBusy(false); }
        }}>Terminar sessão</Button>
      </div>
    </> : <>
      <p>Entra para guardar as aulas estudadas na tua conta.</p>
      {ready && !configured && <p className="notice">A ligação das contas ainda está em preparação. Podes explorar as aulas como visitante.</p>}
      {configured && <form className="grid gap-4" onSubmit={async event => {
        event.preventDefault(); setBusy(true); setMessage('');
        const form = new FormData(event.currentTarget);
        const email = String(form.get('email')).trim();
        const password = String(form.get('password'));
        try {
          const auth = getSupabase()!.auth;
          const result = register ? await auth.signUp({email,password,options:{emailRedirectTo:window.location.origin+'/login'}})
            : await auth.signInWithPassword({email,password});
          if (result.error) setMessage(register ? 'Não foi possível criar a conta. Confere os dados e tenta novamente.' : 'Não foi possível entrar. Confere o e-mail, a confirmação da conta e a palavra-passe.');
          else if (register && !result.data.session) setMessage('Confirma o endereço pelo link enviado para o teu e-mail.');
        } catch { setMessage('Não foi possível ligar ao serviço de contas. Tenta novamente.'); }
        finally { setBusy(false); }
      }}>
        <label className="grid gap-1">E-mail<input className="rounded border p-3" name="email" autoComplete="email" type="email" required/></label>
        <label className="grid gap-1">Palavra-passe<input key={String(register)} className="rounded border p-3" name="password" autoComplete={register ? 'new-password' : 'current-password'} type="password" minLength={register ? 8 : 1} required/></label>
        <Button type="submit" disabled={busy}>{busy ? 'Aguarda…' : register ? 'Criar conta' : 'Entrar'}</Button>
        <button className="underline" type="button" disabled={busy} onClick={() => {setRegister(!register); setMessage('');}}>
          {register ? 'Já tenho conta' : 'Criar conta'}
        </button>
      </form>}
      <p className="mt-4"><Link className="underline" to="/catalogo">Explorar como visitante</Link></p>
    </>}
    {message && <p className="notice" role="status">{message}</p>}
  </article>;
}
