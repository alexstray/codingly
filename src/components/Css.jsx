import React from 'react';
import styles from '../styles';
import { Link } from 'react-router-dom';
import { getStartedCss } from '../constants';

const Css = () => {
  return (
    <section className='bg-lightYellow lg:h-[55vh]' id='css'>
        <div className={`${styles.containerWidth} justify-between flex items-center flex-col md:flex-row h-full`}>
            <div className={`${styles.flexCenter} h-full w-full flex-col`}>
                <h2 className={`${styles.header} text-darkGray mb-4 mt-10 md: mt-0 md:mb-10`}>CSS</h2>
                <button className='text-black font-bold bg-successGreen w-[15rem] rounded-full py-3 hover:bg-primaryGreen mb-10 md:mb-0'>Get Started With CSS</button>
            </div>
            <div className={`${styles.flexCenter} w-full h-full`}>
                <div className='mb-20 md:mb-20 md:mt-10 lg:mt-0 lg:mb-0'>
                    <div className='flex flex-col'>
                        {getStartedCss.map((gsLink) => (
                            <Link to={`/${gsLink.id}`} key={gsLink.id} className='bg-gradient-to-r from-darkBlue to-primaryBlue mb-2 rounded-full text-center py-[5px] p-[1em] font-semibold text-white hover:scale-[1.1]'>{gsLink.title}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Css
