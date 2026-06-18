import '@/app/styles/global.scss';
import Image from 'next/image'
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Section from './components/section/section';
import Button from './components/button/button';
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <Header/>
    <main>
      <Section
        id="about"
      >
        <div>
          <p className="section__description">
            <span>{`I’m a front-end developer and designer with over a decade of professional experience ranging from small, digital agencies to big software companies.`}</span>
            <br/><br/>
            <span>📍 Southampton, UK</span>
          </p>
        </div>
        <p className="section__description bigger-font-size">{`In recent years, my work has centered around Shopify. I now design and build premium themes for the `}<Link href="https://themes.shopify.com/designers/ecomnoon" target="_blank">official Shopify Theme Store</Link> {`and help clients with all aspects of their Shopify stores.`}</p>
      </Section>
      <Section
        id="big-brands"
        subheading="I've worked with"
        heading="Big Brands"
        items={[
          "BBC", "John Lewis", "Barclaycard", "Expedia", 
          "Topshop", "River Island", "New Look", "Yodel", "About:Blank"
        ]}
      >
      </Section>
      <Section
        id="no-plans"
        layout="1-2"
        type="work"
        subheading="Featured work &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Shopify Plus"
        heading="About:Blank"
        description="A Shopify Plus store I’ve worked on in collaboration with No Plans. My job was to convert Figma designs into a Shopify theme."
        theme="grey"
        button={{
          text: 'Visit website',
          href: 'https://about---blank.com/'
        }}
      >
        <a href="https://about---blank.com/" target="_blank">
          <Image
            src="/about-blank.png"
            width={1248}
            height={704}
            alt="about:blank preview"
          />
        </a>
      </Section>
      <Section
        id="takeout"
        layout="1-2"
        subheading="Featured work"
        heading="Takeout"
        description="A Shopify theme for physical businesses ready to scale online. Originally designed for restaurants and food sellers, it now supports a broad range of merchants. Fully designed and developed by me."
        type="work"
        button={{
          text: 'View on Shopify Theme Store',
          href: 'https://themes.shopify.com/themes/takeout/'
        }}
      >
        <ul>
          <li>
            <a href="https://themes.shopify.com/themes/takeout/" target="_blank">
              <Image
                src="/takeout.png"
                width={1248}
                height={704}
                alt="Takeout preview"
              />
            </a>
          </li>
        </ul>
      </Section>
      <Section
        id="demo-stores"
        layout="1-1"
        type="work"
        subheading="Featured work"
        heading="Shopify Stores"
        description="Demo stores for Takeout theme. Fully designed and developed by me. "
        theme="grey"
      >
        <ul>
          <li>
            <a href="https://macho-nacho-demo.myshopify.com/" target="_blank">
              <Image
                src="/macho-nacho.png"
                width={2000}
                height={1128}
                alt="Macho Nacho preview"
              />
            </a>
            <h3>Macho Nacho</h3>
            <a href="https://macho-nacho-demo.myshopify.com/" target="_blank">Visit website</a>
          </li>
          <li>
            <a href="https://potion-demo.myshopify.com/" target="_blank">
              <Image
                src="/potion.png"
                width={2000}
                height={1128}
                alt="Potion preview"
              />
            </a>
            <h3>Potion</h3>
            <a href="https://potion-demo.myshopify.com/" target="_blank">Visit website</a>
          </li>
          <li>
            <a href="https://naughty-vegan-demo.myshopify.com/" target="_blank">
              <Image
                src="/naughty-vegan.png"
                width={2000}
                height={1128}
                alt="Naughty Vegan preview"
              />
            </a>
            <h3>Naughty Vegan</h3>
            <a href="https://naughty-vegan-demo.myshopify.com/" target="_blank">Visit website</a>
          </li>
          <li>
            <a href="https://crumbs-demo.myshopify.com/" target="_blank">
              <Image
                src="/crumbs.png"
                width={2000}
                height={1128}
                alt="Crumbs preview"
              />
            </a>
            <h3>Crumbs</h3>
            <a href="https://crumbs-demo.myshopify.com/" target="_blank">Visit website</a>
          </li>
          <li>
            <a href="https://orchid-demo-store.myshopify.com/" target="_blank">
              <Image
                src="/orchid.png"
                width={2000}
                height={1128}
                alt="Orchid preview"
              />
            </a>
            <h3>Orchid</h3>
            <a href="https://orchid-demo-store.myshopify.com/" target="_blank">Visit website</a>
          </li>
          <li>
            <a href="https://casa-italiana-demo.myshopify.com/" target="_blank">
              <Image
                src="/casa-italiana.png"
                width={2000}
                height={1128}
                alt="Casa Italiana preview"
              />
            </a>
            <h3>Casa Italiana</h3>
            <a href="https://casa-italiana-demo.myshopify.com/" target="_blank">Visit website</a>
          </li>
          <li>
            <a href="https://wasabi-demo.myshopify.com/" target="_blank">
              <Image
                src="/wasabi.png"
                width={2000}
                height={1128}
                alt="Wasabi preview"
              />
            </a>
            <h3>Wasabi</h3>
            <a href="https://wasabi-demo.myshopify.com/" target="_blank">Visit website</a>
          </li>
        </ul>
      </Section>
      <Section
        id="superrb"
        layout="1-1"
        type="work"
        subheading="Featured work"
        heading="Shopify Stores"
        description="Stores I’ve worked on in collaboration with Superrb. My job was to convert Figma designs into Shopify themes."
      >
        <ul>
        <li>
            <a href="https://rioteliquid.com/" target="_blank">
              <video autoPlay loop muted width="100%">
                <source src="/riot.webm" type="video/webm" />
              </video>
            </a>
            <h3>Riot E-liquid</h3>
            <a href="https://rioteliquid.com/" target="_blank">Visit website</a>
          </li>
          <li>
            <a href="https://mozzocoffee.com/" target="_blank">
              <Image
                src="/mozzo.png"
                width={1248}
                height={704}
                alt="Mozzo Coffee preview"
              />
            </a>
            <h3>Mozzo Coffee</h3>
            <a href="https://mozzocoffee.com/" target="_blank">Visit website</a>
          </li>
        </ul>
      </Section>
      <Section
        id="ecom-noon"
        layout="1-2"
        type="work"
        subheading="Featured work"
        heading="Ecom Noon"
        description="A Next.js website I designed and developed for Ecom Noon."
        button={{
          text: 'Visit Website',
          hoverText: 'ecomnoon.com',
          href: 'https://ecomnoon.com/'
        }}
        theme="grey"
      >
        <a href="https://ecomnoon.com/" target="_blank">
          <Image
            src="/ecomnoon.png"
            width={1248}
            height={704}
            alt="Ecom Noon preview"
          />
        </a>
      </Section>
      <Section
        id="dot-studio"
        layout="1-2"
        type="work"
        subheading="Featured work"
        heading="Dot Studio"
        description="A Next.js website I designed and developed for Dot Studio."
        button={{
          text: 'Visit Website',
          hoverText: 'dotstudio.uk',
          href: 'https://dotstudio.uk/'
        }}
      >
        <a href="https://dotstudio.uk/" target="_blank">
          <Image
            src="/dotstudio.png"
            width={1248}
            height={704}
            alt="Dot Studio preview"
          />
        </a>
      </Section>
      <Section
        id="dot-studio"
        type="work"
      >
        <div>
          <h3>Component Library</h3>
          <p className="section__description"></p>
          <Button text="Visit Storybook" hoverText="dotstudio.uk/storybook" href="https://dotstudio.uk/storybook" />
          <br/><br/><br/><br/>
        </div>
        <iframe src="https://dotstudio.uk/storybook/"></iframe>
      </Section>
      <Section
        id="wordpress"
        layout="1-1"
        type="work"
        subheading="Featured work"
        heading="Wordpress"
        description="Websites I’ve worked on while at Chaptr."
        theme="grey"
      >
        <ul>
          <li>
            <a href="https://dominopublishingco.com/" target="_blank">
              <Image
                src="/domino-publishing.png"
                width={1200}
                height={649}
                alt="Domino publishing preview"
              />
            </a>
            <h3>Domino Publishing</h3>
            <a href="https://dominopublishingco.com/" target="_blank">Visit website</a>
          </li>
          <li>
            <a href="https://www.doublesixrights.com/" target="_blank">
              <video autoPlay loop muted width="100%">
                <source src="/doublesixrights-optimised.webm" type="video/webm" />
              </video>
            </a>
            <h3>Double Six Rights</h3>
            <a href="https://www.doublesixrights.com/" target="_blank">Visit website</a>
          </li>
        </ul>
      </Section>
      <Section
        id="tech"
        heading="Technical Expertise"
        items={[
          "HTML", "SCSS", "Tailwind CSS", "JavaScript", "TypeScript", "React", "Next.js", "Gatsby", "Jest", "Git", "Npm", "Yarn", 
          "Storybook", "Shopify", "Shopify Plus", "Liquid", "Contentful", "Wordpress", "Figma"
        ]}
      >
      </Section>
      <Section
        id="testimonials"
        heading="Testimonials"
        theme="grey"
      >
        <div className='grid-2'>
          <div className='tile'>
            <p>{`"Ewa was a huge help to us in implementing and designing complex Shopify sections. She's very fast, professional, and solution-oriented – highly recommended. Thank you, Ewa!"`}</p>
            <br/>
            <span className='mono'>Noel Hekking - Founder</span>
            <br/>
            <a href="https://soberciety.de/" target="_blank">soberciety.de</a>
          </div>
          <div className='tile'>
            <p>{`"Ewa has joined our team for one of our biggest e-commerce builds to date. She is highly professional when it comes to proactivity, communication and importantly always delivering on time. Ewa is clearly experienced, with deep knowledge of Shopify’s architecture and she is able to lift the platforms capabilities to create great new value. During the project, she is very responsive, takes on feedback positively, and is eager to learn and push herself to grow."`}</p>
            <br/>
            <span className='mono'>Adrien Picard - Tech Lead</span>
            <br/>
            <a href="https://noplans.studio/" target="_blank">noplans.studio</a>
          </div>
          <div className='tile'>
            <p>{`"Ewa has been the best developer for our Shopify store and custom coding. If you do any custom coding it's important to work with someone like Ewa who will make sure it's done right from the beginning. We made the mistake of working with other developers on here that built code and store that is riddled with coding issues. So you may get something that works at the time but later falls a part, is super slow, unsecure or runs into several issues when making updates/changes. So you end up spending much more time, money, and headaches in the long run. Ewa was able to organize our site/coding and clean things up. She was by far the most knowledgeable developer we worked with. She also is a great designer and can assure the site looks as good as it performs. If you need a pro developer or designer, work with Ewa."`}</p>
            <br/>
            <span className='mono'>Thomas Tapp - Founder</span>
            <br/>
            <a href="https://tappbrothers.com/" target="_blank">tappbrothers.com</a>
          </div>
          <div className='tile'>
            <p>{`"I've worked with Ewa on many projects, and am always happy with the care and attention she takes. She is great at listening to feedback, but also at suggestions when she has great ideas. 100% would recommend."`}</p>
            <br/>
            <span className='mono'>Rachel Wallis - Product Designer</span>
            <br/>
            <a href="https://rachel-wallis.com/" target="_blank">rachel-wallis.com</a>
          </div>
        </div>
      </Section>
    </main>
    <Footer/>
    </>
  );
}
