'use client';

import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { Reveal } from './Reveal';
import { t } from '@/lib/content';
import { exportPills } from '@/lib/config';
import { makeWhatsApp, exportInquiryMessage } from '@/lib/whatsapp';

export function ExportSection() {
  const { language } = useLanguage();

  return (
    <section className="export-section" id="export">
      <div className="export-top">
        <span>05 / 05</span>
        <span>{t('exportLabel', language)}</span>
      </div>
      <Reveal>
        <div className="export-content">
          <p className="eyebrow">{t('exportEyebrow', language)}</p>
          <h2>
            {t('exportTitle1', language)}
            <br />
            <i>{t('exportTitle2', language)}</i>
          </h2>
          <p>{t('exportBody', language)}</p>
          <a
            className="button button-light"
            href={makeWhatsApp(exportInquiryMessage())}
            target="_blank"
            rel="noreferrer"
          >
            {t('exportCta', language)} <ArrowUpRight size={16} />
          </a>
        </div>
      </Reveal>
      <div className="export-pills">
        {exportPills.map((pill) => (
          <span key={pill}>{pill}</span>
        ))}
      </div>
    </section>
  );
}
