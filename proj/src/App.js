import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState("home");

  // Function to fetch movies based on search query
  const fetchMovies = async (query) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=78749223c340a97fb261dfc3425e2557&query=${query}`
      );
      const data = await response.json();
      if (data.results.length === 0) {
        fetchPopularMovies();
      } else {
        setMovies(data.results);
      }
    } catch (err) {
      setError("Failed to fetch movies");
    }
    setIsLoading(false);
  };

  // Function to fetch popular movies
  const fetchPopularMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=78749223c340a97fb261dfc3425e2557`
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (err) {
      setError("Failed to fetch popular movies");
    }
  };

  useEffect(() => {
    fetchPopularMovies(); // Fetch popular movies on initial load
  }, []);

  // Handle navigation
  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <NavBar onNavigate={handleNavigation} />
      <div className="container">
        {currentPage === "home" && (
          <>
            <h1>Movie Finder</h1>
            <SearchBar onSearch={fetchMovies} />
            {isLoading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>{error}</p>
            ) : (
              <div className="movie-list-container">
                <MovieList movies={movies} />
              </div>
            )}
          </>
        )}
        {currentPage === "about" && <About />}
        {currentPage === "home" && <Home />}
      </div>
    </div>
  );
}

export default App;
