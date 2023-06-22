import React from 'react';
import { useParams } from 'react-router-dom';

const SpecificPost = () => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id));

  return (
    <div className="specific-post-container">
      <div className="specific-post-box">
        <img src={post.image} alt={post.title} className="specific-post-image" />
        <div className="specific-post-title">{post.title}</div>
        <div className="specific-post-content">{post.content}</div>
      </div>
    </div>
  );
};

export default SpecificPost;
