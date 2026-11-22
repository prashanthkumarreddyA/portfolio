import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import App from "../App";
import { navItems, profile } from "../data/profile";

describe("App", () => {
    it("renders the current professional profile, not the old trainee profile", () => {
        const { container } = render(<App />);
        expect(
            screen.getByRole("heading", { level: 1, name: profile.name })
        ).toBeInTheDocument();
        const text = container.textContent ?? "";
        expect(text).not.toMatch(/trainee/i);
        expect(text).not.toMatch(/Keniya Andrew/i);
        expect(text).not.toMatch(/Best (Student|Coder) Award/i);
        expect(text).toContain("ITRadiant Solutions");
        expect(text).toContain("Labyrinth Global Solutions");
    });

    it("has a section for every navigation link", () => {
        const { container } = render(<App />);
        for (const item of navItems) {
            expect(container.querySelector(`#${item.id}`)).not.toBeNull();
        }
    });

    it("exposes the three hero CTAs with working targets", () => {
        render(<App />);
        const hero = screen.getByRole("region", { name: "Introduction" });
        expect(
            within(hero).getByRole("link", { name: /view projects/i })
        ).toHaveAttribute("href", "#projects");
        const resume = within(hero).getByRole("link", {
            name: /download resume/i,
        });
        expect(resume).toHaveAttribute("href", profile.resume.href);
        expect(resume).toHaveAttribute("download", profile.resume.fileName);
        expect(
            within(hero).getByRole("link", { name: /contact me/i })
        ).toHaveAttribute("href", "#contact");
    });

    it("opens every external link in a new tab safely", () => {
        const { container } = render(<App />);
        const external =
            container.querySelectorAll<HTMLAnchorElement>('a[href^="http"]');
        expect(external.length).toBeGreaterThan(5);
        external.forEach((a) => {
            expect(a).toHaveAttribute("target", "_blank");
            expect(a.getAttribute("rel")).toContain("noopener");
        });
    });

    it("filters personal projects", async () => {
        const user = userEvent.setup();
        render(<App />);
        const group = screen.getByRole("group", {
            name: /filter personal projects/i,
        });
        await user.click(within(group).getByRole("button", { name: "React" }));
        expect(
            screen.getByRole("heading", { name: "Real-time Bingo" })
        ).toBeInTheDocument();
        expect(
            screen.queryByRole("heading", { name: "Todo Website" })
        ).not.toBeInTheDocument();
        await user.click(within(group).getByRole("button", { name: "All" }));
        expect(
            screen.getByRole("heading", { name: "Todo Website" })
        ).toBeInTheDocument();
    });

    it.each([
        [/AI Resume Builder/, "careercraft-ai"],
        ["Real-time Bingo", "realtime-bingo"],
        ["React Native Authentication", "react-native-auth"],
    ])("shows the custom thumbnail for %s", (name, file) => {
        render(<App />);
        const card = screen.getByRole("heading", { name }).closest("article")!;
        const image = within(card).getByRole("img");
        expect(image).toHaveAttribute("src", `/images/${file}.png`);
        expect(image.getAttribute("srcset")).toContain(
            `/images/${file}-960.webp 960w`
        );
        expect(image).toHaveAttribute("loading", "lazy");
        expect(image.getAttribute("alt")).toMatch(/^Illustration of /);
    });

    it("does not render projects with unconfirmed ownership", () => {
        render(<App />);
        expect(
            screen.queryByRole("heading", { name: /movix/i })
        ).not.toBeInTheDocument();
        expect(
            screen.queryByRole("heading", { name: /ipl dashboard/i })
        ).not.toBeInTheDocument();
    });

    it("shows GitHub-only cards without a Live Demo button", () => {
        render(<App />);
        for (const name of ["Real-time Bingo", "React Native Authentication"]) {
            const card = screen
                .getByRole("heading", { name })
                .closest("article")!;
            expect(
                within(card).queryByRole("link", { name: /live demo/i })
            ).not.toBeInTheDocument();
            expect(
                within(card).getByRole("link", { name: /github/i })
            ).toHaveAttribute("rel", "noopener noreferrer");
        }
    });

    it("shows AI Resume Builder with Live Demo and GitHub buttons", () => {
        render(<App />);
        const card = screen
            .getByRole("heading", { name: /AI Resume Builder/ })
            .closest("article")!;
        expect(
            within(card).queryByText(/coming soon/i)
        ).not.toBeInTheDocument();
        expect(within(card).getByText("Featured")).toBeInTheDocument();
        const live = within(card).getByRole("link", { name: /live demo/i });
        const github = within(card).getByRole("link", { name: /github/i });
        expect(live).toHaveAttribute(
            "href",
            "https://careercraft-ai-dash.netlify.app/login"
        );
        expect(github).toHaveAttribute(
            "href",
            "https://github.com/prashanthkumarreddyA/CareerCraft-AI"
        );
        for (const link of [live, github]) {
            expect(link).toHaveAttribute("target", "_blank");
            expect(link).toHaveAttribute("rel", "noopener noreferrer");
        }
    });

    it("validates the contact form before sending", async () => {
        const user = userEvent.setup();
        render(<App />);
        await user.click(screen.getByRole("button", { name: /send message/i }));
        expect(await screen.findByText("Name is required")).toBeInTheDocument();
        expect(screen.getByText("Email is required")).toBeInTheDocument();
        expect(screen.getByText("Message is required")).toBeInTheDocument();
        expect(
            screen.queryByText(/phone/i, { selector: "[role=alert]" })
        ).not.toBeInTheDocument();
    });
});
