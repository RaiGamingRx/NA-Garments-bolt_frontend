'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { t } from '@/lib/content';
import { makeWhatsApp, wholesaleInquiryMessage } from '@/lib/whatsapp';

const heroImage =
  'https://images.pexels.com/photos/26903324/pexels-photo-26903324.jpeg?auto=compress&cs=tinysrgb&w=1800';

export function Hero() {
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setMounted(true);
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const parallaxOffset = Math.min(scrollY * 0.35, 300);
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <section className="hero" id="top" ref={sectionRef}>
      <div className="hero-image-wrap">
        <Image
          src={heroImage}
          alt="NA Garments editorial — ready-made garments from Faisalabad"
          fill
          priority
          sizes="100vw"
          className="hero-image"
          style={prefersReduced ? undefined : { transform: `translateY(${parallaxOffset}px) scale(1.08)` }}
        />
      </div>
      <div className="hero-overlay" />

      <div className="hero-meta">
        <span>{t('heroMetaIndex', language)}</span>
        <span>{t('heroMetaLocation', language)}</span>
        <span>{t('heroMetaScroll', language)}</span>
      </div>

      <div className="hero-content">
        <p
          className="eyebrow reveal-up"
          style={{ animationDelay: mounted ? '0.1s' : '0s' }}
        >
          {t('brandEyebrow', language)}
        </p>
        <h1 className="hero-title">
          <span className="reveal-up" style={{ animationDelay: mounted ? '0.2s' : '0s' }}>
            Made in
          </span>
          <em className="reveal-up" style={{ animationDelay: mounted ? '0.35s' : '0s' }}>
            Faisalabad.
          </em>
          <span className="reveal-up" style={{ animationDelay: mounted ? '0.5s' : '0s' }}>
            Ready for the world.
          </span>
        </h1>
        <div
          className="hero-footer reveal-up"
          style={{ animationDelay: mounted ? '0.65s' : '0s' }}
        >
          <p>{t('brandSubtitle', language)}</p>
          <div className="hero-actions">
            <a className="button button-light" href="#collections">
              {t('heroExplore', language)} <ArrowDownRight size={17} />
            </a>
            <a
              className="text-link"
              href={makeWhatsApp(wholesaleInquiryMessage())}
              target="_blank"
              rel="noreferrer"
            >
              {t('heroInquiry', language)} <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator" aria-hidden="true">
        <span className="hero-scroll-line" />
      </div>
    </section>
  );
}
