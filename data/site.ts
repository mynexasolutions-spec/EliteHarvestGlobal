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
  specifications: {
    origin: string;
    packaging: string;
    tradeTerms: string;
    qualityStandards?: string;
  };
};

export type GalleryItem = {
  title: string;
  image: string;
  alt: string;
  size: 'wide' | 'tall' | 'standard';
};

export const produceItems: ProductCategory[] = [
  {
    title: 'Apple',
    category: 'Fresh Fruits',
    description: 'Crisp, carefully selected apples prepared for fresh produce supply requirements.',
    image: '/assets/images/apple.png',
    alt: 'Fresh red apples',
    specifications: { origin: 'India, subject to season', packaging: '10 kg / 18 kg cartons', tradeTerms: 'FOB / CIF on request' },
  },
  {
    title: 'Banana Cavendish',
    category: 'Fresh Fruits',
    description: 'Cavendish bananas selected for retail, food service, and commercial fresh produce supply.',
    image: '/assets/images/banana.jpeg',
    alt: 'Fresh Cavendish bananas',
    specifications: { origin: 'India, subject to season', packaging: '13 kg / 18 kg cartons', tradeTerms: 'FOB / CIF on request' },
  },
  {
    title: 'Pear',
    category: 'Fresh Fruits',
    description: 'Fresh pears with a clean finish, suitable for retail and food service enquiries.',
    image: '/assets/images/pear.png',
    alt: 'Fresh green pears',
    specifications: { origin: 'India, subject to season', packaging: '10 kg / 18 kg cartons', tradeTerms: 'FOB / CIF on request' },
  },
  {
    title: 'Orange',
    category: 'Fresh Fruits',
    description: 'Bright, juicy oranges sourced for dependable seasonal produce programmes.',
    image: '/assets/images/orange.png',
    alt: 'Fresh oranges',
    specifications: { origin: 'India, subject to season', packaging: '10 kg / 15 kg cartons', tradeTerms: 'FOB / CIF on request' },
  },
  {
    title: 'Dragon Fruit',
    category: 'Fresh Fruits',
    description: 'Distinctive dragon fruit presented for premium fresh produce conversations.',
    image: '/assets/images/dragon fruit.png',
    alt: 'Fresh dragon fruit',
    specifications: { origin: 'India, subject to season', packaging: '3 kg / 5 kg cartons', tradeTerms: 'FOB / CIF on request' },
  },
  {
    title: 'Grapes',
    category: 'Fresh Fruits',
    description: 'Table grapes selected with presentation and packing requirements in mind.',
    image: '/assets/images/grapes.png',
    alt: 'Fresh grapes',
    specifications: { origin: 'India, subject to season', packaging: '4.5 kg / 9 kg cartons', tradeTerms: 'FOB / CIF on request' },
  },
  {
    title: 'Plum',
    category: 'Fresh Fruits',
    description: 'Seasonal plums for fresh market and commercial produce enquiries.',
    image: '/assets/images/plum.png',
    alt: 'Fresh plums',
    specifications: { origin: 'India, subject to season', packaging: '5 kg / 10 kg cartons', tradeTerms: 'FOB / CIF on request' },
  },
  {
    title: 'Tomatoes',
    category: 'Fresh Vegetables',
    description: 'Firm, vibrant tomatoes prepared around practical quantity and packing needs.',
    image: '/assets/images/tomatoes.png',
    alt: 'Fresh tomatoes',
    specifications: { origin: 'India, subject to season', packaging: '5 kg / 10 kg crates', tradeTerms: 'FOB / CIF on request' },
  },
  {
    title: 'Onion',
    category: 'Fresh Vegetables',
    description: 'Everyday onions supplied for food, retail, and commercial kitchen requirements.',
    image: '/assets/images/onion.png',
    alt: 'Fresh onions',
    specifications: { origin: 'India, subject to season', packaging: '25 kg / 50 kg mesh bags', tradeTerms: 'FOB / CIF on request' },
  },
  {
    title: 'Red Onion',
    category: 'Fresh Vegetables',
    description: 'Red onions prepared for retail, food service, processing, and commercial supply requirements.',
    image: '/assets/images/Red Onion.jpeg',
    alt: 'Fresh red onions',
    specifications: { origin: 'India, subject to season', packaging: '25 kg / 50 kg mesh bags', tradeTerms: 'FOB / CIF on request' },
  },
  {
    title: 'Garlic',
    category: 'Fresh Vegetables',
    description: 'Aromatic garlic prepared for ingredient and fresh produce supply enquiries.',
    image: '/assets/images/gralic.png',
    alt: 'Fresh garlic bulbs',
    specifications: { origin: 'India, subject to season', packaging: '10 kg / 25 kg mesh bags', tradeTerms: 'FOB / CIF on request' },
  },
  {
    title: 'Green Chilli',
    category: 'Fresh Vegetables',
    description: 'Fresh green chillies for food service, ingredient, and retail programmes.',
    image: '/assets/images/green chilli.png',
    alt: 'Fresh green chillies',
    specifications: { origin: 'India, subject to season', packaging: '4 kg / 8 kg cartons', tradeTerms: 'FOB / CIF on request' },
  },
  {
    title: 'Mango alfanso',
    category: 'Fresh Fruits',
    description: 'Seasonal fresh mangoes selected for retail, food service, and commercial produce supply.',
    image: '/assets/images/fresh mango.png',
    alt: 'Fresh mangoes',
    specifications: { origin: 'India, subject to season', packaging: '4 kg / 10 kg cartons', tradeTerms: 'FOB / CIF on request' },
  },
  {
    title: 'Papaya',
    category: 'Fresh Fruits',
    description: 'Fresh papayas selected for retail, food service, and commercial produce supply.',
    image: '/assets/images/papaya.jpeg',
    alt: 'Fresh papayas',
    specifications: { origin: 'India, subject to season', packaging: '10 kg / 15 kg cartons', tradeTerms: 'FOB / CIF on request' },
  },
  {
    title: 'Watermelon',
    category: 'Fresh Fruits',
    description: 'Seasonal watermelons prepared for fresh market and bulk produce enquiries.',
    image: '/assets/images/watermelon.jpeg',
    alt: 'Fresh watermelons',
    specifications: { origin: 'India, subject to season', packaging: 'Bulk or buyer specification', tradeTerms: 'FOB / CIF on request' },
  },
  {
    title: 'Potato',
    category: 'Fresh Vegetables',
    description: 'Reliable potato supply for retail, food service, processing, and commercial requirements.',
    image: '/assets/images/potato.jpeg',
    alt: 'Fresh potatoes',
    specifications: { origin: 'India, subject to season', packaging: '25 kg / 50 kg mesh bags', tradeTerms: 'FOB / CIF on request' },
  },
  {
    title: 'Fresh Jaggery',
    category: 'Food & Spices',
    description: 'Traditional jaggery for ingredient, food service, retail, and bulk trade enquiries.',
    image: '/assets/images/fresh jaggery.jpeg',
    alt: 'Fresh jaggery blocks',
    specifications: { origin: 'India, supplier confirmed per enquiry', packaging: 'Blocks, powder, or buyer specification', tradeTerms: 'FOB / CIF on request' },
  },
  {
    title: 'Natural Rice',
    category: 'Food & Spices',
    description: 'Natural rice prepared for retail, food service, ingredient, and bulk commercial supply.',
    image: '/assets/images/Natural Rice.jpeg',
    alt: 'Natural rice grains',
    specifications: { origin: 'India, supplier confirmed per enquiry', packaging: 'Retail bags, sacks, or buyer specification', tradeTerms: 'FOB / CIF on request' },
  },
  {
    title: 'Raw Peanuts',
    category: 'Food & Spices',
    description: 'Raw peanuts for ingredient, snack, oil, and commercial food supply requirements.',
    image: '/assets/images/Raw Peanuts.jpeg',
    alt: 'Raw peanuts',
    specifications: { origin: 'India, supplier confirmed per enquiry', packaging: '25 kg / 50 kg bags or buyer specification', tradeTerms: 'FOB / CIF on request' },
  },
  {
    title: 'Red Chilli Teja S4',
    category: 'Food & Spices',
    description: 'Red chilli Teja S4 for spice, ingredient, food service, and bulk trade requirements.',
    image: '/assets/images/Red chilli teja S4.jpeg',
    alt: 'Red chilli Teja S4',
    specifications: { origin: 'India, supplier confirmed per enquiry', packaging: '25 kg / 50 kg bags or buyer specification', tradeTerms: 'FOB / CIF on request' },
  },
  {
    title: 'Sour Tamarind',
    category: 'Food & Spices',
    description: 'Sour tamarind for culinary, ingredient, food service, and commercial supply programmes.',
    image: '/assets/images/Sour Tamarind.jpeg',
    alt: 'Sour tamarind',
    specifications: { origin: 'India, supplier confirmed per enquiry', packaging: 'Bulk cartons, bags, or buyer specification', tradeTerms: 'FOB / CIF on request' },
  },
  {
    title: 'Cooking Spices',
    category: 'Food & Spices',
    description: 'Cooking spices for retail, food service, ingredient, and bulk commercial supply.',
    image: '/assets/images/cooking spices.png',
    alt: 'Assortment of cooking spices',
    specifications: { origin: 'India, supplier confirmed per enquiry', packaging: 'Retail packs, cartons, or buyer specification', tradeTerms: 'FOB / CIF on request' },
  },
  {
    title: 'Raw Chickpeas',
    category: 'Food & Spices',
    description: 'Raw chickpeas for ingredient, food service, retail, and bulk food supply requirements.',
    image: '/assets/images/raw chick peas.png',
    alt: 'Raw chickpeas',
    specifications: { origin: 'India, supplier confirmed per enquiry', packaging: '25 kg / 50 kg bags or buyer specification', tradeTerms: 'FOB / CIF on request' },
  },
  {
    title: 'Soybean',
    category: 'Food & Spices',
    description: 'Soybean supply for food, ingredient, processing, and commercial trade enquiries.',
    image: '/assets/images/soy bean.png',
    alt: 'Soybeans',
    specifications: { origin: 'India, supplier confirmed per enquiry', packaging: '25 kg / 50 kg bags or buyer specification', tradeTerms: 'FOB / CIF on request' },
  },
  {
    title: 'Maize Seeds',
    category: 'Food & Spices',
    description: 'Maize seeds for food, feed, processing, and commercial agricultural supply requirements.',
    image: '/assets/images/Maize seeds.jpeg',
    alt: 'Maize seeds',
    specifications: { origin: 'India, supplier confirmed per enquiry', packaging: '25 kg / 50 kg bags or buyer specification', tradeTerms: 'FOB / CIF on request' },
  },
  {
    title: 'Fresh Produce Assortment',
    category: 'Agricultural Products',
    description: 'A broad fresh-produce assortment sourced against buyer specifications and destination requirements.',
    image: '/assets/images/fresh-produce.png',
    alt: 'Assortment of fresh produce',
    specifications: { origin: 'India, supplier confirmed per enquiry', packaging: 'Bulk, crates, cartons, or buyer specification', tradeTerms: 'FOB / CIF on request' },
  },
];

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

