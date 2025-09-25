import { useState, useEffect } from "react";
import AuthContext from "./AuthContext";

function AuthContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const savedAuth = localStorage.getItem("isLoggedIn");
    if (savedAuth === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  function login(email, password) {
    if (email === "test@example.com" && password === "12345678") {
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
      return true;
    }
    return false;
  }

  function logout() {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  }

  const [favorites, setFavorites] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const savedAuth = localStorage.getItem("isLoggedIn");
    if (savedAuth === "true") setIsLoggedIn(true);

    const savedFav = JSON.parse(localStorage.getItem("favorites") || "[]");
    const savedWatchlist = JSON.parse(
      localStorage.getItem("watchlist") || "[]"
    );
    setFavorites(savedFav);
    setWatchlist(savedWatchlist);
  }, []);

  // Add to favorites
const addFavorite = (id) => {
  setFavorites((prev) => {
    if (prev.includes(id)) return prev; // لو موجود متضيفوش تاني
    const updated = [...prev, id];
    localStorage.setItem("favorites", JSON.stringify(updated));
    return updated;
  });
};

// Add to watchlist
const addWatchlist = (id) => {
  setWatchlist((prev) => {
    if (prev.includes(id)) return prev;
    const updated = [...prev, id];
    localStorage.setItem("watchlist", JSON.stringify(updated));
    return updated;
  });
};

// Remove from favorites
const removeFavorite = (id) => {
  setFavorites((prev) => {
    const updated = prev.filter((mId) => mId !== id);
    localStorage.setItem("favorites", JSON.stringify(updated));
    return updated;
  });
};

// Remove from watchlist
const removeWatchlist = (id) => {
  setWatchlist((prev) => {
    const updated = prev.filter((mId) => mId !== id);
    localStorage.setItem("watchlist", JSON.stringify(updated));
    return updated;
  });
};

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
        favorites,
        addFavorite,
        removeFavorite,
        watchlist,
        addWatchlist,
        removeWatchlist,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
