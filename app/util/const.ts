import aiTodoList from "@/app/Media/Photos/ai-todo-list.png";
// import yumble from "@/app/Media/Photos/yumble.png";
// import boozer from "@/app/Media/Photos/boozer.png";
// import toolshare from "@/app/Media/Photos/toolshare.png";
import danodeamedia from "@/app/Media/Photos/danodeamedia.png";
import tonesmith from "@/app/Media/Photos/tonegrid.png";
import articleBuilder from "@/app/Media/Photos/article-builder.png";
import wirePaymentFlow from "@/app/Media/Photos/wire-payment-form.png";

import Express from "@/app/Media/Icons/Express.svg";
import MongoDB from "@/app/Media/Icons/MongoDB.svg";
import MUI from "@/app/Media/Icons/MUI.svg";
import Next from "@/app/Media/Icons/Next.svg";
import Node from "@/app/Media/Icons/Node.svg";
import Postgres from "@/app/Media/Icons/Postgres.svg";
import Rails from "@/app/Media/Icons/Rails.svg";
import React from "@/app/Media/Icons/React.svg";
import Redux from "@/app/Media/Icons/Redux.svg";
import StyledComponents from "@/app/Media/Icons/StyledComponents.svg";
import TypeScript from "@/app/Media/Icons/TypeScript.svg";
import xState from "@/app/Media/Icons/xState.svg";

type WorkExperienceItem = {
  featured: boolean;
  id: number;
  company: string;
  title: string;
  dates: string;
  responsibilities: string[];
  technologies?: string[];
};

