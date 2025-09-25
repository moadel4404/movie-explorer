import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import HeroPitch from "../components/HeroPitch";
import { Link } from "react-router-dom";
import HomeHeader from "../components/HomeHeader";
import Logo from "../components/Logo";

function Home() {
  const apiKey = import.meta.env.VITE_API_KEY;

  const [topRated, setTopRated] = useState([]);
  const [popular, setPopular] = useState([]);
  // Popular Movies
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        setPopular(data.results);
      });
  }, []);

  // Top Rated Movies
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        setTopRated(data.results);
      });
  }, []);

  popular.length = 5;
  topRated.length = 10;

  return (
    <>
      <HomeHeader></HomeHeader>
      <br />
      <div className="px-6">
        <Link to={"popular"}>
          <h2 className=" text-white font-bold text-xl mb-10 hover:text-red-400 text-center">
            Popular Movies
          </h2>
        </Link>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] place-items-center gap-12 p-6 bg-gray-900 mb-40">
          {popular && popular.map((movie) => <MovieCard movie={movie} />)}
        </div>

        <Link to={"top-rated"}>
          <h2 className=" text-white font-bold text-xl mb-10 hover:text-red-400 text-center">
            Top Rated Movies
          </h2>
        </Link>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] place-items-center gap-12 p-6 bg-gray-900 mb-20 ">
          {topRated && topRated.map((movie) => <MovieCard movie={movie} />)}
        </div>
      </div>
    </>
  );
}

export default Home;
