import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';

function App() {
    const [movies, setMovies] = useState([]);

    const fetchMovies = async (query) => {
        const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=78749223c340a97fb261dfc3425e2557&query=${query}`
        ); 
        const data = await response.json();
        setMovies(data.results);
    };

    return (
        <div>
            <h1>Movie Finder</h1>
            <SearchBar onSearch={fetchMovies} />
            <MovieList movies={movies} />
        </div>
    );
}

export default App;
