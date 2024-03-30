import React, { useEffect, useState } from "react";
import GoBackLink from "../../components/GoBackLink/GoBackLink";
import css from "./MovieDetailsPage.module.css";
import { Link, Route, Routes, useParams } from "react-router-dom";
import { fetchMovie } from "../../service/service";
import toast from "react-hot-toast";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";

const MovieDetailsPage = ({}) => {
  const { movieId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMovie(movieId);
        setItem(data);
      } catch {
        toast.error("This didn't work.", { duration: 1500 });
      }
    };
    fetchData();
  }, []);

  return (
    <div className="wrapper">
      {item !== null && (
        <div className={css.container}>
          <GoBackLink />
          <div className={css.wrap}>
            <img
              width={350}
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.original_title}
            />
            <div className={css.wraps}>
              <h1>{item.original_title}</h1>
              <p>{item.overview}</p>
            </div>
          </div>
          <div className={css.feedback}>
            <Link className={css.link} to="cast">
              cast
            </Link>

            <Link className={css.link} to="reviews">
              reviews
            </Link>

            <Routes>
              <Route path="reviews" element={<MovieReviews />} />
              <Route path="cast" element={<MovieCast />} />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
