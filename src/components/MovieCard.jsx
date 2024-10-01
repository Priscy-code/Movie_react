import React from 'react';

const MovieCard = ({ movie, onClick }) => {
  return (
    <div className="movie-card bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition cursor-pointer" onClick={onClick}>
      <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover"/>
      <div className="p-4">
        <h2 className="text-lg font-semibold">{movie.Title}</h2>
        <p className="text-sm text-gray-600">Released: {movie.Year}</p>
      </div>
    </div>
  );
};

export default MovieCard;