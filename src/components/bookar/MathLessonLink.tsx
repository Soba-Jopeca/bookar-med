import { Link, redirect } from '@tanstack/react-router';
import type { ReactNode } from 'react';
import { mathProgress } from '@/data/mathProgress';

export function MathLessonLink({ topic, children }: { topic: number; children: ReactNode }) {
  if (topic === 1) return <Link to="/aula/MAT-01">{children}</Link>;
  if (topic === 6) return <Link to="/aula/MAT-FQ">{children}</Link>;
  return <Link to="/matematica/$topico" params={{ topico: String(topic) }}>{children}</Link>;
}

export async function requireMathTopic(topic: number) {
  const status = await mathProgress();
  if (!status.reviewOpen && topic > status.completed + 1) {
    throw redirect({ to: '/avaliacao/matematica/$topico', params: { topico: String(topic) }, replace: true });
  }
  return status;
}
