import React, { useState } from 'react';

const ServiceCard = () => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="w-full max-w-xs h-80 perspective-1000 mt-5 mb-5">
      <div className={`relative w-full h-full text-center transition-transform duration-1000 preserve-3d ${flipped ? 'rotate-y-180' : ''}`}>
        <div className="absolute w-full h-full flex flex-col justify-center items-start text-left p-8 shadow-lg rounded-lg bg-white text-black backface-hidden gap-6">
          <h4 className="text-4xl font-semibold">
            <span class='block'>Développement</span>
            <span class='block'>Web</span>
          </h4>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ab.</p>
          <button onClick={handleFlip} className="flex items-center text-gray-600 hover:underline">
            <span>En savoir plus</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7-7 7"></path>
            </svg>
          </button>
        </div>
        <div className="absolute w-full h-full flex flex-col justify-center items-start text-left p-8 shadow-lg rounded-lg bg-white text-black backface-hidden rotate-y-180 gap-6">
          <p className="text-gray-600">Passionné par les technologies numériques, je me suis récemment lancé dans le monde du développement web. J'apprends rapidement et je suis toujours à la recherche de nouveaux défis pour élargir mes compétences et apporter des solutions innovantes en ligne.</p>
          <button onClick={handleFlip} className="flex items-center text-gray-600 hover:underline">
            <span>Retour</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
