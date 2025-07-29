import { TTimelineItemProps } from "./components/Timeline/TimelineItem/TimelineItem";

export const JOBS: Array<TTimelineItemProps> = [
    {
        companyName: 'xneelo',
        companyStartDate: new Date(2023, 11, 1),
        jobPosition: 'Software Engineer',
        jobDescription: 'I created new features and maintenance on web applications using React.js, Jest as well as API\'s using Ruby on Rails and rspec. I managed front-end expectations and assist in directing future decisions around UX',
        jobSkills: ['React', 'Ruby on Rails', 'Jest', 'Cypress'],
    },
    {
        companyName: 'Rank Interactive',
        companyStartDate: new Date(2022, 4, 1),
        companyEndDate: new Date(2023, 8, 1),
        jobPosition: 'Senior Software Engineer',
        jobDescription: 'I bring new features from design to production, mentor junior developers, collaborate with UX design and keep the web application modern and standardized',
        jobSkills: ['React', 'TypeScript', 'GraphQL', 'Storybook'],
    },
    {
        companyName: 'Rank Interactive',
        jobPosition: 'Software Engineer',
        companyStartDate: new Date(2020, 11, 1),
        companyEndDate: new Date(2022, 5, 1),
        jobDescription: 'I create features for web applications using modern JavaScript frameworks and libraries',
        jobSkills: ['React', 'SCSS', 'Jest', 'Storybook.js'],
    },
    {
        companyName: 'Afrozaar',
        jobPosition: 'JavaScript Developer',
        companyStartDate: new Date(2018, 2, 1),
        companyEndDate: new Date(2020, 11, 1),
        jobDescription: 'I created various web applications using Typescript, modern JavaScript frameworks and libraries and deploying them to AWS cloud infrastructure',
        jobSkills: ['React', 'TypeScript', 'AWS', 'Next.JS'],
    },
    {
        companyName: 'OurHood',
        jobPosition: 'Software Developer',
        companyStartDate: new Date(2016, 9, 1),
        companyEndDate: new Date(2018, 1, 1),
        jobDescription: 'I maintained web applications using JavaScript and deploying to AWS cloud infrastructure and various application stores(Play Store, App Store)',
        jobSkills: ['JavaScript', 'Node.js', 'AWS', 'React Native'],
    },
    {
        companyName: 'Woolworths', 
        companyStartDate: new Date(2015, 7, 1),
        companyEndDate: new Date(2016, 8, 1),
        jobPosition: 'IT Contractor', 
        jobDescription: 'I analysed trends in incidents, requests and changes using the MS Office Suite. I also applied data fixes using SQL', 
        jobSkills: ['SQL', 'Word', 'Visio', 'Oracle APEX']
    },
];

export const SKILLS: Array<string> = [
    "React",
    "Node.js",
    "Jest",
    "Next.js",
    "SCSS",
    "TypeScript",
    "JavaScript",
    "SQL",
    "React Native",
    "Storybook.js",
];

export const SKILL_LOGOS = [
    {
        src: "/assets/technology-logos/react.png",
        alt: "react-logo",
        width: 40,
        height: 40
    },
    {
        src: "/assets/technology-logos/js.png",
        alt: "javascript-logo",
        width: 40,
        height: 40
    },
    {
        src: "/assets/technology-logos/node.png",
        alt: "nodejs-logo",
        width: 65,
        height: 40
    },
    {
        src: "/assets/technology-logos/jest.png",
        alt: "jest-logo",
        width: 40,
        height: 40
    },
    {
        src: "/assets/technology-logos/ts.png",
        alt: "typescript-logo",
        width: 40,
        height: 40
    },
    {
        src: "/assets/technology-logos/sql.png",
        alt: "sql-logo",
        width: 40,
        height: 40
    },
    {
        src: "/assets/technology-logos/sass.png",
        alt: "sass-logo",
        width: 54,
        height: 40
    },
    {
        src: "/assets/technology-logos/next-js.png",
        alt: "next-js-logo",
        width: 65,
        height: 40
    },
    {
        src: "/assets/technology-logos/storybook.png",
        alt: "storybook-logo",
        width: 35,
        height: 40
    }
];