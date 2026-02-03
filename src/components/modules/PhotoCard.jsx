import React from 'react';
import './PhotoCard.css';

const PhotoCard = ({ src, caption, credit, size = 'standard', onOpen }) => {
  const sizeClass = size ? `is-${size}` : '';

  return (
    <figure className={`photo-card ${sizeClass}`}>
      <button
        className="photo-card__button"
        type="button"
        onClick={onOpen}
        aria-label={`Open photo: ${caption}`}
      >
        <span className="photo-card__frame">
          <img src={src} alt={caption} loading="lazy" />
        </span>
        <span className="photo-card__overlay">
          {credit ? <span className="photo-card__credit">{credit}</span> : null}
        </span>
      </button>
    </figure>
  );
}

export default PhotoCard;
