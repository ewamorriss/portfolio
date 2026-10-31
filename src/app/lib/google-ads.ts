// Google Ads conversion tracking. The Google tag itself is loaded by
// <GoogleAnalytics> in layout.tsx; we just add Ads as a second destination.
export const ADS_CONVERSION_ID = 'AW-456982956';

// 'Portfolio contact form' conversion action, fired from /thank-you.
export const CONTACT_FORM_SEND_TO = `${ADS_CONVERSION_ID}/CgbACJOIra8dEKyD9NkB`;

type Gtag = (...args: unknown[]) => void;

export function gtag(...args: unknown[]) {
  const fn = (window as Window & { gtag?: Gtag }).gtag;
  fn?.(...args);
}
