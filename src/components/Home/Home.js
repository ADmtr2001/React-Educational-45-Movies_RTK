import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsynShows,
} from "../../features/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();

  const movieText = "Harry";
  const showText = "Friends";

  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsynShows(showText));
  }, [dispatch]);

  return (
    <div>
      <div className='banner-img'></div>;
      <MovieListing />
    </div>
  );
};

export default Home;
