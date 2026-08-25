'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { Reveal } from './Reveal';
import { t } from '@/lib/content';
import type { Product } from '@/lib/types';

interface ProductCardProps {
  product: Product;
  index: number;
  onQuickView: (product: Product) => void;
}

export function ProductCard({ product, index, onQuickView }: ProductCardProps) {
  const { language } = useLanguage();
  const [imgIndex, setImgIndex] = useState(0);
  const isOffset = index % 3 === 1;

  return (
    <Reveal as="article" delay={(index % 3) * 80} className={isOffset ? 'product-card product-offset' : 'product-card'}>
      <div className="product-image-wrap">
        <Link href={`/products/${product.slug}`} aria-label={`${product.name} — ${product.code}`}>
          <Image
            src={product.images[imgIndex] || product.images[0]}
            alt={`${product.name} — ${product.category} ${product.garmentType}`}
            fill
            sizes="(max-width: 520px) 100vw, (max-width: 900px) 45vw, 30vw"
            className="product-card-img"
          />
        </Link>
        {product.newProduct && (
          <span className="product-badge product-badge-new">{t('catalogNew', language)}</span>
        )}
        {product.featured && !product.newProduct && (
          <span className="product-badge">{t('catalogFeatured', language)}</span>
        )}
        <Link href={`/products/${product.slug}`} className="product-view">
          {t('catalogView', language)} <ArrowUpRight size={15} />
        </Link>
      </div>
      <div className="product-info">
        <div>
          <p className="product-category">{product.category} / {product.code}</p>
          <h3>
            <Link href={`/products/${product.slug}`}>{product.name}</Link>
          </h3>
          {product.colors.length > 1 && (
            <div className="product-colors">
              {product.colors.map((color) => (
                <span
                  key={color.name}
                  className="product-color-swatch"
                  style={{ background: color.hex }}
                  title={color.name}
                  onClick={() => {
                    const idx = product.images.findIndex((img) =>
                      color.images?.includes(img),
                    );
                    setImgIndex(idx >= 0 ? idx : 0);
                  }}
                />
              ))}
            </div>
          )}
        </div>
        <button
          aria-label={t('catalogQuickView', language)}
          onClick={() => onQuickView(product)}
          style={{ marginTop: '8px', minWidth: 'var(--touch-min)', minHeight: 'var(--touch-min)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <ArrowUpRight size={17} />
        </button>
      </div>
    </Reveal>
  );
}
