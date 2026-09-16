import { supabase } from './supabase';

/* Saves an enquiry to the `contact_messages` table (see
   supabase/contact_messages.sql). Throws when Supabase is not configured or
   the insert fails, so the form can say so instead of pretending it sent. */
export async function submitContactMessage(fields) {
  if (!supabase) {
    throw new Error('Supabase is not configured');
  }
  const { error } = await supabase.from('contact_messages').insert({
    ...fields,
    page: window.location.pathname,
  });
  if (error) throw error;
}
