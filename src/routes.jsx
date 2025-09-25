import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import SearchResult from "./pages/SearchResult";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MovieDetails from "./pages/MovieDetails";
import ScrollToTop from "./components/ScrollToTop";
import Genres from "./pages/Genres";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import Genre from "./pages/GenrePage";


const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <App />
      </>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "popular", element: <Popular /> },
      { path: "top-rated", element: <TopRated /> },
      { path: "search", element: <SearchResult /> },
      { path: "about", element: <About /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      { path: "movie/:id", element: <MovieDetails /> },
      { path: "genre/:id", element: <Genre /> },
      { path: "genres", element: <Genres /> },
      { path: "profile", element: <ProtectedRoute> <Profile /> </ProtectedRoute>   },
    ],
  },
]);

export default routes;
