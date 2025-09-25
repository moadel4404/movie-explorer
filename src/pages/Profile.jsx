import { useState } from "react";
import useAuth from "../hooks/useAuth";
import MovieCardId from "../components/MovieCardId";

function Profile() {
  const [activeTab, setActiveTab] = useState("watchlist");
  const { favorites, watchlist } = useAuth();
  console.log(favorites, watchlist);
  return (
    <main className="flex-1">
      <div className="container mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Profile */}
        <div className="flex flex-col items-center gap-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Sophia Bennett
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              sophia.bennett@email.com
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Joined 2021
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-8 border-b border-gray-200/80 dark:border-gray-800/80">
          <nav
            aria-label="Tabs"
            className="-mb-px flex justify-center space-x-8"
          >
            <button
              onClick={() => setActiveTab("watchlist")}
              className={`whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium ${
                activeTab === "watchlist"
                  ? "border-[#ea2a33] text-[#ea2a33]"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-300"
              }`}
            >
              Watchlist
            </button>

            <button
              onClick={() => setActiveTab("favorites")}
              className={`whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium ${
                activeTab === "favorites"
                  ? "border-[#ea2a33] text-[#ea2a33]"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-300"
              }`}
            >
              Favorites
            </button>

            <button
              onClick={() => setActiveTab("settings")}
              className={`whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium ${
                activeTab === "settings"
                  ? "border-[#ea2a33] text-[#ea2a33]"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-300"
              }`}
            >
              Settings
            </button>
          </nav>
        </div>

        <section className="mt-8 text-center">
          {activeTab === "watchlist" && (
            <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] place-items-center gap-12 p-6 bg-gray-900 mb-10">
              {watchlist &&
                watchlist.map((id) => (
                  <MovieCardId key={id} id={id} />
                ))}
            </div>
          )}
          {activeTab === "favorites" && (
            <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] place-items-center gap-12 p-6 bg-gray-900 mb-10">
              {favorites &&
                favorites.map((id) => (
                  <MovieCardId key={id} id={id} />
                ))}
            </div>
          )}
          {activeTab === "settings" && <p></p>}
        </section>
      </div>
    </main>
  );
}

export default Profile;
