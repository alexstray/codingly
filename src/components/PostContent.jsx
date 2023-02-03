import React from 'react';
import { useParams } from 'react-router-dom';
import styles from '../styles';
import { getStartedHtml } from '../constants';


const PostContent = () => {
    const { id } = useParams();
    const gsPost = getStartedHtml.find((gsPost) => gsPost.id === id);

  return (
    <div>
      <div className={styles.containerWidth}>
        {gsPost.p.map((p, index) => (
            <p key={index}>{p}</p>
        ))}
      </div>
    </div>
  )
}

export default PostContent
