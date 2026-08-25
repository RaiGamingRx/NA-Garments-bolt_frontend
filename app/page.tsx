'use client';

import { Nav } from '@/components/site/Nav';
import { MobileMenu } from '@/components/site/MobileMenu';
import { Hero } from '@/components/site/Hero';
import { AboutSection, CollectionsSection, ManufacturingSection } from '@/components/site/Sections';
import { CatalogSection } from '@/components/site/CatalogSection';
import { ProcessSection } from '@/components/site/ProcessSection';
import { ExportSection } from '@/components/site/ExportSection';
import { ContactSection } from '@/components/site/ContactSection';
import { Footer } from '@/components/site/Footer';
import { FloatingWhatsApp } from '@/components/site/FloatingWhatsApp';
import { InquiryBag } from '@/components/site/InquiryBag';
import { SearchOverlay } from '@/components/site/SearchOverlay';
import { useLanguage } from '@/components/providers/LanguageProvider';

export default function Home() {
  const { language } = useLanguage();

  return (
    <>
      <a href="#main" className="skip-link">
        {language === 'ur' ? 'مواد پر جائیں' : 'Skip to content'}
      </a>
      <Nav />
      <MobileMenu />
      <main id="main">
        <Hero />
        <AboutSection />
        <CollectionsSection />
        <CatalogSection />
        <ManufacturingSection />
        <ProcessSection />
        <ExportSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <InquiryBag />
      <SearchOverlay />
    </>
  );
}
