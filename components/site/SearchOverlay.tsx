'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { X, Search, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { useUI } from '@/components/providers/UIProvider';
import { t } from '@/lib/content';
import { getActiveProducts } from '@/lib/products';

export function SearchOverlay() {
  const { language } = useLanguage();
  const { searchOpen, setSearchOpen } = useUI();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!searchOpen) return;
    const prevActive = document.activeElement as HTMLElement | null;
    setTimeout(() => inputRef.current?.focus(), 50);
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSearchOpen(false);
        setQuery('');
      }
    };
    document.addEventListener('keydown', onKey);

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      prevActive?.focus();
    };
  }, [searchOpen, setSearchOpen]);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const term = query.toLowerCase();
    return getActiveProducts().filter((p) =>
      `${p.name} ${p.code} ${p.category} ${p.garmentType}`
        .toLowerCase()
        .includes(term),
    );
  }, [query]);

  if (!searchOpen) return null;

  return (
    <div
      className="overlay search-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={t('catalogSearchTitle', language)}
    >
      <button
        className="overlay-close"
        onClick={() => {
          setSearchOpen(false);
          setQuery('');
        }}
        aria-label={t('productGalleryClose', language)}
      >
        <X size={25} />
      </button>
      <div className="search-inner">
        <p className="eyebrow">{t('catalogSearchTitle', language)}</p>
        <div className="search-input-wrap">
          <input
            ref={inputRef}
            type="text"
            placeholder={t('catalogSearchPlaceholder', language)}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label={t('navSearch', language)}
          />
          <Search size={28} />
        </div>
        <div className="search-results">
          {query &&
            results.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                onClick={() => {
                  setSearchOpen(false);
                  setQuery('');
                }}
              >
                <span>{product.code}</span>
                <strong>{product.name}</strong>
                <ArrowUpRight size={18} />
              </Link>
            ))}
          {query && results.length === 0 && (
            <p className="no-results">{t('catalogNoResults', language)}</p>
          )}
        </div>
      </div>
    </div>
  );
}
