import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import type { Session } from '@supabase/supabase-js';
import { getSupabase } from '@/data/supabase';

type State = 'started' | 'studied';
type Entries = Record<string, State>;
const key = 'bookar-lesson-progress-v1';
const Progress = createContext<{
  entries: Entries;
  ready: boolean;
  mark: (id: string, state: State) => void;
  session: Session | null;
  warning: string;
} | null>(null);

export function LessonProgressProvider({ children }: { children: ReactNode }) {
  const [local, setLocal] = useState<Entries>({});
  const [ready, setReady] = useState(false);
  const [remote, setRemote] = useState<Entries>({});
  const [session, setSession] = useState<Session | null>(null);
  const [warning, setWarning] = useState('');
  const userId = session?.user.id;
  const currentUser = useRef<string | undefined>(undefined);
  useEffect(() => {
    try { setLocal(JSON.parse(localStorage.getItem(key) ?? '{}') ?? {}); }
    catch { setWarning('O navegador não guardou o progresso local.'); }
    setReady(true);
    const client = getSupabase();
    if (!client) return;
    const { data } = client.auth.onAuthStateChange((_event, next) => {
      const nextId = next?.user.id;
      if (currentUser.current !== nextId) {
        currentUser.current = nextId;
        setRemote({});
        setWarning('');
      }
      setSession(next);
    });
    return () => data.subscription.unsubscribe();
  }, []);
  useEffect(() => {
    if (!userId) return;
    let active = true;
    void getSupabase()?.from('lesson_progress').select('lesson_id,status').eq('user_id', userId).then(({data,error}) => {
      if (!active || currentUser.current !== userId) return;
      if (error) setWarning('Não foi possível recuperar o progresso da conta.');
      else setRemote(old => ({...Object.fromEntries(data.map(row => [row.lesson_id, row.status])), ...old}));
    });
    return () => { active = false; };
  }, [userId]);

  function mark(id: string, state: State) {
    if (userId) {
      const client = getSupabase();
      if (!client) return;
      const row = { user_id: userId, lesson_id: id, status: state };
      const request = client.from('lesson_progress').upsert(row, {
        onConflict: 'user_id,lesson_id', ignoreDuplicates: state === 'started',
      }).select('status');
      void request.then(({data,error}) => {
        if (currentUser.current !== userId) return;
        if (error) setWarning('Não foi possível guardar o progresso da conta. Tenta novamente.');
        else {
          setWarning('');
          setRemote(old => {
            const value = data?.[0]?.status;
            return value === 'studied' || (value === 'started' && old[id] !== 'studied') ? {...old, [id]: value} : old;
          });
        }
      });
      return;
    }
    setLocal(old => {
      if (old[id] === 'studied' || old[id] === state) return old;
      const next = { ...old, [id]: state };
      try { localStorage.setItem(key, JSON.stringify(next)); } catch { /* in-memory fallback */ }
      return next;
    });
  }
  return <Progress.Provider value={{ entries: userId ? remote : local, ready, mark, session, warning }}>{children}</Progress.Provider>;
}

export function useLessonProgress() {
  const progress = useContext(Progress);
  if (!progress) throw new Error('Progresso do estudo indisponível.');
  return progress;
}

export function LessonStatus({ id, approved = false }: { id: string; approved?: boolean }) {
  const { entries } = useLessonProgress();
  return <span className={approved || entries[id] === 'studied' ? 'pill green' : 'pill'}>
    {approved ? 'Avaliação aprovada' : entries[id] === 'studied' ? 'Estudada' : entries[id] === 'started' ? 'Em estudo' : 'Por iniciar'}
  </span>;
}

export function LessonProgress({ id }: { id: string }) {
  const { mark, entries, session, warning, ready } = useLessonProgress();
  const account = session?.user.id;
  useEffect(() => {
    if (ready) mark(id, 'started');
    // Record a visit when arriving at a lesson or switching account.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, account, ready]);
  return <section aria-label="Progresso da aula" className="concept">
    <LessonStatus id={id}/>
    <p>{session ? 'Progresso da conta' : 'Progresso neste navegador'}</p>
    {entries[id] !== 'studied' && <button className="underline" disabled={!ready} onClick={() => mark(id, 'studied')}>Marcar como estudada</button>}
    {warning && <p role="status">{warning}</p>}
  </section>;
}
