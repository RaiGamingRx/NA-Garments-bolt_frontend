'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ShoppingBag, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { useInquiry } from '@/components/providers/InquiryProvider';
import { ProductGallery } from '@/components/site/ProductGallery';
import { ProductCard } from '@/components/site/ProductCard';
import { Reveal } from '@/components/site/Reveal';
import { t } from '@/lib/content';
import { makeWhatsApp, productInquiryMessage } from '@/lib/whatsapp';
import { getCollectionById, getSeasonById } from '@/lib/collections';
import { getRelatedProducts } from '@/lib/products';
import type { Product } from '@/lib/types';

interface ProductDetailClientProps {
  product: Product;
}

export function ProductDetailClient({ product }: ProductDetailClientProps) {
  const { language } = useLanguage();
  const { addItem } = useInquiry();
  const [size, setSize] = useState(product.sizes[0] || '');
  const [color, setColor] = useState(product.colors[0]?.name || '');
  const [quantity, setQuantity] = useState(1);

  const collection = getCollectionById(product.collectionId);
  const season = getSeasonById(product.seasonId);
  const related = getRelatedProducts(product);

  useEffect(() => {
    setSize(product.sizes[0] || '');
    setColor(product.colors[0]?.name || '');
    setQuantity(1);
  }, [product.id]);

  return (
    <>
      <div className="product-detail">
        <div className="section-pad" style={{ paddingTop: '120px' }}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">{t('productBreadcrumbHome', language)}</Link>
            <ChevronRight size={14} />
            <Link href="/#catalog">{t('productBreadcrumbCatalog', language)}</Link>
            <ChevronRight size={14} />
            <span>{product.name}</span>
          </nav>

          <div className="product-detail-grid">
            <ProductGallery images={product.images} productName={product.name} />

            <div className="product-detail-info">
              <p className="product-code">{product.category} / {product.code}</p>
              <h1>{product.name}</h1>
              <p className="product-detail-description">{product.description}</p>

              {product.sizes.length > 0 && (
                <div className="option-group">
                  <span>{t('productSize', language)}</span>
                  <div>
                    {product.sizes.map((s) => (
                      <button
                        key={s}
                        className={size === s ? 'selected' : ''}
                        onClick={() => setSize(s)}
                        aria-pressed={size === s}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {product.colors.length > 0 && (
                <div className="option-group">
                  <span>{t('productColor', language)}</span>
                  <div className="color-swatch-row">
                    {product.colors.map((c) => (
                      <button
                        key={c.name}
                        className={`color-swatch-btn ${color === c.name ? 'selected' : ''}`}
                        onClick={() => setColor(c.name)}
                        aria-label={c.name}
                        aria-pressed={color === c.name}
                      >
                        <span className="color-swatch-inner" style={{ background: c.hex }} />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="product-detail-meta">
                <div className="product-detail-meta-item">
                  <span>{t('productMaterial', language)}</span>
                  <strong>{product.material}</strong>
                </div>
                <div className="product-detail-meta-item">
                  <span>{t('productMoq', language)}</span>
                  <strong>{product.moq}</strong>
                </div>
                <div className="product-detail-meta-item">
                  <span>{t('productAvailability', language)}</span>
                  <strong>{product.availability}</strong>
                </div>
                <div className="product-detail-meta-item">
                  <span>{t('productCollection', language)}</span>
                  <strong>{collection?.name || '—'}</strong>
                </div>
                <div className="product-detail-meta-item">
                  <span>{t('productSeason', language)}</span>
                  <strong>{season?.name || '—'}</strong>
                </div>
                <div className="product-detail-meta-item">
                  <span>{t('bagQuantity', language)}</span>
                  <strong>
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      aria-label="Decrease quantity"
                      style={{ display: 'inline-flex', verticalAlign: 'middle', marginRight: '8px', minWidth: 'var(--touch-min)', minHeight: 'var(--touch-min)', border: '1px solid #555', justifyContent: 'center', alignItems: 'center' }}
                    >
                      −
                    </button>
                    {quantity}
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      aria-label="Increase quantity"
                      style={{ display: 'inline-flex', verticalAlign: 'middle', marginLeft: '8px', minWidth: 'var(--touch-min)', minHeight: 'var(--touch-min)', border: '1px solid #555', justifyContent: 'center', alignItems: 'center' }}
                    >
                      +
                    </button>
                  </strong>
                </div>
              </div>

              <button
                className="button button-dark full-button"
                onClick={() => addItem(product, size, color, quantity)}
                style={{ marginTop: '24px' }}
              >
                {t('productAddToInquiry', language)} <ShoppingBag size={16} />
              </button>
              <a
                className="modal-whatsapp"
                href={makeWhatsApp(productInquiryMessage(product, size, color, quantity))}
                target="_blank"
                rel="noreferrer"
              >
                {t('productInquireWhatsApp', language)} <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="related-section">
          <Reveal>
            <h2 className="related-title">{t('productRelated', language)}</h2>
          </Reveal>
          <div className="product-grid">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} onQuickView={() => {}} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
