import React from 'react';
import { Carousel } from "@material-tailwind/react";

const HomeCarousel = () => {

  const items = [
    "images/banner_accia.jpg",
    "images/banner_accia.jpg",
    "images/banner_accia.jpg"
  ];

  return (
    <div className=''>
    
      <Carousel className="h-full w-full 	" autoplay={true} autoplayDelay={3000}>      {/* Utilisez map pour afficher toutes les images */}
      {items.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt={`image ${index + 1}`}
          className="object-scale-down h-full w-full  " 
        />
      ))}
    </Carousel>
    </div>
  );
}

export default HomeCarousel;
