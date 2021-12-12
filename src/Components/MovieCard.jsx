import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardImg, CardBody, CardText } from 'reactstrap';
import "./Pages/Home.css"
import Rate from './Rate';

const MovieCard = ({ movie: {title, posterUrl, description, rate } }) => {
  return (
    <div className=' cardM'>
        <CardTitle>
          <div className=' cardT row justify-content-center mt-1'>
            <h6>{title}</h6>
          </div>
        </CardTitle>
      <Card className='card1'>
        <CardImg className='cardImg'
          src={posterUrl}
          alt='Card image cap'
          style={{ cursor: 'pointer' }}>       
          </CardImg>
        <CardBody>
          <div className=' cardB row'>
            <CardText>{description}</CardText>
          </div>
          <div className='row'>
          </div>
        </CardBody>
      </Card>
      <Rate rating={rate} />
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;