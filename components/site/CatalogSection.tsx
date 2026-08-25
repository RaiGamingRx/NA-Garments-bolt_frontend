'use client';

import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { ProductCard } from './ProductCard';
import { ProductModal } from './ProductModal';
import { Reveal } from './Reveal';
import { t } from '@/lib/content';
import {
  getActiveProducts,
  getAllColors,
  getAllGarmentTypes,
  getAllSizes,
} from '@/lib/products';
import { collections } from '@/lib/collections';
import type { CatalogFilters, FilterKey, Product } from '@/lib/types';

export function CatalogSection() {
  const { language } = useLanguage();
  const [filters, setFilters] = useState<CatalogFilters>({
    category: 'ALL',
    garmentType: '',
    collectionId: '',
    color: '',
    size: '',
  });
  const [selected, setSelected] = useState<Product | null>(null);

  const allProducts = getActiveProducts();
  const garmentTypes = getAllGarmentTypes();
  const allColors = getAllColors();
  const allSizes = getAllSizes();
  const activeCollections = collections.filter((c) => c.status !== 'archived');

  const filtered = useMemo(() => {
    return allProducts.filter((p) => {
      if (filters.category !== 'ALL' && p.category !== filters.category) return false;
      if (filters.garmentType && p.garmentType !== filters.garmentType) return false;
      if (filters.collectionId && p.collectionId !== filters.collectionId) return false;
      if (filters.color && !p.colors.some((c) => c.name === filters.color)) return false;
      if (filters.size && !p.sizes.includes(filters.size)) return false;
      return true;
    });
  }, [allProducts, filters]);

  const hasActiveFilters =
    filters.category !== 'ALL' ||
    filters.garmentType ||
    filters.collectionId ||
    filters.color ||
    filters.size;

  const clearFilters = () =>
    setFilters({ category: 'ALL', garmentType: '', collectionId: '', color: '', size: '' });

  const categoryTabs: { key: FilterKey; label: string }[] = [
    { key: 'ALL', label: t('catalogFilterAll', language) },
    { key: 'MEN', label: t('catalogFilterMen', language) },
    { key: 'KIDS', label: t('catalogFilterKids', language) },
  ];

  return (
    <section className="catalog section-pad" id="catalog">
      <div className="catalog-heading">
        <Reveal>
          <p className="eyebrow">{t('catalogEyebrow', language)}</p>
          <h2>{t('catalogTitle', language)}</h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="catalog-intro">{t('catalogIntro', language)}</p>
        </Reveal>
      </div>

      <div className="catalog-toolbar">
        <div className="filter-tabs">
          {categoryTabs.map((tab) => (
            <button
              key={tab.key}
              className={filters.category === tab.key ? 'active' : ''}
              onClick={() => setFilters((f) => ({ ...f, category: tab.key }))}
              aria-pressed={filters.category === tab.key}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="catalog-filters-bar">
        <select
          value={filters.garmentType}
          onChange={(e) => setFilters((f) => ({ ...f, garmentType: e.target.value }))}
          aria-label="Filter by garment type"
        >
          <option value="">{t('navCatalog', language)}: All types</option>
          {garmentTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>

        <select
          value={filters.collectionId}
          onChange={(e) => setFilters((f) => ({ ...f, collectionId: e.target.value }))}
          aria-label="Filter by collection"
        >
          <option value="">{t('navCollections', language)}: All</option>
          {activeCollections.map((c) => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>

        <select
          value={filters.color}
          onChange={(e) => setFilters((f) => ({ ...f, color: e.target.value }))}
          aria-label="Filter by color"
        >
          <option value="">{t('productColor', language)}: All</option>
          {allColors.map((color) => (
            <option key={color} value={color}>{color}</option>
          ))}
        </select>

        <select
          value={filters.size}
          onChange={(e) => setFilters((f) => ({ ...f, size: e.target.value }))}
          aria-label="Filter by size"
        >
          <option value="">{t('productSize', language)}: All</option>
          {allSizes.map((size) => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>

        {hasActiveFilters && (
          <button className="clear-filters" onClick={clearFilters}>
            {t('catalogClearFilters', language)}
          </button>
        )}
      </div>

      <p className="catalog-results-count">
        {filtered.length} {t('catalogResults', language)}
      </p>

      {filtered.length > 0 ? (
        <div className="product-grid">
          {filtered.map((product, index) => (
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

      {selected && (
        <ProductModal product={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
