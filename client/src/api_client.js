const host = 'http://localhost:4000'
const headers = {
  'content-type': 'application/json'
}

function handleResponse(response) {
  if (response.ok) {
    return response.json()
  }

  return response.text().then(text => {
    const error = JSON.parse(text)
    return Promise.reject({ ...error, status: response.status })
  })
}

export function get(path) {
  return fetch(`${host}/api/${path}`, {
    method: 'get',
  }).then(handleResponse)
}

export function post(path, data) {
  return fetch(`${host}/api/${path}`, {
    method: 'post',
    body: JSON.stringify(data),
    headers,
  }).then(handleResponse)
}

export function put(path, data) {
  return fetch(`${host}/api/${path}`, {
    method: 'put',
    body: JSON.stringify(data),
    headers,
  }).then(handleResponse)
}

export function del(path, data) {
  return fetch(`${host}/api/${path}`, {
    method: 'delete',
    body: {},
  }).then(handleResponse)
}
