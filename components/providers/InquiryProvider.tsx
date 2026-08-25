'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from 'react';
import type { InquiryItem, Product } from '@/lib/types';

interface InquiryContextValue {
  items: InquiryItem[];
  addItem: (product: Product, size: string, color: string, quantity?: number) => void;
  removeItem: (index: number) => void;
  updateQuantity: (index: number, amount: number) => void;
  clearBag: () => void;
  count: number;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  lastAdded: string | null;
}

const InquiryContext = createContext<InquiryContextValue | null>(null);

const STORAGE_KEY = 'na-inquiry-bag';

export function InquiryProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<InquiryItem[]>([]);
  const [isOpen, setOpen] = useState(false);
  const [lastAdded, setLastAdded] = useState<string | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setItems(JSON.parse(stored));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }, [items]);

  const addItem = useCallback(
    (product: Product, size: string, color: string, quantity = 1) => {
      setItems((prev) => {
        const existing = prev.find(
          (item) =>
            item.productId === product.id && item.size === size && item.color === color,
        );
        if (existing) {
          return prev.map((item) =>
            item === existing ? { ...item, quantity: item.quantity + quantity } : item,
          );
        }
        return [
          ...prev,
          {
            productId: product.id,
            slug: product.slug,
            name: product.name,
            code: product.code,
            category: product.category,
            image: product.images[0],
            quantity,
            size,
            color,
          },
        ];
      });
      setLastAdded(product.id);
      setOpen(true);
      setTimeout(() => setLastAdded(null), 2000);
    },
    [],
  );

  const removeItem = useCallback((index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const updateQuantity = useCallback((index: number, amount: number) => {
    setItems((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item,
      ),
    );
  }, []);

  const clearBag = useCallback(() => setItems([]), []);

  return (
    <InquiryContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearBag,
        count: items.length,
        isOpen,
        setOpen,
        lastAdded,
      }}
    >
      {children}
    </InquiryContext.Provider>
  );
}

export function useInquiry() {
  const ctx = useContext(InquiryContext);
  if (!ctx) throw new Error('useInquiry must be used within InquiryProvider');
  return ctx;
}
