import type { Metadata } from 'next';
import { site } from '@/data/site';

type StructuredDataProps = {
  data: Record<string, unknown>;
};

export function StructuredData({ data }: StructuredDataProps) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function OrganizationStructuredData() {
  return (
    <StructuredData data={{
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: site.name,
      url: site.domain,
      logo: `${site.domain}/assets/images/logo.jpeg`,
      email: site.email,
      telephone: site.primaryPhone,
      address: { '@type': 'PostalAddress', addressCountry: 'IN' },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: site.primaryPhone,
        contactType: 'sales',
        availableLanguage: ['English', 'Hindi'],
      },
    }} />
  );
}

export function WebsiteStructuredData() {
  return <StructuredData data={{ '@context': 'https://schema.org', '@type': 'WebSite', name: site.name, url: site.domain }} />;
}

type BreadcrumbStructuredDataProps = {
  items: Array<{ name: string; url: string }>;
};

export function BreadcrumbStructuredData({ items }: BreadcrumbStructuredDataProps) {
  return <StructuredData data={{
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${site.domain}${item.url}`,
    })),
  }} />;
}

export function generateMetadata(pageTitle: string, pageDescription: string, pagePath = '/', ogImage = '/assets/images/harvest-field-hero.png'): Metadata {
  const canonical = `${site.domain}${pagePath}`;
  return {
    title: pageTitle,
    description: pageDescription,
    alternates: { canonical },
    openGraph: { type: 'website', url: canonical, siteName: site.name, title: `${pageTitle} | ${site.name}`, description: pageDescription, images: [ogImage] },
    twitter: { card: 'summary_large_image', title: `${pageTitle} | ${site.name}`, description: pageDescription, images: [ogImage] },
  };
}
