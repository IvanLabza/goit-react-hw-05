import axios from "axios";

const url =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

const options = {
  headers: {
    accept: "application/json",
    Authorization:
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YmViZTFhM2YxY2E1NGZhZDQ3NjVkZjY1MTViYjZkOSIsInN1YiI6IjY1ZjllYjA2NWZmMzRlMDE3Y2I1ZGYyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jSnGLqpDWIxyAyUVH2wNIe4HEAFfVU1fSRskoxqgmik",
  },
};

export default async function api() {
  const data = await axios.get(url, options);
  console.log(data);
  return data;
}
