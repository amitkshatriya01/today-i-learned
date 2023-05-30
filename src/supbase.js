import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ejuhoaztzvvrnvcxanmb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqdWhvYXp0enZ2cm52Y3hhbm1iIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ1MzE5MjgsImV4cCI6MjAwMDEwNzkyOH0._46w4MKwqwX-SSi8zxqxUjYqEIFIffUqfLoRxaRuEQY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
