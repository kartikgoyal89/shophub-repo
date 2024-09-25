import React, {useContext} from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCarousel from './ProductCarousel'; 
import { ShopContext } from '../../Context/ShopContext';
import RoundCarousel from './RoundCarousel'

const ProductListing = ({category}) => {
  const {all_product} = useContext(ShopContext);
  if(category==="Home")
  {
    return (
      <Container className="mt-0 mb-0 pt-8 pb-8">
        <h2 className="text-center mb-4 italic text-white">Deals of the Day</h2>
        <ProductCarousel category="Best Deals" />
        <br/>
        <hr className='bg-white h-1'/>
        <br/>
        <h2 className="text-center mt-15 mb-4 italic text-white">Brands You Love</h2>
        <RoundCarousel/>
        <hr className='bg-white h-1'/>
        <br/>
        <h2 className="text-center mt-15 mb-4 italic text-white">Best Sellers</h2>
        <ProductCarousel category="Best Sellers" />
        <br/>
        <hr className='bg-white h-1'/>
        <br/>
        <br/>
        <h2 className="text-center mt-15 mb-4 italic text-white">Latest Collection</h2>
        <ProductCarousel category="newarrivals" />
        <br/>
      </Container>
    );
  }
  else if(category==="Mens")
  {
    return (
      <Container className="mt-0 mb-0 pt-8 pb-8">
        <h2 className="text-center mb-4 italic text-white">Top Trending</h2>
        <ProductCarousel category="Top Trending Mens" />
        <br/>
        <hr className='bg-white h-1'/>
        <br/>
        <h2 className="text-center mt-15 mb-4 italic text-white">Explore Top Brands</h2>
        <RoundCarousel/>
        <hr className='bg-white h-1'/>
        <br/>
        <h2 className="text-center mt-15 mb-4 italic text-white">Latest Collection</h2>
        <ProductCarousel category="newarrivals mens" />
        <br/>
      </Container>
    );
  }
  else if(category==="Womens")
  {
    return (
      <Container className="mt-0 mb-0 pt-8 pb-8">
        <h2 className="text-center mb-4 italic text-white">Top Trending</h2>
        <ProductCarousel category="Top Trending Womens" />
        <br/>
        <hr className='bg-white h-1'/>
        <br/>
        <h2 className="text-center mt-15 mb-4 italic text-white">Explore Top Brands</h2>
        <RoundCarousel/>
        <hr className='bg-white h-1'/>
        <br/>
        <br/>
        <h2 className="text-center mt-15 mb-4 italic text-white">Latest Collection</h2>
        <ProductCarousel category="newarrivals womens" />
        <br/>
      </Container>
    );
  }
  else if(category==="new arrivals")
  {
    return (
      <Container className="mt-0 mb-0 pt-8 pb-8">
        <h2 className="text-center mb-4 italic text-white">Top Trending</h2>
        <ProductCarousel category="Best Deals" />
        <br/>
        <hr className='bg-white h-1'/>
        <br/>
        <h2 className="text-center mt-15 mb-4 italic text-white">Explore Top Brands</h2>
        <RoundCarousel/>
        <hr className='bg-white h-1'/>
        <br/>
        <br/>
        <h2 className="text-center mt-15 mb-4 italic text-white">Latest Collection</h2>
        <ProductCarousel category="newarrivals" />
        <br/>
      </Container>
    );
  }
  else if(category==="kids")
    {
      return (
        <Container className="mt-0 mb-0 pt-8 pb-8">
          <h2 className="text-center mb-4 italic text-white">Top Trending</h2>
          <ProductCarousel category="Top Trending Kids" />
          <br/>
          <hr className='bg-white h-1'/>
          <br/>
          <h2 className="text-center mt-15 mb-4 italic text-white">Explore Top Brands</h2>
          <RoundCarousel/>
          <hr className='bg-white h-1'/>
          <br/>
          <br/>
          <h2 className="text-center mt-15 mb-4 italic text-white">Latest Collection</h2>
          <ProductCarousel category="newarrivals kids" />
          <br/>
        </Container>
      );
    }
};

export default ProductListing;