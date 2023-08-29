import janieSiteImg from "/public/img/janie-website-sc.png";
import stephaneSiteImg from "/public/img/stephane-cv-sc.png";
import spacetourismImg from "/public/img/space-tourism-sc.png";
import foodorderImg from "/public/img/food-order-sc.png";

export const projectsData = [
  {
    title: "Stephane's online CV",
    description:
      "Minimalist style online CV for Stephane - a veteran in the IT world. No flashy coloring or animation, just a simple and clean design. That's what he wants.",
    tags: ["Next.js", "TailwindCSS"],
    imageUrl: stephaneSiteImg,
    siteUrl: "https://stephane-site.vercel.app/",
  },
  {
    title: "Janie's portfolio",
    description:
      "A portolio and a blog system for my friend Janie, who is a solo Chinese teacher and wants to have a website to show her potential students.",
    tags: ["Next.js", "TailwindCSS", "Strapi CMS"],
    imageUrl: janieSiteImg,
    siteUrl: "https://janie-mandarin-nextjs.vercel.app/",
  },
  {
    title: "Space Tourism",
    description:
      "A frontend-mentor challenge with a beautiful figma design. It's a good practice for me to learn HTML/CSS and javascript.",
    tags: ["HTML", "CSS", "Javascript", "React", "Figma"],
    imageUrl: spacetourismImg,
    siteUrl: "https://frontend-mentor-space-tourism-beryl.vercel.app/",
  },
  {
    title: "Food order app",
    description:
      "This is a fullstack practice project. There is a lot of tools and technologies that I learned to use to build this app. Not finished, to be continued...",
    tags: [
      "Next.js",
      "TailwindCSS",
      "Typescript",
      "postgreSQL",
      "Stripe",
      "Prisma",
    ],
    imageUrl: foodorderImg,
    siteUrl: "https://food-order-app-nine-mu.vercel.app/",
  },
];

export const skillsData = [
  {
    title: "Frameworks",
    skills: [
      "React",
      "React Native",
      "Next.js",
      "TailwindCSS",
      "Framer Motion",
    ],
  },
  {
    title: "Languages",
    skills: [
      "Javascript",
      "Typescript",
      "Python",
      "Bash Script",
      "HTML/CSS",
      "Markdown",
    ],
  },
  {
    title: "Database/Headless CMS",
    skills: ["PostgreSQL", "MySQL", "MangoDB", "Strapi", "WordPress"],
  },
  {
    title: "AWS Services",
    skills: ["AWS Amplify", "EC2/S3/RDS"],
  },
  {
    title: "OS/IDE",
    skills: ["Linux", "Vim", "VS Code"],
  },
  {
    title: "Telecom/Networking",
    skills: ["SS7/SIGTRAN", "SMS", "VPN", "Cisco", "Juniper"],
  },
];
