import React from 'react';
import './Post.css';

const Post = ({ image, title, content, handleClick }) => {
  return (
    <div className="post" onClick={handleClick}>
      <div className="image-container">
        <img src={image} alt="Post Image" className="image" />
      </div>
      <div className="content-container">
        <h2 className="title">{title}</h2>
        <p className="content">{content}</p>
      </div>
    </div>
  );
};

export default Post;
