import type { Metadata } from 'next';
import { GalleryGrid } from '@/components/GalleryGrid';
import { BreadcrumbStructuredData } from '@/components/seo';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'See a selection of Elite Harvest Global agriculture, product, quality, packaging, and export logistics visuals.',
  alternates: { canonical: '/gallery' },
};

export default function GalleryPage() {
  return (
    <>
      <BreadcrumbStructuredData items={[{ name: 'Home', url: '/' }, { name: 'Gallery', url: '/gallery' }]} />
      <section className="page-banner page-banner-gallery" aria-labelledby="gallery-heading">
        <div className="shell">
          <p className="eyebrow">Gallery</p>
          <h1 id="gallery-heading">A view across harvest, product, and trade.</h1>
          <p>Explore the visual side of our product categories, preparation process, and global trade focus.</p>
        </div>
      </section>
      <section className="section-space">
        <div className="shell"><GalleryGrid /></div>
      </section>
    </>
  );
}
