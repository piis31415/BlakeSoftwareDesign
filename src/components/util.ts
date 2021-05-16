/**
 * Makes a post request to the server (FOR BROWSER)
 * @param {string} path a valid url path; ex. token-login
 * @param {object} data data in the form of a js object
 * @returns server-sent json
 */
export async function post(path: string, data: object) {
  // console.log(JSON.stringify(data));
  return (await (await fetch(`http://localhost:3000/${path}`, {
    method: 'POST',
    mode: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })).json());
}

import { SupabaseClient } from "@supabase/supabase-js";

const SUPABASE_URL = 'https://vqqjrxggizczqfdfthzl.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMDA1MTM2MCwiZXhwIjoxOTM1NjI3MzYwfQ.HdsMVmnUd2fmsUccGCxEEIcC57GqGnBXVLvJXBpSA-k';

// this is bad and stolen from a github discussion post
// const CookieStorage = (() => {
//   const getAll = () => document.cookie.split(';');

//   const setItem = (name, val, exdays = 365) => {
//     const d = new Date();
//     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
//     document.cookie = `${name}=${val};expires=${d.toUTCString()};path=/`;
//   };

//   const removeItem = (name) => setItem(name, '', -30);

//   const clear = () => getAll().forEach(c => removeItem(c.split('=')?.[0] ?? ''));

//   const getItem = (name) => {
//     const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
//     return match?.[2] ?? '';
//   }

//   return {
//     get length() {
//       return getAll().length;
//     },
//     key: (key) => getAll()?.[key] ?? null,
//     clear,
//     getItem,
//     setItem,
//     removeItem,
//   }
// })();

// Not a great solution, but until gotrue-js http-header cookies
// becomes a reality, I guess this is the only option....
// taken from: https://github.com/supabase/supabase/discussions/316
const ModifiedStorage = () => {
  const setItem = (key, val, exdays = 365) => {
    // console.log(key, val);

    // sets localstorage normally
    globalThis.localStorage.setItem(key, val);
    
    // Parses json value sent to be stored
    val = JSON.parse(val);
    
    // checks if a session exists
    if (key == 'supabase.auth.token' && val.currentSession) {
      const d = new Date();
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
      // modified for SameSite = Strict
      // more info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
      // sets a a cookie with value     token: {access_token}
      document.cookie = `token=${val.currentSession.access_token};expires=${d.toUTCString()};path=/;SameSite=Strict`;
    }
    // console.log(document.cookie);
  };
  // wrappers around the rest because I legitimately
  // can't figure out any other alternative

  const getItem = key => {
    return globalThis.localStorage.getItem(key);
  }
  const removeItem = key => {
    return globalThis.localStorage.removeItem(key);
  }
  const clear = () => {
    return globalThis.localStorage.clear();
  }
  const key = (index) => {
    return globalThis.localStorage.key(index);
  }
  const length = () => globalThis.localStorage.length;
  return {
    setItem,
    getItem,
    removeItem,
    clear,
    key,
    length // This is now set to the original length, which is bad, but idt it's used by supabase?
  };
};

const supabase = new SupabaseClient(
  SUPABASE_URL,
  SUPABASE_KEY,
  {
    localStorage: ModifiedStorage()
  }
);

const googleAuth = async () => {
  const { user, error, session } = await supabase.auth.signIn({
    provider: 'google'
  });
  // console.log(user, error, session);
}

export {
  googleAuth
}