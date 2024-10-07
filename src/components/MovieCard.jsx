import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card bg-gray-800 text-white p-4 rounded-lg shadow-lg">
      <Link to={`/movie/${movie.imdbID}`}>
        <img
          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'}
          alt={movie.Title}
          className="movie-poster w-full h-72 object-cover rounded-md"
        />
        <div className="movie-info mt-4">
          <h3 className="movie-title text-xl font-bold">{movie.Title}</h3>
          <p className="movie-year text-sm text-gray-400">Release Date: {movie.Year}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
