const host = 'http://localhost:4000'
const headers = {
  'content-type': 'application/json'
}

function handleResponse(response) {
  if (response.ok) {
    return response.json();
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

export function put(path, id, data) {
  return fetch(`${host}/api/${path}/${id}`, {
    method: 'put',
    body: JSON.stringify(data),
    headers,
  }).then(handleResponse)
}

export function del(path, id) {
  return fetch(`${host}/api/${path}/${id}`, {
    method: 'delete'
  }).then(handleResponse)
}
