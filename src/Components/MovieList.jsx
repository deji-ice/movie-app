import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

const MoviesList = ({ moviesArray }) => {
  return (
    <div className='row mt-5'>
      {moviesArray.map((movie, key) => (
        <MovieCard movie={movie} key={key} />
      ))}
    </div>
  );
};

MoviesList.propTypes = {
  moviesArray: PropTypes.array.isRequired,
};

export default MoviesList;