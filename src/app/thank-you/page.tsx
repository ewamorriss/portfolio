import type { Metadata } from 'next';
import '@/app/styles/global.scss';
import Section from '../components/section/section';

export const metadata: Metadata = {
  title: 'Thanks — Ewa Morriss',
  description: 'Your message has been sent.',
  // The ads conversion fires on this URL, so it must not pick up organic traffic.
  robots: { index: false, follow: false },
};

export default function ThankYou() {
  return (
    <main className="thank-you">
      <Section
        id="thank-you"
        theme="dark"
        headingType="h1"
        heading="Message Sent"
        description="Thanks for getting in touch. I'll get back to you within one working day."
        button={{
          text: 'Back to portfolio',
          href: '/',
          type: 'big',
          style: 'primary',
        }}
      />
    </main>
  );
}
