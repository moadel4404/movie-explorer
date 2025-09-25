import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiReactrouter, SiThemoviedatabase } from "react-icons/si";
import { RiFolderSharedFill } from "react-icons/ri";
import { MdStorage } from "react-icons/md";

function About() {
  return (
    <div className="min-h-screen bg-[#101828] text-white px-6 py-12 flex items-center justify-center">
      <div className="max-w-5xl space-y-16">
        {/* Header */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold">
            About <span className="text-[#ea2a33]">Movie Explorer</span> 🌟
          </h1>
          <p className="text-gray-300 text-lg">
            Movie Explorer is my{" "}
            <span className="font-semibold">Final Project</span>
            built with <span className="font-semibold">React.js</span> during my
            training at
            <span className="text-[#ea2a33] font-bold"> ITI</span>.
          </p>
        </section>

        {/* Features */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-[#ea2a33]">
            Features 🚀
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4 text-lg">
            <li className="bg-[#181818] rounded-lg p-4">
              🔍 Search movies quickly and easily.
            </li>
            <li className="bg-[#181818] rounded-lg p-4">
              🎭 Filter movies by genres.
            </li>
            <li className="bg-[#181818] rounded-lg p-4">
              ⭐ View popular and top-rated films.
            </li>
            <li className="bg-[#181818] rounded-lg p-4">
              🎬 Detailed movie pages, cast & ratings.
            </li>
            <li className="bg-[#181818] rounded-lg p-4">
              📌 Save movies to a personal watchlist.
            </li>
            <li className="bg-[#181818] rounded-lg p-4">
              📱 Responsive and user-friendly design.
            </li>
          </ul>
        </section>

        {/* Goal */}
        <section className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-[#ea2a33]">Project Goal 🎯</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            The goal of <span className="font-semibold">Movie Explorer</span> is
            to provide a simple, user-friendly platform for movie lovers to
            discover, explore, and organize their favorite films. By integrating
            with <span className="font-semibold">TMDB’s API</span>, the app
            delivers real-time movie data in a clean and modern interface.
          </p>
        </section>

        {/* Tech Stack */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-[#ea2a33]">
            Tech Stack 🛠️
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center text-lg">
            <div className="flex flex-col items-center gap-2 bg-[#181818] rounded-lg p-4">
              <FaReact size={40} color="#61DBFB" />
              <span>React.js</span>
            </div>
            <div className="flex flex-col items-center gap-2 bg-[#181818] rounded-lg p-4">
              <SiTailwindcss size={40} color="#38BDF8" />
              <span>Tailwind CSS</span>
            </div>
            <div className="flex flex-col items-center gap-2 bg-[#181818] rounded-lg p-4">
              <SiReactrouter size={40} color="#CA4245" />
              <span>React Router</span>
            </div>
            <div className="flex flex-col items-center gap-2 bg-[#181818] rounded-lg p-4">
              <SiThemoviedatabase size={40} color="#01B4E4" />
              <span>TMDB API</span>
            </div>
            <div className="flex flex-col items-center gap-2 bg-[#181818] rounded-lg p-4">
              <RiFolderSharedFill size={40} color="#FACC15" />
              <span>Context API</span>
            </div>
            <div className="flex flex-col items-center gap-2 bg-[#181818] rounded-lg p-4">
              <MdStorage size={40} color="#A855F7" />
              <span>LocalStorage</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
