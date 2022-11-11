import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pelis from '../../data.json';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="img-carrusel d-block w-100"
          src={pelis[8].Poster}
          alt={pelis[8].Title}
        />
        <Carousel.Caption>
          <h3 className='slide-text'>{pelis[8].Title}</h3>
          <p className='slide-text'>{pelis[8].Plot}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-carrusel d-block w-100"
          src={pelis[1].Poster}
          alt={pelis[1].Title}
        />

        <Carousel.Caption>
          <h3 className='slide-text'>{pelis[1].Title}</h3>
          <p className='slide-text'>{pelis[1].Plot}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-carrusel d-block w-100"
          src={pelis[10].Poster}
          alt={pelis[10].Title}
        />

        <Carousel.Caption>
          <h3 className='slide-text'>{pelis[10].Title}</h3>
          <p className='slide-text'>
            {pelis[10].Plot}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;