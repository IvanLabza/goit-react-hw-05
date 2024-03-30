import axios from "axios";
import toast from "react-hot-toast";

const urlTrend =
  "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YmViZTFhM2YxY2E1NGZhZDQ3NjVkZjY1MTViYjZkOSIsInN1YiI6IjY1ZjllYjA2NWZmMzRlMDE3Y2I1ZGYyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jSnGLqpDWIxyAyUVH2wNIe4HEAFfVU1fSRskoxqgmik",
  },
  page: 1,
  language: "en-US",
};
export const apiTrend = async () => {
  const { data } = await axios.get(urlTrend, options);

  return data.results;
};

export const api = async (query) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}`;
  const { data } = await axios.get(url, options);

  return data.results;
};

export const fetchMovie = async (id) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    options
  );

  return response.data;
};

export const fetchMovieReviews = async (id) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
    options
  );
  return response.data;
};

export const fetchMovieCredits = async (id) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    options
  );
  return response.data.cast;
};

