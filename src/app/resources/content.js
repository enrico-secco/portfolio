import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Enrico",
  lastName: "Secco",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Frontend Software Engineer",
  avatar: "/images/avatar.jpg",
  location: "Brazil", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Portuguese", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/enrico-secco",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/enrico-secco",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:enricosecco@edu.unifil.br",
  },
];

const home = {
  label: "Home",
  title: `${person.name}`,
  description: `${person.name} portfolio website as a ${person.role}`,
  headline: <>Frontend Software Engineer</>,
  subline: (
    <>
      Crafting high-performance UIs with React, Next.js, and business-driven impact.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        As a frontend developer with 5 years of experience, I build dynamic, user-centric web applications with JavaScript, TypeScript, React, and Next.js. I don’t just write code—I craft seamless digital experiences that solve real-world problems.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Wiley - John Wiley & Sons, Inc.",
        timeframe: "Aug 2023 - Present",
        role: "Frontend Software Engineer",
        achievements: [
          // <b>Frontend Development</b>,
          <>
            Participated on Wiley's ecommerce replatform using React, Node and GraphQL, reducing operational costs in 90%, and increasing revenue
            in 10%.
          </>,
          <>
            Led the modernization of a frontend project, removing deprecated packages and code maintainability by 20% by transitioning from
            JavaScript to TypeScript.
          </>,
          // <b>Testing & Quality Assurance</b>,
          <>
            Mentored Quality Engineers (QEs) in a Dojo-style project, guiding them through Cypress testing and best practices, improving their ability to write and maintain tests, enhancing overall team capability.
          </>,
          <>
            Mentored Quality Engineers and engineered unit tests with Jest and refactored E2E tests using Cypress, reducing execution time by over
            60% and contributing to a 20% increase in test coverage.
          </>,
          // <b>Collaboration & Knowledge Sharing</b>
          <>
            Collaborated with backend developers in an API-first approach, ensuring seamless integration and alignment between frontend and backend services, resulting in a more efficient development process.
          </>,
          <>
            Configured and documented projects to run in Docker, streamlining development and deployment processes, improving consistency across environments, and accelerating development cycles with efficient setup using make commands.
          </>

        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Solus Saúde",
        timeframe: "Jan 2021 - Aug 2023",
        role: "Fullstack Software Engineer",
        achievements: [
          // <b>Frontend Development</b>,
          <>
            Contributed to a 20% increase in sales and a 30% drop in support tickets, by refactoring a legacy web application into a modern React and
            TypeScript stack, improving performance, UI consistency, and maintainability.
          </>,
          <>
            Architected high-performance frontend solutions based on design system, by creating reusable components using React Hook Form, Axios, and Redux, significantly improving code maintainability and efficiency. By introducing reusable components, the development cycle time reduced 25%, enabling faster feature delivery.
          </>,
          <>
            Led the development of an online health plan sales platform that improved the purchase experience and contributed to an estimated 10–
            15% increase in sales, based on client feedback.
          </>,
          <>
            Enhanced platform security by implementing a two-factor authentication system, boosting user trust and compliance with security standards.
          </>,

          // <b>Backend Development</b>,
          <>
            Developed and maintained Delphi REST APIs using the MVC pattern, and maintained
            legacy Node.js APIs, ensuring seamless integration and functionality during the transition to new systems.
          </>,
          <>
            Rebuilt reimbursement architecture, eliminating performance bottlenecks and increasing system reliability by 20%.
          </>,
          <>
            Reduced payment issues by 30% with a new credit card processing solution.
          </>,

          // <b>DevOps & Infrastructure</b>,
          <>
            Engineered and managed Linux-based development and production environments using Docker and Nginx, streamlining deployment pipelines and ensuring robust application performance.
          </>,

          // <b>Leadership & Collaboration</b>,
          <>
            Participated in resolving complex bugs and optimizing workflows, conducting targeted training for support teams to enable faster issue resolution and increase operational efficiency.
          </>,
        ],
        images: [],
      },
      {
        company: "Unifil - Centro Universitário Filadélfia",
        timeframe: "Mar 2020 - Dec 2020",
        role: "Frontend Intern",
        achievements: [
          // <b>Frontend Development</b>,
          <>
            Worked on modernizing a legacy electronic voting system by refactoring it from Class Components to Functional Components in React,
            introducing React Hooks, improving maintainability, and aligning with modern development practices.
          </>,
          <>
            Integrated frontend with a Java Spring Boot backend by automating the candidate import process from an external portal, replacing
            manual CSV uploads.
          </>
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Unifil - Centro Universitário Filadélfia",
        timeframe: "2019 - 2023",
        description: <>Software Engineering Bachelor</>,
      }
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Frontend",
        description: <>Javascript, Typescript, NextJS, React, React Native, Redux, GraphQL, TailwindCSS, HTML, CSS</>,
        // optional: leave the array empty if you don't want to display images
        // images: [
        //   {
        //     src: "/images/projects/project-01/cover-02.jpg",
        //     alt: "Project image",
        //     width: 3,
        //     height: 3,
        //   },
        // ],
      },
      {
        title: "Backend",
        description: <>NodeJS, Delphi, SQL, Postgres, JSON, REST, Prisma, Firebase</>,
        // optional: leave the array empty if you don't want to display images
        // images: [
        //   {
        //     src: "images/skills/nextjs.svg",
        //     alt: "Project image",
        //     width: 3,
        //     height: 3,
        //   },
        // ],
      },
      {
        title: "Development & Operations",
        description: <>Docker, Nginx, Cypress, Playwright, Jest, Git, GitHub, GitHub Actions, CI/CD, Agile (Scrum)</>,
        // optional: leave the array empty if you don't want to display images
        // images: [
        //   {
        //     src: "images/skills/nextjs.svg",
        //     alt: "Project image",
        //     width: 3,
        //     height: 3,
        //   },
        // ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
