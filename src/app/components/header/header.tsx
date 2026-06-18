'use client';
import '@/app/components/header/header.scss';
import Section from '../section/section';

export default function Header() {
  return (
    <header className="main-header">
      <nav className="main-nav">
        <ul>
          <div>
            <li><a href="https://www.linkedin.com/in/ewa-morriss-858828114/" target="_blank">LinkedIn</a></li>
            <li><a href="https://github.com/ewashh" target="_blank">GitHub</a></li>
            <li className="mobile-only"><a href="mailto:ewafreelancer@gmail.com">Email</a></li>
          </div>
          <li className="desktop-only"><a href="mailto:ewafreelancer@gmail.com">ewafreelancer@gmail.com</a></li>
        </ul>
      </nav>
      <Section
        classes="main-header__inner"
        theme="dark"
      >
        <div className="main-header__img" style={{backgroundImage: 'url(/headshot.jpg)'}}>
          <div className='main-header__img-caption'>
            <span>Ewa Morriss</span>
            <span>[eh·vuh]</span>
          </div>
        </div>
        <h1 className="section__heading">Developer <br/>Meets <br/>Designer</h1>
      </Section>
    </header>
  );
}
