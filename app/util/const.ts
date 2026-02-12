import aiTodoList from "@/app/Media/Photos/ai-todo-list.png";
import yumble from "@/app/Media/Photos/yumble.png";
import boozer from "@/app/Media/Photos/boozer.png";
import toolshare from "@/app/Media/Photos/toolshare.png";
import danodeamedia from "@/app/Media/Photos/danodeamedia.png";

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

export const experience = [
  {
    featured: true,
    id: 1,
    company: "TD Bank/ TD Securities",
    title: "Senior Software Engineer",
    dates: "February 2025 - present",
    responsibilities: [
      "Architected a multi-step form flow with API-based account validation, contextual state management, and dynamic modals",
      "Implemented a reusable form filler utility to support future edit workflows and simplify state handling",
      "Established unit testing and code coverage with Vitest; resolved legacy test failures and console warnings",
      "Drove development in coordination with product analysts and backend engineers to ensure aligned API delivery and robust mock data for frontend testing",
      "Participated in code reviews and mentored a junior developer on repo architecture and Git best practices",
    ],
  },
  {
    featured: true,
    id: 2,
    company: "Care/of",
    title: "Software Engineer",
    dates: "June 2022 - July 2024",
    responsibilities: [
      "Contributing to an enterprise grade eCommerce web application",
      "Owned development of a collection of 350+ Articles pages, and related Article Builder tool",
      "Article Builder includes a markdown-based editor that enables business to add pre-built HTML modules to articles published in our CMS, all with the click of a button",
      "Added React Portals to enable the addition of interactive, stateful React components to HTML rendered from markdown created in Article Builder",
    ],
  },
  {
    featured: true,
    id: 3,
    company: "Comcast Business",
    title: "Senior Software Engineer/ Technical Lead",
    dates: "June 2021 - June 2022",
    responsibilities: [
      "Technical Lead/ Front End Engineer on the team that brought our Internet Dashboard to General Availability for 1.8 million users",
      "Led/ mentored a team of three front-end devs as we built features like Internet Speed Test, as well as adding existing components to the experience",
      "Integrated XState with React in order to leverage XState's finite state machines to model the various states and transitions of the Internet Speed Test feature, including idle, loading, success, and error states, mapped to the various stages of the speed test process",
    ],
  },
  {
    featured: true,
    id: 4,
    company: "American Express",
    title: "Software Engineer",
    dates: "June 2020 - June 2021",
    responsibilities: [
      "Contributing to an enterprise grade financial web application",
      "Working in React/ Redux, and learned Angular to contribute to the legacy codebase to maintain existing features while we migrate to React",
      "Personally built the proof of concept that integrated our new React work into the legacy Angular app",
    ],
  },
  {
    featured: false,
    id: 5,
    company: "AllSocial",
    title: "Senior Software Engineer",
    dates: "Dec 2019 - Apr 2020",
    responsibilities: [
      "Built a world-class social media web application with a feature set that rivals modern social apps",
      "Cultivated experience in working independently as a member of a large scale, distributed team",
      "Worked directly with the head of UX, QA team, project managers and clients to refine existing code in order to meet client expectations",
    ],
  },
  {
    featured: false,
    id: 6,
    company: "Attck/ TimeRepublik",
    title: "Front End Developer",
    dates: "May 2019 - Dec 2019",
    responsibilities: [
      "Developed beautiful interactive web applications and rich web sites in a fast-paced agency setting",
      "Gained experience in working independently as a member of a four-person front-end team",
      "Collaborated with designers, QA team, project managers and clients to ensure client needs are met",
    ],
  },
  {
    featured: false,
    id: 7,
    company: "Crane.ai",
    title: "React Developer",
    dates: "April 2018 - Feb 2019",
    responsibilities: [
      "Received multiple Product of the Month accolades on ProductHunt",
      "Contributed to our full-stack MERN-based AI Website Builder",
      "Built the administrative dashboard from visual design to deployment",
    ],
  },
];

export const education = [
  {
    featured: true,
    isFlexColumn: true,
    id: 1,
    company: "Rutgers University",
    title: "Bachlelor of Arts in Music (violin)",
    dates: "2007",
    responsibilities: [
      "Teaching Certificate in Music, K-12",
      "Rutgers University Salsa Band - Violinist, Assistant Director",
      "New Jersey Folk Festival - Graphics Coordinator, Music Director",
    ],
  },
  {
    featured: true,
    isFlexColumn: true,
    id: 2,
    company: "General Assembly",
    title: "User Experience Design",
    dates: "2017",
    responsibilities: [],
  },
  {
    featured: true,
    isFlexColumn: true,
    id: 3,
    company: "Flatiron School",
    title: "Software Engineering Immersive",
    dates: "2018",
    responsibilities: [],
  },
];

export const otherWork = [
  {
    featured: true,
    isFlexColumn: true,
    id: 1,
    company: "Dan's Music Studio",
    title: "Founder/ Lead Instructor",
    dates: "2006-2016",
    responsibilities: [
      "Managed a team of 20 instructors and support personnel",
      "Scaled from 30 to 200 students in 2 years",
      "Delivered instruction on 10 instruments to students of all ages and skill levels",
    ],
  },
  {
    featured: true,
    isFlexColumn: true,
    id: 2,
    company: "Edison Middle School",
    title: "Teacher of String Orchestra",
    dates: "2008-2015",
    responsibilities: [
      "Managed 160 students in 4 ensembles",
      "Developed curriculum for grade 6",
      "Incorporated digital content through SmartMusic, Sibelius Scorch, and Sharepoint",
      "Prepared each orchestra to perform 3 full length selections in 3 yearly concerts (36 total selections)",
    ],
  },
];

export const icons = [
  Express,
  MongoDB,
  MUI,
  Next,
  Node,
  Postgres,
  Rails,
  React,
  Redux,
  StyledComponents,
  TypeScript,
  xState,
];

export const otherExperience = "React Native, CSS, Angular, jQuery, Figma, Photoshop, Logic Pro X, Audio and Video Editing, A/V Equipment setup, Live Sound";

export const portfolioItems = [
  {
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
        url: "https://dansbands.github.io/ai-todo-list/#/sign-in",
      },
      { title: "GitHub", url: "https://github.com/dansbands/ai-todo-list" },
      {
        title: "Roadmap",
        url: "https://github.com/users/dansbands/projects/1",
      },
    ],
  },
  {
    image: danodeamedia,
    title: "This Website",
    subtitle: "Web Development",
    date: "May 2017, March 2025",
    description:
      "I built this site as a place to demonstrate my skills with HTML5, CSS3, JavaScript and related libraries like jQuery. The design is based on one I adapted from a template on Wix.com, a drag-and-drop editor.",
    extendedDescription:
      "My initial goal was to rebuild my Wix site using purely the development skills I had at the time. As it has progressed, I have improved the experience by adding a fixed global navigation element, and by repositioning content to prioritize the needs of my users. I hope to continue to demonstrate good User Experience principles through my design as I learn new skills and attempt to incorporate them. Keep in mind, it is a work in progress. Enjoy!",
    technologies: ["NextJS", "EmailJS"],
    links: [
      { title: "Original Wix Site", url: "https://www.danodeamedia.com" },
    ],
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
