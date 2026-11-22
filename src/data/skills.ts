import { FaAws } from "react-icons/fa";
import {
    LuBoxes,
    LuCloud,
    LuDatabase,
    LuLayoutDashboard,
    LuLayers,
    LuPlug,
    LuServer,
    LuWrench,
} from "react-icons/lu";
import {
    SiBootstrap,
    SiCss,
    SiExpress,
    SiGit,
    SiGithub,
    SiGithubactions,
    SiGraphql,
    SiHtml5,
    SiJavascript,
    SiJsonwebtokens,
    SiMongodb,
    SiMongoose,
    SiMysql,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiPostman,
    SiPuppeteer,
    SiPython,
    SiReact,
    SiRedis,
    SiRedux,
    SiSap,
    SiSocketdotio,
    SiSwagger,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";
import { TbApi, TbBrandReactNative } from "react-icons/tb";
import { VscAzure, VscVscode } from "react-icons/vsc";

import type { SkillCategory } from "./types";

/**
 * Every skill below appears in the "Technical Skills" section of the resume.
 * Categories are re-grouped for the portfolio; nothing has been added.
 */
export const skillCategories: SkillCategory[] = [
    {
        title: "Frontend Development",
        icon: LuLayoutDashboard,
        skills: [
            { name: "React.js", icon: SiReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "React Native", icon: TbBrandReactNative },
            { name: "React Hooks", icon: SiReact },
            { name: "HTML5", icon: SiHtml5 },
            { name: "CSS3", icon: SiCss },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "Bootstrap", icon: SiBootstrap },
            { name: "Responsive Design" },
        ],
    },
    {
        title: "Backend Development",
        icon: LuServer,
        skills: [
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Express.js", icon: SiExpress },
            { name: "RESTful APIs", icon: TbApi },
            { name: "GraphQL", icon: SiGraphql },
            { name: "Microservices" },
            { name: "Socket.io / WebSockets", icon: SiSocketdotio },
            { name: "JWT Authentication", icon: SiJsonwebtokens },
            { name: "Role-Based Access Control" },
            { name: "Cron Jobs" },
            { name: "BullMQ" },
        ],
    },
    {
        title: "Databases",
        icon: LuDatabase,
        skills: [
            { name: "MongoDB", icon: SiMongodb },
            { name: "Mongoose", icon: SiMongoose },
            { name: "MySQL", icon: SiMysql },
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "Redis", icon: SiRedis },
        ],
    },
    {
        title: "State Management",
        icon: LuLayers,
        skills: [
            { name: "Redux", icon: SiRedux },
            { name: "Redux Toolkit", icon: SiRedux },
            { name: "Context API", icon: SiReact },
        ],
    },
    {
        title: "Cloud & Deployment",
        icon: LuCloud,
        skills: [
            { name: "Azure App Service", icon: VscAzure },
            { name: "AWS EC2", icon: FaAws },
            { name: "AWS S3", icon: FaAws },
            { name: "GitHub Actions", icon: SiGithubactions },
            { name: "CI/CD" },
        ],
    },
    {
        title: "API Integrations",
        icon: LuPlug,
        skills: [
            { name: "SAP Integration", icon: SiSap },
            { name: "SFTP" },
            { name: "Payment Gateway Integration" },
            { name: "SMS Integration" },
            { name: "Third-Party APIs" },
            { name: "Swagger / API Docs", icon: SiSwagger },
        ],
    },
    {
        title: "Development Tools",
        icon: LuWrench,
        skills: [
            { name: "Git", icon: SiGit },
            { name: "Git Workflows", icon: SiGit },
            { name: "GitHub", icon: SiGithub },
            { name: "Postman", icon: SiPostman },
            { name: "VS Code", icon: VscVscode },
            { name: "Puppeteer", icon: SiPuppeteer },
        ],
    },
    {
        title: "Other Technical Skills",
        icon: LuBoxes,
        skills: [
            { name: "JavaScript (ES6+)", icon: SiJavascript },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Python", icon: SiPython },
            { name: "SQL" },
            { name: "Agile / Scrum" },
            { name: "Performance Optimization" },
        ],
    },
];
