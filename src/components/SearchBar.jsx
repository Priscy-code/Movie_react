import { useState } from "react"
import axios from "axios";

const SearchBar = () => {
    const [search, setSearch] = useState('');
    const [userData, setUserdata] = useState([]);   
    const [error, setError] = useState("");

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
        const response = await axios.get(
            `http://www.omdbapi.com/?s=${search}&apikey=${apikey}`
        );
        if(response.data.Response === "True"){
            setUserdata(response.data.Search)
        }else{
            setError(response.data.Error);
            setUserdata([]);
        }
    } catch (error) {
        setError("An error occurred while fetching movie data")
    }
   }

    return(
        <div>
            <h2>Movie Searching </h2>
            <input type="text"
            value= {search}
            onChange={(e) => setSearch(e.target.value)} />

            <button onClick={handlesumbit}>Search</button>
            { error && <p>{error}</p>}
            {userData.map((movie) => (
                <div key = {movie.imdbID}>
                    <img src={movie.Poster} alt={movie.Title} />
                    <h3>{movie.Title}</h3>
                    <p>Released: {movie.Year}</p>

                </div>
            ))}
        </div>
    )
 }
 export default SearchBar