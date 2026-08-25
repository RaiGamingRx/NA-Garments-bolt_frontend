'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Minus, Plus, ShoppingBag, ArrowUpRight, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { useInquiry } from '@/components/providers/InquiryProvider';
import { useUI } from '@/components/providers/UIProvider';
import { t } from '@/lib/content';
import { makeWhatsApp, cartInquiryMessage } from '@/lib/whatsapp';

export function InquiryBag() {
  const { language } = useLanguage();
  const { items, removeItem, updateQuantity, isOpen, setOpen } = useInquiry();
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const prevActive = document.activeElement as HTMLElement | null;
    closeBtnRef.current?.focus();
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      prevActive?.focus();
    };
  }, [isOpen, setOpen]);

  if (!isOpen) return null;

  return (
    <div className="drawer-backdrop" onClick={() => setOpen(false)} role="dialog" aria-modal="true" aria-label={t('bagTitle', language)}>
      <aside className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-header">
          <div>
            <p className="eyebrow">{t('bagYourSelection', language)}</p>
            <h2>
              {t('bagTitle', language)} <span>{items.length}</span>
            </h2>
          </div>
          <button
            ref={closeBtnRef}
            onClick={() => setOpen(false)}
            aria-label={t('bagClose', language)}
          >
            <X size={23} />
          </button>
        </div>

        {items.length > 0 ? (
          <>
            <div className="drawer-items" aria-live="polite">
              {items.map((item, index) => (
                <div className="drawer-item" key={`${item.productId}-${item.size}-${item.color}`}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={100}
                    sizes="80px"
                    className="drawer-item-img"
                  />
                  <div className="drawer-item-info">
                    <span>{item.category} / {item.code}</span>
                    <strong>{item.name}</strong>
                    <p>{item.size} / {item.color}</p>
                    <div className="quantity">
                      <button
                        onClick={() => updateQuantity(index, -1)}
                        aria-label={`${t('bagQuantity', language)} —`}
                      >
                        <Minus size={13} />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(index, 1)}
                        aria-label={`${t('bagQuantity', language)} +`}
                      >
                        <Plus size={13} />
                      </button>
                    </div>
                  </div>
                  <button
                    className="remove-item"
                    onClick={() => removeItem(index)}
                    aria-label={`${t('bagRemove', language)} — ${item.name}`}
                  >
                    <X size={15} />
                  </button>
                </div>
              ))}
            </div>
            <div className="drawer-bottom">
              <p>{t('bagNote', language)}</p>
              <a
                className="button button-dark full-button"
                href={makeWhatsApp(cartInquiryMessage(items))}
                target="_blank"
                rel="noreferrer"
              >
                {t('bagSend', language)} <ArrowUpRight size={16} />
              </a>
            </div>
          </>
        ) : (
          <div className="empty-bag">
            <ShoppingBag size={31} />
            <p>{t('bagEmpty', language)}</p>
            <button
              className="text-link dark-link"
              onClick={() => setOpen(false)}
            >
              {t('bagBrowse', language)} <ArrowRight size={15} />
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
