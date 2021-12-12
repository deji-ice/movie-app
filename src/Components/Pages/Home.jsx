import React, { useState }  from 'react'
import './Home.css';
import { moviesList } from '../dummyData';
import MoviesList from '../MovieList';
import AddMovie from '../AddMovie';
import NavBar from '../NavBar'

export default function Home() {
    const [movieList, setMovieList] = useState(moviesList);
    const [searchWord, setSearchWord] = useState('');
    const [ratingSearch, setRatingSearch] = useState(0);
    const addMovie = (newMovie) => setMovieList([...movieList, newMovie]);
    const handleSearch = (a) => setSearchWord(a.target.value);
    return (
      <div className='Home container'>
      <NavBar 
        handleSearch={handleSearch}
        setRatingSearch={setRatingSearch}
        ratingSearch={ratingSearch}/>
      <AddMovie handleAdd={addMovie} />
      <MoviesList
        moviesArray={
          searchWord
            ? movieList.filter((movie) =>movie.title.toLowerCase().includes(searchWord.toLowerCase())):
            ratingSearch > 1? movieList.filter((movie) => movie.rate >= ratingSearch): movieList
        }
      />
        </div>
    )
}
