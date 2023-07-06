import React from 'react';

import cardsBackground from '../assets/cardsBackground.jpg';
import jaceBackground from '../assets/jaceBackground.png';
import GoogleStoreBadge from '../assets/GoogleStoreBadge.png';
import AppleStoreBadge from '../assets/AppleStoreBadge.svg';

import { Button } from '@mui/material';

const Hero = () => {

  return (
    <section className="h-[90vh] grid grid-cols-1 md:grid-cols-8 relative overflow-hidden" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${cardsBackground})`, backgroundSize: 'cover'  }}>
      <div className="md:col-span-5 flex items-center justify-center p-8 z-10">
        <div className="ml-10">
          <div className='bg-gradient-to-l from-sky-950 from-50% py-6 pr-6 w-3/4 rounded-r-xl flex items-center mb-6'>
            <h1 className="md:text-7xl text-5xl font-bold text-white" style={{ textShadow: "4px 4px 4px rgb(6 40 59)"}}>
              Market of Many Cards
            </h1>
          </div>
          <p className="font-semibold text-white mb-4 text-xl">
            Do you like Magic The Gathering? Us too! Market of Many Cards is a mobile app available for Android and iOS where you can buy and sell your MTG cards with other enthusiasts! Or even auction them and look for the highest bid!
          </p>
          <div className="flex gap-2 items-center">
            <a href='https://apps.apple.com/us/app/subway-surfers/id512939461' className='hover:scale-105 transition-all duration-500'>
              <img src={AppleStoreBadge} className="h-12" />
            </a>
            <a href='https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf&hl=es_UY&gl=US' className='hover:scale-105 transition-all duration-500'>
              <img src={GoogleStoreBadge} className="h-16" />
            </a>
          </div>
        </div>
      </div>
      <img src={jaceBackground} alt="Jace" className="absolute right-0 h-full z-0 object-contain hidden md:block" />
    </section>
  );
};

export default Hero;
