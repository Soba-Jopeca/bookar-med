import { Link, redirect } from '@tanstack/react-router';
import type { ReactNode } from 'react';
import { mathProgress } from '@/data/mathProgress';

export function MathLessonLink({ topic, children, className }: { topic: number; children: ReactNode; className?: string }) {
  if (topic === 1) return <Link className={className} to="/aula/MAT-01">{children}</Link>;
  if (topic === 6) return <Link className={className} to="/aula/MAT-FQ">{children}</Link>;
  return <Link className={className} to="/matematica/$topico" params={{ topico: String(topic) }}>{children}</Link>;
}

export async function requireMathTopic(topic: number) {
  const status = await mathProgress();
  if (!status.reviewOpen && topic > status.completed + 1) {
    throw redirect({ to: '/avaliacao/matematica/$topico', params: { topico: String(topic) }, replace: true });
  }
  return status;
}
