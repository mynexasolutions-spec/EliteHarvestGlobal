export type NavItem = {
  label: string;
  href: string;
};

export type ProductCategory = {
  title: string;
  category: string;
  description: string;
  image: string;
  alt: string;
};

export type GalleryItem = {
  title: string;
  image: string;
  alt: string;
  size: 'wide' | 'tall' | 'standard';
};

function getEnv(key: string, fallback: string): string {
  const publicKey = `NEXT_PUBLIC_${key}`;

  if (typeof window !== 'undefined') {
    return process.env[publicKey] || fallback;
  }

  return process.env[publicKey] || process.env[key] || fallback;
}

const whatsappNumber = getEnv('COMPANY_WHATSAPP', '918602722245').replace(/[^0-9]/g, '');

export const site = {
  name: getEnv('COMPANY_NAME', 'Elite Harvest Global'),
  tagline: getEnv('COMPANY_TAGLINE', 'Agriculture and Global Trade'),
  email: getEnv('COMPANY_EMAIL', 'eliteharvestglobal@gmail.com'),
  primaryPhone: getEnv('COMPANY_PHONE_PRIMARY', '+918602722245'),
  secondaryPhone: getEnv('COMPANY_PHONE_SECONDARY', '+919752823426'),
  primaryPhoneHref: `tel:${getEnv('COMPANY_PHONE_PRIMARY', '+918602722245')}`,
  secondaryPhoneHref: `tel:${getEnv('COMPANY_PHONE_SECONDARY', '+919752823426')}`,
  whatsappHref: `https://wa.me/${whatsappNumber}`,
  domain: getEnv('COMPANY_DOMAIN', 'https://eliteharvestglobal.com'),
  address: getEnv('COMPANY_ADDRESS', 'Khasra No. 350/3/1, Balsamund, Kasrawad, Khargone, Madhya Pradesh 451228, India'),
  googleMapsApiKey: getEnv('GOOGLE_MAPS_API_KEY', ''),
} as const;

export function getWhatsAppInquiryHref(productName: string): string {
  const message = `Hello ${site.name}, I am interested in ${productName}. Please share more details.`;
  return `${site.whatsappHref}?text=${encodeURIComponent(message)}`;
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact Us', href: '/contact' },
];

export const productCategories: ProductCategory[] = [
  {
    title: 'Agricultural Products',
    category: 'Harvest & Produce',
    description: 'Farm-linked products and dry goods sourced against buyer requirements, specifications, and destination needs.',
    image: '/assets/images/harvest-field-hero.png',
    alt: 'Freshly harvested crop at sunrise in an agricultural field',
  },
  {
    title: 'Food & Spices',
    category: 'Food Ingredients',
    description: 'Spices, dry ingredients, packaged foods, and shelf-stable goods presented for commercial enquiries.',
    image: '/assets/images/products-catalog.jpg',
    alt: 'Food ingredients, spices, grains, and fresh produce for commercial supply',
  },
  {
    title: 'Textiles & Packaging',
    category: 'Commercial Supply',
    description: 'Fabric, packaging materials, cartons, and related commercial goods for practical trade requirements.',
    image: '/assets/images/products-catalog.jpg',
    alt: 'Textiles and export packaging materials',
  },
  {
    title: 'Import-Export Support',
    category: 'Trade Services',
    description: 'Coordination for sourcing, product documentation, packaging checks, buyer updates, and shipment readiness.',
    image: '/assets/images/quality-control.jpg',
    alt: 'Quality review and packaging inspection for a commercial shipment',
  },
];

export const galleryItems: GalleryItem[] = [
  {
    title: 'Harvest at source',
    image: '/assets/images/harvest-field-hero.png',
    alt: 'Agricultural field at harvest time',
    size: 'wide',
  },
  {
    title: 'Food product assortment',
    image: '/assets/images/products-catalog.jpg',
    alt: 'Grains, spices, fresh produce, textiles, and cartons',
    size: 'tall',
  },
  {
    title: 'Quality review',
    image: '/assets/images/quality-control.jpg',
    alt: 'Quality review of products and packaging',
    size: 'standard',
  },
  {
    title: 'Export logistics',
    image: '/assets/images/hero-import-export.jpg',
    alt: 'Commercial export products beside shipping containers at a port',
    size: 'wide',
  },
];

export const serviceCoverage = [
  'Supplier coordination',
  'Product specification sharing',
  'Packaging readiness',
  'Commercial documentation',
  'Buyer communication',
  'Logistics coordination',
] as const;

export const highlights = [
  {
    title: 'Source with clarity',
    description: 'Product requirements are discussed around specification, quantity, packing, and destination.',
  },
  {
    title: 'Prepare with care',
    description: 'Quality, packaging, and dispatch readiness stay central to each commercial enquiry.',
  },
  {
    title: 'Trade with confidence',
    description: 'Clear buyer communication and documentation support keep the process moving.',
  },
] as const;
