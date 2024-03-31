import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../service/service";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { results } = await fetchMovieReviews(movieId);
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
          <li key={i.author}>
            <h2>{i.author}</h2>
            <p>{i.content}</p>
          </li>
        ))
      ) : (
        <div>Not a Reviews</div>
      )}
    </ul>
  );
};

export default MovieReviews;
