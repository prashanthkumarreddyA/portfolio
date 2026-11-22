import { useId, useState } from "react";
import {
    LuBriefcase,
    LuCalendar,
    LuChevronDown,
    LuMapPin,
} from "react-icons/lu";

import { experience } from "../../data/experience";
import type { Experience as ExperienceItem } from "../../data/types";
import { ChipList } from "../ui/Chip";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";

const VISIBLE_BULLETS = 5;

export function Experience() {
    return (
        <Section
            id="experience"
            eyebrow="Experience"
            title="Where I've worked"
            lead="3+ years building full-stack applications, most recently enterprise financial systems."
        >
            <ol className="relative space-y-10 sm:space-y-12">
                {/* timeline rail */}
                <span
                    aria-hidden="true"
                    className="absolute top-2 bottom-2 left-[19px] w-px bg-gradient-to-b from-accent/60 via-line to-transparent sm:left-[23px]"
                />
                {experience.map((job, i) => (
                    <li
                        key={job.company}
                        className="relative pl-14 sm:pl-20"
                    >
                        <span
                            aria-hidden="true"
                            className={`absolute top-0 left-0 grid size-10 place-items-center rounded-full border sm:size-12 ${
                                job.current
                                    ? "border-accent bg-accent text-accent-ink shadow-[0_0_0_6px_rgb(79_70_229/0.12)]"
                                    : "border-accent/25 bg-accent-soft text-accent"
                            }`}
                        >
                            <LuBriefcase size={18} />
                        </span>
                        <Reveal delay={i * 80}>
                            <ExperienceCard job={job} />
                        </Reveal>
                    </li>
                ))}
            </ol>
        </Section>
    );
}

function ExperienceCard({ job }: { job: ExperienceItem }) {
    const [expanded, setExpanded] = useState(false);
    const listId = useId();
    const hidden = Math.max(job.responsibilities.length - VISIBLE_BULLETS, 0);
    const bullets = expanded
        ? job.responsibilities
        : job.responsibilities.slice(0, VISIBLE_BULLETS);

    return (
        <article className="card p-6 sm:p-8">
            <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                    <h3 className="text-xl font-semibold sm:text-2xl">
                        {job.role}
                    </h3>
                    <p className="mt-1 text-base font-medium text-accent">
                        {job.company}
                    </p>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted sm:flex-col sm:items-end">
                    <span className="inline-flex items-center gap-1.5">
                        <LuCalendar
                            size={14}
                            aria-hidden="true"
                        />
                        <time>{job.start}</time> – <time>{job.end}</time>
                        {job.current && (
                            <span className="ml-1 rounded-full bg-accent-2-soft px-2 py-0.5 text-xs font-medium text-accent-2 ring-1 ring-accent-2/20">
                                Current
                            </span>
                        )}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                        <LuMapPin
                            size={14}
                            aria-hidden="true"
                        />
                        {job.location}
                    </span>
                </div>
            </header>

            <p className="mt-5 text-[15px] leading-relaxed text-fg/90 sm:text-base">
                {job.summary}
            </p>

            <dl className="mt-6 flex flex-wrap gap-3">
                {job.highlights.map((h) => (
                    <div
                        key={h.label}
                        className="flex min-w-[8.5rem] flex-col-reverse rounded-xl border border-line bg-surface-2 px-4 py-3"
                    >
                        <dt className="text-xs text-muted">{h.label}</dt>
                        <dd className="text-xl font-bold text-accent">
                            {h.value}
                        </dd>
                    </div>
                ))}
            </dl>

            <h4 className="mt-7 text-sm font-semibold tracking-wide text-fg uppercase">
                Key contributions
            </h4>
            <ul
                id={listId}
                className="mt-3 space-y-2.5"
            >
                {bullets.map((item) => (
                    <li
                        key={item}
                        className="flex gap-3 text-[15px] leading-relaxed text-muted"
                    >
                        <span
                            aria-hidden="true"
                            className="mt-[0.6rem] size-1.5 shrink-0 rounded-full bg-accent"
                        />
                        {item}
                    </li>
                ))}
            </ul>
            {hidden > 0 && (
                <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={listId}
                    onClick={() => setExpanded((v) => !v)}
                    className="mt-4 inline-flex items-center gap-1.5 rounded-md text-sm font-medium text-accent hover:underline"
                >
                    {expanded ? "Show less" : `Show ${hidden} more`}
                    <LuChevronDown
                        size={16}
                        aria-hidden="true"
                        className={`transition-transform ${expanded ? "rotate-180" : ""}`}
                    />
                </button>
            )}

            <div className="mt-7 border-t border-line pt-5">
                <ChipList
                    items={job.stack}
                    label={`Technologies used at ${job.company}`}
                />
            </div>
        </article>
    );
}
