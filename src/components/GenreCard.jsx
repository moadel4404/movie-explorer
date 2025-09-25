import { useNavigate } from "react-router-dom";

function GenreCard({ genre }) {
  const navigate = useNavigate();
  function navToGenre() {
    navigate(`/genre/${genre.id}`, { state: { name: genre.name } });
  }
  return (
    <>
      <div onClick={navToGenre} className="group relative flex flex-col items-center justify-center gap-3 rounded-md bg-[#181818] p-4 text-center transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#ea2a33] border-[#ea2a33] border-3 cursor-pointer">
        <h3 className="text-base font-bold">{genre.name}</h3>
      </div>
    </>
  );
}

export default GenreCard;
