import tokenService from "../services/tokenService";
const BASE_URL = "/api/topics/";


export function createMultiple(data) {
  return fetch(
    BASE_URL,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + tokenService.getToken(),
      },
      body: JSON.stringify(data)
    },
    {mode: 'cors'}
  ).then((res) => res.json())
}