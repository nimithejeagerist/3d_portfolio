import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    headstarter,
    tripguide,
    threejs,
    holyai,
    quickbrain,
    starr,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Mobile Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer",
      company_name: "Student Team for Alberta Rocketry Research",
      icon: starr,
      iconBg: "#383E56",
      date: "September 2023 - Present",
      points: [
        "Designed and deployed front-end features using React.js and JavaScript, enhancing responsiveness and user experience, which increased engagement by 15%.",
        "Worked on back-end integration for multimedia management, utilizing Firebase to ensure real-time data synchronization and storage efficiency.",
        "Partnered with UX designers and product managers to implement user-centric features, enhancing user engagement by 20%.",
        "Documented workflows and code practices to support easier onboarding and consistent project handoffs.",
      ],
    },
    {
      title: "Software Engineering Fellow",
      company_name: "Headstarter",
      icon: headstarter,
      iconBg: "#E6DEDD",
      date: "July 2024 - September 2024",
      points: [
        "Spearheaded front-end enhancements in Next.js and React, optimizing for cross-platform compatibility and reducing load times by 15%.",
        "Optimized mobile performance for real-time applications, reducing load times by 15%.",
        "Worked on secure, reusable code structures for UI components, focusing on scalability and maintainability.",
        "Improved application scalability by 10%, leveraging REST APIs and ensuring robust performance across devices.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Holy AI",
      description:
        "A browser-based app that uses OCR with OpenAI API to generate study flashcards, built for efficient and scalable learning experiences.",
      tags: [
        {
          name: "swift",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "openai-api",
          color: "pink-text-gradient",
        },
      ],
      image: holyai,
      source_code_link: "https://github.com/nimithejeagerist/HolyAI",
    },
    {
      name: "QuickBrain",
      description:
        "A browser-based web app utilizing OCR to convert images to text and generate study flashcards, providing a smooth and efficient study experience for users.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: quickbrain,
      source_code_link: "https://github.com/nimithejeagerist/quick-brain",
    },
    {
      name: "BudgetBuddy",
      description:
        "A responsive app for tracking personal finances, offering real-time data analysis to provide insights into spending and financial patterns",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "flask",
          color: "green-text-gradient",
        },
        {
          name: "matplotlib",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/nimithejeagerist/budgetbuddy",
    },
  ];
  
  export { services, technologies, experiences, projects };