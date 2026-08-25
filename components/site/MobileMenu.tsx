'use client';

import { useEffect, useRef } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { useUI } from '@/components/providers/UIProvider';
import { navItems, siteConfig } from '@/lib/config';
import { t } from '@/lib/content';
import { makeWhatsApp, generalInquiryMessage } from '@/lib/whatsapp';

export function MobileMenu() {
  const { language, toggleLanguage } = useLanguage();
  const { menuOpen, setMenuOpen } = useUI();
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const prevActive = document.activeElement as HTMLElement | null;
    closeBtnRef.current?.focus();
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      prevActive?.focus();
    };
  }, [menuOpen, setMenuOpen]);

  if (!menuOpen) return null;

  const navLabels: Record<string, string> = {
    men: t('navMen', language),
    kids: t('navKids', language),
    collections: t('navCollections', language),
    catalog: t('navCatalog', language),
    export: t('navExport', language),
    about: t('navAbout', language),
    contact: t('navContact', language),
  };

  return (
    <div className="mobile-menu is-open" id="mobile-menu" role="dialog" aria-modal="true" aria-label={t('menuOpen', language)}>
      <button
        ref={closeBtnRef}
        className="menu-close"
        onClick={() => setMenuOpen(false)}
        aria-label={t('menuClose', language)}
      >
        <X size={24} />
      </button>
      <div className="menu-eyebrow">{t('menuEyebrow', language)}</div>
      <nav aria-label="Mobile navigation">
        {navItems.map((item, index) => (
          <a
            href={item.href}
            onClick={() => setMenuOpen(false)}
            key={item.key}
          >
            <span>0{index + 1}</span>
            {navLabels[item.key]}
            <ArrowUpRight size={22} />
          </a>
        ))}
      </nav>
      <div className="menu-bottom">
        <span>{siteConfig.location.city}, {siteConfig.location.country}</span>
        <button onClick={toggleLanguage} aria-label="Toggle language">
          {t('navLanguageToggle', language)}
        </button>
        <a
          href={makeWhatsApp(generalInquiryMessage())}
          target="_blank"
          rel="noreferrer"
        >
          {t('navWhatsApp', language).toUpperCase()} <ArrowUpRight size={14} />
        </a>
      </div>
    </div>
  );
}
