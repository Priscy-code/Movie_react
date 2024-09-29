import { useState } from "react"
import axios from "axios";
import MovieDetails from "./MovieDetails";
import {SearchIcon} from '@heroicons/react/solid'
import { useTranslation } from "react-i18next";


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
            `https://www.omdbapi.com/?s=${encodeURIComponent(search)}&apikey=${apikey}`
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

   const {t} = useTranslation()


    return(
        <div className="item-center  bg-customBlue rounded border m:p-10 sm:pb-8 lg:p-10 xl:pb-8 space-y-6 max-w-xl mx-auto">
            
               <h1 className="text-3xl font-bold text-black text-center ">{t('welcome') } to Priscy Movie Datbase </h1>

            <div className="flex justify-center space-x-4">
                <input type="text"
                value= {search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for movie" 
                className="w-34 px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"/>

                <span className="absolute inset-y-0 left-0 pl-3 flex item-center pointer-events-none"><SearchIcon className="h-5 w-5 text=gray-500"></SearchIcon></span>

                 <button onClick={handlesumbit} className="bg-black justify-center text-white px-4 py-2 rounded hover:bg-white-600 transition">Search</button>

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