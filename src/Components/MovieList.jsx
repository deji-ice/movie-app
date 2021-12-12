import React from 'react';
import { Link } from "react-router-dom";
import MovieCard from './MovieCard';
import './Pages/Home.css';

function MovieList({movie, moviesArray}) {
  return (
    <div className='MovieL  mt-5'>
    {moviesArray.map((movie, key) => (
      <Link className='link' to={`Trailer/${movie.id}`}>
     <MovieCard movie={movie} key={key} />
     </Link>
   ))} 
 </div>
  )
}

export default MovieList;