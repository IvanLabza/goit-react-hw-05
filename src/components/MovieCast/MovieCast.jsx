import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits } from "../../service/service";

const MovieCast = () => {
  const { movieId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await fetchMovieCredits(movieId);
        setItem(results);
      } catch {
        toast.error("This didn't work.", { duration: 1500 });
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <ul>
      {item !== null && item.length !== 0 ? (
        item.map((i) => (
          <li key={i.name}>
            <h2>Casts : {i.name}</h2>
            <p>Roll : {i.character}</p>
          </li>
        ))
      ) : (
        <div>Not a Casts</div>
      )}
    </ul>
  );
};

export default MovieCast;
