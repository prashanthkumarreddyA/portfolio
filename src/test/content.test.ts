import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

import { experience } from "../data/experience";
import { personalProjects, professionalProjects } from "../data/projects";
import { archivedProjectLinks } from "../data/projectsArchive";
import { profile } from "../data/profile";
import { skillCategories } from "../data/skills";

/** Every project link that existed on the v1 portfolio (visible or commented out). */
const V1_PROJECT_LINKS = [
    "https://tryoutfoodmunch.ccbp.tech",
    "https://wikipediadecode.ccbp.tech",
    "https://todosdailytask.netlify.app/",
    "https://movix-app-mocha.vercel.app/",
    "https://jobbyappweb.ccbp.tech",
    "https://sanketipl.ccbp.tech/",
    "https://sanket-youtube-clone.netlify.app/",
    "https://nxtwatchsanket.ccbp.tech/login",
    "https://kratin-llc.vercel.app/",
];

/** Movix and IPL Dashboard were hidden (ownership unconfirmed) but must stay in the archive. */
const UNCONFIRMED_LINKS = [
    "https://movix-app-mocha.vercel.app/",
    "https://sanketipl.ccbp.tech/",
];

/** The other v1-visible projects must stay visible. */
const V1_VISIBLE_LINKS = V1_PROJECT_LINKS.slice(0, 6).filter(
    (url) => !UNCONFIRMED_LINKS.includes(url)
);

describe("project link preservation", () => {
    const allLinks = [
        ...personalProjects.map((p) => p.liveUrl),
        ...archivedProjectLinks.map((p) => p.liveUrl),
    ];

    it.each(V1_PROJECT_LINKS)("keeps %s", (url) => {
        expect(allLinks).toContain(url);
    });

    it.each(V1_VISIBLE_LINKS)("still displays %s", (url) => {
        expect(personalProjects.map((p) => p.liveUrl)).toContain(url);
    });

    it("has unique project ids", () => {
        const ids = personalProjects.map((p) => p.id);
        expect(new Set(ids).size).toBe(ids.length);
    });

    it("includes AI Resume Builder with its confirmed links", () => {
        const arb = personalProjects.find((p) => p.id === "ai-resume-builder");
        expect(arb).toBeDefined();
        expect(arb?.liveUrl).toBe(
            "https://careercraft-ai-dash.netlify.app/login"
        );
        expect(arb?.githubUrl).toBe(
            "https://github.com/prashanthkumarreddyA/CareerCraft-AI"
        );
        expect(arb?.status).toBeUndefined();
        expect(arb?.featured).toBe(true);
    });

    it.each(UNCONFIRMED_LINKS)(
        "hides %s but keeps it in the archive",
        (url) => {
            expect(personalProjects.map((p) => p.liveUrl)).not.toContain(url);
            expect(archivedProjectLinks.map((p) => p.liveUrl)).toContain(url);
        }
    );

    it("links only verified GitHub repositories of the owner", () => {
        const github = Object.fromEntries(
            personalProjects
                .filter((p) => p.githubUrl)
                .map((p) => [p.id, p.githubUrl])
        );
        expect(github).toEqual({
            "ai-resume-builder":
                "https://github.com/prashanthkumarreddyA/CareerCraft-AI",
            "realtime-bingo":
                "https://github.com/prashanthkumarreddyA/socket-bingo-game",
            "react-native-auth":
                "https://github.com/prashanthkumarreddyA/react-native-auth-app-write",
            jobby: "https://github.com/prashanthkumarreddyA/jobbyApp",
        });
    });

    it("does not show live demos for projects without a working deployment", () => {
        for (const id of ["realtime-bingo", "react-native-auth"]) {
            expect(
                personalProjects.find((p) => p.id === id)?.liveUrl
            ).toBeUndefined();
        }
    });
});

describe("resume-based content", () => {
    it("lists both companies, most recent first", () => {
        expect(experience.map((e) => e.company)).toEqual([
            "ITRadiant Solutions Pvt. Ltd",
            "Labyrinth Global Solutions Pvt. Ltd",
        ]);
        expect(experience[0].current).toBe(true);
    });

    it("does not list skills removed from the profile", () => {
        const names = skillCategories.flatMap((c) =>
            c.skills.map((s) => s.name.toLowerCase())
        );
        for (const removed of [
            "vue",
            "angular",
            "jquery",
            "photoshop",
            "figma",
            "sqlite",
        ]) {
            expect(names.some((n) => n.includes(removed))).toBe(false);
        }
    });

    it("professional projects never expose links", () => {
        for (const p of professionalProjects) {
            expect(JSON.stringify(p)).not.toMatch(/https?:\/\//);
        }
    });

    it("ships the resume PDF referenced by the download buttons", () => {
        const file = resolve(
            __dirname,
            "../../public",
            profile.resume.href.replace(/^\//, "")
        );
        expect(existsSync(file)).toBe(true);
    });
});
