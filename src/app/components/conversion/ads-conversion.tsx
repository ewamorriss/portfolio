'use client';
import { useEffect } from 'react';
import { gtag } from '@/app/lib/google-ads';

type AdsConversionProps = {
  sendTo: string;
};

// Fires once on mount. The contact form reaches /thank-you via a client-side
// push, so a URL-based conversion rule would never see a page load.
export default function AdsConversion({ sendTo }: AdsConversionProps) {
  useEffect(() => {
    gtag('event', 'conversion', { send_to: sendTo });
  }, [sendTo]);

  return null;
}