export const experience: WorkExperienceItem[] = [
  {
    featured: true,
    id: 1,
    company: "TD Bank / TD Securities",
    title: "UI Architect / Senior Software Engineer",
    dates: "February 2025 - present",
    responsibilities: [
      "Built and maintained a complex multi-step payments workflow using React, TypeScript, and React Hook Form in a compliance-sensitive banking environment",
      "Led frontend architecture decisions to stabilize and scale a 9-step internal form used by hundreds of employees across ~40 branches",
      "Implemented robust validation patterns and conditional business logic in React, eliminating inconsistent state and improving data integrity across steps",
      "Developed accessible, user-friendly form experiences using Material UI (MUI), improving keyboard navigation and error visibility",
      "Collaborated with backend teams across Java-based services to integrate APIs and ensure reliable data flow through the application",
      "Advocated for and contributed to improvements in CI/CD pipelines, testing practices, and code quality standards (Vitest, SonarQube)",
    ],
    technologies: ["React", "TypeScript", "React Hook Form", "MUI", "Vitest", "SonarQube"],
  },
  {
    featured: true,
    id: 2,
    company: "Care/of",
    title: "Software Engineer (Full Stack / CMS)",
    dates: "June 2022 - July 2024",
    responsibilities: [
      "Built and maintained customer-facing features and internal tooling exclusively in a Next.js + React + TypeScript environment for a high-traffic eCommerce platform",
      "Owned the end-to-end technical lifecycle of a 350+ page article ecosystem, supporting scalable SEO content delivery and organic growth",
      "Developed a custom Markdown-based Article Builder tool that empowered non-technical stakeholders to publish complex HTML modules with minimal engineering involvement",
      "Architected React Portals to inject interactive, stateful components into CMS-rendered Next.js pages, bridging the gap between static content performance and rich interactivity",
      "Contributed across the full stack to improve content workflows, publishing velocity, and user-facing commerce experiences",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js"],
  },
  {
    featured: true,
    id: 3,
    company: "Comcast Business",
    title: "Technical Lead / Senior Software Engineer",
    dates: "June 2021 - June 2022",
    responsibilities: [
      "Technical Lead for the Internet Dashboard launch, successfully scaling the platform to General Availability for 1.8M enterprise users",
      "Directed a front-end team of three, overseeing the implementation of high-stakes features including the integrated Internet Speed Test",
      "Implemented XState for finite state machine management, modeling complex asynchronous transitions (idle, loading, success, error) to ensure system reliability",
      "Synthesized business requirements with technical constraints to deliver a high-performance, resilient user experience",
    ],
    technologies: ["React", "TypeScript", "XState", "MUI"],
  },
  {
    featured: true,
    id: 4,
    company: "American Express",
    title: "Software Engineer",
    dates: "June 2020 - June 2021",
    responsibilities: [
      "Developed the architectural Proof of Concept (PoC) to successfully bridge and migrate legacy Angular modules into a modern React ecosystem",
      "Maintained and optimized financial applications within a Redux/React architecture, ensuring 99.9% uptime for critical banking tools",
      "Mastered legacy frameworks rapidly to ensure zero-interruption service during massive platform migrations",
    ],
    technologies: ["React", "Redux", "JavaScript", "Angular", "Express", "Bootstrap"],
  },
  {
    featured: false,
    id: 5,
    company: "AllSocial",
    title: "Senior Software Engineer",
    dates: "Dec 2019 - Apr 2020",
    responsibilities: [
      "Architected a greenfield social media platform featuring complex real-time interactions and high-concurrency data flows",
      "Collaborated directly with the Head of UX to translate high-fidelity designs into a responsive, performant web application",
      "Operated autonomously in a high-speed, distributed team environment to meet aggressive market-entry deadlines",
    ],
    technologies: ["React", "Redux", "JavaScript", "CSS"],
  },
  {
    featured: false,
    id: 6,
    company: "Attck / TimeRepublik",
    title: "Front End Developer",
    dates: "May 2019 - Dec 2019",
    responsibilities: [
      "Rapidly developed high-fidelity interactive applications for diverse agency clients, prioritizing pixel-perfect UI and performance",
      "Managed the full front-end lifecycle from design handoff to QA and deployment within a fast-paced agency setting",
    ],
    technologies: ["React", "Redux", "JavaScript", "CSS"],
  },
  {
    featured: false,
    id: 7,
    company: "Crane.ai",
    title: "React Developer",
    dates: "April 2018 - Feb 2019",
    responsibilities: [
      "Engineered a MERN-stack AI Website Builder that secured multiple 'Product of the Month' accolades on ProductHunt",
      "Designed and deployed the administrative dashboard, converting visual specs into a functional full-stack management tool",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB"],
  },
];

export const education = [
  {
    featured: true,
    isFlexColumn: true,
    id: 1,
    company: "Rutgers University",
    title: "Bachelor of Arts in Music (Violin Performance)",
    dates: "2007",
    responsibilities: [
      "Dual focus on technical mastery and pedagogical theory (K-12 Teaching Certificate)",
      "Leadership roles in various ensembles, emphasizing multi-instrumental proficiency and cross-functional coordination",
    ],
  },
  {
    featured: true,
    isFlexColumn: true,
    id: 2,
    company: "General Assembly / Flatiron School",
    title: "UX Design & Software Engineering Immersives",
    dates: "2017-2018",
    responsibilities: [
      "Accelerated pivot into technology, bridging the gap between human-centric design and technical implementation",
    ],
  },
];

export const otherWork = [
  {
    featured: true,
    isFlexColumn: true,
    id: 1,
    company: "Entrepreneurship: Dan's Music Studio",
    title: "Founder / CEO / Lead Instructor",
    dates: "2006 - Present",
    responsibilities: [
      "Founded and scaled a non-tech enterprise to 7-figure ARR, managing all aspects of P&L, operations, and growth",
      "Led a team of 20+ instructors and support staff, scaling student enrollment by 660% within a 24-month period",
      "Leveraged polymathic background to deliver instruction across 10 instruments, maintaining high retention through personalized learning paths",
    ],
  },
  {
    featured: true,
    isFlexColumn: true,
    id: 2, // New ID for Band Leadership
    company: "Professional Musical Performance & Production",
    title: "Band Leader / Principal Performer",
    dates: "2010 - 2020",
    responsibilities: [
      "Directed high-stakes musical productions across 1,000+ paid professional engagements, managing up to 3 simultaneous venue residencies",
      "Performed and collaborated with Grammy winners and Rock & Roll Hall of Fame inductees, demonstrating elite-level performance under pressure",
      "Managed end-to-end logistics, contract negotiation, and personnel for a locally touring ensemble, ensuring consistent delivery in high-pressure environments",
    ],
  },
  {
    featured: true,
    isFlexColumn: true,
    id: 4,
    company: "Edison Middle School",
    title: "Director of String Orchestra",
    dates: "2008-2015",
    responsibilities: [
      "Managed 160 students across 4 ensembles, overseeing complex logistical and educational workflows",
      "Pioneered the integration of digital curriculum tools (SmartMusic, Sibelius) to modernize traditional music education",
    ],
  },
];

export const icons = [
  { src: Express, label: "Express" },
  { src: MongoDB, label: "MongoDB" },
  { src: MUI, label: "MUI" },
  { src: Next, label: "Next.js" },
  { src: Node, label: "Node.js" },
  { src: Postgres, label: "Postgres" },
  { src: Rails, label: "Rails" },
  { src: React, label: "React" },
  { src: Redux, label: "Redux" },
  { src: StyledComponents, label: "Styled Components" },
  { src: TypeScript, label: "TypeScript" },
  { src: xState, label: "XState" },
];

export const otherExperience =
 "High-Agency Problem Solving, System Architecture, React Native, CSS, Angular, jQuery, Figma, Audio/Video Production, 10 Instruments.";

export const leadershipAndInfluence = [
  {
    featured: true,
    isFlexColumn: true,
    id: 1,
    company: "JerseyScript (BoroJS Meetup Family)",
    title: "Lead Organizer / Community Director",
    dates: "2024 - Present",
    responsibilities: [
      "Directing the primary JavaScript community in Jersey City, coordinating monthly technical sessions and networking for the NYC-area developer ecosystem",
      "Secured and managed corporate venue partnerships, successfully pivoting logistics following venue closures to ensure zero interruption in community programming",
      "Managing multi-channel communications and a high-engagement Slack community, fostering cross-functional mentorship between junior and staff-level engineers",
    ],
  },
  {
    featured: true,
    isFlexColumn: true,
    id: 2,
    company: "TEDx",
    title: "Speaker & Featured Performer",
    dates: "2014",
    responsibilities: [
      "Selected through a rigorous, multi-stage vetting process to present on a global platform, recognized for the ability to synthesize complex concepts for a diverse audience",
    ],
  },
];

export const portfolioItems = [
  {
    section: "personal" as const,
    image: aiTodoList,
    title: "AI Todo List",
    subtitle: "MERN + OpenAI-powered task planning",
    date: "May 2024",
    description:
      "A full-stack to-do app where each task can generate an AI-powered plan, curated resources, and a suggested Google search query.",
    extendedDescription:
      "Built with a React client and an Express API backed by MongoDB. Users can sign up / sign in, manage a personal task list, and expand any task to call an OpenAI Chat Completions endpoint that returns a structured JSON response (plan + links + search string), which is then persisted on the task.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "OpenAI API",
      "JWT auth",
    ],
    features: [
      "Sign up / sign in with JWT + protected routes",
      "Create, complete, edit, and delete tasks with a responsive UI",
      "Per-task AI assistant generates a plan + resources + search term",
      "Persists AI responses to MongoDB for later review",
      "Light/dark mode toggle",
    ],
    links: [
      {
        title: "Live App",
        url: "https://ai-todo-list-beta.vercel.app",
      },
      { title: "GitHub", url: "https://github.com/dansbands/ai-todo-list" },
      {
        title: "Roadmap",
        url: "https://github.com/users/dansbands/projects/1",
      },
    ],
  },
  {
    section: "personal" as const,
    image: tonesmith,
    title: "ToneGrid",
    subtitle: "Interactive web app",
    date: "March 2026",
    description:
      "A browser-based app that rivals existing commercially available instrument conditioning software.",
    extendedDescription:
      "The paid version, available for signup through the free app, adds groundbreaking features like automated conditioning flows, multiple simultaneous sessions, session recall, and expanded instrument coverage. All this for $15/month vs. $300 per unit for the leading competitor.",
    technologies: ["React", "Next.js", "TypeScript", "Web Audio API"],
    features: [],
    links: [
      { title: "Live Demo", url: "https://tone-grid.vercel.app" },
      { title: "GitHub", url: "https://github.com/dansbands/tone-grid" },
    ],
  },
  {
    section: "personal" as const,
    image: danodeamedia,
    title: "This Website",
    subtitle: "Modern portfolio platform",
    date: "May 2017, March 2026",
    description:
      "A continuously evolving portfolio rebuilt from an older Wix migration into a modern React/Next.js application.",
    extendedDescription:
      "Originally recreated in jQuery/HTML/CSS from a drag-and-drop site, this project has since been modernized with a Next.js architecture, typed React components, and improved content structure. The UX has been refined over time with stronger layout hierarchy, responsive behavior, and maintainable component patterns designed for iterative growth.",
    technologies: ["Next.js", "React", "TypeScript", "EmailJS"],
    links: [
      {
        title: "Original Wix Site",
        url: "https://dansbands.wixsite.com/design-lite",
      },
      {
        title: "GitHub",
        url: "https://github.com/dansbands/dansbands.github.io",
      },
    ],
  },
  {
    section: "professional" as const,
    image: articleBuilder,
    title: "Care/of Article Builder",
    subtitle: "Internal content platform",
    date: "2021",
    description:
      "Built an internal publishing tool in a Next.js/React ecosystem at Care/of, where I worked exclusively in Next.js to help scale a library of hundreds of doctor-written SEO articles.",
    extendedDescription:
      "Developed a custom Markdown-based authoring tool that let non-technical stakeholders publish complex HTML modules with minimal engineering overhead. Worked exclusively in a Next.js + React + TypeScript stack to support a large-scale article platform, and architected React Portals to inject interactive, stateful components into CMS-rendered pages without sacrificing performance.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Markdown",
      "CMS",
    ],
    features: [
      "Modular article authoring with reusable content blocks",
      "Self-serve publishing for non-technical content teams",
      "React Portals for injecting interactive components into static content",
      "SEO-optimized output at scale",
    ],
    links: [{ title: "Read More", url: "/work/careof-article-builder" }],
    caseStudyUrl: "/work/careof-article-builder",
  },
  {
    section: "professional" as const,
    image: wirePaymentFlow,
    title: "Wire Payment Flow",
    subtitle: "Enterprise financial workflow",
    date: "2025",
    description:
      "Refined a complex multi-step internal wire payment flow for bank employees, improving validation clarity, conditional logic, accessibility, and overall form usability in a compliance-sensitive environment.",
    extendedDescription:
      "Architected a modular, reusable form-filler utility to automate payment creation workflows, removing friction from manual data entry and increasing development velocity. Implemented rigorous validation patterns and state management for a nine-step flow handling high-security financial transactions.",
    technologies: ["React", "TypeScript", "XState", "React Hook Form"],
    features: [
      "Multi-step form with robust conditional logic",
      "API-driven account validation",
      "Accessibility improvements for compliance-sensitive UI",
      "Reusable form-filler utility for automated workflow testing",
    ],
    links: [{ title: "Read More", url: "/work/payment-form-flow" }],
    caseStudyUrl: "/work/payment-form-flow",
  },
  // {
  //   image: yumble,
  //   title: "Yumble",
  //   subtitle:
  //     "ReactJS and Ruby on Rails web application with responsive design",
  //   date: "February 2018",
  //   description:
  //     "It’s like Bumble and Yelp had a baby - pick a dining partner and find a restaurant you’ll both love in minutes!",
  //   technologies: ["ReactJS", "Ruby on Rails", "AJAX", "CSS"],
  //   features: [
  //     "Employed Responsive Design Principles to build a Mobile-First application that expands into an immersive Desktop Experience",
  //     "Integrated the Yelp Business Search API to bring a wide array of restaurant data to users",
  //     "Made use of Location Services to expedite the user’s onboarding process",
  //     "Incorporated the swiping interactions and the 'It’s a Match' modal to provide an authentic user experience.",
  //   ],
  //   links: [
  //     { title: "Try it Live", url: "https://dansbands.github.io/yumble/" },
  //     { title: "Demo Video", url: "https://youtu.be/10hwYAqOaKw" },
  //     { title: "Front End Repo", url: "https://github.com/dansbands/yumble" },
  //     {
  //       title: "Back End Repo",
  //       url: "https://github.com/dansbands/yumble-backend",
  //     },
  //   ],
  // },
  // {
  //   image: boozer,
  //   title: "Boozer",
  //   subtitle: "ReactJS and Ruby on Rails web application",
  //   date: "January 2018",
  //   description:
  //     "Search our database of cocktails, save your favorites, and update them with your own custom recipes.",
  //   technologies: ["ReactJS", "Ruby on Rails", "AJAX", "CSS"],
  //   features: [
  //     "Extended Bootstrap with custom styles to build an elegant, intuitive interface",
  //     "Enabled a shared library of cocktails while also allowing unique customizations per user through data modeling",
  //     "Integrated a search feature to quickly find cocktails by name or ingredients",
  //   ],
  //   links: [
  //     { title: "Try it Live", url: "https://dansbands.github.io/boozer/" },
  //     { title: "Demo Video", url: "https://youtu.be/demo-boozer" },
  //     { title: "Front End Repo", url: "https://github.com/dansbands/boozer" },
  //     {
  //       title: "Back End Repo",
  //       url: "https://github.com/dansbands/boozer-backend",
  //     },
  //   ],
  // },
  // {
  //   image: toolshare,
  //   title: "ToolShare",
  //   subtitle: "A peer-to-peer tool lending platform",
  //   date: "March 2018",
  //   description:
  //     "ToolShare connects people who need tools with those who have them, fostering a sharing economy.",
  //   technologies: ["ReactJS", "Node.js", "Express", "MongoDB"],
  //   features: [
  //     "Built a secure user authentication system with JWT",
  //     "Implemented a tool search and reservation system",
  //     "Designed a responsive UI for both desktop and mobile users",
  //   ],
  //   links: [
  //     { title: "Try it Live", url: "https://dansbands.github.io/toolshare/" },
  //     { title: "Demo Video", url: "https://youtu.be/demo-toolshare" },
  //     { title: "Github Repo", url: "https://github.com/dansbands/toolshare" },
  //   ],
  // },
];

export const homepageRecentWorkItems = portfolioItems.slice(0, 5);
