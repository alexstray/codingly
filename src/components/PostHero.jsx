import React from 'react';
import { useParams } from 'react-router-dom';
import styles from '../styles';
import { getStartedHtml } from '../constants';

const PostHero = () => {
    const { id } = useParams();
    const gsPost = getStartedHtml.find((gsPost) => gsPost.id === id);

  return (
    <div className='pt-20 pb-4 relative z-[0] bg-primaryBlue overflow-hidden'>
      <div className={`${styles.containerWidth} ${styles.flexCenter} h-full flex-col text-center py-36 relative z-[99]`}>
        <h2 className={`${styles.header} text-lightGray`}>{gsPost.title}</h2>
      </div>
    </div>
  )
}

export default PostHero
