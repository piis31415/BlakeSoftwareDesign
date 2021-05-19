import cookie from 'cookie'
import { SupabaseClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://vqqjrxggizczqfdfthzl.supabase.co";
const SUPABASE_SERVICE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjIwMDUxMzYwLCJleHAiOjE5MzU2MjczNjB9.qWQY2E5ZHZsypQ-mMpiTHa0dYmTVcsn0D2_ptZ8wbYc";

const supabase = new SupabaseClient (
  SUPABASE_URL,
  SUPABASE_SERVICE_KEY
);

// user sessions
/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ request, render }): Promise<any> {
  const headers = request.headers;

  // default not logged in
  request.locals.auth = false;
  request.locals.admin = false;

  // console.log(request);
  if (!headers.cookie) return render(request);
  // console.log(headers.cookie);
  const token = cookie.parse(headers.cookie)?.token;
  // console.log(token);
  if (!token) return render(request);
  const { user, error } = await supabase.auth.api.getUser(token);
  // console.log(user);
  if (error) return render(request);
  const adminStatus = (await supabase.from('users')
    .select('user_role').match({'id':user.id}))
    ?.data?.[0]
    ?.user_role;
  // console.log(adminStatus);
  request.locals = {
    role: adminStatus,
    auth: true
  }
	return render(request);
}


export async function getSession({ locals }): Promise<any> {
  console.log(locals);
  return locals;
}