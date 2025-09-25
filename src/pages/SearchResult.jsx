import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function SearchResult() {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    if (query) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${encodeURIComponent(
          query
        )}`
      )
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results || []);
        })
        .catch((err) => console.error(err));
    }
  }, [query]);
  console.log(movies);

  return (
    <>
      <div className="px-6">
        <h2 className="pl-6 text-white font-bold text-3xl text-center">
          Search Result of "{query}"
        </h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] place-items-center gap-6 p-6 bg-gray-900 mb-10">
          {movies &&
            movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>

        <div className="mt-12 flex justify-center mb-5">
          <button className="rounded-full bg-red-500 px-8 py-3 font-bold text-white transition-transform hover:scale-105 cursor-pointer">
            Load More
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchResult;
