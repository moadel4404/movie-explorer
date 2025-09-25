import { useEffect, useState } from "react";
import GenreCard from "../components/GenreCard";

function Genres() {
  const [genres, setGenres] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setGenres(data.genres)
        console.log("Movie Details:", data.genres);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  }, []);

  return (
    <>
      <main className="flex flex-1 justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl">
          <div className="mb-8">
            <h2 className="text-4xl font-extrabold tracking-tight text-white">
              Explore by Genre
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 text-white">
            {genres && genres?.map((genre) => <GenreCard key={genre.id} genre={genre}></GenreCard>)}
          </div>
        </div>
      </main>
    </>
  );
}

export default Genres;
