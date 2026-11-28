import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { LuMail } from "react-icons/lu";

import type { SocialLink } from "./types";

/**
 * Source of truth: Prashanth_Kumar_Reddy_Resume_Final.pdf (public/Prashanth_Kumar_Reddy_Resume.pdf).
 * Keep this file in sync with the resume. Do not add claims that are not on the resume.
 */
export const profile = {
    name: "Prashanth Kumar Reddy",
    fullName: "Prashanth Kumar Reddy Addula",
    title: "Full Stack Developer",
    tagline: ["Node.js", "React.js", "MERN Stack"],
    location: "Hyderabad, India",
    yearsOfExperience: "3+",
    currentCompany: "ITRadiant Solutions",
    email: "a.prashanth5reddy@gmail.com",
    phone: "+91 7799554668",
    phoneHref: "tel:+917799554668",
    linkedin: "https://www.linkedin.com/in/prashanth-kumar-reddy-addula/",
    github: "https://github.com/prashanthkumarreddyA",
    resume: {
        href: "/Prashanth_Kumar_Reddy_Resume.pdf",
        fileName: "Prashanth_Kumar_Reddy_Resume.pdf",
    },
    siteUrl: "https://prashanth-reddy-portfolio.netlify.app/",

    intro: "Full Stack Developer with 3+ years of experience building scalable web and mobile applications. I design RESTful APIs, background job pipelines and third-party integrations in Node.js, and build responsive interfaces in React.js and React Native.",

    about: [
        "I'm a Full Stack Developer based in Hyderabad with 3+ years of experience building scalable web and mobile applications using Node.js, Express.js, React.js, React Native, TypeScript, MongoDB and MySQL.",
        "My strength is backend development: RESTful APIs, JWT authentication, role-based access control, background job processing with Redis and BullMQ, and third-party integrations such as SAP, SFTP, payment gateways and SMS. Today I work on enterprise financial applications for contract management, chargeback processing and pricing validation.",
        "I care about performance and delivery: optimizing MongoDB and MySQL queries, and automating CI/CD deployments to Azure App Service and AWS EC2. I work in Agile/Scrum teams and deliver production-ready features end to end.",
    ],

    journey: [
        {
            period: "2025 – Now",
            text: "Full Stack Developer at ITRadiant Solutions",
        },
        {
            period: "2023 – 2025",
            text: "Software Engineer at Labyrinth Global Solutions",
        },
        {
            period: "2022 – 2023",
            text: "Industry Ready Certification in Full Stack Development",
        },
        { period: "2017 – 2020", text: "B.E. in Mechanical Engineering" },
    ],

    stats: [
        { value: "3+", label: "Years of experience" },
        { value: "2", label: "Companies" },
        { value: "10,000+", label: "Records validated per batch run" },
        { value: "~60%", label: "Faster deployments via CI/CD" },
    ],
} as const;

export const socialLinks: SocialLink[] = [
    { label: "GitHub", href: profile.github, icon: FaGithub },
    { label: "LinkedIn", href: profile.linkedin, icon: FaLinkedinIn },
    { label: "Email", href: `mailto:${profile.email}`, icon: LuMail },
];

export const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
] as const;
