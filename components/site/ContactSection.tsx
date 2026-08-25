'use client';

import { ArrowUpRight, Phone } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { Reveal } from './Reveal';
import { t } from '@/lib/content';
import { siteConfig } from '@/lib/config';
import { makeWhatsApp, contactMessage, quoteMessage } from '@/lib/whatsapp';

export function ContactSection() {
  const { language } = useLanguage();

  return (
    <section className="contact-section section-pad" id="contact">
      <Reveal>
        <div className="contact-intro">
          <p className="eyebrow">{t('contactEyebrow', language)}</p>
          <h2>
            {t('contactTitle1', language)}
            <br />
            <i>{t('contactTitle2', language)}</i>
          </h2>
        </div>
      </Reveal>
      <Reveal delay={100}>
        <div className="contact-detail">
          <p>{t('contactBody', language)}</p>
          <a
            className="big-contact-link"
            href={makeWhatsApp(contactMessage())}
            target="_blank"
            rel="noreferrer"
          >
            {siteConfig.contact.displayNumber} <ArrowUpRight size={20} />
          </a>
          <div className="contact-actions">
            <a
              href={makeWhatsApp(quoteMessage())}
              target="_blank"
              rel="noreferrer"
            >
              <Phone size={15} /> {t('navWhatsApp', language).toUpperCase()}
            </a>
            <a href={siteConfig.contact.telLink}>
              <Phone size={15} /> {t('contactCall', language).toUpperCase()}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
