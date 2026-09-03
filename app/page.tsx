import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CtaBand } from '@/components/CtaBand';
import { OrganizationStructuredData, WebsiteStructuredData } from '@/components/seo';
import { galleryItems, highlights, productCategories, serviceCoverage, site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Agriculture & Global Trade',
  description: 'Elite Harvest Global supports commercial enquiries across agricultural products, food ingredients, packaging, and import-export coordination.',
  alternates: { canonical: '/' },
};

const processSteps = [
  ['01', 'Understand the requirement'],
  ['02', 'Align product and packing'],
  ['03', 'Coordinate the trade process'],
];

const proofPoints = [
  ['01', 'Requirement-led sourcing'],
  ['02', 'Quality and packing focus'],
  ['03', 'Clear trade coordination'],
];

export default function HomePage() {
  return (
    <>
      <OrganizationStructuredData />
      <WebsiteStructuredData />

      <section className="home-hero" aria-labelledby="hero-heading">
        <Image
          src="/assets/images/harvest-field-hero.png"
          alt="Harvest field at sunrise"
          fill
          priority
          sizes="100vw"
          className="home-hero-image"
        />
        <div className="home-hero-shade" />
        <div className="shell home-hero-content">
          <p className="hero-kicker">Agriculture. Quality. Global trade.</p>
          <h1 id="hero-heading">Rooted in harvest.<br />Ready for trade.</h1>
          <p className="hero-copy">Elite Harvest Global brings a clear, commercial approach to agriculture, food products, packaging, and import-export support.</p>
          <div className="hero-actions">
            <Link className="btn btn-gold" href="/products">Explore products</Link>
            <Link className="btn btn-hero-outline" href="/contact">Contact us</Link>
          </div>
          <div className="hero-proof-points" aria-label="Elite Harvest strengths">
            {proofPoints.map(([number, label]) => (
              <span key={number}><b>{number}</b>{label}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="intro-section section-space" aria-labelledby="intro-heading">
        <div className="shell editorial-grid">
          <div className="section-heading">
            <p className="eyebrow">The Elite Harvest approach</p>
            <h2 id="intro-heading">Thoughtful trade begins with a clear brief.</h2>
          </div>
          <div className="intro-copy">
            <p>We work around the detail that makes commercial supply practical: product requirements, quantity, packaging, documentation, destination, and timely communication.</p>
            <Link className="text-link" href="/about">About Elite Harvest Global <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="section-space section-cream" aria-labelledby="highlights-heading">
        <div className="shell">
          <div className="section-heading narrow-heading">
            <p className="eyebrow">Built for business</p>
            <h2 id="highlights-heading">A composed route from enquiry to shipment readiness.</h2>
          </div>
          <div className="highlight-grid">
            {highlights.map((highlight, index) => (
              <article key={highlight.title} className="highlight-card">
                <span>0{index + 1}</span>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space products-showcase" aria-labelledby="products-heading">
        <div className="shell">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">Product categories</p>
              <h2 id="products-heading">A practical range for commercial enquiries.</h2>
            </div>
            <Link className="text-link desktop-link" href="/products">View all categories <span aria-hidden="true">→</span></Link>
          </div>
          <div className="product-showcase-grid">
            {productCategories.map((product) => (
              <article key={product.title} className="product-showcase-card">
                <Image src={product.image} alt={product.alt} width={720} height={540} sizes="(max-width: 680px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                <div>
                  <p>{product.category}</p>
                  <h3>{product.title}</h3>
                  <Link href="/products" aria-label={`Explore ${product.title}`}>Explore <span aria-hidden="true">↗</span></Link>
                </div>
              </article>
            ))}
          </div>
          <Link className="text-link mobile-link" href="/products">View all categories <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="quality-panel" aria-labelledby="quality-heading">
        <div className="shell quality-panel-grid">
          <div className="quality-image-wrap">
            <Image src="/assets/images/quality-control.jpg" alt="Product and packaging quality review" width={960} height={720} sizes="(max-width: 800px) 100vw, 48vw" />
          </div>
          <div className="quality-content">
            <p className="eyebrow">Quality and process</p>
            <h2 id="quality-heading">The details matter before the goods move.</h2>
            <p>From product presentation to packing details and commercial documentation, each enquiry is handled with an eye on the next step.</p>
            <ol className="process-list">
              {processSteps.map(([number, title]) => <li key={number}><span>{number}</span>{title}</li>)}
            </ol>
          </div>
        </div>
      </section>

      <section className="section-space export-section" aria-labelledby="export-heading">
        <div className="shell export-grid">
          <div>
            <p className="eyebrow">Global perspective</p>
            <h2 id="export-heading">A direct channel for product and trade conversations.</h2>
            <p>Reach out with the market, requirement, quantity, and delivery expectation. We will take the conversation from there.</p>
            <a className="btn btn-primary" href={site.whatsappHref} target="_blank" rel="noreferrer">Enquire on WhatsApp</a>
          </div>
          <div className="export-services" aria-label="Trade support services">
            {serviceCoverage.map((service) => <span key={service}>{service}</span>)}
          </div>
        </div>
      </section>

      <section className="section-space gallery-preview" aria-labelledby="gallery-heading">
        <div className="shell">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">From field to trade</p>
              <h2 id="gallery-heading">A closer look at our world.</h2>
            </div>
            <Link className="text-link desktop-link" href="/gallery">Open gallery <span aria-hidden="true">→</span></Link>
          </div>
          <div className="gallery-preview-grid">
            {galleryItems.map((item) => (
              <Image key={item.title} src={item.image} alt={item.alt} width={800} height={600} sizes="(max-width: 700px) 50vw, 25vw" />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
