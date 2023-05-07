import axios from 'axios';

axios.defaults.baseURL = 'https://643d1d456afd66da6aed0244.mockapi.io';

export async function fetchUser(page = 1) {
  const response = await axios(`/tweets?page=${page}&limit=4`);
  return response.data;
}

export async function updateUser(id, followers) {
  const response = await axios.put(`/tweets/${id}`, followers);
  return response.data;
}

export async function fetchFilterUser() {
  const response = await axios('/tweets');
  return response.data;
}
