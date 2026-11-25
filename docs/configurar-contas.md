# Contas e progresso · preparação do piloto

## Ambiente e objectivo

Usa um projecto Supabase de homologação e duas contas fictícias. Confirma na conta as quotas disponíveis, as condições de envio de e-mail e a meta de zero custo adicional antes de activar qualquer serviço.

## Base de dados

No SQL Editor do projecto Supabase de homologação, aplica a seguinte definição. Esta tabela regista a leitura declarada pelo aluno. Resultados e desbloqueios das avaliações exigem persistência própria, com escrita autorizada pelo servidor.

```sql
create table public.lesson_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_id text not null check (lesson_id ~ '^(math-([1-9]|1[0-9]|20)|BIO-(0[1-9]|1[0-2])|QUI-(0[1-9]|1[01])|POR-(0[1-9]|1[0-9]|2[0-5]))$'),
  status text not null check (status in ('started', 'studied')),
  primary key (user_id, lesson_id)
);

alter table public.lesson_progress enable row level security;
revoke all on public.lesson_progress from anon, authenticated;
grant select, insert, update on public.lesson_progress to authenticated;

create policy "Ler progresso próprio" on public.lesson_progress
  for select to authenticated using ((select auth.uid()) = user_id);
create policy "Criar progresso próprio" on public.lesson_progress
  for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "Actualizar progresso próprio" on public.lesson_progress
  for update to authenticated using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);
```

## Aplicação e autenticação

1. Configura `VITE_SUPABASE_URL` e `VITE_SUPABASE_PUBLISHABLE_KEY` no ambiente de compilação da prévia. A segunda é a chave pública do projecto. Mantém as chaves de servidor fora do código e do frontend.
2. Activa e-mail e palavra-passe em Authentication. Em URL Configuration, introduz o endereço exacto da aplicação de homologação e autoriza o regresso a `/login` para confirmação.
3. Abre a nova prévia. Entra com a primeira conta fictícia, abre uma aula e marca-a como estudada. Reabre com a mesma conta noutro navegador. Confirma a recuperação do progresso.
4. Confirma com a segunda conta que apenas as suas próprias linhas aparecem. Confirma também que um visitante pode estudar e guardar marcas no navegador, sem acesso a dados das contas.
5. Confirma autenticação em telemóvel. Mantém o bloqueio por avaliação desactivado até validar os resultados e o progresso por conta.

A selecção do projecto, a criação da tabela e a configuração do serviço precisam de ser feitas na conta de homologação. Até lá, o acesso de visitante usa o navegador para recordar as aulas estudadas.
