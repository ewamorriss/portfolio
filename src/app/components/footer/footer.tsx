import '@/app/components/footer/footer.scss'
import Section from '../section/section';
import ContactForm from '../contact-form/contact-form';

export default function Footer() {
  return (
    <div className="main-footer">
      <Section
        heading="Like What You See?"
        description="I'm available for both project-based work and long-term support."
        theme='dark'
      >
        <ContactForm theme="dark" classes="main-footer__form" />
      </Section>
      <footer>
        <span>© 2024 - {(new Date().getFullYear())}, Ewa Morriss</span>
      </footer>
    </div>
  );
}
