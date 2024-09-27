const MovieDetails = ({movie}) => {
    return(
        <div>
            <h2>{movie.Title} ({movie.Year})</h2>
            <img src={movie.Poster} alt={movie.Title} />
            <p><strong>Genre:</strong>{movie.Genre}</p>
            <p><strong>Plot:</strong>{movie.Plot}</p>
            <p><strong>Cast:</strong>{movie.Actors}</p>
            <p><strong>Director:</strong>{movie.Director}</p>
            <p><strong>Rating:</strong></p>

           {movie.Ratings && Array.isArray(movie.Ratings) && movie.Ratings.length > 0 ?(
            <ul>
                {movie.Ratings.map((rating, index) => (
                    <li key={index}>
                        {rating.Source}: {rating.Value}
                    </li>
                ))}
            </ul>
           ): (
            <p>No rating available</p>
           )}
        </div>

    )
      
}

export default MovieDetails