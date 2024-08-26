import React from "react";
import "./MovieList.css";

const MovieList = ({ movies }) => {
  const openTrailer = (movieId) => {
    // Fetch video data for the movie
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=78749223c340a97fb261dfc3425e2557`
    )
      .then((response) => response.json())
      .then((data) => {
        const trailer = data.results.find((video) => video.type === "Trailer");
        if (trailer) {
          window.open(
            `https://www.youtube.com/watch?v=${trailer.key}`,
            "_blank"
          );
        } else {
          alert("Trailer not found");
        }
      })
      .catch((err) => alert("Error fetching trailer"));
  };

  return (
    <div className="movie-list">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <h2>{movie.title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.overview}</p>
            <div className="movie-card-buttons">
              <button onClick={() => openTrailer(movie.id)}>
                Watch Trailer
              </button>

              <button
                onClick={() =>
                  window.open(
                    `https://www.themoviedb.org/movie/${movie.id}`,
                    "_blank"
                  )
                }
              >
                Movie Link
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No movies found</p>
      )}
    </div>
  );
};

export default MovieList;
