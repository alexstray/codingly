import React from 'react';
import { HomeHero, HomeNavbar, Html, Css } from '../components';

const Home = () => {
  return (
    <div>
      <div className='bg-darkGray'>
        <HomeNavbar />
        <HomeHero />
      </div>
      <div className='bg-lightYellow'>
        <Html />
      </div>
      <Css />
    </div>
  )
}

export default Home
