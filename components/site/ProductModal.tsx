'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, ArrowUpRight, ShoppingBag } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { useInquiry } from '@/components/providers/InquiryProvider';
import { t } from '@/lib/content';
import { makeWhatsApp, productInquiryMessage } from '@/lib/whatsapp';
import { getCollectionById, getSeasonById } from '@/lib/collections';
import type { Product } from '@/lib/types';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const { language } = useLanguage();
  const { addItem } = useInquiry();
  const [size, setSize] = useState(product.sizes[0] || '');
  const [color, setColor] = useState(product.colors[0]?.name || '');
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const prevActive = document.activeElement as HTMLElement | null;
    closeBtnRef.current?.focus();
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      prevActive?.focus();
    };
  }, [onClose]);

  const collection = getCollectionById(product.collectionId);
  const season = getSeasonById(product.seasonId);

  return (
    <div className="overlay product-overlay" role="dialog" aria-modal="true" aria-label={product.name}>
      <button
        ref={closeBtnRef}
        className="overlay-close"
        onClick={onClose}
        aria-label={t('productGalleryClose', language)}
      >
        <X size={25} />
      </button>
      <div className="product-modal">
        <div className="modal-image">
          <Image
            src={product.images[0]}
            alt={`${product.name} — ${product.category} ${product.garmentType}`}
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            className="modal-img"
          />
        </div>
        <div className="modal-info">
          <p className="eyebrow">{product.category} / {product.code}</p>
          <h2>{product.name}</h2>
          <p className="modal-description">{product.description}</p>
          <div className="modal-rule" />

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

          <div className="modal-details">
            <div>
              <span>{t('productMaterial', language)}</span>
              <strong>{product.material}</strong>
            </div>
            <div>
              <span>{t('productMoq', language)}</span>
              <strong>{product.moq}</strong>
            </div>
            <div>
              <span>{t('productAvailability', language)}</span>
              <strong>{product.availability}</strong>
            </div>
          </div>

          <button
            className="button button-dark full-button"
            onClick={() => {
              addItem(product, size, color);
              onClose();
            }}
          >
            {t('productAddToInquiry', language)} <ShoppingBag size={16} />
          </button>
          <a
            className="modal-whatsapp"
            href={makeWhatsApp(productInquiryMessage(product, size, color))}
            target="_blank"
            rel="noreferrer"
          >
            {t('productInquireWhatsApp', language)} <ArrowUpRight size={15} />
          </a>

          <Link href={`/products/${product.slug}`} className="modal-whatsapp" style={{ marginTop: '12px' }}>
            {t('productViewFull', language)} <ArrowUpRight size={15} />
          </Link>

          {collection && (
            <p style={{ marginTop: '16px', fontSize: '12px', color: '#999' }}>
              {t('productCollection', language)}: {collection.name}
              {season ? ` — ${season.name}` : ''}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
