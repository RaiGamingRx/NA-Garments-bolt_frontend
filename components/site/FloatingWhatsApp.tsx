'use client';

import { useLanguage } from '@/components/providers/LanguageProvider';
import { t } from '@/lib/content';
import { makeWhatsApp, generalInquiryMessage } from '@/lib/whatsapp';

export function FloatingWhatsApp() {
  const { language, dir } = useLanguage();

  return (
    <a
      className="floating-whatsapp"
      href={makeWhatsApp(generalInquiryMessage())}
      target="_blank"
      rel="noreferrer"
      aria-label={t('floatingInquire', language)}
    >
      <span className="whatsapp-dot" />
      <span>{t('floatingInquire', language)}</span>
    </a>
  );
}
