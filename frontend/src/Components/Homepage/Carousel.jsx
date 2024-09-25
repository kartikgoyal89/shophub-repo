import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'

const CustomCarousel = ({ images }) => {
  return (
    <div>
    <Carousel fade>
      {images.map((product, index) => (
        <Carousel.Item key={index} interval={2000}>
          <img className="carousel_image d-block " src={product.image} alt={product.name} />
        </Carousel.Item>
      ))}
    </Carousel>
    <p className='para mb-0'>ShopHub Sale is here! Get upto 60% upto + Extra Rs.1500/- Off on order value of Rs.5999/-. <b>Use Code: Sale1500</b></p>
    </div>
  );
};

export default CustomCarousel;