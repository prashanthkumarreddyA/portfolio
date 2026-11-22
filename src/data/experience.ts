import type { Experience } from "./types";

/** Most recent first. Source: resume. */
export const experience: Experience[] = [
    {
        company: "ITRadiant Solutions Pvt. Ltd",
        role: "Full Stack Developer",
        location: "Hyderabad, India",
        start: "Feb 2025",
        end: "Present",
        current: true,
        summary:
            "Develop and maintain enterprise financial applications for contract management, chargeback processing and pricing validation.",
        responsibilities: [
            "Designed and built 25+ RESTful APIs and validation engines in Node.js/Express.js for contract verification, pricing validation and transaction integrity.",
            "Implemented asynchronous background processing with Redis and BullMQ, handling batch validation of 10,000+ records per run with retry and failure handling.",
            "Optimized MongoDB indexing and aggregation pipelines, improving query response time by ~40% on large transactional datasets.",
            "Developed scheduled Cron jobs to sync contract and pricing data from SAP daily, eliminating manual data entry.",
            "Implemented SFTP-based inbound and outbound file transfer workflows for automated contract data exchange.",
            "Engineered maker-checker approval workflows with multi-level authorization and audit tracking for financial operations.",
            "Built React.js frontend modules with reusable components, Redux state management and role-based approval screens.",
            "Automated CI/CD pipelines with GitHub Actions for Azure App Service, reducing deployment time by ~60%.",
            "Developed the Expense Desk web application in React.js and its mobile app in React Native.",
        ],
        highlights: [
            { value: "25+", label: "RESTful APIs" },
            { value: "10,000+", label: "Records per batch run" },
            { value: "~40%", label: "Faster queries" },
            { value: "~60%", label: "Faster deployments" },
        ],
        stack: [
            "Node.js",
            "Express.js",
            "React.js",
            "React Native",
            "Redux",
            "MongoDB",
            "Redis",
            "BullMQ",
            "SAP",
            "SFTP",
            "GitHub Actions",
            "Azure App Service",
        ],
    },
    {
        company: "Labyrinth Global Solutions Pvt. Ltd",
        role: "Software Engineer",
        location: "Hyderabad, India",
        start: "Jul 2023",
        end: "Feb 2025",
        summary:
            "Developed full-stack web applications using Node.js, Express.js, React.js and MySQL.",
        responsibilities: [
            "Built 20+ REST APIs and scalable backend services with JWT authentication and role-based authorization.",
            "Designed MySQL database schemas and optimized SQL queries with indexing, improving API response time by ~30%.",
            "Integrated payment gateways, SMS services and third-party APIs into production applications.",
            "Built reusable React.js components, reducing duplicate UI code across modules.",
            "Deployed and maintained applications on AWS EC2.",
            "Collaborated with cross-functional teams in Agile/Scrum sprints to deliver production-ready features.",
        ],
        highlights: [
            { value: "20+", label: "REST APIs" },
            { value: "~30%", label: "Faster API responses" },
        ],
        stack: [
            "Node.js",
            "Express.js",
            "React.js",
            "MySQL",
            "JWT",
            "REST APIs",
            "AWS EC2",
        ],
    },
];
