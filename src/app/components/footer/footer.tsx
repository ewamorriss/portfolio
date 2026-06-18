import '@/app/components/footer/footer.scss'
import Section from '../section/section';

export default function Footer() {
  return (
    <div className="main-footer">
      <Section
        heading="Like What You See?"
        description="I'm available for both project-based and long-term arrangements."
        button={{
          text: "Get in touch",
          hoverText: 'ewafreelancer@gmail.com',
          href: 'mailto:ewafreelancer@gmail.com',
          type: 'big',
          style: 'primary'
        }}
        theme='dark'
      >
      </Section>
      <footer>
        <div>
          <span className='mobile-block'>Work with me via:</span>
          <span><a href="https://ecomnoon.com/ewa-morriss" target="_blank">Ecom Noon</a>,</span>
          <span><a href="https://www.storetasker.com/experts/ewa-morriss" target="_blank">Storetasker</a>,</span>
          <span><a href="https://www.upwork.com/freelancers/ewam5" target="_blank">Upwork</a></span>
        </div>
        <span>© 2024 - {(new Date().getFullYear())}, Ewa Morriss</span>
      </footer>
    </div>
  );
}
