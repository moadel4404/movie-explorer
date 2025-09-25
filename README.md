# 🎬 Movie Explorer

Movie Explorer is a React + Vite application that allows users to discover and explore movies.  
Users can browse popular, top-rated, and genre-specific movies, search for titles, and view detailed information about each movie.

---

## 🚀 Features
- 🔑 User Authentication (Login & Signup)
- 🎥 Browse movies by category (Popular, Top Rated, Genres)
- 🔎 Search for movies
- 📄 Movie details page with full information
- ⭐ Add movies to favorites & watchlist
- 👤 User profile page

---

## 📂 Project Structure
```
src/
 ├── assets/
 ├── auth-context/
 │   ├── AuthContext.jsx
 │   └── AuthProvider.jsx
 ├── components/
 ├── hooks/
 │   └── useAuth.jsx
 ├── pages/
 │   ├── About.jsx
 │   ├── GenrePage.jsx
 │   ├── Genres.jsx
 │   ├── Home.jsx
 │   ├── Login.jsx
 │   ├── MovieDetails.jsx
 │   ├── Popular.jsx
 │   ├── Profile.jsx
 │   ├── SearchResult.jsx
 │   ├── SignUp.jsx
 │   └── TopRated.jsx
 ├── App.jsx
 ├── main.jsx
 ├── routes.jsx
 ├── App.css
 └── index.css
```

---

## ⚙️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/movie-explorer.git
   cd movie-explorer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and configure it:
   ```bash
   cp .env.example .env
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

---

## 🌍 Environment Variables

The project uses environment variables to configure API keys and endpoints.  
All variables must be prefixed with `VITE_`.

Example `.env.example`:
```env
VITE_API_URL=https://api.themoviedb.org/3
VITE_API_KEY=your_api_key_here
```

---

## 🛠️ Tech Stack
- ⚡ [Vite](https://vitejs.dev/) – Build tool
- ⚛️ [React](https://react.dev/) – UI library
- 🎨 [CSS / Tailwind or custom styles] – Styling
- 🌐 [TMDB API](https://www.themoviedb.org/documentation/api) – Movie data

---

## 📜 License
This project is licensed under the MIT License.
