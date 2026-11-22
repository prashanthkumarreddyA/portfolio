import { useState } from "react";
import { LuBuilding2, LuLock } from "react-icons/lu";

import {
    personalProjects,
    professionalProjects,
    projectFilters,
} from "../../data/projects";
import type { ProfessionalProject } from "../../data/types";
import { ProjectCard } from "../projects/ProjectCard";
import { ChipList } from "../ui/Chip";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";

type FilterId = (typeof projectFilters)[number]["id"];

export function Projects() {
    const [filter, setFilter] = useState<FilterId>("all");
    // Bumping the key replays the v1 zoom animation whenever the filter changes.
    const [animKey, setAnimKey] = useState(0);

    const visible =
        filter === "all"
            ? personalProjects
            : personalProjects.filter((p) => p.categories.includes(filter));

    const selectFilter = (id: FilterId) => {
        setFilter(id);
        setAnimKey((k) => k + 1);
    };

    return (
        <Section
            id="projects"
            eyebrow="Projects"
            title="Selected work"
            lead="Production systems I've built professionally, followed by personal projects with live demos."
        >
            {/* Professional */}
            <Reveal>
                <h3 className="mb-6 flex items-center gap-3 text-xl font-semibold sm:text-2xl">
                    Professional projects
                    <span className="rounded-full border border-line px-2.5 py-0.5 text-xs font-medium text-muted">
                        {professionalProjects.length}
                    </span>
                </h3>
            </Reveal>
            <div className="grid gap-5 lg:grid-cols-3">
                {professionalProjects.map((project, i) => (
                    <Reveal
                        key={project.name}
                        delay={i * 80}
                    >
                        <ProfessionalCard project={project} />
                    </Reveal>
                ))}
            </div>

            {/* Personal */}
            <div className="mt-20 sm:mt-24">
                <Reveal className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                    <h3 className="flex items-center gap-3 text-xl font-semibold sm:text-2xl">
                        Personal projects
                        <span className="rounded-full border border-line px-2.5 py-0.5 text-xs font-medium text-muted">
                            {personalProjects.length}
                        </span>
                    </h3>
                    <div
                        role="group"
                        aria-label="Filter personal projects"
                        className="-mx-1 flex gap-1 overflow-x-auto px-1 pb-1"
                    >
                        {projectFilters.map((f) => (
                            <button
                                key={f.id}
                                type="button"
                                aria-pressed={filter === f.id}
                                onClick={() => selectFilter(f.id)}
                                className="sweep shrink-0 rounded-md border border-line px-4 py-2 text-sm whitespace-nowrap"
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>
                </Reveal>

                <ul
                    key={animKey}
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                    aria-live="polite"
                >
                    {visible.map((project, i) => (
                        <li
                            key={project.id}
                            className={animKey > 0 ? "zoom-in" : ""}
                            style={
                                animKey > 0
                                    ? { animationDelay: `${i * 50}ms` }
                                    : undefined
                            }
                        >
                            <ProjectCard project={project} />
                        </li>
                    ))}
                </ul>
            </div>
        </Section>
    );
}

function ProfessionalCard({ project }: { project: ProfessionalProject }) {
    return (
        <article className="card flex h-full flex-col p-6 transition-colors duration-300 hover:border-line-strong">
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-subtle">
                <span className="font-mono tracking-wider text-accent uppercase">
                    {project.type}
                </span>
                {project.company && (
                    <span className="inline-flex items-center gap-1">
                        <LuBuilding2
                            size={12}
                            aria-hidden="true"
                        />
                        {project.company}
                    </span>
                )}
            </p>
            <h4 className="mt-3 text-xl font-semibold">{project.name}</h4>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
                {project.description}
            </p>

            <h5 className="mt-6 text-xs font-semibold tracking-wider text-fg uppercase">
                My contribution
            </h5>
            <ul className="mt-2.5 space-y-2">
                {project.contributions.map((c) => (
                    <li
                        key={c}
                        className="flex gap-2.5 text-sm leading-relaxed text-muted"
                    >
                        <span
                            aria-hidden="true"
                            className="mt-[0.55rem] size-1.5 shrink-0 rounded-full bg-accent"
                        />
                        {c}
                    </li>
                ))}
            </ul>

            <h5 className="mt-6 text-xs font-semibold tracking-wider text-fg uppercase">
                Key features
            </h5>
            <ul className="mt-2.5 grid gap-1.5">
                {project.features.map((f) => (
                    <li
                        key={f}
                        className="text-sm text-muted before:mr-2 before:text-accent before:content-['→']"
                    >
                        {f}
                    </li>
                ))}
            </ul>

            <div className="mt-auto pt-6">
                <ChipList
                    items={project.stack}
                    label={`Technologies used in ${project.name}`}
                />
                <p className="mt-5 flex items-center gap-2 border-t border-line pt-4 text-xs text-subtle">
                    <LuLock
                        size={13}
                        aria-hidden="true"
                    />
                    Proprietary project. Source code and demo are not public.
                </p>
            </div>
        </article>
    );
}
