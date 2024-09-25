import React from 'react';
import CustomCarousel from './Carousel'
import ProductListing from './ProductListing'
import products from '../Assets/products';
import NewsLetter from '../Newsletter/Newsletter';
import downloadApp from '../Assets/downloadApp_banner.jpg'
const HomePage = () => {
    const banner = products.Homebanner;
    return (
        <div>
            <CustomCarousel images={banner}/>
            <div className="bg-slate-900 min-h-screen !mt-0 mb-0">
                <ProductListing category="Home"/>
                <NewsLetter/>
            </div>
            <div className='p-10 w-full'>
                <img className='m-auto w-4/5 h-96  rounded-2xl object-cover'src={downloadApp}/>
            </div>

        </div>
    )
};

export default HomePage;