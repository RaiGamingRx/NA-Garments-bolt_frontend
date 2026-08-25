'use client';

import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { t } from '@/lib/content';
import { siteConfig, navItems } from '@/lib/config';
import { makeWhatsApp, contactMessage } from '@/lib/whatsapp';

export function Footer() {
  const { language, toggleLanguage } = useLanguage();

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
    <footer className="site-footer" id="footer">
      <div className="footer-top">
        <a className="wordmark footer-wordmark" href="#top">NA <span>GARMENTS</span></a>
        <p>
          {t('brandSubtitle', language)}
          <br />
          {t('brandTagline', language)}
        </p>
        <a
          className="footer-cta"
          href={makeWhatsApp(contactMessage())}
          target="_blank"
          rel="noreferrer"
        >
          {t('footerContactNa', language)} <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="footer-rule" />

      <div className="footer-middle">
        <div>
          <span className="footer-label">{t('footerExplore', language)}</span>
          {navItems.map((item) => (
            <a key={item.key} href={item.href}>{navLabels[item.key]}</a>
          ))}
        </div>
        <div>
          <span className="footer-label">{t('footerConnect', language)}</span>
          <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer">Instagram</a>
          <a href={siteConfig.social.tiktok} target="_blank" rel="noreferrer">TikTok</a>
          <a
            href={makeWhatsApp(contactMessage())}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
        <div>
          <span className="footer-label">{t('footerVisit', language)}</span>
          <p>{siteConfig.location.addressLines.join(' ')}</p>
          <a href={siteConfig.contact.telLink}>{siteConfig.contact.displayNumber}</a>
        </div>
        <div>
          <span className="footer-label">{t('footerPayment', language)}</span>
          <p>{siteConfig.payment}</p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>{t('footerRights', language)}</span>
        <button onClick={toggleLanguage} aria-label="Toggle language">
          {t('navLanguageToggle', language)}
        </button>
        <span>{siteConfig.location.city} / {siteConfig.location.country}</span>
      </div>
    </footer>
  );
}
