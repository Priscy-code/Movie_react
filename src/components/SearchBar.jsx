import { useState } from "react"
// import axios from "axios";
import {SearchIcon} from '@heroicons/react/solid'
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";


const SearchBar = () => {
    const [search, setSearch] = useState('');
    const [userData, setUserdata] = useState([]);   
    const [error, setError] = useState("");
    const navigate = useNavigate();
    // const[selectedMovie, setSelectedMovie] = useState(null)
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

//    const handleMovieClick = async (imdbID) => {
//     try{
//         // const response = await axios.get(
//         //     `http://www.omdbapi.com/?i=${imdbID}&apikey=${apikey}`
//         // );
//         const response = await fetch(
//             `https://www.omdbapi.com/?i=${imdbID}&apikey=${apikey}`
//         );
//         const data = await response.json();
//         if(data.Response === "True"){
//             setSelectedMovie(data)
//         }else{
//             setError(data.Error)
//         }
//     } catch(error){
//         setError("An error occurred while fetching movie data")
//     }
//    }
const handleMovieClick = (imdbID) => {
    navigate(`/movie/${imdbID}`)
}

   const {t} = useTranslation()


    return(
        <div className="min-h-screen p-5 bg-gray-100 ">
            <div className="container mx-auto p-5">
                <div className="item-center bg-customBlue rounded border p-4 sm:p-6 md:p-8 lg:p-10 xl:pb-8 space-y-6 max-w-xl mx-auto">
                     <h1 className="text-2xl sm:text-3xl font-bold text-black text-center ">{t('welcome') } to Priscy Movie Database </h1>

            <div className="flex flex-col sm:flex-row justify-center sm:space-x-4 space-x-4 sm:space-y-0">
                <div className="relative w-full sm:w-64 md:w-80">
                    <input type="text"
                     value= {search}
                     onChange={(e) => setSearch(e.target.value)}
                     placeholder="Search for movie" 
                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"/>

                <span className="absolute inset-y-0 right-6 pl-3 flex item-center pointer-events-none m-2">
                    <SearchIcon className="h-5 w-5 text-gray-500"></SearchIcon></span>

                </div>
                 <button onClick={handlesumbit} 
                 className="bg-black text-white px-4 py-2 rounded hover:bg-white-600 transition">Search</button>
                 
                 
            </div>

            <div className="flex flex-col sm:flex-row justify-center sm:space-x-4 space-x-4 sm:space-y-0 bg-cutomBlue">
                 { error && <p className="text-red-500 text-center">{error}</p>}
                 {!error && userData.map((movie) => (
                    <div key = {movie.imdbID} 
                      className="flex flex-col space-x-4 border border-slate-300 rounded shadow-md p-4 hover:shadow-lg transition cursor-pointer"
                      onClick={() =>handleMovieClick(movie.imdbID)}>

                        <img src={movie.Poster} 
                        alt={movie.Title} 
                        className="w-32 h-32 object-cover rounded "/>

                    <h3 className="text-lg font-semibold">{movie.Title}</h3>
                    <p className="text-sm text-gray-600">Released: {movie.Year}</p>

                </div>
            ))}
            </div>
     
     
           
            
       
                </div>
            </div>
        </div>
        
    )
 }
 export default SearchBar