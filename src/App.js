import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { moviesList } from './Components/dummyData';
import MoviesList from './Components/MovieList';
import AddMovie from './Components/AddMovie';
import NavBar from './Components/NavBar';


function App() {
  const [movieList, setMovieList] = useState(moviesList);
  const [searchWord, setSearchWord] = useState('');
  const [ratingSearch, setRatingSearch] = useState(0);
  const addMovie = (newMovie) => setMovieList([...movieList, newMovie]);
  const handleSearch = (a) => setSearchWord(a.target.value);

  return (
    <div className='App container'>
      <NavBar 
        handleSearch={handleSearch}
        setRatingSearch={setRatingSearch}
        ratingSearch={ratingSearch}/>
      {/* <Filter
        
      />  */}
      <AddMovie handleAdd={addMovie} />
      <MoviesList
        moviesArray={
          searchWord
            ? movieList.filter((movie) =>
                movie.title.toLowerCase().includes(searchWord.toLowerCase())
              )
            : ratingSearch > 1
            ? movieList.filter((movie) => movie.rate >= ratingSearch)
            : movieList
        }
      />
    </div>
  );
}

export default App;