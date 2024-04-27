import Image from 'next/image'
import Link from 'next/link'
import Timeline from './components/Timeline/Timeline';
import { JOBS, SKILLS } from './constants';

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-between px-6 py-8 bg-quarternary gap-4">
      <section className="hero-section flex flex-col w-full justify-between gap-4 h-[calc(100vh_-_128px)] relative md:justify-center">
        <div className="hero-info-section flex flex-col gap-2 items-center md:flex-row-reverse md:justify-center lg:justify-around">
          <div className="hero-image-section flex items-center justify-center flex-col gap-4">
            <Image src="/assets/michael-pp.jpeg" className="rounded-full" alt="hero-avatar" width={288} height={288}/>
            <div className="flex items-center justify-center gap-2 mt-2">
              <Link href="https://www.linkedin.com/in/michaeldavidjansen" target="_blank">
                <Image src="/assets/social-icons/linkedin.svg" alt="linkedin" width={30} height={30} />
              </Link>
              <Link href="https://www.youtube.com/@WebDevDynamite" target="_blank">
                <Image src="/assets/social-icons/youtube.svg" alt="youtube" width={30} height={30}  />
              </Link>
              <Image src="/assets/social-icons/instagram.svg" alt="instagram" width={30} height={30} />
              <Link href="https://github.com/MichaelDJansen" target="_blank">
                <Image src="/assets/social-icons/github.svg" alt="github" width={30} height={30} />
              </Link>
            </div>
          </div>
          <section className="hero-description">
            <h1 className="hero-description-heading text-xl font-bold my-2">Hi, I'm Michael. Nice to meet you!</h1>
            <div className="hero-description-text">
              <p>I am a web developer from South Africa with 6+ years of experience</p>
              <p>My goal is to create applications to make people's lives easier</p>
              <p>My tools of choice are React.js, SCSS, Next.js and Redux</p>
            </div>
          </section>
        </div>
        <div className="learn-more-button-container flex flex-col items-center justify-center relative animate-bounce md:absolute md:w-full md:bottom-0">
          <Link href="#">
            Learn More
          </Link>
          <Image src="/assets/chevron-down.svg" alt="arrow-down" width={24} height={24} />
        </div>
      </section>
      <section id="skills-section" className="flex flex-col items-center bg-tertiary w-full text-white rounded-2xl gap-4 p-4">
        <h2 className='text-xl font-bold'>Skills</h2>
        <section className="skill-names grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 w-full text-center">
          {SKILLS.map((skill, index) => <p>{skill}</p>)}
        </section>
        <div className="skill-logo-container w-full overflow-hidden">
          <section className="skills-logos flex row gap-2 flex-1 flex-wrap justify-center opacity-50">
            <Image src="/assets/technology-logos/react.png" alt="react-logo" width={40} height={40} />
            <Image src="/assets/technology-logos/js.png" alt="javascript-logo" width={40} height={40} />
            <Image src="/assets/technology-logos/node.png" alt="nodejs-logo" width={65} height={40} />
            <Image src="/assets/technology-logos/jest.png" alt="jest-logo" width={40} height={40} />
            <Image src="/assets/technology-logos/ts.png" alt="typescript-logo" width={40} height={40} />
            <Image src="/assets/technology-logos/sql.png" alt="sql-logo" width={40} height={40} />
            <Image src="/assets/technology-logos/sass.png" alt="sass-logo" width={54} height={40} />
            <Image src="/assets/technology-logos/next-js.png" alt="next-js-logo" width={65} height={40} />
            <Image src="/assets/technology-logos/storybook.png" alt="storybook-logo" width={35} height={40} />
          </section>
        </div>
      </section>
      <section id="experience-section">
        <h2 className="section-header text-center text-xl text-bold m-4">
          Experience
        </h2>
        <Timeline items={JOBS} />
      </section>
    </main>
  )
};

export default Home;