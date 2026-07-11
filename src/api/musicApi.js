import axios from "axios";

const BASE_URL = "http://192.168.1.39:8080/v1";

const api = axios.create({
  baseURL: BASE_URL,
});

export const fetchRandomSong = async () => {
  const randomSongDetails = await api.get("/radio");
  return randomSongDetails.data;
};

export const getSongStream = (id) => `${BASE_URL}/songs/${id}`;

export default api;
