'use client';

import { useEffect } from 'react';
import { Menu, Search, ShoppingBag, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { useInquiry } from '@/components/providers/InquiryProvider';
import { useUI } from '@/components/providers/UIProvider';
import { siteConfig, navItems } from '@/lib/config';
import { t } from '@/lib/content';
import { makeWhatsApp, generalInquiryMessage } from '@/lib/whatsapp';

export function Nav() {
  const { language, toggleLanguage } = useLanguage();
  const { count, setOpen } = useInquiry();
  const { scrolled, setScrolled, setSearchOpen, setMenuOpen } = useUI();

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [setScrolled]);

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
    <header className={`site-nav ${scrolled ? 'is-scrolled' : ''}`}>
      <a
        className="wordmark"
        href="#top"
        aria-label={`${siteConfig.name} — home`}
      >
        NA <span>GARMENTS</span>
      </a>

      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item.key} href={item.href}>
            {navLabels[item.key]}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <button
          className="nav-text search-trigger"
          onClick={() => setSearchOpen(true)}
          aria-label={t('navSearch', language)}
        >
          <Search size={15} /> <span>{t('navSearch', language).toUpperCase()}</span>
        </button>
        <button
          className="lang-toggle"
          onClick={toggleLanguage}
          aria-label="Toggle language"
        >
          {t('navLanguageToggle', language)}
        </button>
        <button
          className="nav-whatsapp"
          onClick={() => window.open(makeWhatsApp(generalInquiryMessage()), '_blank')}
        >
          {t('navWhatsApp', language).toUpperCase()} <ArrowUpRight size={14} />
        </button>
        <button
          className="bag-button"
          aria-label={`${t('navInquiryBag', language)} — ${count} ${t('catalogResults', language)}`}
          aria-expanded={false}
          onClick={() => setOpen(true)}
        >
          <ShoppingBag size={18} />
          {count > 0 && <span aria-live="polite">{count}</span>}
        </button>
        <button
          className="mobile-menu-button"
          aria-label={t('menuOpen', language)}
          aria-expanded={false}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={22} />
        </button>
      </div>
    </header>
  );
}
