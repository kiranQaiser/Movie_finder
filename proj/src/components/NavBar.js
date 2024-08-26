import React from "react";
import "./NavBar.css";

const NavBar = ({ onNavigate, fetchMoviesByGenre }) => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <img src="/movie.jpg" alt="Movie Icon" className="navbar-icon" />
        <h1 className="navbar-title">FilmHub</h1>
        <div className="navbar-links">
          <a href="#" onClick={() => onNavigate("home")}>
            Home
          </a>
          <a href="#" onClick={() => onNavigate("about")}>
            About
          </a>
        </div>
      </div>
      <div className="genre-buttons">
        <button onClick={() => fetchMoviesByGenre(27)}>Horror</button>
        <button onClick={() => fetchMoviesByGenre(53)}>Thriller</button>
        <button onClick={() => fetchMoviesByGenre(35)}>Comedy</button>
        <button onClick={() => fetchMoviesByGenre(99)}>Documentary</button>
        <button onClick={() => fetchMoviesByGenre(16)}>Animated</button>
      </div>
    </nav>
  );
};

export default NavBar;
