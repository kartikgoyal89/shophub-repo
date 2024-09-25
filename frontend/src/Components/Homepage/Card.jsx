import React from 'react';

const Card = ({ imageSrc}) => {
  return (
    <div className="flex flex-col items-center justify-center">
        <div className='flex items-center justify-around px-4 py-4'>
            <img 
            src={imageSrc} 
            alt='' 
            className="w-35 h-20 object-contain" />
        </div>
    </div>
  );
};

export default Card;