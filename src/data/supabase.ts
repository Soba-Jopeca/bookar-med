import { createClient } from '@supabase/supabase-js';

type Row = { user_id: string; lesson_id: string; status: 'started' | 'studied' };
type Database = {
  public: {
    Tables: { lesson_progress: { Row: Row; Insert: Row; Update: Partial<Row>; Relationships: [] } };
    Views: Record<never, never>;
    Functions: Record<never, never>;
  };
};
let client: ReturnType<typeof createClient<Database>> | undefined;

export function getSupabase() {
  const url = import.meta.env['VITE_SUPABASE_URL'];
  const key = import.meta.env['VITE_SUPABASE_PUBLISHABLE_KEY'];
  if (typeof window === 'undefined' || !url || !key) return undefined;
  return client ??= createClient<Database>(url, key);
}
