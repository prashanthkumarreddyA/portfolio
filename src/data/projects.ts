import foodMunch480 from "../assets/projects/food-munch-480.webp";
import foodMunch960 from "../assets/projects/food-munch-960.webp";
import jobby480 from "../assets/projects/jobby-480.webp";
import jobby960 from "../assets/projects/jobby-960.webp";
import todo480 from "../assets/projects/todo-480.webp";
import todo960 from "../assets/projects/todo-960.webp";
import wiki480 from "../assets/projects/wikipedia-search-480.webp";
import wiki960 from "../assets/projects/wikipedia-search-960.webp";

import type {
    PersonalProject,
    ProfessionalProject,
    ProjectImage,
} from "./types";

const img = (small: string, large: string, alt: string): ProjectImage => ({
    src: large,
    srcSet: `${small} 480w, ${large} 960w`,
    alt,
});

/**
 * Custom thumbnails stored in public/images/<name>.png (original artwork).
 * Optimised 16:9 WebP copies (<name>-480.webp / <name>-960.webp) are served via srcSet;
 * the PNG remains the fallback src.
 */
const publicImg = (name: string, alt: string): ProjectImage => ({
    src: `/images/${name}.png`,
    srcSet: `/images/${name}-480.webp 480w, /images/${name}-960.webp 960w`,
    alt,
});

/**
 * Professional projects. Source: resume "Projects" + "Professional Experience".
 * No client names, source code, customer data or internal business details are shown.
 */
export const professionalProjects: ProfessionalProject[] = [
    {
        name: "Contract Management System",
        type: "Enterprise web application",
        company: "ITRadiant Solutions",
        description:
            "Enterprise platform for chargeback validation, contract compliance and pricing verification, integrated with SAP.",
        contributions: [
            "Built RESTful APIs and validation engines for contract verification, pricing validation and transaction integrity.",
            "Implemented Redis + BullMQ background jobs for large batch validations with retry and failure handling.",
            "Optimized MongoDB indexing and aggregation pipelines for large-scale transaction processing and reporting.",
        ],
        features: [
            "Maker-checker approval workflows with audit tracking",
            "Daily SAP data sync via scheduled Cron jobs",
            "Automated SFTP inbound/outbound file exchange",
            "Role-based approval screens",
        ],
        stack: [
            "Node.js",
            "Express.js",
            "React.js",
            "MongoDB",
            "Redis",
            "BullMQ",
            "SAP",
            "SFTP",
            "Azure App Service",
        ],
    },
    {
        name: "Expense Desk",
        type: "Web & mobile application",
        company: "ITRadiant Solutions",
        description:
            "Expense management application with a React.js web app and a React Native mobile app for claims, approvals and reimbursements.",
        contributions: [
            "Developed the web application in React.js and the mobile app in React Native.",
            "Developed REST APIs for expense management and document uploads.",
        ],
        features: [
            "Expense claim submission",
            "Multi-level approval workflows",
            "Reimbursement tracking",
            "Reporting, filtering and data export",
        ],
        stack: [
            "React.js",
            "React Native",
            "Node.js",
            "Express.js",
            "MongoDB",
            "REST APIs",
        ],
    },
    {
        name: "Solar Installation Management Application",
        type: "Role-based web application",
        description:
            "Application for managing solar panel installations, with separate dashboards for administrators, marketing teams and customers.",
        contributions: [
            "Developed role-based dashboards for Admin, Marketing and Customer users.",
            "Built installation lifecycle tracking and status management modules.",
            "Generated PDF reports using Puppeteer.",
        ],
        features: [
            "Role-based dashboards",
            "Installation lifecycle tracking",
            "Payment gateway integration",
            "Automated SMS notifications for customers",
        ],
        stack: [
            "Node.js",
            "Express.js",
            "React.js",
            "MySQL",
            "Puppeteer",
            "Payment Gateway",
            "SMS Integration",
        ],
    },
];

/**
 * Personal projects. Only projects whose code or deployment is verified as Prashanth's own.
 * Descriptions, features and stacks were checked against the repositories and deployed apps (Nov 2026).
 * Projects removed from display (ownership unconfirmed) are kept in ./projectsArchive.ts.
 */
