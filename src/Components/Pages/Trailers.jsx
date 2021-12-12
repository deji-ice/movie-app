import React from 'react';
import './Trailers.css';
import { moviesList } from '../dummyData';
import { useParams } from 'react-router';
import { Link, Navigate } from "react-router-dom";


const Trailers = () => {
  const { id } = useParams();
  const vues = moviesList.filter((movie) => {
    return movie.id === Number(id);
  });
 console.log(vues)
  return ( 
  <div className='bk'> 
      {id && (
      <div>
        <h1 className="heading">{vues[0].title}</h1>
        <iframe
          className='Frame'
            width="700"
            height="415"
            src= {vues[0].trailerUrl}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <Link className='linkT' to= "/">
          
        <p className="descrip">{vues[0].description}</p>
        </Link>
      </div>
    
      )}
  </div>
  );
      }

export default Trailers;