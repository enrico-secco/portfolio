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
  description: `Portfolio website showcasing my work as a ${person.role}`,
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
        company: "Wiley",
        timeframe: "Aug 2023 - Present",
        role: "Frontend Software Engineer",
        achievements: [
          // <b>Frontend Development</b>,
          <>
            Led the transition to TypeScript, improving type safety, reducing runtime errors, and enhancing overall code maintainability, driving a more stable development environment.
          </>,
          <>
            Developed dynamic and responsive UIs using ReactJS and TypeScript, integrating seamlessly with REST APIs to deliver scalable and robust applications that improved user experience and performance.
          </>,
          <>
            Spearheaded the modernization of frontend architecture, removing deprecated packages and outdated build tools, ensuring long-term maintainability and smooth integration with evolving systems.
          </>,
          // <b>Testing & Quality Assurance</b>,
          <>
            Engineered and maintained unit tests with Jest and E2E tests with Cypress, ensuring high code quality and reliability. Refactored existing functions and applied Cypress best practices, reducing E2E test execution time from 1 hour to 25 minutes, and contributing to a 20% increase in test coverage.
          </>,
          <>
            Documented and standardized React components using Storybook, facilitating team collaboration and ensuring consistent implementation across the frontend.
          </>,
          // <b>Collaboration & Knowledge Sharing</b>
          <>
            Collaborated with backend developers in an API-first approach, ensuring seamless integration and alignment between frontend and backend services, resulting in a more efficient development proces
          </>,
          <>
            Mentored Quality Engineers (QEs) in a Dojo-style project, guiding them through Cypress testing and best practices, improving their ability to write and maintain tests, enhancing overall team capability.
          </>,
          <>
            Introduced code reviews and knowledge-sharing sessions, fostering a culture of continuous improvement and ensuring the team was up to date with the latest technologies and best practices.
          </>,
          <>
            Configured and documented projects to run in Docker, streamlining development and deployment processes, improving consistency across environments, and accelerating development cycles with efficient setup using make commands.
          </>,
          <>
            Established and enforced coding standards and best practices, ensuring the codebase remained maintainable, scalable, and aligned with the project's long-term goals.
          </>,
          <>
            Actively participated as a developer within a Scrum team, adhering to Agile principles, engaging in daily stand-ups, refinement sessions, and retrospectives, which ensured continuous feedback and iterative improvement within the project.
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
            Led the complete overhaul of a legacy web application by migrating it to React and TypeScript, driving a 30% increase in client sales, a 40% reduction in bug reports, and a 60% decrease in support tickets.
          </>,
          <>
            Architected high-performance frontend solutions based on design system, by creating reusable components using React Hook Form, Axios, and Redux, significantly improving code maintainability and efficiency. By introducing reusable components, the development cycle time reduced 25%, enabling faster feature delivery.
          </>,
          <>
            Transformed the online sales experience by leading the development of a scalable web-based system for online health plan sales, leading to a 15% increase in sales.
          </>,
          <>
            Led the creation of a commercial web platform that optimized sales workflows and prospects for health plan representatives, improving usability and performance, and driving a 20% increase in conversions.
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
            Refined critical backend processes by refactoring a major reimbursement functionality, resolving performance bottlenecks.
          </>,
          <>
            Integrated a credit card payment processing solution, reducing payment-related issues by 30%, and ensuring secure and efficient transaction handling.
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
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-02.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/projects/project-01/cover-03.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
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
