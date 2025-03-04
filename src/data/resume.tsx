import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ahmed Hinedy",
  initials: "AH",
  url: "https://hinedy.vercel.app",
  location: "Alexandria, Egypt",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Aesthetics-focused and detail-oriented creative bringing a unique combination of analytical thinking and design-centric approach to Frontend Development",
  summary:
    "Proficient in using NextJs and React with TypeScript. Self-driven developer with a strong ownership mindset, dedicated to staying up to date with the latest industry trends and technologies, consistently delivering innovative solutions to complex problems.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "SASS",
    "Redux",
    "Node.js",
    "Supabase",
    "git",
    "Figma",
    "Adobe Photoshop",
  ],
  testimonials: [
    {
      name: "Eliezer Valenzuela",
      role: "Software Engineer",
      company: "SophyTech LLC",
      rating: 5,
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQGcbDCQkw7OJg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1709650744563?e=1743033600&v=beta&t=I2Gp7Mf9vyjuWG1ICh_8yx7MB6e6OfwilXMOft3BPr4",
      testimonial:
        "Ahmed is extremely knowledgeable rising talent. He has very good communication as well as UI/UX knowledge. He went above and beyond to deliver the task on time. Would highly recommend him and hire him again for any upcoming projects. I wish him best of luck for his future endeavors.",
    },
    {
      name: "Jack Rayan",
      role: "Upwork Client",
      rating: 5,
      image: "",
      testimonial:
        "I had a very good experience working with Ahmed, overall very professional, great communicator and fast!",
    },
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
  projects: [
    {
      title: "MedX",
      logo: Icons.medx,
      url: "https://medxsvc.com",
    },
    {
      title: "ShowZone",
      logo: Icons.showzone,
      url: "https://showzone.gg/",
    },
    {
      title: "Stuf Storage",
      logo: Icons.stuf,
      url: "https://www.stufstorage.com/",
    },
    {
      title: "AHS",
      logo: Icons.ahs,
      url: "https://acceleratedhcs.com/",
    },
  ],
  hackathons: [],
} as const;
