'use client';

import { useState } from 'react';
import { Nav } from '@/components/site/Nav';
import { MobileMenu } from '@/components/site/MobileMenu';
import { Footer } from '@/components/site/Footer';
import { FloatingWhatsApp } from '@/components/site/FloatingWhatsApp';
import { InquiryBag } from '@/components/site/InquiryBag';
import { SearchOverlay } from '@/components/site/SearchOverlay';
import { ProductCard } from '@/components/site/ProductCard';
import { ProductModal } from '@/components/site/ProductModal';
import { Reveal } from '@/components/site/Reveal';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { t } from '@/lib/content';
import type { Collection, Product } from '@/lib/types';

interface CollectionPageClientProps {
  collection: Collection;
  products: Product[];
}

export function CollectionPageClient({ collection, products }: CollectionPageClientProps) {
  const { language } = useLanguage();
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <>
      <Nav />
      <MobileMenu />
      <main id="main">
        <div className="collection-hero section-pad" style={{ paddingTop: '140px' }}>
          <Reveal>
            <p className="eyebrow">{collection.season} — {collection.year}</p>
            <h1>{collection.name}</h1>
            <p>{collection.description}</p>
          </Reveal>
        </div>

        <div className="collection-page-grid">
          <p className="catalog-results-count">
            {products.length} {t('catalogResults', language)}
          </p>
          {products.length > 0 ? (
            <div className="product-grid">
              {products.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                  onQuickView={setSelected}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">{t('catalogEmpty', language)}</div>
          )}
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <InquiryBag />
      <SearchOverlay />

      {selected && (
        <ProductModal product={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
