import type { Metadata } from 'next';
import { CtaBand } from '@/components/CtaBand';
import { ProductExplorer } from '@/components/ProductExplorer';
import { BreadcrumbStructuredData } from '@/components/seo';

export const metadata: Metadata = {
  title: 'Products & Trade Services',
  description: 'Explore Elite Harvest Global product categories for agricultural products, food ingredients, packaging, and import-export support.',
  alternates: { canonical: '/products' },
};

export default function ProductsPage() {
  return (
    <>
      <BreadcrumbStructuredData items={[{ name: 'Home', url: '/' }, { name: 'Products', url: '/products' }]} />
      <section className="page-banner page-banner-products" aria-labelledby="products-heading">
        <div className="shell">
          <p className="eyebrow">Products & services</p>
          <h1 id="products-heading">Products for practical commercial requirements.</h1>
          <p>Explore our Agro & Food and Industrial & Commodity divisions, then request a quote with your specifications, quantity, packaging, and destination.</p>
        </div>
      </section>
      <section className="section-space products-page-section">
        <div className="shell">
          <ProductExplorer />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
