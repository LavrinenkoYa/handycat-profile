-- Admins of the HandyCat admin panel, managed from the panel itself (issue #22).
-- Only admin-api (service role) reads or writes this table: RLS on, no policies.
create table if not exists public.admin_users (
  user_id    uuid primary key references auth.users(id) on delete cascade,
  email      text not null,
  role       text not null default 'admin' check (role in ('owner', 'admin')),
  created_at timestamptz not null default now(),
  created_by uuid references auth.users(id) on delete set null
);
alter table public.admin_users enable row level security;
revoke all on public.admin_users from anon, authenticated;

-- The current admin becomes the owner (the only one who can invite and remove admins).
insert into public.admin_users (user_id, email, role)
select id, lower(email), 'owner' from auth.users where lower(email) = 'designlavrinenko@gmail.com'
on conflict (user_id) do update set role = 'owner';
