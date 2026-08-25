import './globals.css';
import type { Metadata } from 'next';
import { AppProviders } from '@/components/providers/AppProviders';

export const metadata: Metadata = {
  metadataBase: new URL('https://nagarments.com'),
  title: {
    default: 'NA Garments — Made in Faisalabad. Ready for the world.',
    template: '%s — NA Garments',
  },
  description:
    "NA Garments is a Faisalabad-based ready-made garment business specializing in men's and kids' clothing for international customers.",
  keywords: [
    'Pakistan garment manufacturer',
    'Faisalabad garment manufacturer',
    'Pakistan clothing exporter',
    "Men's garments Pakistan",
    'Kids garments Pakistan',
    'Ready-made garments Pakistan',
    'Wholesale garments Faisalabad',
  ],
  alternates: { canonical: 'https://nagarments.com' },
  openGraph: {
    title: 'NA Garments — Made in Faisalabad. Ready for the world.',
    description:
      "Men's and kids' ready-made garments for international customers. Wholesale and export from Faisalabad, Pakistan.",
    type: 'website',
    url: 'https://nagarments.com',
    siteName: 'NA Garments',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NA Garments — Made in Faisalabad. Ready for the world.',
    description:
      "Men's and kids' ready-made garments for international customers. Wholesale and export from Faisalabad, Pakistan.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'NA Garments',
  description:
    "Faisalabad-based ready-made garment business specializing in men's and kids' clothing for international customers.",
  url: 'https://nagarments.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Faisalabad',
    addressCountry: 'Pakistan',
    streetAddress: 'Near Yateem Khana, Millat Town',
  },
  telephone: '+923085848393',
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'NA Garments',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Faisalabad',
    addressCountry: 'Pakistan',
    streetAddress: 'Near Yateem Khana, Millat Town',
  },
  telephone: '+923085848393',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
