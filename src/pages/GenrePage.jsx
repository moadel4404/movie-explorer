import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

function Genre() {
  const { id } = useParams();
  const location = useLocation();
  const genreName = location.state?.name;
  const apiKey = import.meta.env.VITE_API_KEY;
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  
  function readMorePage() {
    setPage(page + 1);
  }

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${id}&language=en-US&page=${page}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results)
        setMovies([...movies, ...data.results]);
        console.log("Movies :", data.results);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, [page]);


  return (
    <>
      <h2 className="text-center pb-10 align-middle pt-10 text-white font-bold text-3xl">{genreName} Movies</h2>
      <div className="px-12 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] place-items-center gap-12 p-6 bg-gray-900 mb-10">
        {movies && movies?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>

      <div className="mt-12 flex justify-center mb-5">
        <button
          onClick={readMorePage}
          className="rounded-full bg-red-500 px-8 py-3 font-bold text-white transition-transform hover:scale-105 cursor-pointer"
        >
          Load More
        </button>
      </div>
    </>
  );
}

export default Genre;
