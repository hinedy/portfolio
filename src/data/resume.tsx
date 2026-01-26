import { Icons } from "@/components/icons";
import { DownloadIcon, HomeIcon, NotebookIcon } from "lucide-react";

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
      name: "Simon Dobretsov",
      role: "Chief Executive Officer",
      company: "Accelerated Healthcare Solutions",
      rating: 5,
      image: "https://acceleratedhcs.com/images/Image-p-500.png",
      testimonial:
        "Ahmed was a critical member of a UI/UX design team for a major project being developed from the ground up in the healthcare space. His technical contributions were notable and his ability to work on a highly-dynamic and evolving project and team were even more noteworthy. Developers that produce good technical work and can function in a team environment with pressure from ever-changing client requirements are hard to find, and you will not go wrong with selecting Ahmed for any of your front end project needs. He produces timely and high quality work even in a higher pressure and time constrained environment.",
    },
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
    { href: "/AhmedHinedyCV.pdf", icon: DownloadIcon, label: "Resume" },
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
      DEV: {
        name: "DEV",
        url: "https://dev.to/hinedy",
        icon: Icons.dev,

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
      title: "ShowZone",
      logo: Icons.showzone,
      url: "https://showzone.gg/",
    },
    {
      title: "SupplyTech",
      logo: Icons.supplyTech,
      url: "https://supplytechsyg.com/",
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
    {
      title: "MedX",
      logo: Icons.medx,
      url: "https://medxsvc.com",
    },
  ],
  featuredProjects: [
    {
      category: "Production",
      title: "MedX",
      summary: "Medical Services Management Platform",
      subtitle:
        "Production medical platform • Performance & architecture ownership",
      image: "/medx-preview.png",
      url: "https://medxsvc.com",
      content: `### Context
MedX is a production medical services platform used to manage healthcare workflows across multiple stakeholders. The system operates in a regulated environment where reliability, clarity, and performance directly impact real users and operations.

### Scope & Ownership
I owned frontend development across key parts of the platform, working closely with product and backend teams to translate loosely defined requirements into stable, maintainable features. My role went beyond implementation to include architectural decisions, performance optimisation, and UI consistency.

### Key Challenges
- **Stabilising a legacy frontend codebase** under active development
- **Balancing speed of delivery** with long-term maintainability
- **Designing interfaces** for complex, multi-step medical workflows
- **Improving performance** without disrupting production usage

### What I Delivered
- **Led delivery** of a full medical services management platform under tight deadlines
- **Introduced clearer frontend structure**, reusable UI patterns, and improved developer experience
- **Reduced bundle size** and improved real-user performance through targeted optimisation and code-splitting
- **Built interfaces** that simplified complex workflows while remaining predictable and robust

### Why It Matters
This project reflects how I approach frontend work in high-responsibility domains: prioritising clarity, performance, and long-term stability over short-term speed, while staying closely aligned with product needs.`,
    },
    {
      category: "discontinued",
      title: "Revixir",
      summary: "Provider Credentialing System",
      subtitle:
        "Multi-tenant architecture • Secure workflows • Performance-conscious frontend",
      image: "/revixir-preview.png",
      url: "https://revixir.com",
      content: `### Context
Revixir was a provider credentialing system designed to manage onboarding, verification, and access control for healthcare providers within a multi-tenant environment.

### Scope & Ownership
I led frontend development, collaborating with backend and product stakeholders to design and implement a scalable, performance-conscious frontend architecture using Next.js.

### Key Challenges
- **Designing multi-tenant frontend patterns** that scale cleanly
- **Implementing secure authentication** and role-based access without coupling frontend and backend too tightly
- **Handling complex forms** and conditional workflows with clarity and predictability

### What I Delivered
- **Built a multi-tenant frontend architecture** using Next.js and server components
- **Implemented secure authentication** and role-based access flows
- **Designed reusable patterns** for complex credentialing and verification workflows
- **Focused on performance and maintainability** from the outset rather than retrofitting later

### Why It Matters
Although the product was discontinued, the work demonstrates my approach to system design: thinking in terms of scale, security, and long-term structure even at early stages.`,
    },
    {
      category: "MVP",
      title: "SupplyTech",
      summary: "B2B Warehouse Marketplace (MVP)",
      subtitle: "Early-stage product foundation • Discovery & onboarding",
      image: "/supplytech-preview.png",
      url: "https://supplytechsyg.com/",
      content: `### Context
SupplyTech is an early-stage B2B marketplace concept connecting warehouse providers with clients through a discovery and onboarding-driven platform.

### Scope & Ownership
I delivered the frontend foundation for the MVP, working closely with stakeholders to clarify product direction, validate assumptions, and establish a scalable base for future development.

### Key Challenges
- **Communicating product value** clearly for a non-technical audience
- **Designing discovery and onboarding flows** before full product maturity
- **Building flexible foundations** without over-engineering an MVP

### What I Delivered
- **Built an animated landing page** to clearly communicate product positioning
- **Implemented warehouse onboarding flows** with admin verification
- **Developed a client-facing discovery experience** with searchable, filterable listings and detailed views
- **Designed role-based dashboards** and frontend structures prepared for future booking and payments

### Why It Matters
This project reflects my approach to early-stage work: using frontend as a tool to clarify product direction, reduce uncertainty, and create foundations that can scale without premature complexity.`,
    },
  ],
  hackathons: [],
} as const;
