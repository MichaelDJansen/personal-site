/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Timeline from '../components/Timeline/Timeline';
import { JOBS, SKILLS, SKILL_LOGOS, SOCIAL_LINKS } from '../constants';
import { getAssetPath } from '../utils';

const Home = () => (
  <main className="flex flex-col items-center justify-between px-6 py-8 bg-quarternary gap-4 animate-[fadeIn_2s_ease-in-out]">
    <section className="hero-section flex flex-col w-full justify-between gap-4 h-[calc(100vh_-_128px)] relative md:justify-center">
      <div className="hero-info-section flex flex-col gap-2 items-center px-12 md:flex-row-reverse md:justify-center lg:justify-around">
        <div className="hero-img-section flex items-center justify-center flex-col gap-4">
          <img
            src={getAssetPath("/assets/michael-pp.jpg")}
            className="w-64 lg:w-96 aspect-square rounded-full object-cover" 
            alt="hero-avatar" 
          />
          <div className="flex items-center justify-center gap-2 mt-2">
            {SOCIAL_LINKS.map((social, index) => (
                <Link key={index} href={social.url} target="_blank">
                  <img
                    src={getAssetPath(social.iconSrc)}
                    alt={social.alt}
                    width={social.width}
                    height={social.height}
                  />
                </Link>
            ))}
          </div>
        </div>
        <section className="hero-description text-center md:text-left">
          <h1 className="hero-description-heading text-2xl md:text-4xl lg:text-6xl font-bold mb-2 md:mb-4 lg:mb-8">Hi, I&apos;m <span className="text-secondary">Michael</span>. Nice to meet you!</h1>
          <div className="hero-description-text text-lg lg:text-xl">
            <p>I am a web developer from South Africa with 9+ years of experience</p>
            <p>My goal is to create applications to make people&apos;s lives easier</p>
            <p>My tools of choice are React.js, SCSS, Next.js and Redux</p>
          </div>
        </section>
      </div>
      <div className="learn-more-button-container flex flex-col items-center justify-center relative animate-bounce md:absolute md:w-full md:bottom-0">
        <a href="#skills-section">
          Learn More
        </a>
        <img src={getAssetPath("/assets/chevron-down.svg")} alt="arrow-down" width={24} height={24} />
      </div>
    </section>
    <section id="skills-section" className="flex flex-col items-center bg-tertiary w-full text-white rounded-2xl gap-4 p-4">
      <h2 className='text-xl lg:text-2xl font-bold'>Skills</h2>
      <section className="skill-names grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 w-full text-center">
        {SKILLS.map((skill, index) => <p key={index}>{skill}</p>)}
      </section>
      <div className="skill-logo-container w-full overflow-hidden">
        <section className="skills-logos flex row gap-2 flex-1 flex-wrap justify-center opacity-50">
          {SKILL_LOGOS.map((logo, index) => (
            <img 
              key={index}
              src={getAssetPath(logo.src)} 
              alt={logo.alt} 
              width={logo.width} 
              height={logo.height} 
            />
          ))}
        </section>
      </div>
    </section>
    <section id="experience-section">
      <h2 className="section-header text-center text-xl lg:text-2xl font-bold m-4">
        Experience
      </h2>
      <Timeline items={JOBS} />
    </section>
  </main>
);

export default Home;