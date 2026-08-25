import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/config';
import { getActiveProducts } from '@/lib/products';
import { collections } from '@/lib/collections';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];

  const productPages: MetadataRoute.Sitemap = getActiveProducts().map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(product.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const collectionPages: MetadataRoute.Sitemap = collections.map((collection) => ({
    url: `${baseUrl}/collections/${collection.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...productPages, ...collectionPages];
}
