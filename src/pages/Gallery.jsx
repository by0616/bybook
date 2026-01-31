import React from 'react';
import PhotoCard from '../components/PhotoCard';
import './Gallery.css';

const photos = [
  { id: 1, src: 'https://picsum.photos/id/1015/600/400', caption: 'Waves' },
  { id: 2, src: 'https://picsum.photos/id/1016/600/400', caption: 'Mountains' },
  { id: 3, src: 'https://picsum.photos/id/1021/600/400', caption: 'Forest' },
  { id: 4, src: 'https://picsum.photos/id/1025/600/400', caption: 'Dog' },
  { id: 5, src: 'https://picsum.photos/id/1035/600/400', caption: 'City' },
];

export default function Gallery() {
  return (
    <div className="gallery-grid">
      {photos.map((p) => (
        <PhotoCard key={p.id} src={p.src} caption={p.caption} />
      ))}
    </div>
  );
}
