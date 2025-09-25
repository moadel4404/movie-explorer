import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import useAuth from "../hooks/useAuth";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/search?query=${encodeURIComponent(query)}`);
    setQuery("");
  };

  return (
    <>
      <nav className="bg-[#181818] text-white px-4 py-5 flex items-center justify-between fixed w-full z-50">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to={"/"}>
            <Logo />
          </Link>
          <Link to={"/"}>
            <span className="font-bold text-3xl select-none hidden md:block cursor-pointer">
              Movie <span className="text-[#ea2a33]">Explorer</span>
            </span>
          </Link>
        </div>

        {/* Search */}
        <form className="relative" onSubmit={handleSearch}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            className="bg-[#19202D] text-sm rounded-full pl-10 pr-4 py-1 outline-none placeholder:text-gray-400 w-40 sm:w-60"
          />
          <button type="submit">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </form>

        {/* Links */}
        <div className="hidden sm:flex items-center space-x-6">
          <ul className="flex space-x-6 text-sm font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-red-600 font-semibold" : "hover:text-red-600"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/popular"
                className={({ isActive }) =>
                  isActive ? "text-red-600 font-semibold" : "hover:text-red-600"
                }
              >
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/top-rated"
                className={({ isActive }) =>
                  isActive ? "text-red-600 font-semibold" : "hover:text-red-600"
                }
              >
                Top Rated
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/genres"
                className={({ isActive }) =>
                  isActive ? "text-red-600 font-semibold" : "hover:text-red-600"
                }
              >
                Genres
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-red-600 font-semibold" : "hover:text-red-600"
                }
              >
                About
              </NavLink>
            </li>
          </ul>

          {/* Auth Buttons */}
          {isLoggedIn ? (
            <div className="flex items-center space-x-3">
              <Link
                to="/profile"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded text-sm font-semibold transition"
              >
                Profile
              </Link>
              <button
                onClick={() => logout()}
                className="bg-gray-700 hover:bg-gray-600 px-4 py-1 rounded text-sm font-semibold transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded text-sm font-semibold transition"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="sm:hidden relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-black border border-gray-700 rounded shadow-lg z-50">
              <ul className="flex flex-col text-sm font-medium">
                <li className="px-4 py-2 hover:bg-gray-800">
                  <Link to="/" onClick={() => setMenuOpen(false)}>
                    Home
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-800">
                  <Link to="/popular" onClick={() => setMenuOpen(false)}>
                    Popular
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-800">
                  <Link to="/top-rated" onClick={() => setMenuOpen(false)}>
                    Top Rated
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-800">
                  <Link to="/about" onClick={() => setMenuOpen(false)}>
                    About
                  </Link>
                </li>

                <li className="border-t border-gray-700 mt-1 px-4 py-2 hover:bg-gray-800">
                  {isLoggedIn ? (
                    <>
                      <Link
                        to="/profile"
                        onClick={() => setMenuOpen(false)}
                        className="block text-blue-500 font-semibold mb-2"
                      >
                        Profile
                      </Link>
                      <button
                        onClick={() => {
                          logout();
                          setMenuOpen(false);
                        }}
                        className="text-red-600 font-semibold w-full text-left"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <Link
                      to="/login"
                      onClick={() => setMenuOpen(false)}
                      className="text-red-600 font-semibold"
                    >
                      Login
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
      <hr className="text-white" />
    </>
  );
}
