/**
 * Makes a post request to the server
 * @param {string} path a valid url path; ex. token-login
 * @param {object} data data in the form of a js object
 * @returns server-sent json
 */
export async function post(path: string, data: object) {
  console.log(JSON.stringify(data));
  return (await (await fetch(`http://localhost:3000/${path}`, {
    method: 'POST',
    mode: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })).json());
}