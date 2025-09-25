import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


function MovieCardId({id}) {
  const [movie, setMovie] = useState({});
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  }, [id, apiKey]);

  const navigate = useNavigate();
  function navToMovie() {
    navigate(`/movie/${id}`);
  }

  return (
    <div className="group flex flex-col w-[100px] h-[160px] mb-10 cursor-pointer" onClick={navToMovie}>
      <div className="relative">
        <div className="w-[200px] h-[300px] overflow-hidden rounded-md bg-[#1F1F1F]">
          <img
            alt={movie?.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
          />
        </div>
        <div className="absolute top-2 right-2 flex items-center gap-1 rounded-full bg-black/70 px-2 py-1 text-xs font-bold text-yellow-400">
          <span className="material-symbols-outlined text-base">star</span>
          <span>{Number(movie?.vote_average)?.toFixed(1)}</span>
        </div>
      </div>
      <div className="mt-2">
        <h3 className="font-semibold text-sm truncate text-white">
          {movie?.title}
        </h3>
        <p className="text-xs text-gray-400">{movie?.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCardId;
