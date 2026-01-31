import React from 'react';
import './PhotoCard.css';

export default function PhotoCard({ src, caption }) {
  return (
    <figure className="photo-card">
      <img src={src} alt={caption} loading="lazy" />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
