import React from "react";
import "./NavBar.css";

const NavBar = ({ onNavigate }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="/movie.jpg" 
          alt="Movie Icon"
          className="navbar-icon"
        />
        <h1 className="navbar-title">Movie Finder</h1>
      </div>
      <div className="navbar-links">
        <a href="#!" onClick={() => onNavigate("home")}>
          Home
        </a>
        <a href="#!" onClick={() => onNavigate("about")}>
          About
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
