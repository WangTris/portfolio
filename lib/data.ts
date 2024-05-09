import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import ibmc from "@/public/projects/imbc.png";
import aiotlab from "@/public/projects/aiotlab.png";
import pmt from "@/public/projects/pmt.png";
import launching from "@/public/projects/launching.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated International University",
    location: "Thu Duc, HCMC, VN",
    description:
      "I will graduate from International University with a Bachelor's degree in Information Technology.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2024",
  },
  {
    title: "Fullstack Developer — Internship at CyberSoft Academy",
    location: "Ho Chi Minh City, VN",
    description:
      "I worked as a full-stack developer intern at CyberSoft Academy. I worked on a project to enhance the user experience of the website.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Research Staff Member / Freelancer",
    location: "Ho Chi Minh City, VN",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, MongoDB and so on. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "IBMC 2024",
    description:
      "I worked as a freelance front-end developer on this startup project from Jan 2024 to present. The project is for users to register and introduce IMBC competition",
    tags: ["React.js", "Material UI", "Redux", "Docker", "Sanity.io"],
    imageUrl: ibmc,
  },
  {
    title: "Vin Overflow",
    description:
      "Vin Overflow is a complex question-and-answer platform for developers to ask questions, share knowledge, and learn from each other.",
    tags: [
      "Next.js",
      "Shadcn-UI",
      "TailwindCSS",
      "Clerk",
      "MongoDB",
      "Prism",
      "Vercel",
    ],
    imageUrl: launching,
  },
  {
    title: "AIoT Lab VN",
    description:
      "A public web app for introducing AIoT Lab VN. It shows the lab's projects, members, and contact information.",
    tags: ["React.js", "TailwindCSS", "Material UI", "Daisy UI", "Sanity.io"],
    imageUrl: aiotlab,
  },
  {
    title: "PMT Technology company limited",
    description:
      "I worked as a freelance full-stack developer to develope the user-friendly interface for company's website and SEO to attract potential customers.",
    tags: ["React.js", "TailwindCSS", "Daisy UI", "Sanity.io"],
    imageUrl: pmt,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "ReactJS",
  "NextJS",
  "NodeJS",
  "Git",
  "Tailwind",
  "Material UI",
  "Figma",
  "MongoDB",
  "Redux",
  "Express",
] as const;
