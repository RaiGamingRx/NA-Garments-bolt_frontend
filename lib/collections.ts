import type { Collection, Season } from './types';

export const seasons: Season[] = [
  {
    id: 'season-aw26',
    slug: 'autumn-winter-2026',
    name: 'Autumn / Winter 2026',
    year: 2026,
    description: 'A considered edit of ready-made garments for the season ahead.',
    status: 'current',
    order: 1,
  },
  {
    id: 'season-ss26',
    slug: 'spring-summer-2026',
    name: 'Spring / Summer 2026',
    year: 2026,
    description: 'Lightweight essentials and relaxed tailoring for warmer months.',
    status: 'archived',
    order: 2,
  },
];

export const collections: Collection[] = [
  {
    id: 'col-aw26-essentials',
    slug: 'aw26-essentials',
    name: 'The Essential Edit',
    description: 'A focused collection of ready-made essentials for men and kids.',
    season: 'Autumn / Winter',
    year: 2026,
    heroImage:
      'https://images.pexels.com/photos/8358794/pexels-photo-8358794.jpeg?auto=compress&cs=tinysrgb&w=1400',
    status: 'current',
    featured: true,
    order: 1,
  },
  {
    id: 'col-ss26-lightweight',
    slug: 'ss26-lightweight',
    name: 'Lightweight Spring',
    description: 'Breathable, easy pieces for the spring and summer season.',
    season: 'Spring / Summer',
    year: 2026,
    heroImage:
      'https://images.pexels.com/photos/17251247/pexels-photo-17251247.jpeg?auto=compress&cs=tinysrgb&w=1400',
    status: 'archived',
    featured: false,
    order: 2,
  },
];

export function getSeasonById(id: string): Season | undefined {
  return seasons.find((s) => s.id === id);
}

export function getCollectionById(id: string): Collection | undefined {
  return collections.find((c) => c.id === id);
}

export function getCurrentCollection(): Collection | undefined {
  return collections.find((c) => c.status === 'current');
}

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}

export function getActiveCollections(): Collection[] {
  return collections.filter((c) => c.status !== 'archived');
}
