import axios from "axios";

export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchRandomSong = async () => {
  const randomSongDetails = await api.get("/radio");
  return randomSongDetails.data;
};

export const getSongStream = (id) => `${API_BASE_URL}/songs/${id}`;

export default api;
