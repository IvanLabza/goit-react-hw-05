import React, { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { apiTrend } from "../../service/service";
import toast, { Toaster } from "react-hot-toast";
import { useLocation } from "react-router-dom";

const HomePage = ({ setItem }) => {
  const [topMovie, setTopMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiTrend();
        setTopMovie(data);
      } catch {
        toast.error("This didn't work.", { duration: 1500 });
      }
    };
    fetchData();
  }, []);

  const head = {
    textAlight: "center",
  };


  return (
    <div className="wrapper">
      <h1 style={head}>Home Page</h1>
      {Array.isArray(topMovie) && (
        <MovieList topMovie={topMovie} />
      )}
      <Toaster gutter={1} position="top-right" reverseOrder={false} />
    </div>
  );
};

export default HomePage;
