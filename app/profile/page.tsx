import type { Metadata } from 'next';
import Image from 'next/image';
import { BreadcrumbStructuredData } from '@/components/seo';

export const metadata: Metadata = {
  title: 'Company Profile',
  description: 'Learn about Elite Harvest Global and its commercial product and trade services.',
  alternates: { canonical: '/profile' },
};

const companyDocuments = [
  { title: 'APEDA Certificate', detail: 'Agricultural and Processed Food Products Export Development Authority', mark: 'AP', icon: 'leaf' },
  { title: 'Import Export Code', detail: 'Official import-export registration document', mark: 'IE', icon: 'globe' },
  { title: 'FSSAI License', detail: 'Food Safety and Standards Authority of India license', mark: 'FS', icon: 'shield' },
  { title: 'GST Registration', detail: 'Goods and Services Tax registration certificate', mark: 'GS', icon: 'receipt' },
];

export default function ProfilePage() {
  return (
    <>
      <BreadcrumbStructuredData items={[{ name: 'Home', url: '/' }, { name: 'Company Profile', url: '/profile' }]} />
      <section className="page-banner page-banner-profile" aria-labelledby="profile-heading">
        <div className="shell"><p className="eyebrow">Company profile</p><h1 id="profile-heading">A concise introduction to Elite Harvest Global.</h1><p>Learn about our company, commercial product categories, and practical trade support services.</p></div>
      </section>
      <section className="section-space">
        <div className="shell profile-download-grid">
          <div><p className="eyebrow">About the company</p><h2>Built for clear commercial conversations.</h2><p>Elite Harvest Global connects buyers with agricultural products, food ingredients, packaging, and import-export support through a direct, practical approach.</p></div>
          <Image src="/assets/images/products-catalog.jpg" alt="A selection of Elite Harvest Global commercial categories" width={960} height={720} sizes="(max-width: 800px) 100vw, 48vw" />
        </div>
      </section>
      <section className="section-space section-cream" aria-labelledby="documents-heading">
        <div className="shell">
          <div className="section-heading narrow-heading">
            <p className="eyebrow">Registrations & documents</p>
            <h2 id="documents-heading">Important company documents.</h2>
          </div>
          <div className="document-grid">
            {companyDocuments.map((document, index) => (
              <article key={document.title} className="document-card">
                <span className="document-number">0{index + 1}</span>
                <span className="document-mark" aria-label={`${document.title} logo`}>
                  <svg viewBox="0 0 48 48" aria-hidden="true">
                    {document.icon === 'leaf' && <><path d="M36 10C23 10 13 16 13 29c0 5 3 9 8 9 9 0 15-10 15-28Z" /><path d="M13 38c4-9 10-15 19-21" /></>}
                    {document.icon === 'globe' && <><circle cx="24" cy="24" r="15" /><path d="M9 24h30M24 9c4 4 6 9 6 15s-2 11-6 15c-4-4-6-9-6-15s2-11 6-15Z" /><path d="m31 34 5 5 8-9" /></>}
                    {document.icon === 'shield' && <><path d="m24 7 14 5v10c0 9-6 15-14 19-8-4-14-10-14-19V12l14-5Z" /><path d="m17 24 5 5 10-11" /></>}
                    {document.icon === 'receipt' && <><path d="M14 7h20v34l-5-3-5 3-5-3-5 3V7Z" /><path d="M19 15h10M19 21h10M19 27h7" /></>}
                  </svg>
                  <b>{document.mark}</b>
                </span>
                <h3>{document.title}</h3>
                <p>{document.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
