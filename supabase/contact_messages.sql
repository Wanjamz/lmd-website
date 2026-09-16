-- Contact form submissions from lmdconsulting.co
-- Run once in the Supabase SQL editor (Dashboard → SQL Editor → New query).

create table if not exists public.contact_messages (
  id           uuid primary key default gen_random_uuid(),
  created_at   timestamptz not null default now(),
  name         text not null,
  email        text not null,
  organisation text,
  role         text,
  country      text,
  subject      text not null,
  message      text not null,
  page         text,
  constraint contact_messages_email_shape check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  constraint contact_messages_message_length check (char_length(message) between 1 and 5000)
);

alter table public.contact_messages enable row level security;

-- Visitors may submit, but nobody using the public key can read, edit or
-- delete messages. Read them in the Supabase dashboard (Table Editor).
drop policy if exists "Anyone can submit a contact message" on public.contact_messages;
create policy "Anyone can submit a contact message"
  on public.contact_messages
  for insert
  to anon, authenticated
  with check (true);
