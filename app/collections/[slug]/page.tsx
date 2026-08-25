import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { CollectionPageClient } from '@/components/site/CollectionPageClient';
import { getCollectionBySlug, collections } from '@/lib/collections';
import { getProductsByCollection } from '@/lib/products';

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const collection = getCollectionBySlug(params.slug);
  if (!collection) {
    return { title: 'Collection not found' };
  }

  return {
    title: collection.name,
    description: collection.description,
    alternates: { canonical: `https://nagarments.com/collections/${collection.slug}` },
    openGraph: {
      title: `${collection.name} — NA Garments`,
      description: collection.description,
      type: 'website',
      url: `https://nagarments.com/collections/${collection.slug}`,
      images: collection.heroImage ? [{ url: collection.heroImage, alt: collection.name }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${collection.name} — NA Garments`,
      description: collection.description,
      images: collection.heroImage ? [collection.heroImage] : [],
    },
  };
}

export default function CollectionPage({ params }: PageProps) {
  const collection = getCollectionBySlug(params.slug);
  if (!collection) notFound();

  const products = getProductsByCollection(collection.id);

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nagarments.com' },
      { '@type': 'ListItem', position: 2, name: 'Collections', item: 'https://nagarments.com/#collections' },
      { '@type': 'ListItem', position: 3, name: collection.name, item: `https://nagarments.com/collections/${collection.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <CollectionPageClient collection={collection} products={products} />
    </>
  );
}
