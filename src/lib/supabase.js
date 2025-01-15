import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://dzenacymjprywcjxoqke.supabase.co'; // URL Supabase Anda
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6ZW5hY3ltanByeXdjanhvcWtlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY5MTkxODIsImV4cCI6MjA1MjQ5NTE4Mn0.R_73IG7Nw3wWnUpc4NlsjWQ-BG0b1tUb1FEYY6AJn_Y'; // Gunakan kunci API dari dashboard Supabase Anda

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
