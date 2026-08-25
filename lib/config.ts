export const siteConfig = {
  name: 'NA Garments',
  tagline: 'Made in Faisalabad. Ready for the world.',
  description:
    "NA Garments is a Faisalabad-based ready-made garment business specializing in men's and kids' clothing for international customers.",
  url: 'https://nagarments.com',
  location: {
    city: 'Faisalabad',
    country: 'Pakistan',
    addressLines: ['Near Yateem Khana,', 'Millat Town,', 'Faisalabad, Pakistan'],
  },
  contact: {
    whatsappNumber: '923085848393',
    displayNumber: '0308 5848393',
    telLink: 'tel:+923085848393',
  },
  social: {
    instagram: 'https://instagram.com',
    tiktok: 'https://tiktok.com',
  },
  payment: 'Bank details are provided directly by NA Garments during the order process.',
} as const;

export const navItems = [
  { key: 'men', label: 'Men', href: '/#men' },
  { key: 'kids', label: 'Kids', href: '/#kids' },
  { key: 'collections', label: 'Collections', href: '/#collections' },
  { key: 'catalog', label: 'Catalog', href: '/#catalog' },
  { key: 'export', label: 'Export', href: '/#export' },
  { key: 'about', label: 'About', href: '/#about' },
  { key: 'contact', label: 'Contact', href: '/#contact' },
] as const;

export const processSteps = [
  'Fabric',
  'Cutting',
  'Stitching',
  'Finishing',
  'Quality',
  'Packaging',
  'Shipping',
] as const;

export const exportPills = [
  "MEN'S APPAREL",
  "KIDS' APPAREL",
  'READY-MADE GARMENTS',
  'INTERNATIONAL SHIPPING',
  'WHOLESALE / EXPORT',
] as const;
