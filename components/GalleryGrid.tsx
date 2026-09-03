'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { galleryItems } from '@/data/site';

export function GalleryGrid() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (event.key === 'Escape') setSelectedIndex(null);
      if (event.key === 'ArrowRight') setSelectedIndex((value) => value === null ? 0 : (value + 1) % galleryItems.length);
      if (event.key === 'ArrowLeft') setSelectedIndex((value) => value === null ? 0 : (value + galleryItems.length - 1) % galleryItems.length);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedIndex]);

  const selectedItem = selectedIndex === null ? null : galleryItems[selectedIndex];

  return (
    <>
      <div className="gallery-masonry">
        {galleryItems.map((item, index) => (
          <button key={item.title} type="button" className={`gallery-tile ${item.size}`} onClick={() => setSelectedIndex(index)}>
            <Image src={item.image} alt={item.alt} width={1200} height={900} sizes="(max-width: 680px) 100vw, (max-width: 1080px) 50vw, 33vw" />
            <span>{item.title}</span>
          </button>
        ))}
      </div>
      {selectedItem && selectedIndex !== null && (
        <div className="lightbox-overlay" role="dialog" aria-modal="true" aria-label={selectedItem.title} onClick={() => setSelectedIndex(null)}>
          <div className="lightbox-panel" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="lightbox-close" onClick={() => setSelectedIndex(null)} aria-label="Close image preview">×</button>
            <Image src={selectedItem.image} alt={selectedItem.alt} width={1400} height={1050} sizes="90vw" priority />
            <p>{selectedItem.title}</p>
            <div className="lightbox-controls">
              <button type="button" onClick={() => setSelectedIndex((selectedIndex + galleryItems.length - 1) % galleryItems.length)}>Previous</button>
              <span>{selectedIndex + 1} / {galleryItems.length}</span>
              <button type="button" onClick={() => setSelectedIndex((selectedIndex + 1) % galleryItems.length)}>Next</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