export const personalProjects: PersonalProject[] = [
    {
        // Source: github.com/prashanthkumarreddyA/CareerCraft-AI (README + package.json)
        id: "ai-resume-builder",
        name: "CareerCraft AI: AI Resume Builder",
        description:
            "Full-stack app that tailors one master resume to any job description without inventing anything, keeps the original resume layout, and tracks every application that follows.",
        features: [
            "AI resume tailoring of the summary and bullets, with every change reviewed and audited",
            "Gemini job description analysis with a transparent, weighted match score",
            "Claim checker that blocks unsupported technologies, numbers and seniority claims",
            "Application tracking Kanban board with interview rounds and follow-ups",
        ],
        stack: [
            "React 19",
            "Vite",
            "Tailwind CSS",
            "Node.js",
            "Express 5",
            "MongoDB",
            "Mongoose",
            "JWT",
            "Google Gemini",
            "Cloudinary",
            "pdf-lib",
        ],
        categories: ["ai", "react"],
        visual: "resume",
        image: publicImg(
            "careercraft-ai",
            "Illustration of the CareerCraft AI dashboard with AI resume tailoring, job match score, claim checker and application Kanban board"
        ),
        liveUrl: "https://careercraft-ai-dash.netlify.app/login",
        githubUrl: "https://github.com/prashanthkumarreddyA/CareerCraft-AI",
        featured: true,
    },
    {
        // Source: github.com/prashanthkumarreddyA/socket-bingo-game (client/ + server/)
        id: "realtime-bingo",
        name: "Real-time Bingo",
        description:
            "Multiplayer Bingo game where players create or join game rooms and play turn by turn, synced live over WebSockets.",
        features: [
            "Create and join game rooms; games start with two or more players",
            "Randomly shuffled 5×5 board generated for each player",
            "Server-enforced turns with marked numbers synced to every player",
            "Automatic win detection on five completed lines, plus game reset",
        ],
        stack: ["React", "Socket.io", "Node.js", "Express"],
        categories: ["react"],
        visual: "bingo",
        image: publicImg(
            "realtime-bingo",
            "Illustration of a multiplayer Bingo game board with called numbers and a list of connected players"
        ),
        githubUrl: "https://github.com/prashanthkumarreddyA/socket-bingo-game",
    },
    {
        // Source: github.com/prashanthkumarreddyA/react-native-auth-app-write (src/)
        id: "react-native-auth",
        name: "React Native Authentication",
        description:
            "Mobile authentication app built with React Native and TypeScript, using Appwrite for accounts and sessions.",
        features: [
            "Sign up with name, email and password confirmation",
            "Email and password login with session handling",
            "Restores the signed-in user on launch, with separate auth and app navigation stacks",
            "Profile screen with logout and snackbar error messages",
        ],
        stack: ["React Native", "TypeScript", "Appwrite", "React Navigation"],
        categories: ["react"],
        visual: "mobile",
        image: publicImg(
            "react-native-auth",
            "Illustration of React Native login and sign-up screens connected to a cloud authentication backend"
        ),
        githubUrl:
            "https://github.com/prashanthkumarreddyA/react-native-auth-app-write",
    },
    {
        id: "jobby",
        name: "Jobby App",
        description:
            "Job search application with authenticated access, job filters and detailed job pages backed by REST APIs.",
        features: [
            "JWT-based login",
            "Filter by employment type and salary range",
            "Job search with detailed job pages, skills and similar jobs",
            "Loading, failure and retry states",
        ],
        stack: ["React", "REST APIs", "JWT", "CSS"],
        categories: ["react"],
        image: img(
            jobby480,
            jobby960,
            "Jobby app home page with the headline 'Find The Job That Fits Your Life'"
        ),
        liveUrl: "https://jobbyappweb.ccbp.tech",
        // Verified: 97% of this repo's source strings appear in the deployed bundle.
        githubUrl: "https://github.com/prashanthkumarreddyA/jobbyApp",
    },
    {
        id: "todo",
        name: "Todo Website",
        description:
            "Task manager frontend built to create, complete and delete tasks through a REST API backend.",
        features: [
            "Add, complete and delete tasks",
            "Built to sync tasks with a REST API (GET/POST/PUT/DELETE)",
            "Checkbox status changes sent to the backend",
        ],
        // The hosted backend returned 404 when checked (Nov 2026), so the demo may not load tasks.
        status: "Demo backend offline",
        stack: ["HTML", "CSS", "Bootstrap", "JavaScript", "REST API"],
        categories: ["javascript"],
        image: img(
            todo480,
            todo960,
            "Todo application with a task input and task list"
        ),
        liveUrl: "https://todosdailytask.netlify.app/",
    },
    {
        id: "wikipedia-search",
        name: "Wikipedia Search Application",
        description:
            "Search Wikipedia articles by keyword and browse results with titles, links and descriptions.",
        features: [
            "Search on Enter key press",
            "Results rendered dynamically with title, URL and description",
            "Loading spinner while results are fetched",
        ],
        stack: ["HTML", "CSS", "Bootstrap", "JavaScript", "Fetch API"],
        categories: ["javascript"],
        image: img(wiki480, wiki960, "Wikipedia search application preview"),
        liveUrl: "https://wikipediadecode.ccbp.tech",
    },
    {
        id: "food-munch",
        name: "Healthy Food Restaurant",
        description:
            "Responsive restaurant website with menu categories, delivery and payment information, built with Bootstrap.",
        features: [
            "Responsive layout with Bootstrap",
            "Explore Menu section with food categories",
            "Why Choose Us, Delivery & Payment and Follow Us sections",
        ],
        stack: ["HTML", "CSS", "Bootstrap"],
        categories: ["javascript"],
        image: img(
            foodMunch480,
            foodMunch960,
            "Healthy food restaurant website preview"
        ),
        liveUrl: "https://tryoutfoodmunch.ccbp.tech",
    },
];

export const projectFilters = [
    { id: "all", label: "All" },
    { id: "react", label: "React" },
    { id: "javascript", label: "HTML · CSS · JS" },
] as const;
