import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { parseProgress, progressKey, type Progress, type Activity } from '@/data/bookar';
type ProgressContextValue = { progress: Progress | null; ready: boolean; storageUnavailable: boolean; visit: (activity: Activity) => void; answer: (value: number | null, checked: boolean) => void };
const ProgressContext = createContext<ProgressContextValue | null>(null);
export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<Progress | null>(null);
  const [ready, setReady] = useState(false);
  const [storageUnavailable, setStorageUnavailable] = useState(false);
  useEffect(() => {
    try { setProgress(parseProgress(localStorage.getItem(progressKey))); } catch { setStorageUnavailable(true); }
    setReady(true);
  }, []);
  useEffect(() => {
    if (!ready || !progress) return;
    try { localStorage.setItem(progressKey, JSON.stringify(progress)); } catch { setStorageUnavailable(true); }
  }, [ready, progress]);
  const visit = (activity: Activity) => setProgress(p => ({ version: 1, activity, lessonVisited: p?.lessonVisited === true || activity === 'lesson', answer: p?.answer ?? null, checked: p?.checked ?? false }));
  const answer = (value: number | null, checked: boolean) => setProgress(p => ({ version: 1, activity: 'practice', lessonVisited: p?.lessonVisited ?? false, answer: value, checked }));
  return <ProgressContext.Provider value={{ progress, ready, storageUnavailable, visit, answer }}>{children}</ProgressContext.Provider>;
}
export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) throw new Error('ProgressProvider missing');
  return context;
}
export function useActivity(activity: Activity) {
  const { ready, visit } = useProgress();
  useEffect(() => { if (ready) visit(activity); }, [ready, activity]); // Visit once after stored progress has loaded.
}
