import axios from "axios";

export const STREAM_API_BASE_URL = process.env.REACT_APP_API_BASE_URL + "/v1";

const api = axios.create({
  baseURL: STREAM_API_BASE_URL,
});

export const fetchRandomSong = async () => {
  const randomSongDetails = await api.get("/radio");
  return randomSongDetails.data;
};

export const getSongStream = (id) => `${STREAM_API_BASE_URL}/songs/${id}`;

export default api;
