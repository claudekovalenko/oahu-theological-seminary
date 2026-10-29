-- Oahu Theological Seminary · student portal schema
-- Apply with: supabase db push   (or paste into the Supabase SQL editor)

create extension if not exists "pgcrypto";

-- Profiles (one per auth user)
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  church text,
  role text not null default 'student' check (role in ('student','instructor','admin')),
  created_at timestamptz not null default now()
);

create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, full_name) values (new.id, new.raw_user_meta_data->>'full_name')
  on conflict (id) do nothing;
  return new;
end $$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users for each row execute procedure public.handle_new_user();

-- Applications submitted from /start/apply
create table if not exists public.applications (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  location text,
  church text not null,
  pastor text,
  serving text,
  interest text not null,
  education text,
  message text,
  referral text,
  watched_intro boolean not null default false,
  church_consulted boolean not null default false,
  status text not null default 'new' check (status in ('new','contacted','accepted','declined')),
  created_at timestamptz not null default now()
);

-- Enrollments in community courses (course_slug matches src/content/courses.ts)
create table if not exists public.enrollments (
  user_id uuid not null references auth.users(id) on delete cascade,
  course_slug text not null,
  enrolled_at timestamptz not null default now(),
  primary key (user_id, course_slug)
);

-- Per-activity completion (mirrors Moodle activity completion)
create table if not exists public.activity_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  course_slug text not null,
  activity_id text not null,
  completed_at timestamptz not null default now(),
  primary key (user_id, course_slug, activity_id)
);

-- Discussion posts for forum activities
create table if not exists public.forum_posts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  course_slug text not null,
  activity_id text not null,
  body text not null,
  created_at timestamptz not null default now()
);

-- Row level security
alter table public.profiles enable row level security;
alter table public.applications enable row level security;
alter table public.enrollments enable row level security;
alter table public.activity_progress enable row level security;
alter table public.forum_posts enable row level security;

create policy "profiles: own read" on public.profiles for select using (auth.uid() = id);
create policy "profiles: own update" on public.profiles for update using (auth.uid() = id);

-- Applications are written by the server (service role) only; admins read.
create policy "applications: admin read" on public.applications for select
  using (exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'));

create policy "enrollments: own" on public.enrollments for all
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "progress: own" on public.activity_progress for all
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "forum: read all signed in" on public.forum_posts for select using (auth.role() = 'authenticated');
create policy "forum: write own" on public.forum_posts for insert with check (auth.uid() = user_id);
create policy "forum: delete own" on public.forum_posts for delete using (auth.uid() = user_id);

-- Messages from the contact form (written by the server only)
create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);
alter table public.messages enable row level security;
create policy "messages: admin read" on public.messages for select
  using (exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'));
