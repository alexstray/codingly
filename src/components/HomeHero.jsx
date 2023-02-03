import React from 'react';
import styles from '../styles';
import { BiSearch } from 'react-icons/bi';

const Hero = () => {
  return (
    <section className='bg-gradient-to-r from-primaryBlue to-primaryPink h-screen relative z-[0]'>
      <div className={`${styles.containerWidth} ${styles.flexCenter} h-[90%] flex-col text-center`}>
        <h2 className={`${styles.header} text-lightGray mb-10`}>Find what you're looking for</h2>
        <p className='text-darkGray font-bold text-2xl md:text-3xl mb-14'>Search through thousands of coding tutorials</p>
        <div className={`${styles.flexCenter} flex-row bg-white py-2 px-4 rounded-full w-[75%]`}>
          <input type="text" className='outline-none w-full' />
          <BiSearch className='w-6 h-6 cursor-pointer' />
        </div>
      </div>
    </section>
  )
}

export default Hero
