import { createClient } from '@supabase/supabase-js'
const supabaseUrl = import.meta.env.https://avjulztmjwjfivabmmuy.supabase.co
const supabasePublishableKey = import.meta.env.sb_publishable_EvJR7ZNfG20fjFxv-i66ig_a3rtrHFD
export const supabase = createClient(supabaseUrl, supabasePublishableKey)