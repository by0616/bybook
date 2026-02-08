import React, { useEffect, useMemo, useState } from 'react';
import PhotoCard from '../modules/PhotoCard';
import './Gallery.css';

const anastasiia = 'https://cdn.jsdelivr.net/gh/by0616/bybook@main/src/assets/images/anastasiia-buchinskaia-GLbsWvBQk_8-unsplash.jpg';
const dan = 'https://cdn.jsdelivr.net/gh/by0616/bybook@main/src/assets/images/dan-begel-rTMMGtX482w-unsplash.jpg';
const declan = 'https://cdn.jsdelivr.net/gh/by0616/bybook@main/src/assets/images/declan-sun-IeudDVfzH0o-unsplash.jpg';
const dmitry = 'https://cdn.jsdelivr.net/gh/by0616/bybook@main/src/assets/images/dmitry-spravko-A0-tT29jOfQ-unsplash.jpg';
const jason = 'https://cdn.jsdelivr.net/gh/by0616/bybook@main/src/assets/images/jason-leung-fV2G5KGNDg4-unsplash.jpg';
const javier = 'https://cdn.jsdelivr.net/gh/by0616/bybook@main/src/assets/images/javier-garcia-chavez-b1kNxnBrA6s-unsplash.jpg';
const maeva = 'https://cdn.jsdelivr.net/gh/by0616/bybook@main/src/assets/images/maeva-vigier-Ji3yQIhI4bg-unsplash.jpg';
const sebastian = 'https://cdn.jsdelivr.net/gh/by0616/bybook@main/src/assets/images/sebastian-schuster-yNKpCpQWwuc-unsplash.jpg';
const takashiOne = 'https://cdn.jsdelivr.net/gh/by0616/bybook@main/src/assets/images/takashi-s-EZ6ZSOf7PxA-unsplash.jpg';
const takashiTwo = 'https://cdn.jsdelivr.net/gh/by0616/bybook@main/src/assets/images/takashi-s-ob8G_qq1rkE-unsplash.jpg';
const willianOne = 'https://cdn.jsdelivr.net/gh/by0616/bybook@main/src/assets/images/willian-justen-de-vasconcellos-GHc2wTs_bVQ-unsplash.jpg';
const willianTwo = 'https://cdn.jsdelivr.net/gh/by0616/bybook@main/src/assets/images/willian-justen-de-vasconcellos-UlTixDLwlT0-unsplash.jpg';
const willianThree = 'https://cdn.jsdelivr.net/gh/by0616/bybook@main/src/assets/images/willian-justen-de-vasconcellos-VoAPtbH7xyI-unsplash.jpg';
const willianFour = 'https://cdn.jsdelivr.net/gh/by0616/bybook@main/src/assets/images/willian-justen-de-vasconcellos-qG7XzihnwzU-unsplash.jpg';
const yousef = 'https://cdn.jsdelivr.net/gh/by0616/bybook@main/src/assets/images/yousef-espanioly-2RcNhJLmFhQ-unsplash.jpg';

const photos = [
  { id: 'coastline', src: anastasiia, caption: 'Coastline hush', credit: 'Anastasiia Buchinskaia', size: 'wide' },
  { id: 'ridge', src: dan, caption: 'Ridge lines', credit: 'Dan Begel', size: 'tall' },
  { id: 'dusk', src: declan, caption: 'Dusk bloom', credit: 'Declan Sun', size: 'big' },
  { id: 'surf', src: dmitry, caption: 'Surf break', credit: 'Dmitry Spravko', size: 'wide' },
  { id: 'market', src: jason, caption: 'Night market', credit: 'Jason Leung', size: 'standard' },
  { id: 'palms', src: javier, caption: 'Palm light', credit: 'Javier Garcia Chavez', size: 'tall' },
  { id: 'quiet', src: maeva, caption: 'Quiet spaces', credit: 'Maeva Vigier', size: 'standard' },
  { id: 'field', src: sebastian, caption: 'Open field', credit: 'Sebastian Schuster', size: 'big' },
  { id: 'brume', src: takashiOne, caption: 'Brume', credit: 'Takashi S.', size: 'wide' },
  { id: 'lanterns', src: takashiTwo, caption: 'Lantern flow', credit: 'Takashi S.', size: 'standard' },
  { id: 'wave', src: willianOne, caption: 'Wave form', credit: 'Willian Justen', size: 'big' },
  { id: 'pattern', src: willianTwo, caption: 'Pattern drift', credit: 'Willian Justen', size: 'tall' },
  { id: 'glow', src: willianThree, caption: 'City glow', credit: 'Willian Justen', size: 'standard' },
  { id: 'altitude', src: willianFour, caption: 'Altitude', credit: 'Willian Justen', size: 'wide' },
  { id: 'desert', src: yousef, caption: 'Desert breath', credit: 'Yousef Espanioly', size: 'tall' },
];

const Gallery = () => {
  const [activePhoto, setActivePhoto] = useState(null);
  const artistCount = useMemo(() => new Set(photos.map((photo) => photo.credit)).size, []);

  const activeIndex = useMemo(() => {
    if (!activePhoto) return -1;
    return photos.findIndex((photo) => photo.id === activePhoto.id);
  }, [activePhoto]);

  const closeLightbox = () => setActivePhoto(null);

  useEffect(() => {
    if (!activePhoto) return undefined;

    const handleKey = (event) => {
      if (event.key === 'Escape') closeLightbox();
    };

    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [activePhoto]);

  return (
    <div className="gallery-shell">
      <div className="gallery-hero">
        <div>
          <h1 className="PageTitle">Gallery</h1>
          <p className="gallery-subtitle">
            Here are some pictures I like from Unsplash. Click to view and navigate with arrow keys or escape to exit.
          </p>
        </div>
        <div className="gallery-stats">
          <div>
            <span className="gallery-stat-value">{photos.length}</span>
            <span className="gallery-stat-label">Photos</span>
          </div>
          <div>
            <span className="gallery-stat-value">{artistCount}</span>
            <span className="gallery-stat-label">Artists</span>
          </div>
        </div>
      </div>

      <div className="gallery-grid">
        {photos.map((photo) => (
          <PhotoCard
            key={photo.id}
            src={photo.src}
            caption={photo.caption}
            credit={photo.credit}
            size={photo.size}
            onOpen={() => setActivePhoto(photo)}
          />
        ))}
      </div>

      {activePhoto ? (
        <div className="gallery-lightbox" role="dialog" aria-modal="true">
          <button
            className="gallery-lightbox__backdrop"
            type="button"
            aria-label="Close photo viewer"
            onClick={closeLightbox}
          />
          <div className="gallery-lightbox__panel">
            <div className="gallery-lightbox__toolbar">
              <div>
                <p className="gallery-lightbox__credit">{activePhoto.credit}</p>
              </div>
              <button
                className="gallery-lightbox__close"
                type="button"
                onClick={closeLightbox}
              >
                Close
              </button>
            </div>
            <div className="gallery-lightbox__canvas">
              <img src={activePhoto.src} alt={activePhoto.caption} />
            </div>
            {activeIndex >= 0 ? (
              <p className="gallery-lightbox__meta">
                {activeIndex + 1} / {photos.length}
              </p>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Gallery;
