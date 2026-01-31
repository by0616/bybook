import React from 'react';
import './PhotoCard.css';

const PhotoCard = ({ src, caption }) => {
  return (
    <figure className="photo-card">
      <img src={src} alt={caption} loading="lazy" />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default PhotoCard;
