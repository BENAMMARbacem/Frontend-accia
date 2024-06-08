import React from 'react';
import { Carousel } from "@material-tailwind/react";

const HomeCarousel = () => {
  // Mettez les chemins d'accès des images dans la variable items
  const items = [
    "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
  ];

  return (
    <div className=''>
    
    <Carousel className="rounded-xl h-72 w-full" autoplay={true} autoplayDelay={3000}>      {/* Utilisez map pour afficher toutes les images */}
      {items.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt={`image ${index + 1}`}
          className="object-fill h-full w-full" 
        />
      ))}
    </Carousel>
    </div>
  );
}

export default HomeCarousel;
