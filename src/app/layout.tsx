import type { Metadata } from "next";
import "@/app/styles/global.scss";
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script'
import { ADS_CONVERSION_ID } from '@/app/lib/google-ads'

export const metadata: Metadata = {
  title: "Ewa Morriss",
  description: "I’m a front-end developer and UI designer with over a decade of professional experience ranging from small, digital agencies to big software companies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </head>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-7SB8P32Z7X" />
      {/* Adds Google Ads as a second destination on the tag GoogleAnalytics
          already loaded. Queued on dataLayer, so load order doesn't matter. */}
      <Script id="google-ads-tag" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('config','${ADS_CONVERSION_ID}');`}
      </Script>
    </html>
  );
}
