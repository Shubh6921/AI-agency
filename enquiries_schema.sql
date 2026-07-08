-- Supabase SQL schema setup for enquiries table.
-- Run this in the SQL Editor of your Supabase dashboard.

create table public.enquiries (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now() not null,
  name text not null,
  email text not null,
  company text,
  project_type text[] not null,
  budget_range text not null,
  timeline text not null,
  message text,
  status text default 'unread' not null
);

-- Indexes for performance
create index enquiries_created_at_idx on public.enquiries (created_at desc);

-- Enable RLS (Row Level Security)
alter table public.enquiries enable row level security;

-- Create policy for public insert (public submissions)
create policy "Allow public anonymous inserts"
on public.enquiries
for insert
with check (true);

-- Create policy for admin control (requires authentication)
create policy "Allow authenticated admins read/write access"
on public.enquiries
for all
using (auth.role() = 'authenticated');
