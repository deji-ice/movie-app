import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import MovieCard from './MovieCard';
import { moviesList } from './dummyData';
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


MovieList.propTypes = {
  moviesArray: PropTypes.array.isRequired,
};

export default MovieList;