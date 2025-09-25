import { Link } from "react-router-dom";
import Logo from "./Logo";

function HomeHeader() {
  return (
    <div className="relative mb-10 bg-[#0f0f0f] text-white py-20 px-6 text-center">
      <h1 className="text-5xl font-extrabold mb-6">
        Welcome to <span className="text-[#ea2a33]">Movie Explorer</span> 
      </h1>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
        Discover the latest, most popular, and top-rated movies powered by
        <span className="font-semibold text-[#01B4E4]"> TMDB API</span>. Start
        exploring now and build your personal watchlist!
      </p>
      <div className="flex justify-center gap-4">
        <Link
          to="/popular"
          className="bg-[#ea2a33] hover:bg-[#c32229] text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
        >
          Explore Popular
        </Link>
        <Link
          to="/top-rated"
          className="bg-[#181818] hover:bg-[#2a2a2a] border border-[#ea2a33] text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
        >
          Top Rated
        </Link>
      </div>
    </div>
  );
}

export default HomeHeader;
