'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { Reveal } from './Reveal';
import { t } from '@/lib/content';

const menImage =
  'https://images.pexels.com/photos/15092610/pexels-photo-15092610.png?auto=compress&cs=tinysrgb&w=1400';
const kidsImage =
  'https://images.pexels.com/photos/30690923/pexels-photo-30690923.jpeg?auto=compress&cs=tinysrgb&w=1200';
const manufacturingImage =
  'https://images.pexels.com/photos/6525848/pexels-photo-6525848.jpeg?auto=compress&cs=tinysrgb&w=1600';
const fabricImage =
  'https://images.pexels.com/photos/28460324/pexels-photo-28460324.jpeg?auto=compress&cs=tinysrgb&w=1200';

export function AboutSection() {
  const { language } = useLanguage();

  return (
    <section className="intro section-pad" id="about">
      <div className="section-index">01 — / — 06</div>
      <div className="intro-content">
        <Reveal>
          <p className="eyebrow">{t('aboutEyebrow', language)}</p>
          <h2>
            {t('aboutTitle1', language)}
            <br />
            <i>{t('aboutTitle2', language)}</i>
          </h2>
          <p className="intro-copy">{t('aboutBody', language)}</p>
          <a className="text-link dark-link" href="#export">
            {t('aboutLink', language)} <ArrowUpRight size={16} />
          </a>
        </Reveal>
      </div>
      <div className="vertical-word">NA / 2026</div>
    </section>
  );
}

export function CollectionsSection() {
  const { language } = useLanguage();

  return (
    <section className="editorial-collections" id="collections">
      <div className="collection-header">
        <Reveal>
          <p className="eyebrow">{t('collectionsEyebrow', language)}</p>
          <h2>
            {t('collectionsTitle1', language)}
            <br />
            <i>{t('collectionsTitle2', language)}</i>
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p>{t('collectionsSubtitle', language)}</p>
        </Reveal>
      </div>

      <div className="collection-grid">
        <Reveal>
          <a className="collection-card men-card" id="men" href="/#catalog" aria-label={`${t('collectionMenTitle', language)} — ${t('collectionMenDesc', language)}`}>
            <Image
              src={menImage}
              alt={`${t('collectionMenTitle', language)} — ready-made apparel`}
              fill
              sizes="(max-width: 900px) 90vw, 50vw"
              className="collection-card-img"
            />
            <div className="collection-wash" />
            <div className="collection-card-content">
              <span>01 / {t('navMen', language).toUpperCase()}</span>
              <h3>{t('collectionMenTitle', language)}</h3>
              <p>{t('collectionMenDesc', language)}</p>
              <span className="circle-arrow">
                <ArrowUpRight size={21} />
              </span>
            </div>
          </a>
        </Reveal>

        <Reveal delay={150}>
          <a className="collection-card kids-card" id="kids" href="/#catalog" aria-label={`${t('collectionKidsTitle', language)} — ${t('collectionKidsDesc', language)}`}>
            <Image
              src={kidsImage}
              alt={`${t('collectionKidsTitle', language)} — ready-made clothing`}
              fill
              sizes="(max-width: 900px) 90vw, 45vw"
              className="collection-card-img"
            />
            <div className="collection-wash" />
            <div className="collection-card-content">
              <span>02 / {t('navKids', language).toUpperCase()}</span>
              <h3>{t('collectionKidsTitle', language)}</h3>
              <p>{t('collectionKidsDesc', language)}</p>
              <span className="circle-arrow">
                <ArrowUpRight size={21} />
              </span>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function ManufacturingSection() {
  const { language } = useLanguage();

  return (
    <section className="manufacturing-section" id="manufacturing">
      <div className="manufacturing-grid">
        <Reveal>
          <div className="manufacturing-image-wrap">
            <Image
              src={manufacturingImage}
              alt="Textile manufacturing in Faisalabad — fabric production"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className="manufacturing-img"
            />
          </div>
        </Reveal>
        <div className="manufacturing-content">
          <Reveal>
            <p className="eyebrow">{language === 'ur' ? 'صلاحیت' : 'Capabilities'}</p>
            <h2 className="manufacturing-title">
              {language === 'ur' ? 'فیصل آباد میں' : 'Made in'}
              <br />
              <i>{language === 'ur' ? 'تیار۔' : 'Faisalabad.'}</i>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="manufacturing-body">
              {language === 'ur'
                ? 'فیصل آباد پاکستان کا ٹیکسٹائل مرکز ہے۔ ہم اپنے ملبوسات میں یکسانی اور معیار کو یقینی بناتے ہیں۔'
                : 'Faisalabad is the textile heart of Pakistan. From fabric selection to final fold, every garment is made with consistency and care for international buyers.'}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="manufacturing-stats">
              <div className="manufacturing-stat">
                <span className="manufacturing-stat-label">{language === 'ur' ? 'پرداخت' : 'Process'}</span>
                <strong>{language === 'ur' ? '۷ مرحلے' : '7 stages'}</strong>
              </div>
              <div className="manufacturing-stat">
                <span className="manufacturing-stat-label">{language === 'ur' ? 'اقسام' : 'Categories'}</span>
                <strong>{language === 'ur' ? 'مرد + بچے' : 'Men + Kids'}</strong>
              </div>
              <div className="manufacturing-stat">
                <span className="manufacturing-stat-label">{language === 'ur' ? 'قسم' : 'Model'}</span>
                <strong>{language === 'ur' ? 'تیار ملبوسات' : 'Ready-made'}</strong>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      <Reveal delay={100}>
        <div className="fabric-strip">
          <Image
            src={fabricImage}
            alt="Fabric rolls — textile detail"
            fill
            sizes="100vw"
            className="fabric-strip-img"
          />
          <div className="fabric-strip-overlay" />
          <p className="fabric-strip-text">
            {language === 'ur'
              ? 'کپڑے سے پیکنگ تک — ہر مرحلہ اہم ہے۔'
              : 'From fabric to packing — every stage matters.'}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
