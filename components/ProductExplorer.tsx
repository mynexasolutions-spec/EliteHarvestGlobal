'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { getWhatsAppInquiryHref, productCategories } from '@/data/site';

const filters = ['All', ...productCategories.map((product) => product.category)];

export function ProductExplorer() {
  const [activeFilter, setActiveFilter] = useState('All');
  const products = useMemo(
    () => activeFilter === 'All' ? productCategories : productCategories.filter((product) => product.category === activeFilter),
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
              <a className="enquiry-link" href={getWhatsAppInquiryHref(product.title)} target="_blank" rel="noreferrer">
                Enquire on WhatsApp <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
