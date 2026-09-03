import { MetadataRoute } from 'next';
import { site } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = site.domain;

  const routes = [
    '',
    '/about',
    '/products',
    '/gallery',
    '/contact',
    '/profile',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}