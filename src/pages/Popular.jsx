import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

function Popular() {
  const [popular, setPopular] = useState([]);
  const [page, setPage] = useState(1);
  const apiKey = import.meta.env.VITE_API_KEY;

  function readMorePage() {
    setPage(page + 1);
  }

  // Popular Movies
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPopular([...popular, ...data.results]);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  }, [page]);

  return (
    <>
      <div className="px-6">
        <h2 className="pl-6 text-white font-bold text-3xl">Popular Movies</h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] place-items-center gap-12 p-6 bg-gray-900 mb-10">
          {popular &&
            popular?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>

        <div className="mt-12 flex justify-center mb-5">
          <button
            onClick={readMorePage}
            className="rounded-full bg-red-500 px-8 py-3 font-bold text-white transition-transform hover:scale-105 cursor-pointer"
          >
            Load More
          </button>
        </div>
      </div>
    </>
  );
}

export default Popular;
