import { siteConfig } from './config';
import type { InquiryItem, Product } from './types';

export function makeWhatsApp(message: string): string {
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function generalInquiryMessage(): string {
  return 'Hello NA Garments, I would like to make an inquiry.';
}

export function wholesaleInquiryMessage(): string {
  return 'Hello NA Garments, I would like to make a wholesale or export inquiry.';
}

export function exportInquiryMessage(): string {
  return 'Hello NA Garments, I would like to start an export inquiry for mens and kids ready-made garments.';
}

export function learnMoreMessage(): string {
  return 'Hello NA Garments, I would like to learn more about your ready-made garments.';
}

export function quoteMessage(): string {
  return 'Hello NA Garments, I would like to request a quote.';
}

export function contactMessage(): string {
  return 'Hello NA Garments, I would like to contact NA Garments.';
}

export function productInquiryMessage(
  product: Product,
  size?: string,
  color?: string,
  quantity?: number,
): string {
  const lines = [
    `Hello NA Garments,`,
    `I am interested in ${product.name} (${product.code}).`,
  ];
  if (size) lines.push(`Size: ${size}`);
  if (color) lines.push(`Color: ${color}`);
  if (quantity) lines.push(`Quantity: ${quantity} pcs`);
  lines.push('Please provide availability, MOQ, pricing and international shipping details.');
  return lines.join('\n');
}

export function cartInquiryMessage(items: InquiryItem[]): string {
  if (items.length === 0) return generalInquiryMessage();
  if (items.length === 1) {
    const item = items[0];
    return productInquiryMessage(
      {
        id: item.productId,
        slug: item.slug,
        name: item.name,
        code: item.code,
        category: item.category,
        garmentType: 'Shirt',
        description: '',
        images: [item.image],
        sizes: [],
        colors: [],
        material: '',
        moq: '',
        availability: '',
        seasonId: '',
        collectionId: '',
        status: 'active',
        featured: false,
        newProduct: false,
        order: 0,
        createdAt: '',
        updatedAt: '',
      },
      item.size,
      item.color,
      item.quantity,
    );
  }
  const detail = items
    .map(
      (item, i) =>
        `${i + 1}. ${item.name} (${item.code}) — ${item.quantity} pcs, Size ${item.size}, Color ${item.color}`,
    )
    .join('\n');
  return `Hello NA Garments,\nI would like to inquire about the following:\n${detail}\n\nPlease provide availability, MOQ, pricing and international shipping details.`;
}
