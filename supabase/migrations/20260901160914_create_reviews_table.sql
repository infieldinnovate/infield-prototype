/*
# Create reviews table

1. New Tables
- `reviews`
  - `id` (uuid, primary key)
  - `name` (text, not null) — reviewer's display name
  - `email` (text, not null) — reviewer's email (not displayed publicly)
  - `rating` (integer, 1–5, not null) — star rating
  - `service` (text, not null) — which service the review is about
  - `title` (text, not null) — short review headline
  - `body` (text, not null) — full review text
  - `approved` (boolean, default false) — admin moderation flag; only approved reviews show publicly
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `reviews`.
- INSERT: anyone (anon + authenticated) can submit a review.
- SELECT: anyone can read approved reviews (approved = true). Unapproved reviews are hidden from the public.
- No UPDATE or DELETE from the client — moderation is server-side only.

3. Notes
- This is a single-tenant, no-auth app. The anon-key client must be able to insert and select.
- `approved` defaults to false so reviews go through moderation before being displayed.
*/

CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  service text NOT NULL,
  title text NOT NULL,
  body text NOT NULL,
  approved boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit a review
DROP POLICY IF EXISTS "anon_insert_reviews" ON reviews;
CREATE POLICY "anon_insert_reviews" ON reviews
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

-- Allow anyone to read approved reviews only
DROP POLICY IF EXISTS "anon_select_approved_reviews" ON reviews;
CREATE POLICY "anon_select_approved_reviews" ON reviews
  FOR SELECT TO anon, authenticated
  USING (approved = true);
