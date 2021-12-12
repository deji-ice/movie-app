import React from 'react';
import { Input } from 'reactstrap';

import Rate from './Rate';

function Filter ({ handleSearch, setRatingSearch, ratingSearch }){
  return (
    <div className='row m-2'>
      <div className='col-md-8'>
        <Input
          type='text'
          placeholder='Search...'
          onChange={handleSearch}
        />
      </div>
      <div className='col-md-4'>
        <Rate
          className='star-rating'
          starIndex={setRatingSearch}
          rating={ratingSearch}
        />
      </div>
    </div>
  );
};


export default Filter;