'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Maximize2, X, ZoomIn } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { t } from '@/lib/content';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const touchStartX = useRef(0);
  const lightboxCloseRef = useRef<HTMLButtonElement | null>(null);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!lightboxOpen) return;
    lightboxCloseRef.current?.focus();
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    document.addEventListener('keydown', onKey);

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxOpen, goNext, goPrev]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    if (!lightboxOpen) {
      document.addEventListener('keydown', onKey);
      return () => document.removeEventListener('keydown', onKey);
    }
  }, [goNext, goPrev, lightboxOpen]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  if (images.length === 0) return null;

  return (
    <div>
      <div
        className="gallery-main"
        onClick={() => setLightboxOpen(true)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        role="button"
        tabIndex={0}
        aria-label={`${t('productGalleryFullscreen', language)} — ${productName}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter') setLightboxOpen(true);
        }}
      >
        <Image
          src={images[activeIndex]}
          alt={`${productName} — view ${activeIndex + 1}`}
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
          className="gallery-img"
          style={{ transform: zoomed ? 'scale(1.8)' : 'scale(1)', transition: 'transform 0.4s' }}
          priority
        />

        {images.length > 1 && (
          <>
            <button
              className="gallery-nav-btn gallery-prev"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              aria-label={t('productGalleryPrev', language)}
            >
              <ChevronLeft size={22} />
            </button>
            <button
              className="gallery-nav-btn gallery-next"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              aria-label={t('productGalleryNext', language)}
            >
              <ChevronRight size={22} />
            </button>
            <div className="gallery-pagination">
              {images.map((_, i) => (
                <button
                  key={i}
                  className={`gallery-dot ${i === activeIndex ? 'active' : ''}`}
                  onClick={(e) => { e.stopPropagation(); setActiveIndex(i); }}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}

        <button
          className="gallery-fullscreen-btn"
          onClick={(e) => { e.stopPropagation(); setLightboxOpen(true); }}
          aria-label={t('productGalleryFullscreen', language)}
        >
          <Maximize2 size={18} />
        </button>
      </div>

      {images.length > 1 && (
        <div className="gallery-thumbnails">
          {images.map((img, i) => (
            <button
              key={i}
              className={`gallery-thumb ${i === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(i)}
              aria-label={`View image ${i + 1}`}
              aria-pressed={i === activeIndex}
            >
              <Image
                src={img}
                alt={`${productName} thumbnail ${i + 1}`}
                fill
                sizes="72px"
                className="gallery-thumb-img"
              />
            </button>
          ))}
        </div>
      )}

      {lightboxOpen && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${productName} — fullscreen`}
          onClick={() => setLightboxOpen(false)}
        >
          <button
            ref={lightboxCloseRef}
            className="overlay-close"
            onClick={(e) => { e.stopPropagation(); setLightboxOpen(false); }}
            aria-label={t('productGalleryClose', language)}
          >
            <X size={25} />
          </button>
          <button
            className="gallery-nav-btn gallery-prev"
            style={{ left: '3vw', top: '50%', position: 'fixed' }}
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            aria-label={t('productGalleryPrev', language)}
          >
            <ChevronLeft size={22} />
          </button>
          <Image
            src={images[activeIndex]}
            alt={`${productName} — fullscreen view ${activeIndex + 1}`}
            width={1200}
            height={1600}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="gallery-nav-btn gallery-next"
            style={{ right: '3vw', top: '50%', position: 'fixed' }}
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            aria-label={t('productGalleryNext', language)}
          >
            <ChevronRight size={22} />
          </button>
        </div>
      )}
    </div>
  );
}
