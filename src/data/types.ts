import type { IconType } from "react-icons";

export interface SocialLink {
    label: string;
    href: string;
    icon: IconType;
}

export interface Experience {
    company: string;
    role: string;
    location: string;
    start: string; // e.g. "Feb 2025"
    end: string; // e.g. "Present"
    current?: boolean;
    summary: string;
    responsibilities: string[];
    highlights: { value: string; label: string }[];
    stack: string[];
}

export interface Skill {
    name: string;
    icon?: IconType;
}

export interface SkillCategory {
    title: string;
    icon: IconType;
    skills: Skill[];
}

export interface ProfessionalProject {
    name: string;
    type: string;
    company?: string;
    description: string;
    contributions: string[];
    features: string[];
    stack: string[];
}

export type ProjectCategory = "react" | "javascript" | "ai";

export interface ProjectImage {
    src: string;
    srcSet: string;
    alt: string;
}

export interface PersonalProject {
    id: string;
    name: string;
    description: string;
    features: string[];
    stack: string[];
    categories: ProjectCategory[];
    image?: ProjectImage;
    /** Illustration shown when there is no screenshot. */
    visual?: "resume" | "bingo" | "mobile";
    liveUrl?: string;
    githubUrl?: string;
    /** Shown on the card when links are not available yet. */
    status?: string;
    featured?: boolean;
}

export interface Education {
    institution: string;
    credential: string;
    location: string;
    period: string;
    detail?: string;
}
