/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Timeline from '../components/Timeline/Timeline';
import { JOBS, SKILLS, SKILL_LOGOS, SOCIAL_LINKS } from '../constants';
import { getAssetPath } from '../utils';

const Home = () => (
  <div className="flex flex-col items-center justify-between px-6 py-8 bg-quarternary gap-4 animate-[fadeIn_0.8s_ease-in-out]">
    <section id="hero-section" className="hero-section flex flex-col w-full justify-between gap-4 h-[calc(100vh_-_128px)] relative md:justify-center" aria-labelledby="hero-heading">
      <div className="hero-info-section flex flex-col gap-2 items-center px-12 md:flex-row-reverse md:justify-center lg:justify-around">
        <div className="hero-img-section flex items-center justify-center flex-col gap-4">
          <img
            src={getAssetPath("/assets/michael-pp.jpg")}
            className="w-64 lg:w-96 aspect-square rounded-full object-cover" 
            alt="Michael David Jansen, web developer profile photo"
            width={384}
            height={384}
          />
          <div className="flex items-center justify-center gap-2 mt-2">
            {SOCIAL_LINKS.map((social, index) => (
                <Link 
                  key={index} 
                  href={social.url} 
                  target="_blank" 
                  aria-label={`Visit ${social.alt} profile`}
                  className="hover:scale-110 hover:opacity-80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
                >
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
        <div className="hero-description text-center md:text-left">
          <h1 id="hero-heading" className="hero-description-heading text-2xl md:text-4xl lg:text-6xl font-bold mb-2 md:mb-4 lg:mb-8">Hi, I&apos;m <span className="text-secondary">Michael</span>. Nice to meet you!</h1>
          <div className="hero-description-text text-lg lg:text-xl">
            <p>I am a web developer from South Africa with 9+ years of experience</p>
            <p>My goal is to create applications to make people&apos;s lives easier</p>
            <p>My tools of choice are React.js, SCSS, Next.js and Redux</p>
          </div>
        </div>
      </div>
      <div className="learn-more-button-container flex flex-col items-center justify-center relative animate-bounce md:absolute md:w-full md:bottom-0">
        <a 
          href="#skills-section" 
          aria-label="Scroll down to skills section"
          className="hover:text-secondary hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1"
        >
          Learn More
        </a>
        <img
          src={getAssetPath("/assets/chevron-down.svg")} 
          alt="Scroll down to skills section" 
          width={24} 
          height={24}
          className="hover:scale-110 transition-transform duration-200"
        />
      </div>
    </section>
    <section id="skills-section" className="flex flex-col items-center bg-tertiary w-full text-white rounded-2xl gap-4 p-4" aria-labelledby="skills-heading">
      <h2 id="skills-heading" className='text-xl lg:text-2xl font-bold'>Skills</h2>
      <div className="skill-names grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 w-full text-center">
        {SKILLS.map((skill, index) => <p key={index}>{skill}</p>)}
      </div>
      <div className="skill-logo-container w-full overflow-hidden">
        <div className="skills-logos flex row gap-2 flex-1 flex-wrap justify-center opacity-50" aria-label="Technology logos">
          {SKILL_LOGOS.map((logo, index) => (
            <img 
              key={index}
              src={getAssetPath(logo.src)} 
              alt={logo.alt} 
              width={logo.width} 
              height={logo.height}
            />
          ))}
        </div>
      </div>
    </section>
    <section id="experience-section" aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="section-header text-center text-xl lg:text-2xl font-bold m-4">
        Experience
      </h2>
      <Timeline items={JOBS} />
    </section>
  </div>
);

export default Home;