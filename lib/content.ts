import type { Language } from './types';

type CopyDict = Record<string, { en: string; ur: string }>;

export const copy: CopyDict = {
  // Brand
  brandTagline: { en: 'Made in Faisalabad. Ready for the world.', ur: 'فیصل آباد میں تیار۔ دنیا کے لیے۔' },
  brandSubtitle: { en: "Men's & Kids' Ready-Made Garments", ur: 'مرد اور بچوں کے تیار ملبوسات' },
  brandEyebrow: { en: 'Ready-Made / Export', ur: 'تیار ملبوسات / برآمد' },

  // Nav
  navMen: { en: 'Men', ur: 'مرد' },
  navKids: { en: 'Kids', ur: 'بچے' },
  navCollections: { en: 'Collections', ur: 'مجموعے' },
  navCatalog: { en: 'Catalog', ur: 'کیٹلاگ' },
  navExport: { en: 'Export', ur: 'برآمد' },
  navAbout: { en: 'About', ur: 'تعارف' },
  navContact: { en: 'Contact', ur: 'رابطہ' },
  navSearch: { en: 'Search', ur: 'تلاش' },
  navWhatsApp: { en: 'WhatsApp', ur: 'واٹس ایپ' },
  navInquiryBag: { en: 'Inquiry bag', ur: 'استفسار بیگ' },
  navLanguageToggle: { en: 'EN | اردو', ur: 'اردو | EN' },

  // Hero
  heroExplore: { en: 'Explore collection', ur: 'کلیکشن دیکھیں' },
  heroInquiry: { en: 'WhatsApp inquiry', ur: 'واٹس ایپ پر رابطہ' },
  heroMetaLocation: { en: 'Faisalabad — Pakistan', ur: 'فیصل آباد — پاکستان' },
  heroMetaScroll: { en: 'Scroll to explore', ur: 'مزید دیکھنے کے لیے سکرول کریں' },
  heroMetaIndex: { en: '01 / 06', ur: '01 / 06' },

  // About / Intro
  aboutEyebrow: { en: 'A distinct point of view', ur: 'ایک منفرد نقطہ نظر' },
  aboutTitle1: { en: 'Quietly made.', ur: 'خاموشی سے تیار۔' },
  aboutTitle2: { en: 'Globally minded.', ur: 'عالمی سوچ۔' },
  aboutBody: {
    en: 'NA Garments is a Faisalabad-based ready-made garment business specializing in men\'s and kids\' clothing and serving international customers.',
    ur: 'این اے گارمنٹس فیصل آباد میں قائم تیار ملبوسات کا کاروبار ہے جو مرد اور بچوں کے ملبوسات میں مہارت رکھتا ہے اور بین الاقوامی گاہکوں کی خدمت کرتا ہے۔',
  },
  aboutLink: { en: 'From Faisalabad to the world', ur: 'فیصل آباد سے دنیا تک' },

  // Collections section
  collectionsEyebrow: { en: '02 — The Edit', ur: '02 — منتخب' },
  collectionsTitle1: { en: 'Two worlds.', ur: 'دو دنیا۔' },
  collectionsTitle2: { en: 'One standard.', ur: 'ایک معیار۔' },
  collectionsSubtitle: {
    en: 'Designed in spirit. Ready-made in form. A considered edit for men and kids.',
    ur: 'روح میں ڈیزائن۔ شکل میں تیار۔ مرد اور بچوں کے لیے ایک منتخب مجموعہ۔',
  },
  collectionMenTitle: { en: 'Men', ur: 'مرد' },
  collectionMenDesc: { en: 'Ready-made apparel for the modern man.', ur: 'جدید مرد کے لیے تیار ملبوسات۔' },
  collectionKidsTitle: { en: 'Kids', ur: 'بچے' },
  collectionKidsDesc: { en: 'Ready-made clothing for the next generation.', ur: 'اگلی نسل کے لیے تیار ملبوسات۔' },

  // Catalog
  catalogEyebrow: { en: '03 — The Collection', ur: '03 — کلیکشن' },
  catalogTitle: { en: 'The collection', ur: 'کلیکشن' },
  catalogIntro: {
    en: 'A considered edit of ready-made garments. Product details, sizes, colors and availability are shared directly for every inquiry.',
    ur: 'تیار ملبوسات کا ایک منتخب مجموعہ۔ ہر استفسار کے لیے مصنوعات کی تفصیلات براہ راست فراہم کی جاتی ہیں۔',
  },
  catalogFilterAll: { en: 'All', ur: 'تمام' },
  catalogFilterMen: { en: 'Men', ur: 'مرد' },
  catalogFilterKids: { en: 'Kids', ur: 'بچے' },
  catalogSearch: { en: 'Search the edit', ur: 'منتخب میں تلاش کریں' },
  catalogSearchPlaceholder: { en: 'Search pieces, codes, categories', ur: 'تلاش کریں — کوڈ، نام' },
  catalogSearchTitle: { en: 'Search the collection', ur: 'کلیکشن میں تلاش کریں' },
  catalogResults: { en: 'pieces', ur: 'اشیاء' },
  catalogNoResults: { en: 'No pieces match that search.', ur: 'کوئی شے نہیں ملی۔' },
  catalogEmpty: { en: 'No pieces found in this edit.', ur: 'اس منتخب میں کوئی شے نہیں۔' },
  catalogClearFilters: { en: 'Clear filters', ur: 'فلٹر صاف کریں' },
  catalogNew: { en: 'New', ur: 'نیا' },
  catalogFeatured: { en: 'Featured', ur: 'نمایاں' },
  catalogView: { en: 'View', ur: 'دیکھیں' },
  catalogQuickView: { en: 'Quick view', ur: 'فوری نظارہ' },

  // Product detail
  productSize: { en: 'Size', ur: 'سائز' },
  productColor: { en: 'Colour', ur: 'رنگ' },
  productMaterial: { en: 'Material', ur: 'کپڑا' },
  productMoq: { en: 'MOQ', ur: 'کم از کم مقدار' },
  productAvailability: { en: 'Availability', ur: 'دستیابی' },
  productCollection: { en: 'Collection', ur: 'مجموعہ' },
  productSeason: { en: 'Season', ur: 'سیزن' },
  productDescription: { en: 'Description', ur: 'تفصیل' },
  productAddToInquiry: { en: 'Add to inquiry bag', ur: 'استفسار بیگ میں شامل کریں' },
  productInquireWhatsApp: { en: 'Inquire directly on WhatsApp', ur: 'واٹس ایپ پر براہ راست استفسار' },
  productRelated: { en: 'Related pieces', ur: 'متعلقہ اشیاء' },
  productViewFull: { en: 'View full details', ur: 'مکمل تفصیلات دیکھیں' },
  productBreadcrumbHome: { en: 'Home', ur: 'صفحۂ اول' },
  productBreadcrumbCatalog: { en: 'Catalog', ur: 'کیٹلاگ' },
  productGalleryFullscreen: { en: 'Fullscreen', ur: 'پوری اسکرین' },
  productGalleryZoom: { en: 'Zoom', ur: 'زوم' },
  productGalleryClose: { en: 'Close', ur: 'بند کریں' },
  productGalleryNext: { en: 'Next', ur: 'اگلا' },
  productGalleryPrev: { en: 'Previous', ur: 'پچھلا' },

  // Inquiry bag
  bagTitle: { en: 'Inquiry bag', ur: 'استفسار بیگ' },
  bagYourSelection: { en: 'Your selection', ur: 'آپ کا انتخاب' },
  bagEmpty: { en: 'Your inquiry bag is empty.', ur: 'آپ کا استفسار بیگ خالی ہے۔' },
  bagBrowse: { en: 'Browse the collection', ur: 'کلیکشن دیکھیں' },
  bagSend: { en: 'Send inquiry on WhatsApp', ur: 'واٹس ایپ پر استفسار بھیجیں' },
  bagNote: {
    en: 'Prepare one combined inquiry with your selected pieces. NA Garments will respond directly with availability, MOQ, pricing and shipping details.',
    ur: 'اپنی منتخب کردہ اشیاء کے ساتھ ایک مشترکہ استفسار تیار کریں۔ این اے گارمنٹس براہ راست دستیابی، کم از کم مقدار، قیمت اور شپنگ کی تفصیلات کے ساتھ جواب دے گا۔',
  },
  bagQuantity: { en: 'Quantity', ur: 'مقدار' },
  bagRemove: { en: 'Remove', ur: 'ہٹائیں' },
  bagClose: { en: 'Close', ur: 'بند کریں' },
  bagItemsAdded: { en: 'items added to inquiry', ur: 'استفسار میں اشیاء شامل کی گئیں' },
  bagItemAdded: { en: 'item added to inquiry', ur: 'استفسار میں شے شامل کی گئی' },

  // Process
  processEyebrow: { en: '04 — The Journey', ur: '04 — سفر' },
  processTitle1: { en: 'Made in', ur: 'تیار' },
  processTitle2: { en: 'Faisalabad.', ur: 'فیصل آباد میں۔' },
  processBody: {
    en: 'From first touch to final fold, a garment carries the character of the hands and place behind it.',
    ur: 'پہلے لمس سے آخری فول تک، ایک لباس اس کے پیچھے ہاتھوں اور جگہ کی خصوصیت رکھتا ہے۔',
  },
  processLearnMore: { en: 'Learn more about NA', ur: 'این اے کے بارے میں مزید جانیں' },

  // Export
  exportEyebrow: { en: 'The world is open', ur: 'دنیا کھلی ہے' },
  exportTitle1: { en: 'From Faisalabad', ur: 'فیصل آباد سے' },
  exportTitle2: { en: 'to the world.', ur: 'دنیا تک۔' },
  exportBody: { en: 'Ready-made garments for international customers.', ur: 'بین الاقوامی گاہکوں کے لیے تیار ملبوسات۔' },
  exportCta: { en: 'Start an export inquiry', ur: 'برآمد استفسار شروع کریں' },
  exportLabel: { en: 'International ready-made', ur: 'بین الاقوامی تیار ملبوسات' },

  // Contact
  contactEyebrow: { en: "Let's talk", ur: 'بات چیت' },
  contactTitle1: { en: 'Have a requirement?', ur: 'کوئی ضرورت ہے؟' },
  contactTitle2: { en: 'Start a conversation.', ur: 'بات چیت شروع کریں۔' },
  contactBody: {
    en: 'Whether you are sourcing for a collection, a store or a new market, reach NA Garments directly.',
    ur: 'چاہے آپ کسی مجموعے، دکان یا نئے بازار کے لیے خریداری کر رہے ہوں، این اے گارمنٹس تک براہ راست رابطہ کریں۔',
  },
  contactCall: { en: 'Call', ur: 'کال' },
  contactInstagram: { en: 'Instagram', ur: 'انسٹاگرام' },

  // Footer
  footerExplore: { en: 'Explore', ur: 'دریافت کریں' },
  footerConnect: { en: 'Connect', ur: 'جڑیں' },
  footerVisit: { en: 'Visit / Call', ur: 'دہائیں / کال' },
  footerPayment: { en: 'Payment', ur: 'ادائیگی' },
  footerRights: { en: '© 2026 NA Garments. All rights reserved.', ur: '© 2026 این اے گارمنٹس۔ جملہ حقوق محفوظ ہیں۔' },
  footerContactNa: { en: 'Contact NA', ur: 'این اے سے رابطہ' },

  // Floating WhatsApp
  floatingInquire: { en: 'Inquire on WhatsApp', ur: 'واٹس ایپ پر استفسار' },

  // Skip link
  skipToContent: { en: 'Skip to content', ur: 'مواد پر جائیں' },

  // Mobile menu
  menuEyebrow: { en: 'NA Garments / 2026', ur: 'این اے گارمنٹس / 2026' },
  menuClose: { en: 'Close menu', ur: 'مینو بند کریں' },
  menuOpen: { en: 'Open menu', ur: 'مینو کھولیں' },

  // Common
  loading: { en: 'Loading...', ur: 'لوڈ ہو رہا ہے...' },
};

export function t(key: string, lang: Language): string {
  const entry = copy[key];
  if (!entry) return key;
  return entry[lang];
}

export type CopyKey = keyof typeof copy;
