'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { Reveal } from './Reveal';
import { t } from '@/lib/content';
import { processSteps } from '@/lib/config';
import { makeWhatsApp, learnMoreMessage } from '@/lib/whatsapp';

export function ProcessSection() {
  const { language } = useLanguage();
  const sequenceRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const el = sequenceRef.current;
          if (!el) {
            ticking = false;
            return;
          }
          const rect = el.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const start = windowHeight * 0.8;
          const end = windowHeight * 0.2;
          const range = start - end;
          const scrolled = start - rect.top;
          const pct = Math.max(0, Math.min(1, scrolled / range));
          setProgress(pct);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const prefersReduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const lineHeight = prefersReduced ? '100%' : `${progress * 100}%`;

  return (
    <section className="process-section">
      <div className="process-copy">
        <Reveal>
          <p className="eyebrow">{t('processEyebrow', language)}</p>
          <h2>
            {t('processTitle1', language)}
            <br />
            <i>{t('processTitle2', language)}</i>
          </h2>
          <p>{t('processBody', language)}</p>
          <a
            className="text-link"
            href={makeWhatsApp(learnMoreMessage())}
            target="_blank"
            rel="noreferrer"
          >
            {t('processLearnMore', language)} <ArrowUpRight size={15} />
          </a>
        </Reveal>
      </div>
      <div className="process-sequence" ref={sequenceRef}>
        <div className="process-progress-line" style={{ height: lineHeight }} />
        {processSteps.map((step, index) => (
          <Reveal key={step} delay={index * 60}>
            <div className="process-step">
              <span>0{index + 1}</span>
              <strong>{step}</strong>
              <ArrowRight size={16} />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
