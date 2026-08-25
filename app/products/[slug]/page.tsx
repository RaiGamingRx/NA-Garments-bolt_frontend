import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Nav } from '@/components/site/Nav';
import { MobileMenu } from '@/components/site/MobileMenu';
import { Footer } from '@/components/site/Footer';
import { FloatingWhatsApp } from '@/components/site/FloatingWhatsApp';
import { InquiryBag } from '@/components/site/InquiryBag';
import { SearchOverlay } from '@/components/site/SearchOverlay';
import { ProductDetailClient } from '@/components/site/ProductDetailClient';
import { getProductBySlug, getActiveProducts } from '@/lib/products';
import { siteConfig } from '@/lib/config';

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getActiveProducts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return { title: 'Product not found' };
  }

  const title = `${product.name} (${product.code})`;
  const description = product.description;

  return {
    title,
    description,
    alternates: { canonical: `https://nagarments.com/products/${product.slug}` },
    openGraph: {
      title: `${product.name} — NA Garments`,
      description,
      type: 'website',
      url: `https://nagarments.com/products/${product.slug}`,
      images: product.images[0] ? [{ url: product.images[0], alt: product.name }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} — NA Garments`,
      description,
      images: product.images[0] ? [product.images[0]] : [],
    },
  };
}

export default function ProductPage({ params }: PageProps) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nagarments.com' },
      { '@type': 'ListItem', position: 2, name: 'Catalog', item: 'https://nagarments.com/#catalog' },
      { '@type': 'ListItem', position: 3, name: product.name, item: `https://nagarments.com/products/${product.slug}` },
    ],
  };

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    sku: product.code,
    description: product.description,
    brand: { '@type': 'Brand', name: 'NA Garments' },
    category: product.category,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/PreOrder',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
      },
      seller: { '@type': 'Organization', name: 'NA Garments' },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <Nav />
      <MobileMenu />
      <main id="main">
        <ProductDetailClient product={product} />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <InquiryBag />
      <SearchOverlay />
    </>
  );
}