export function getEmailInquiryHref(productName: string): string {
  const subject = encodeURIComponent(`Quote request: ${productName}`);
  const body = encodeURIComponent(`Hello ${site.name},\n\nI am interested in ${productName}. Please share availability, specifications, pricing, and delivery terms.\n\nRegards,`);
  return `mailto:${site.email}?subject=${subject}&body=${body}`;
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
    title: 'Dates / Fresh & Dry Dates',
    category: 'Agricultural Products',
    description: 'Whole and seedless fresh or dry dates for retail, food service, ingredient, and bulk trade requirements.',
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=1200&q=85',
    alt: 'Premium dates arranged for food trade supply',
    specifications: { origin: 'India and GCC origin, subject to variety', packaging: 'Bulk cartons; private labeling; 500 g / 1 kg retail packs', tradeTerms: 'FOB / CIF available', qualityStandards: 'Whole or seedless; clean, graded, moisture-controlled; inspection on request' },
  },
  {
    title: 'Agricultural Products',
    category: 'Agricultural Products',
    description: 'Farm-linked products and dry goods sourced against buyer requirements, specifications, and destination needs.',
    image: '/assets/images/harvest-field-hero.png',
    alt: 'Freshly harvested crop at sunrise in an agricultural field',
    specifications: { origin: 'India, supplier confirmed per enquiry', packaging: 'Bulk, bags, or buyer specification', tradeTerms: 'FOB / CIF available' },
  },
  {
    title: 'Food & Spices',
    category: 'Food & Spices',
    description: 'Spices, dry ingredients, packaged foods, and shelf-stable goods presented for commercial enquiries.',
    image: '/assets/images/products-catalog.jpg',
    alt: 'Food ingredients, spices, grains, and fresh produce for commercial supply',
    specifications: { origin: 'India, supplier confirmed per enquiry', packaging: 'Retail, bulk, or buyer specification', tradeTerms: 'FOB / CIF available' },
  },
  {
    title: 'Textiles & Packaging',
    category: 'Packaging',
    description: 'Fabric, packaging materials, cartons, and related commercial goods for practical trade requirements.',
    image: '/assets/images/products-catalog.jpg',
    alt: 'Textiles and export packaging materials',
    specifications: { origin: 'India, supplier confirmed per enquiry', packaging: 'Cartons, rolls, or buyer specification', tradeTerms: 'FOB / CIF available' },
  },
  {
    title: 'Import-Export Support',
    category: 'Trade Services',
    description: 'Coordination for sourcing, product documentation, packaging checks, buyer updates, and shipment readiness.',
    image: '/assets/images/quality-control.jpg',
    alt: 'Quality review and packaging inspection for a commercial shipment',
    specifications: { origin: 'Coordinated per destination', packaging: 'Agreed during quotation', tradeTerms: 'FOB / CIF coordination' },
  },
  {
    title: 'Bitumen',
    category: 'Industrial & Commodity',
    description: 'Commercial bitumen supply for road, paving, waterproofing, and infrastructure projects.',
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=85',
    alt: 'Industrial infrastructure materials for bulk trade supply',
    specifications: { origin: 'Refinery origin confirmed per quotation', packaging: 'Steel drums / Flexitanks / Jumbo Bags', tradeTerms: 'FOB / CIF available', qualityStandards: 'Penetration 60/70, 80/100, VG-30; COA and inspection documents on request' },
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
