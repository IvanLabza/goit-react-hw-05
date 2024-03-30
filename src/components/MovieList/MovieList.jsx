import React from "react";
import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ topMovie }) => {


  const location = useLocation();


  console.log(location);


  return (
    <div className={css.movieListContainer}>
      <ul className={css.movieList}>
        {topMovie.map((movie, index) => (
          <li key={movie.id} className={css.movieListItem}>
            <Link state={location} to={`/movies/${movie.id}`} className={css.movieLink}>
              {movie.original_title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
