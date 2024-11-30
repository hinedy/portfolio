import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ahmed Hinedy",
  initials: "AH",
  url: "https://hinedy.vercel.app",
  location: "Alexandria, Egypt",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Aesthetics-focused and detail-oriented creative bringing a unique combination of analytical and creative skills to Frontend Development",
  summary:
    " Proficient in using NextJs and React with TypeScript. Self-driven developer with a strong ownership mindset, dedicated to staying up to date with the latest industry trends and technologies, consistently delivering innovative solutions to complex problems.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Tailwind CSS",
    "git",
    "Figma",
    "Adobe Photoshop",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ahmedhinedy@gmail.com",
    tel: "+201020790221",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/hinedy",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/ahmedhinedy",
        icon: Icons.linkedin,

        navbar: true,
      },
      Behance: {
        name: "Behance",
        url: "https://www.behance.net/ahmedhinedy",
        icon: Icons.behance,

        navbar: true,
      },

      Email: {
        name: "Send Email",
        url: "mailto:ahmedhinedy@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "nWeave",
      href: "",
      badges: [],
      location: "Alexandria, Egypt",
      title: "Frontend Software Engineer",
      logoUrl: "/nweave.png",
      start: "July 2023",
      end: "Present",
      bullets: [
        `Led frontend development efforts for a sophisticated medical services management platform, translating complex business requirements into implemented features, stabilizing the existing codebase, and coordinating tasks to successfully deliver a stable version within tight deadlines. `,
        `Developed the frontend of a multi-tenant medical provider credentialing system, collaborating closely with the backend team.`,
        `Established robust authentication and authorization mechanisms incorporating dynamic token rotation for enhanced security.`,
        `Implemented dynamic forms using React Hook Form, streamlining the credentialing process and improving data entry accuracy.`,
        `Built reusable components for tables, trees, tabs, form elements, and hooks significantly reducing development time and improving UI consistency.`,
        `Optimized initial page fetching by migrating to server components, leveraging Next.js's server-side rendering capabilities to enhance performance and user experience.`,
      ],
      description: "",
    },
    {
      company: "Freelance",
      badges: [],
      href: "",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/upwork.jpg",
      start: "May 2023",
      end: "Present",
      bullets: [
        `Delivered user interface enhancements, bug fixes, and integrations for Media & Entertainment and PropTech clients, working collaboratively on tight deadlines.`,
        `Created interactive and responsive UI prototypes for a Proof of Concept (POC) using React and Framer Motion.`,
        `Integrated Google Maps API into a real estate web application.`,
      ],
      description: "",
    },
  ],
  education: [],
  projects: [],
  hackathons: [],
} as const;
