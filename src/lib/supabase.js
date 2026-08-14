import { createClient } from '@supabase/supabase-js';

/* ─────────────────────────────────────────────────────────────────────────
   Supabase client
   Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file.
   On Vercel: add them under Project → Settings → Environment Variables.
───────────────────────────────────────────────────────────────────────── */
const url  = import.meta.env.VITE_SUPABASE_URL;
const key  = import.meta.env.VITE_SUPABASE_ANON_KEY;

// If env vars are missing the app will fall back to static data — no crash.
export const supabase = url && key ? createClient(url, key) : null;
