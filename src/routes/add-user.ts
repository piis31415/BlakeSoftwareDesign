import type { RequestHandler, Response } from "@sveltejs/kit";
import { supabase } from "../supabase";

// taken from https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/**
 * Probably a security vulnerability here, but whatever
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function post({ body, locals }): Promise<Response> {
  if (!body?.emails?.length || locals?.role !== 'admin') return {
    status: 403,
    headers: {}
  };
  console.log(body?.roles)
  if (body?.roles !== 'admin' && body?.roles !== 'user' && body?.roles !== 'teacher') return {
    status: 403,
    headers: {}
  }
  const emailsAdded = [];
  for(const email of body.emails) {
    if (!re.test(String(email).toLowerCase())) continue; 
    await supabase.auth.api.inviteUserByEmail(email);
    await (await supabase.from('users').update({
      'user_role': body.roles
    }).eq('email',email));
    emailsAdded.push(email);
  }
  return {
    status: 200,
    headers: {},
    body: JSON.stringify({
      workingEmails: emailsAdded
    })
  }
}