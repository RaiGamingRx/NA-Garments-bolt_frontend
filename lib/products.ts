import type { Product } from './types';

export const products: Product[] = [
  {
    id: 'p-essential-overshirt',
    slug: 'essential-overshirt',
    name: 'The Essential Overshirt',
    code: 'NA-M-001',
    category: 'MEN',
    garmentType: 'Overshirt',
    description:
      'A considered everyday layer, cut for an relaxed silhouette with clean finishing throughout.',
    images: [
      'https://images.pexels.com/photos/36771228/pexels-photo-36771228.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/8358794/pexels-photo-8358794.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/12581670/pexels-photo-12581670.jpeg?auto=compress&cs=tinysrgb&w=1000',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Obsidian', hex: '#1a1a1a' },
      { name: 'Stone', hex: '#8a8175' },
    ],
    material: 'Available on inquiry',
    moq: 'Available on inquiry',
    availability: 'Made to order',
    seasonId: 'season-aw26',
    collectionId: 'col-aw26-essentials',
    status: 'active',
    featured: true,
    newProduct: false,
    order: 1,
    createdAt: '2026-01-15T00:00:00Z',
    updatedAt: '2026-08-24T00:00:00Z',
  },
  {
    id: 'p-quiet-structure-shirt',
    slug: 'quiet-structure-shirt',
    name: 'Quiet Structure Shirt',
    code: 'NA-M-002',
    category: 'MEN',
    garmentType: 'Shirt',
    description:
      'Relaxed tailoring with an editorial point of view. A versatile shirt that moves between occasions.',
    images: [
      'https://images.pexels.com/photos/17251247/pexels-photo-17251247.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/6276008/pexels-photo-6276008.jpeg?auto=compress&cs=tinysrgb&w=1000',
      'https://images.pexels.com/photos/8443143/pexels-photo-8443143.jpeg?auto=compress&cs=tinysrgb&w=1000',
    ],
    sizes: ['M', 'L', 'XL'],
    colors: [
      { name: 'Black', hex: '#0a0a0a' },
      { name: 'Ecru', hex: '#e8e2d4' },
    ],
    material: 'Available on inquiry',
    moq: 'Available on inquiry',
    availability: 'Made to order',
    seasonId: 'season-aw26',
    collectionId: 'col-aw26-essentials',
    status: 'active',
    featured: false,
    newProduct: true,
    order: 2,
    createdAt: '2026-02-01T00:00:00Z',
    updatedAt: '2026-08-24T00:00:00Z',
  },
  {
    id: 'p-soft-form-set',
    slug: 'soft-form-set',
    name: 'Soft Form Set',
    code: 'NA-K-001',
    category: 'KIDS',
    garmentType: 'Set',
    description:
      'Thoughtful essentials for days in motion. A coordinated set designed for comfort and ease.',
    images: [
      'https://images.pexels.com/photos/30690921/pexels-photo-30690921.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/30690920/pexels-photo-30690920.jpeg?auto=compress&cs=tinysrgb&w=1000',
    ],
    sizes: ['2Y', '4Y', '6Y', '8Y'],
    colors: [
      { name: 'Charcoal', hex: '#36454f' },
      { name: 'Natural', hex: '#e8e2d4' },
    ],
    material: 'Available on inquiry',
    moq: 'Available on inquiry',
    availability: 'Made to order',
    seasonId: 'season-aw26',
    collectionId: 'col-aw26-essentials',
    status: 'active',
    featured: true,
    newProduct: false,
    order: 3,
    createdAt: '2026-01-20T00:00:00Z',
    updatedAt: '2026-08-24T00:00:00Z',
  },
  {
    id: 'p-everyday-field-jacket',
    slug: 'everyday-field-jacket',
    name: 'Everyday Field Jacket',
    code: 'NA-M-003',
    category: 'MEN',
    garmentType: 'Jacket',
    description:
      'A strong silhouette, made for the season ahead. Built with structure and finished with restraint.',
    images: [
      'https://images.pexels.com/photos/26903320/pexels-photo-26903320.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/8358794/pexels-photo-8358794.jpeg?auto=compress&cs=tinysrgb&w=1000',
    ],
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'Carbon', hex: '#1a1a1a' },
      { name: 'Olive', hex: '#6b6f3a' },
    ],
    material: 'Available on inquiry',
    moq: 'Available on inquiry',
    availability: 'Made to order',
    seasonId: 'season-aw26',
    collectionId: 'col-aw26-essentials',
    status: 'active',
    featured: false,
    newProduct: false,
    order: 4,
    createdAt: '2026-01-25T00:00:00Z',
    updatedAt: '2026-08-24T00:00:00Z',
  },
  {
    id: 'p-little-studio-uniform',
    slug: 'little-studio-uniform',
    name: 'Little Studio Uniform',
    code: 'NA-K-002',
    category: 'KIDS',
    garmentType: 'Set',
    description:
      'Minimal, expressive layers for the next generation. Clean lines and easy movement for everyday wear.',
    images: [
      'https://images.pexels.com/photos/30690923/pexels-photo-30690923.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1620759/pexels-photo-1620759.jpeg?auto=compress&cs=tinysrgb&w=1000',
    ],
    sizes: ['4Y', '6Y', '8Y'],
    colors: [
      { name: 'Ink', hex: '#0a0a0a' },
      { name: 'Sand', hex: '#c2b280' },
    ],
    material: 'Available on inquiry',
    moq: 'Available on inquiry',
    availability: 'Made to order',
    seasonId: 'season-aw26',
    collectionId: 'col-aw26-essentials',
    status: 'active',
    featured: false,
    newProduct: true,
    order: 5,
    createdAt: '2026-02-10T00:00:00Z',
    updatedAt: '2026-08-24T00:00:00Z',
  },
  {
    id: 'p-travel-trouser',
    slug: 'travel-trouser',
    name: 'The Travel Trouser',
    code: 'NA-M-004',
    category: 'MEN',
    garmentType: 'Trouser',
    description:
      'Clean lines and easy movement, designed to travel well. A versatile trouser cut for an active wardrobe.',
    images: [
      'https://images.pexels.com/photos/27117681/pexels-photo-27117681.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/31840917/pexels-photo-31840917.jpeg?auto=compress&cs=tinysrgb&w=1000',
    ],
    sizes: ['M', 'L', 'XL'],
    colors: [
      { name: 'Black', hex: '#0a0a0a' },
      { name: 'Grey', hex: '#8a8a8a' },
    ],
    material: 'Available on inquiry',
    moq: 'Available on inquiry',
    availability: 'Made to order',
    seasonId: 'season-aw26',
    collectionId: 'col-aw26-essentials',
    status: 'active',
    featured: false,
    newProduct: false,
    order: 6,
    createdAt: '2026-01-18T00:00:00Z',
    updatedAt: '2026-08-24T00:00:00Z',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getActiveProducts(): Product[] {
  return products
    .filter((p) => p.status === 'active')
    .sort((a, b) => a.order - b.order);
}

export function getProductsByCategory(category: 'MEN' | 'KIDS'): Product[] {
  return getActiveProducts().filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return getActiveProducts().filter((p) => p.featured);
}

export function getNewProducts(): Product[] {
  return getActiveProducts().filter((p) => p.newProduct);
}

export function getProductsByCollection(collectionId: string): Product[] {
  return getActiveProducts().filter((p) => p.collectionId === collectionId);
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  return getActiveProducts()
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, limit);
}

export function getAllColors(): string[] {
  const colors = new Set<string>();
  products.forEach((p) => p.colors.forEach((c) => colors.add(c.name)));
  return Array.from(colors).sort();
}

export function getAllGarmentTypes(): string[] {
  const types = new Set<string>();
  products.forEach((p) => types.add(p.garmentType));
  return Array.from(types).sort();
}

export function getAllSizes(): string[] {
  const sizes = new Set<string>();
  products.forEach((p) => p.sizes.forEach((s) => sizes.add(s)));
  return Array.from(sizes).sort();
}
