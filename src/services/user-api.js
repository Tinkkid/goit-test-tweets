import axios from "axios";

axios.defaults.baseURL = "https://643d1d456afd66da6aed0244.mockapi.io";

export async function fetchUser() {
  const response = await axios.get("/tweets");
  return response.data;
}
