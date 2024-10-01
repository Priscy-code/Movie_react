// import { useTranslation } from "react-i18next";



// const MovieDetails = ({movie}) => {
//     const {t} = useTranslation();

//     // if(!movie){
//     //     return <div>loading...</div>
//     // }
//     //   if (!movie) {
//     //     return <p>{t('Movie details not available')}</p>;
//     // }

//     return(
//         <div className="p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
//             <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-200">{movie.Title} <span className="text-xl">({movie.Year})</span></h2>

//             <div className="flex justify-center mb-6">
//                 <img src={movie.Poster !== "N/A" ? movie.Poster : "/path/to/fallback-image.jpg"} 
//                 alt={movie.Title} className="rounded-lg shadow-lg max-w-xs" />

//             </div>

//             <div className="text-lg text-gray-800 dark:text-gray-300">
//                 <p><strong>{t('genre')}:</strong>{movie.Genre}</p>
//                 <p><strong>{t('plot')}:</strong>{movie.Plot}</p>
//                 <p><strong>{t('cast')}:</strong>{movie.Actors}</p>
//                 <p><strong>{t('director')}:</strong>{movie.Director}</p>
//             </div>

//             <div className="mt-6">
//                  <p className="text-xl font-seminold text-gray-900 dark:text-gray-200"><strong>{t('rating')}:</strong></p>
//             </div>
            

//            {movie.Ratings && Array.isArray(movie.Ratings) && movie.Ratings.length > 0 ?(
//             <ul className="mt-3 list-disc list-inside space-y-2 text-gray-700 dark:text-gray-400">
//                 {movie.Ratings.map((rating, index) => (
//                     <li key={index}>
//                         {rating.Source}: {rating.Value}
//                     </li>
//                 ))}
//             </ul>
//            ): (
//             <p className="text-gray-700 dark:text-gray-400">{t('no rating available')}</p>
//            )}
//         </div>

//     )
      
// }

// export default MovieDetails