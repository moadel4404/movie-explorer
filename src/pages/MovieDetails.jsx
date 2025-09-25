import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ActorCard from "../components/ActorCard";
import useAuth from "../hooks/useAuth";

function MovieDetails() {
  const { id } = useParams();
  const apiKey = import.meta.env.VITE_API_KEY;
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
  const { isLoggedIn, addFavorite, addWatchlist } = useAuth();

  const navigate = useNavigate();
  function navToLogin() {
    navigate(`/login`);
  }

  //Movie details
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
  }, []);

  // Cast and Actors
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setCast(data.cast);
      })
      .catch((err) => console.error(err));
  }, []);
  cast.length = 6;

  function addToWL() {
    if (!isLoggedIn) {
      console.log("not logged");
      navToLogin()
    }
    else {
      addWatchlist(id);
    }
  }

  function addToFav() {
    if (!isLoggedIn) {
      navToLogin()
    }
    else {
      addFavorite(id);
    }
  }

  return (
    <>
      <div className="relative w-full">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url("${`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}")`,
          }}
        />

        {/* Content */}
        <div className="relative z-20 flex flex-col md:flex-row items-center md:items-start justify-center p-4 sm:p-8 md:p-16 max-w-6xl mx-auto gap-6 md:gap-8">
          {/* Poster */}
          <div className="flex-shrink-0">
            <img
              alt={movie.title}
              className="w-40 sm:w-48 md:w-60 rounded-md shadow-2xl"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-4 md:gap-6 text-white text-center md:text-left flex-1">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
                {movie.title}
              </h1>
              <p className="text-gray-200 text-sm sm:text-base md:text-lg mt-2">
                {movie?.release_date?.split("-")[0]} •{" "}
                {movie?.genres?.map((g) => g.name).join(", ")}
              </p>
            </div>

            <div className="flex justify-center md:justify-start items-center gap-2 sm:gap-4">
              <span className="material-symbols-outlined text-yellow-400">
                star
              </span>
              <span className="font-bold text-lg sm:text-xl">
                {Number(movie.vote_average).toFixed(1)}
              </span>
              <span className="text-gray-200 text-sm sm:text-base">/ 10</span>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-2">Overview</h2>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                {movie.overview}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <button onClick={addToWL} className="flex items-center justify-center rounded-md h-10 sm:h-12 px-4 sm:px-6 bg-[#ea2a33] hover:bg-red-700 transition-colors text-white text-sm sm:text-base font-bold gap-2 cursor-pointer">
                <span className="material-symbols-outlined"> add </span>
                <span className="truncate">Add to Watchlist</span>
              </button>
              <button onClick={addToFav} className="flex items-center justify-center rounded-md h-10 sm:h-12 px-4 sm:px-6 bg-gray-800 hover:bg-gray-700 transition-colors text-white text-sm sm:text-base font-bold gap-2 cursor-pointer">
                <span className="material-symbols-outlined"> favorite </span>
                <span className="truncate">Add to Favorites</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6">
        <div className="px-10 md:px-16 py-12">
          <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-6">
            Cast &amp; Crew
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {cast && cast.map((actor) => <ActorCard key={actor.id} act={actor} />)}
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetails;
