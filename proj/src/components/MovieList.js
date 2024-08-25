import React from 'react';

const MovieList = ({ movies }) => {
    return (
        <div>
            {movies.length > 0 ? (
                movies.map(movie => (
                    <div key={movie.id}>
                        <h2>{movie.title}</h2>
                        <img 
                            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} 
                            alt={movie.title}
                        />
                        <p>{movie.overview}</p>
                    </div>
                ))
            ) : (
                <p>No movies found</p>
            )}
        </div>
    );
};

export default MovieList;
