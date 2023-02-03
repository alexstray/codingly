import React from 'react';
import { useParams } from 'react-router-dom';
import { getStartedHtml } from '../constants';
import { PostNavbar, PostHero, PostContent } from '../components';
import styles from '../styles';

const Post = () => {
    const { id } = useParams();
    const gsPost = getStartedHtml.find((gsPost) => gsPost.id === id);

  return (
    <div>
      <PostNavbar />
      <PostHero />
      
      <div className={`${styles.containerWidth} my-10`}>
        <p className='flex gap-4'><a href='/' className='text-primaryBlue font-semibold hover:text-darkBlue'>Home</a> - <p>{gsPost.title}</p></p>
      </div>

      <PostContent />
    </div>
  )
}

export default Post;
