'use client';

import { LanguageProvider } from './LanguageProvider';
import { InquiryProvider } from './InquiryProvider';
import { UIProvider } from './UIProvider';
import type { ReactNode } from 'react';

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <InquiryProvider>
        <UIProvider>{children}</UIProvider>
      </InquiryProvider>
    </LanguageProvider>
  );
}
