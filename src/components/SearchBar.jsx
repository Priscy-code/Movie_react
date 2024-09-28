import { useState } from "react"
import axios from "axios";
import MovieDetails from "./MovieDetails";

const SearchBar = () => {
    const [search, setSearch] = useState('');
    const [userData, setUserdata] = useState([]);   
    const [error, setError] = useState("");
    const[selectedMovie, setSelectedMovie] = useState(null)
    // const handlesearch = (e) => {
    //     setSearch(e.target.value)
    // }

   const apikey = "14fbfc29"

   const handlesumbit = async() => {
    if(search.trim() === ""){
        setError("Please enter a movie title");
        return;
    } setError('')

    try{
        // use HTTPS instead of HTTP
        const response = await fetch(
            `http://www.omdbapi.com/?s=${encodeURIComponent(search)}&apikey=${apikey}`
             );
        const data =await response.json();
        if(data.Response === "True"){
            setUserdata(data.Search)
        }else{
            setError(data.Error);
            setUserdata([]);
        }
    } catch (error) {
        setError("An error occurred while fetching movie data")
    }
   };

   const handleMovieClick = async (imdbID) => {
    try{
        // const response = await axios.get(
        //     `http://www.omdbapi.com/?i=${imdbID}&apikey=${apikey}`
        // );
        const response = await fetch(
            `https://www.omdbapi.com/?i=${imdbID}&apikey=${apikey}`
        );
        const data = await response.json();
        if(data.Response === "True"){
            setSelectedMovie(data)
        }else{
            setError(data.Error)
        }
    } catch{error}{
        setError("An error occurred while fetching movie data")
    }
   }

    return(
        <div className="item-center  bg-green-500 rounded border m:p-10 sm:pb-8 lg:p-10 xl:pb-8 space-y-6 max-w-xl mx-auto">
            {/* <div className="bg-blue border-slate-100 rounded  sm:p-10 sm:pb-8 lg:p-10 xl:pb-8 space-y-6 max-w-xl mx-auto "> */}
            <h2 className="text-2xl font-bold mb-4 text-center">Movie Searching </h2>

            <div className="flex justify-center space-x-4">
                <input type="text"
                value= {search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for movie" />

                 <button onClick={handlesumbit} className="bg-blue-500 justify-center text-white px-4 py-2 rounded hover:bg-white-600 transition">Search</button>

            </div>
     
           
            { error && <p className="text-red-500 text-center">{error}</p>}
            {!selectedMovie && userData.map((movie) => (
                
                <div key = {movie.imdbID} 
                className="bg-pink border-slate-300 rounded shadow-md p-4 hover:shadow-lg transition cursor-pointer"
                 onClick={() =>handleMovieClick(movie.imdbID)}>

                    <img src={movie.Poster} 
                    alt={movie.Title} 
                    className="w-full h-64 object-cover rounded mb-4"/>

                    <h3 className="text-lg font-semibold">{movie.Title}</h3>
                    <p className="text-sm text-gray-600">Released: {movie.Year}</p>

                </div>
            ))}
            {selectedMovie && <MovieDetails movie={selectedMovie}/>}
       
        </div>
        
    )
 }
 export default SearchBar