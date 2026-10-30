-- Executar somente em projeto Supabase exclusivo do André.
create table if not exists public.leads (
 id uuid primary key default gen_random_uuid(),
 created_at timestamptz not null default now(),
 name text not null check (char_length(name) between 2 and 100),
 phone text not null,
 city text not null check (city in ('Americana','Caconde')),
 marketing_consent boolean not null default false,
 marketing_consent_at timestamptz,
 source_page text not null,
 utm_source text,utm_medium text,utm_campaign text,
 lead_token uuid not null unique,
 status text not null default 'new'
);
alter table public.leads enable row level security;
revoke all on table public.leads from anon,authenticated;
create index if not exists leads_created_at_idx on public.leads(created_at desc);
create index if not exists leads_city_created_idx on public.leads(city,created_at desc);
