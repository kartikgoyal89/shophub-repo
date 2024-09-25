import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from './Card';
import products from '../Assets/products';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


const CarouselComponent = (category) => {
    const product = products.brands;
  return (
    <Carousel responsive={responsive} infinite={true} autoPlay={false} keyBoardControl={true}>
      {product.map((item, index) => (
        <Card key={index} imageSrc={item.image}/>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;