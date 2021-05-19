import { SupabaseClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://vqqjrxggizczqfdfthzl.supabase.co";
const SUPABASE_SERVICE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjIwMDUxMzYwLCJleHAiOjE5MzU2MjczNjB9.qWQY2E5ZHZsypQ-mMpiTHa0dYmTVcsn0D2_ptZ8wbYc";

const supabase = new SupabaseClient (
  SUPABASE_URL,
  SUPABASE_SERVICE_KEY
);

export {
  supabase
}