import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import formbuilderImg from "@/public/formbuilder.png";
import reformaticoImg from "@/public/reformatico.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
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
    title: "UI Developer 2 - Media.net",
    location: "Mumbai, India",
    description:
      "I am working a frontend developer mainly working on NextJs and React. Also worked on php and nodejs. I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2022 - present",
  },
  {
    title: "Software Engineer - Qburst",
    location: "Trivandrum, India",
    description:
      "I worked as a software engineer where I worked on user data management dashboard. I had experience with Angular, Nodejs, SQL and Sequelize.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2020 - Sep 2022",
  },
  {
    title: "Btech in ECE",
    location: "Trivandrum, India",
    description:
      "Graduated from SCT, Trivandrum as Electronics and Communication Engineer",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2016 - Jun 2020",
  },
] as const;

export const projectsData = [
  {
    title: "FormBuilder",
    description:
      "A No Code form builder that can be used to create forms, publish and collect submission, along with data analytics",
    tags: ["Next.js", "Typescript", "Tailwind", "Prisma", "Vercel PostgreSQL", "Dnd-kit"],
    imageUrl: formbuilderImg,
    link: "https://form-builder-hwnuqgq02-ssidharth010.vercel.app/"
  },
  {
    title: "Reformatico",
    description:
      "A simple image/video/audio file format converter.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "FFMEG"],
    imageUrl: reformaticoImg,
    link: "https://reformatico.netlify.app"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Zustand",
  "Express",
  "SQL",
  "Gitlab Api",
  "Google Maps Api"
] as const;
