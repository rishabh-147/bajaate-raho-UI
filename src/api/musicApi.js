const BASE_URL = "http://localhost:8080/";

export const getRandomSong = () =>
    `${BASE_URL}v1/`;

export const getSong = (id) =>
    `${BASE_URL}v1/songs/${id}`;