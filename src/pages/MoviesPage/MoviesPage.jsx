import React, { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import SearchForm from "../../components/SearchForm/SearchForm";
import { api } from "../../service/service";
import Loader from "../../components/Loader/Loader";
import toast from "react-hot-toast";
import { useLocation, useSearchParams } from "react-router-dom";

const Movies = ({}) => {
  const [searchQuery, setSearchTerm] = useSearchParams();
  const [movies, setMovies] = useState(null);
  const [loader, setLoader] = useState(false);

  const searchTerm = searchQuery.get("query");

  useEffect(() => {
    if (!searchTerm) return;
    const fetchData = async () => {
      try {
        setLoader(true);
        const data = await api(searchTerm);
        if (data.length == 0) {
          toast.error("Not a Found !!!", { duration: 1500 });
        } else {
          setMovies(data);
        }
      } catch {
        toast.error("This didn't work.", { duration: 1500 });
      } finally {
        setLoader(false);
      }
    };
    fetchData();
  }, [searchTerm]);

  const onSubmit = (e) => {
    setMovies(null);
    setSearchTerm({ query: e });
  };

  return (
    <div className="wrapper">
      <div className="container">
        <SearchForm onSubmit={onSubmit} />
        {loader && <Loader />}
        {movies !== null && Array.isArray(movies) && (
          <MovieList movies={movies} />
        )}
      </div>
    </div>
  );
};

export default Movies;
