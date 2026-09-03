import type { Metadata } from 'next';
import Image from 'next/image';
import { CtaBand } from '@/components/CtaBand';
import { BreadcrumbStructuredData, OrganizationStructuredData } from '@/components/seo';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn how Elite Harvest Global approaches agriculture, food products, commercial supply, and global trade conversations.',
  alternates: { canonical: '/about' },
};

const values = [
  ['Quality-led', 'Commercial requirements begin with product detail, handling, packing, and presentation.'],
  ['Clear communication', 'We keep product conversations direct, useful, and focused on the requirement at hand.'],
  ['Practical coordination', 'From sourcing discussions to documentation readiness, we focus on the steps that move trade forward.'],
];

export default function AboutPage() {
  return (
    <>
      <OrganizationStructuredData />
      <BreadcrumbStructuredData items={[{ name: 'Home', url: '/' }, { name: 'About Us', url: '/about' }]} />
      <section className="page-banner page-banner-about" aria-labelledby="about-heading">
        <div className="shell">
          <p className="eyebrow">About Elite Harvest Global</p>
          <h1 id="about-heading">A considered partner for product and trade conversations.</h1>
          <p>We bring agriculture, commercial supply, and practical import-export coordination into one clear B2B conversation.</p>
        </div>
      </section>

      <section className="section-space about-story-section">
        <div className="shell about-story-grid">
          <div className="about-story-image"><Image src="/assets/images/hero-import-export.jpg" alt="Commercial goods prepared alongside export logistics" width={1280} height={900} sizes="(max-width: 800px) 100vw, 50vw" priority /></div>
          <div className="about-story-copy">
            <p className="eyebrow">Our business approach</p>
            <h2>Built around what buyers and suppliers need to know.</h2>
            <p>Elite Harvest Global supports commercial enquiries across agricultural products, food ingredients, textiles, packaging, and related trade services. We create room for specific requirements while keeping communication clear and business-focused.</p>
            <p>Whether the conversation begins with a product, quantity, packing preference, destination, or documentation need, our aim is to make the next decision easier.</p>
          </div>
        </div>
      </section>

      <section className="section-space section-cream" aria-labelledby="vision-heading">
        <div className="shell vision-grid">
          <article>
            <p className="eyebrow">Vision</p>
            <h2 id="vision-heading">To be a trusted name for quality-oriented global trade.</h2>
          </article>
          <article>
            <p className="eyebrow">Mission</p>
            <h2>To make product and trade coordination feel clear, responsive, and commercially grounded.</h2>
          </article>
        </div>
      </section>

      <section className="section-space" aria-labelledby="values-heading">
        <div className="shell">
          <div className="section-heading narrow-heading"><p className="eyebrow">What guides us</p><h2 id="values-heading">Values that stay close to the work.</h2></div>
          <div className="about-values-grid">
            {values.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
