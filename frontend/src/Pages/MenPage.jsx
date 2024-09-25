import React from 'react';
import CustomCarousel from '../Components/Homepage/Carousel';
import products from '../Components/Assets/products';
import ProductListing from '../Components/Homepage/ProductListing';
import downloadApp from '../Components/Assets/downloadApp_banner.jpg';

const MenPage = () => {
  const menProducts = products.mens;

  return (
    <>
    <CustomCarousel images={menProducts} />
    <div className="w-full m-0 p-0">
      <div className="bg-slate-800 min-h-screen">
            <ProductListing category="Mens"/>
        </div>
        <div className='p-10 w-full'>
              <img className='m-auto w-4/5 h-96 rounded-2xl object-cover'src={downloadApp}/>
        </div>
    </div>
    </>
  );
};

export default MenPage;