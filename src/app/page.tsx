import Image from 'next/image'
import Link from 'next/link'

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-between px-6 py-8 bg-quarternary">
      <section className="hero-section flex flex-col w-full justify-between gap-4">
        <div className="hero-image-section flex items-center justify-center flex-col">
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
          <h1 className="hero-description-heading">Hi, I'm Michael. Nice to meet you!</h1>
          <div className="hero-description-text">
            <p>I am a web developer from South Africa with 6+ years of experience</p>
            <p>My goal is to create applications to make people's lives easier</p>
            <p>My tools of choice are React.js, SCSS, Next.js and Redux</p>
          </div>
        </section>
        <div className="learn-more-button-container flex flex-col items-center justify-center relative animate-bounce">
          <Link href="#">
            Learn More
          </Link>
          <Image src="/assets/chevron-down.svg" alt="arrow-down" width={24} height={24} />
        </div>
      </section>
      <section id="skills-section" className="flex flex-col items-center bg-tertiary w-full text-white rounded-2xl gap-4 p-4">
        <h2 className='text-xl font-bold'>Skills</h2>
        <section className="skill-names flex justify-around w-full">
          <div>
            <p>React</p>
            <p>Node.js</p>
            <p>Jest</p>
            <p>Next.js</p>
            <p>SCSS</p>
          </div>
          <div>
            <p>TypeScript</p>
            <p>JavaScript</p>
            <p>SQL</p>
            <p>React Native</p>
            <p>Storybook.js</p>
          </div>
        </section>
        <div className="skill-logo-container w-full overflow-hidden">
          <section className="skills-logos flex row gap-2 flex-1 flex-wrap">
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
    </main>
  )
};

export default Home;