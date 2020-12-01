import tokenService from '../services/tokenService';
const BASE_URL = '/api/contents/';

export function createContent(data, topicId) {
  return fetch(
    `${BASE_URL}/${topicId}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + tokenService.getToken(),
      },
      body: JSON.stringify(data),
    },
    { mode: 'cors' }
  ).then((res) => res.json());
}

export function getAllContent() {
  return fetch(
    BASE_URL,
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + tokenService.getToken(),
      },
    },
    { mode: 'cors' }
  ).then((res) => res.json());
}

export function updateContent(data, contentId) {
  console.log('hit updateContent route')
  return fetch(
    `${BASE_URL}${contentId}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + tokenService.getToken(),
      },
      body: JSON.stringify(data),
    },
    {mode: 'cors'}
  ).then((res) => res.json())
}

// May need to remove due to being int he wrong place.
// export function getTopicContents(topicId) {
//   return fetch(
//     `${BASE_URL}/${topicId}`,
//     {
//       method: 'GET',
//       headers: {
//         Authorization: 'Bearer ' + tokenService.getToken(),
//       },
//     },
//     { mode: 'cors' }
//   ).then((res) => res.json());
// }
