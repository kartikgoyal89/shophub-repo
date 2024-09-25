import React, { useContext, useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Card } from 'react-bootstrap';
import { ShopContext } from '../../Context/ShopContext';
import { Link } from 'react-router-dom';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
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

const ProductCarousel = ({ category }) => {
  const { all_products, addToCart } = useContext(ShopContext);
  const [newCollection, setNewCollection] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/newcollection')
      .then(response => response.json())
      .then(data => setNewCollection(data));
  }, []);

  if (category === "newarrivals") {
    return (
      <Carousel responsive={responsive} infinite={true} autoPlay={false} keyBoardControl={true}>
        {newCollection.map((item) => (
          <div key={item.id}>
            <Card className="m-2">
              <Link to={`/product/${item.id}`}>
                <Card.Img className="mr-2 h-72 w-32" variant="top" src={item.image} />
              </Link>
              <Card.Body>
                <Link style={{ textDecoration: 'none', color: 'black' }} to='/product'>
                  <Card.Title className="flex items-end h-16 font-mono">{item.name}</Card.Title>
                </Link>
                <div className='flex justify-start gap-2'>
                  <Card.Text className='font-semibold'>₹{item.new_price}</Card.Text>
                  <Card.Text className='text-gray-500 line-through'>₹{item.old_price}</Card.Text>
                </div>
                <div className='flex justify-start gap-4'>
                  <button className='bg-yellow-400 hover:bg-yellow-500  font-semibold py-1 px-3 rounded-md' onClick={() => addToCart(item.id)}>Buy Now</button>
                  <button className='bg-blue-500 hover:bg-blue-700 text-white font-medium px-2 rounded-md' onClick={() => addToCart(item.id)}>Add to Cart</button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Carousel>
    );
  }
  else if (category === "Best Deals") {
    return (
      <Carousel responsive={responsive} infinite={true} autoPlay={false} keyBoardControl={true}>
        {all_products.map((item) => {
          if (item.id % 2 == 0) {
            return (
              <div className='carousel_container' key={item.id}>
                <Card className="m-2">
                  <Link to={`/product/${item.id}`}>
                    <Card.Img className="mr-2 h-72 w-32" variant="top" src={item.image} />
                  </Link>
                  <Card.Body>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to='/product'>
                      <Card.Title className="flex items-end h-16 font-mono">{item.name}</Card.Title>
                    </Link>
                    <div className='flex justify-start gap-2'>
                      <Card.Text className='font-semibold'>₹{item.new_price}</Card.Text>
                      <Card.Text className='text-gray-500 line-through'>₹{item.old_price}</Card.Text>
                    </div>
                    <div className='flex justify-start gap-4'>
                      <button className='bg-yellow-400 hover:bg-yellow-500  font-semibold py-1 px-3 rounded-md' onClick={() => addToCart(item.id)}>Buy Now</button>
                      <button className='bg-blue-500 hover:bg-blue-700 text-white font-medium px-2 rounded-md' onClick={() => addToCart(item.id)}>Add to Cart</button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            );
          }
          return null;
        })}
      </Carousel>
    );
  }
  else if (category === "Best Sellers") {
    return (
      <Carousel responsive={responsive} infinite={true} autoPlay={false} keyBoardControl={true}>
        {all_products.map((item) => {
          if (item.id>=10 && item.id<=20) {
            return (
              <div className='carousel_container' key={item.id}>
                <Card className="m-2">
                  <Link to={`/product/${item.id}`}>
                    <Card.Img className="mr-2 h-72 w-32" variant="top" src={item.image} />
                  </Link>
                  <Card.Body>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to='/product'>
                      <Card.Title className="flex items-end h-16 font-mono">{item.name}</Card.Title>
                    </Link>
                    <div className='flex justify-start gap-2'>
                      <Card.Text className='font-semibold'>₹{item.new_price}</Card.Text>
                      <Card.Text className='text-gray-500 line-through'>₹{item.old_price}</Card.Text>
                    </div>
                    <div className='flex justify-start gap-4'>
                      <button className='bg-yellow-400 hover:bg-yellow-500  font-semibold py-1 px-3 rounded-md' onClick={() => addToCart(item.id)}>Buy Now</button>
                      <button className='bg-blue-500 hover:bg-blue-700 text-white font-medium px-2 rounded-md' onClick={() => addToCart(item.id)}>Add to Cart</button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            );
          }
          return null;
        })}
      </Carousel>
    );
  }
  else if(category==="Top Trending Mens"){
    return (
      <Carousel responsive={responsive} infinite={true} autoPlay={false} keyBoardControl={true}>
        {all_products.map((item) => {
          if (item.category==="men" && item.id%2==0) {
            return (
              <div className='carousel_container' key={item.id}>
                <Card className="m-2">
                  <Link to={`/product/${item.id}`}>
                    <Card.Img className="mr-2 h-72 w-32" variant="top" src={item.image} />
                  </Link>
                  <Card.Body>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to='/product'>
                      <Card.Title className="flex items-end h-16 font-mono">{item.name}</Card.Title>
                    </Link>
                    <div className='flex justify-start gap-2'>
                      <Card.Text className='font-semibold'>₹{item.new_price}</Card.Text>
                      <Card.Text className='text-gray-500 line-through'>₹{item.old_price}</Card.Text>
                    </div>
                    <div className='flex justify-start gap-4'>
                      <button className='bg-yellow-400 hover:bg-yellow-500  font-semibold py-1 px-3 rounded-md' onClick={() => addToCart(item.id)}>Buy Now</button>
                      <button className='bg-blue-500 hover:bg-blue-700 text-white font-medium px-2 rounded-md' onClick={() => addToCart(item.id)}>Add to Cart</button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            );
          }
          return null;
        })}
      </Carousel>
    );
  }
  else if(category==="Top Trending Womens"){
    return (
      <Carousel responsive={responsive} infinite={true} autoPlay={false} keyBoardControl={true}>
        {all_products.map((item) => {
          if (item.category==="women" && item.id%2==0) {
            return (
              <div className='carousel_container' key={item.id}>
                <Card className="m-2">
                  <Link to={`/product/${item.id}`}>
                    <Card.Img className="mr-2 h-72 w-32" variant="top" src={item.image} />
                  </Link>
                  <Card.Body>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to='/product'>
                      <Card.Title className="flex items-end h-16 font-mono">{item.name}</Card.Title>
                    </Link>
                    <div className='flex justify-start gap-2'>
                      <Card.Text className='font-semibold'>₹{item.new_price}</Card.Text>
                      <Card.Text className='text-gray-500 line-through'>₹{item.old_price}</Card.Text>
                    </div>
                    <div className='flex justify-start gap-4'>
                      <button className='bg-yellow-400 hover:bg-yellow-500  font-semibold py-1 px-3 rounded-md' onClick={() => addToCart(item.id)}>Buy Now</button>
                      <button className='bg-blue-500 hover:bg-blue-700 text-white font-medium px-2 rounded-md' onClick={() => addToCart(item.id)}>Add to Cart</button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            );
          }
          return null;
        })}
      </Carousel>
    );
  }
  else if(category==="Top Trending Kids"){
    return (
      <Carousel responsive={responsive} infinite={true} autoPlay={false} keyBoardControl={true}>
        {all_products.map((item) => {
          if (item.category==="kid") {
            return (
              <div className='carousel_container' key={item.id}>
                <Card className="m-2">
                  <Link to={`/product/${item.id}`}>
                    <Card.Img className="mr-2 h-72 w-32" variant="top" src={item.image} />
                  </Link>
                  <Card.Body>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to='/product'>
                      <Card.Title className="flex items-end h-16 font-mono">{item.name}</Card.Title>
                    </Link>
                    <div className='flex justify-start gap-2'>
                      <Card.Text className='font-semibold'>₹{item.new_price}</Card.Text>
                      <Card.Text className='text-gray-500 line-through'>₹{item.old_price}</Card.Text>
                    </div>
                    <div className='flex justify-start gap-4'>
                      <button className='bg-yellow-400 hover:bg-yellow-500  font-semibold py-1 px-3 rounded-md' onClick={() => addToCart(item.id)}>Buy Now</button>
                      <button className='bg-blue-500 hover:bg-blue-700 text-white font-medium px-2 rounded-md' onClick={() => addToCart(item.id)}>Add to Cart</button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            );
          }
          return null;
        })}
      </Carousel>
    );
  }
  else if(category==="newarrivals mens"){
    return (
      <Carousel responsive={responsive} infinite={true} autoPlay={false} keyBoardControl={true}>
        {all_products.map((item) => {
          if (item.category==="men" && item.id>=10) {
            return (
              <div className='carousel_container' key={item.id}>
                <Card className="m-2">
                  <Link to={`/product/${item.id}`}>
                    <Card.Img className="mr-2 h-72 w-32" variant="top" src={item.image} />
                  </Link>
                  <Card.Body>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to='/product'>
                      <Card.Title className="flex items-end h-16 font-mono">{item.name}</Card.Title>
                    </Link>
                    <div className='flex justify-start gap-2'>
                      <Card.Text className='font-semibold'>₹{item.new_price}</Card.Text>
                      <Card.Text className='text-gray-500 line-through'>₹{item.old_price}</Card.Text>
                    </div>
                    <div className='flex justify-start gap-4'>
                      <button className='bg-yellow-400 hover:bg-yellow-500  font-semibold py-1 px-3 rounded-md' onClick={() => addToCart(item.id)}>Buy Now</button>
                      <button className='bg-blue-500 hover:bg-blue-700 text-white font-medium px-2 rounded-md' onClick={() => addToCart(item.id)}>Add to Cart</button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            );
          }
          return null;
        })}
      </Carousel>
    );
  }
  else if(category==="newarrivals womens"){
    return (
      <Carousel responsive={responsive} infinite={true} autoPlay={false} keyBoardControl={true}>
        {all_products.map((item) => {
          if (item.category==="women" && item.id>=10) {
            return (
              <div className='carousel_container' key={item.id}>
                <Card className="m-2">
                  <Link to={`/product/${item.id}`}>
                    <Card.Img className="mr-2 h-72 w-32" variant="top" src={item.image} />
                  </Link>
                  <Card.Body>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to='/product'>
                      <Card.Title className="flex items-end h-16 font-mono">{item.name}</Card.Title>
                    </Link>
                    <div className='flex justify-start gap-2'>
                      <Card.Text className='font-semibold'>₹{item.new_price}</Card.Text>
                      <Card.Text className='text-gray-500 line-through'>₹{item.old_price}</Card.Text>
                    </div>
                    <div className='flex justify-start gap-4'>
                      <button className='bg-yellow-400 hover:bg-yellow-500  font-semibold py-1 px-3 rounded-md' onClick={() => addToCart(item.id)}>Buy Now</button>
                      <button className='bg-blue-500 hover:bg-blue-700 text-white font-medium px-2 rounded-md' onClick={() => addToCart(item.id)}>Add to Cart</button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            );
          }
          return null;
        })}
      </Carousel>
    );
  }
  else if(category==="newarrivals kids"){
    return (
      <Carousel responsive={responsive} infinite={true} autoPlay={false} keyBoardControl={true}>
        {all_products.map((item) => {
          if (item.category==="kid") {
            return (
              <div className='carousel_container' key={item.id}>
                <Card className="m-2">
                  <Link to={`/product/${item.id}`}>
                    <Card.Img className="mr-2 h-72 w-32" variant="top" src={item.image} />
                  </Link>
                  <Card.Body>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to='/product'>
                      <Card.Title className="flex items-end h-16 font-mono">{item.name}</Card.Title>
                    </Link>
                    <div className='flex justify-start gap-2'>
                      <Card.Text className='font-semibold'>₹{item.new_price}</Card.Text>
                      <Card.Text className='text-gray-500 line-through'>₹{item.old_price}</Card.Text>
                    </div>
                    <div className='flex justify-start gap-4'>
                      <button className='bg-yellow-400 hover:bg-yellow-500  font-semibold py-1 px-3 rounded-md' onClick={() => addToCart(item.id)}>Buy Now</button>
                      <button className='bg-blue-500 hover:bg-blue-700 text-white font-medium px-2 rounded-md' onClick={() => addToCart(item.id)}>Add to Cart</button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            );
          }
          return null;
        })}
      </Carousel>
    );
  }
  else{
    return (
      <Carousel responsive={responsive} infinite={true} autoPlay={false} keyBoardControl={true}>
        {all_products.map((item) => {
          if (category === item.category) {
            return (
              <div className='carousel_container' key={item.id}>
                <Card className="m-2">
                  <Link to={`/product/${item.id}`}>
                    <Card.Img className="mr-2 h-72 w-32" variant="top" src={item.image} />
                  </Link>
                  <Card.Body>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to='/product'>
                      <Card.Title className="flex items-end h-16 font-mono">{item.name}</Card.Title>
                    </Link>
                    <div className='flex justify-start gap-2'>
                      <Card.Text className='font-semibold'>₹{item.new_price}</Card.Text>
                      <Card.Text className='text-gray-500 line-through'>₹{item.old_price}</Card.Text>
                    </div>
                    <div className='flex justify-start gap-4'>
                      <button className='bg-yellow-400 hover:bg-yellow-500  font-semibold py-1 px-3 rounded-md' onClick={() => addToCart(item.id)}>Buy Now</button>
                      <button className='bg-blue-500 hover:bg-blue-700 text-white font-medium px-2 rounded-md' onClick={() => addToCart(item.id)}>Add to Cart</button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            );
          }
          return null;
        })}
      </Carousel>
    );
  }
};

export default ProductCarousel;