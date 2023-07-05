import React from 'react';

import cardsBackground from '../assets/cardsBackground.jpg';
import jaceBackground from '../assets/jaceBackground.png';
import GoogleStoreBadge from '../assets/GoogleStoreBadge.png';
import AppleStoreBadge from '../assets/AppleStoreBadge.svg';

import { Button } from '@mui/material';

const Hero = () => {

  return (
    <section className="h-[90vh] grid grid-cols-1 md:grid-cols-8 relative" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${cardsBackground})`, backgroundSize: 'cover'  }}>
      <div className="md:col-span-5 flex items-center justify-center p-8 z-10">
        <div>
          <div className='bg-gradient-to-l from-sky-950 from-50% py-6 w-3/4 rounded-r-lg flex justify-center items-center mb-6'>
            <h1 className="text-7xl font-bold text-white" style={{ textShadow: "4px 4px 4px rgb(6 40 59)"}}>
              Market of Many Cards
            </h1>
          </div>
          <p className="font-semibold text-white ml-10 mb-4 text-xl">
            Do you like Magic The Gathering? Us too! Market of Many Cards is a mobile app available for Android and iOS where you can buy and sell your MTG cards with other enthusiasts! Or even auction them and look for the highest bid!
          </p>
          <div className="flex gap-2 items-center ml-10">
            <img src={AppleStoreBadge} className="h-12" />
            <img src={GoogleStoreBadge} className="h-16" />
          </div>
        </div>
      </div>
      <img src={jaceBackground} alt="Jace" className="absolute right-0 h-full z-0" />
    </section>
  );
};

export default Hero;
