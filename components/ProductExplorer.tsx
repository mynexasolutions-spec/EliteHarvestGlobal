'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { getEmailInquiryHref, getWhatsAppInquiryHref, productCategories, produceItems } from '@/data/site';

const catalogItems = [...produceItems, ...productCategories];
const filters = ['All', ...Array.from(new Set(catalogItems.map((product) => product.category)))];

export function ProductExplorer() {
  const [activeFilter, setActiveFilter] = useState('All');
  const products = useMemo(
    () => activeFilter === 'All' ? catalogItems : catalogItems.filter((product) => product.category === activeFilter),
    [activeFilter],
  );

  return (
    <>
      <div className="product-filters" aria-label="Filter product categories">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={activeFilter === filter ? 'is-active' : ''}
            onClick={() => setActiveFilter(filter)}
            aria-pressed={activeFilter === filter}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="products-page-grid">
        {products.map((product) => (
          <article key={product.title} className="product-page-card">
            <div className="product-page-image">
              <Image src={product.image} alt={product.alt} width={960} height={720} sizes="(max-width: 680px) 100vw, (max-width: 1100px) 50vw, 25vw" />
              <span>{product.category}</span>
            </div>
            <div className="product-page-copy">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <dl className="product-specs">
                <div><dt>Origin</dt><dd>{product.specifications.origin}</dd></div>
                <div><dt>Packaging</dt><dd>{product.specifications.packaging}</dd></div>
                <div><dt>Terms</dt><dd>{product.specifications.tradeTerms}</dd></div>
                {product.specifications.qualityStandards && <div><dt>Quality</dt><dd>{product.specifications.qualityStandards}</dd></div>}
              </dl>
              {product.title === 'Dates / Fresh & Dry Dates' && <p className="product-note"><strong>Varieties:</strong> Medjool, Deglet Noor, Sukkari, and buyer-specified grades.</p>}
              {product.title === 'Bitumen' && <p className="product-note"><strong>Grades:</strong> Penetration 60/70, 80/100, and Viscosity Grade VG-30.</p>}
              <div className="product-enquiry-actions">
                <a className="enquiry-link" href={getWhatsAppInquiryHref(product.title)} target="_blank" rel="noreferrer">
                  Request quote on WhatsApp <span aria-hidden="true">↗</span>
                </a>
                <a className="email-enquiry-link" href={getEmailInquiryHref(product.title)}>
                  Email quote
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
