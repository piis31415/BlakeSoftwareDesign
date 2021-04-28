/**
 * Makes a post request to the server
 * @param {string} path a valid url path; ex. token-login
 * @param {object} data data in the form of a js object
 * @returns server-sent json
 */
async function post(path, data) {
  console.log(JSON.stringify(data));
  return await (await fetch(`/${path}`, {
    method: 'POST',
    mode: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })).json()
}

export {
  post
}