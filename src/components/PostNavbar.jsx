import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillCode } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import styles from '../styles';
import { navLinks } from '../constants';


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav>
      <div className={`w-full fixed z-[100] ${styles.transition500} bg-white`}>
        <div className={`${styles.containerWidth} flex py-4 justify-between`}>
          <Link to='/' className={`${styles.transition500} text-2xl sm:text-3xl flex items-center gap-2 text-darkGray hover:text-primaryBlue`}>
            <AiFillCode />
            <p className='font-extrabold'>Codingly</p>
          </Link>
          <ul className={`md:${styles.flexCenter} hidden md:flex`}>
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`flex items-center`}>
                <a href={`#${nav.id}`} className={`${index === navLinks.length - 1 ? 'pl-6' : 'px-6 border-r'} text-darkGray hover:text-primaryBlue border-darkGray ${styles.transition500} font-poppins text-lg font-medium`}>{nav.name}</a>
              </li> 
            ))}
          </ul>
          <div className='md:hidden'>
            <div className='text-white text-2xl items-center flex md:hidden h-full'>
              <FiMenu onClick={() => setToggle((prev) => !prev)} />
            </div>
            <div className={`${toggle ? 'block' : 'hidden'} md:hidden`}>
              <ul className='scale-up-top flex flex-col items-center justify-center py-4 absolute right-0 left-0 top-[4rem] bg-darkGray'>
                {navLinks.map((nav) => (
                  <li key={nav.id} className='text-white py-2' onClick={() => setToggle(false)}>
                    <a href={`#${nav.id}`}>{nav.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;