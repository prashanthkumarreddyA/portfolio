import { FaGithub } from "react-icons/fa";
import { LuArrowUpRight, LuFileText, LuSparkles } from "react-icons/lu";

import type { PersonalProject } from "../../data/types";
import { ChipList } from "../ui/Chip";

export function ProjectCard({ project }: { project: PersonalProject }) {
    const {
        name,
        description,
        features,
        stack,
        image,
        liveUrl,
        githubUrl,
        status,
    } = project;

    return (
        <article className="group card card-hover flex h-full flex-col overflow-hidden hover:-translate-y-1">
            <div className="relative aspect-video overflow-hidden border-b border-line bg-surface-2">
                {image ? (
                    <img
                        src={image.src}
                        srcSet={image.srcSet}
                        sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                        alt={image.alt}
                        width={960}
                        height={540}
                        loading="lazy"
                        decoding="async"
                        className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                ) : project.visual === "bingo" ? (
                    <BingoPlaceholder />
                ) : project.visual === "mobile" ? (
                    <MobilePlaceholder />
                ) : (
                    <ResumePlaceholder />
                )}
                {/* Featured sits top-right so it doesn't cover titles in custom thumbnails */}
                {project.featured && (
                    <span className="absolute top-3 right-3 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-ink shadow-sm">
                        Featured
                    </span>
                )}
                {status && (
                    <span className="absolute top-3 left-3 rounded-full border border-line bg-surface/95 px-3 py-1 text-xs font-medium text-fg shadow-sm backdrop-blur">
                        {status}
                    </span>
                )}
            </div>

            <div className="flex flex-1 flex-col p-6">
                <h4 className="text-lg font-semibold">{name}</h4>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    {description}
                </p>

                <h5 className="sr-only">Key features</h5>
                <ul className="mt-4 grid gap-1.5">
                    {features.map((f) => (
                        <li
                            key={f}
                            className="text-sm text-muted before:mr-2 before:text-accent-2 before:content-['→']"
                        >
                            {f}
                        </li>
                    ))}
                </ul>

                <div className="mt-auto pt-6">
                    {stack.length > 0 && (
                        <ChipList
                            items={stack}
                            label={`Technologies used in ${name}`}
                        />
                    )}

                    {(liveUrl || githubUrl) && (
                        <div className="mt-5 flex flex-wrap gap-2.5 border-t border-line pt-5">
                            {liveUrl && (
                                <a
                                    href={liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cta cta-primary h-10 px-4 text-sm"
                                    aria-label={`${name}: live demo (opens in a new tab)`}
                                >
                                    Live Demo
                                    <LuArrowUpRight
                                        size={15}
                                        aria-hidden="true"
                                    />
                                </a>
                            )}
                            {githubUrl && (
                                <a
                                    href={githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cta cta-outline h-10 px-4 text-sm"
                                    aria-label={`${name}: source code on GitHub (opens in a new tab)`}
                                >
                                    <FaGithub
                                        size={15}
                                        aria-hidden="true"
                                    />
                                    GitHub
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
}

const placeholderBg =
    "relative grid size-full place-items-center bg-[radial-gradient(circle_at_70%_20%,rgb(79_70_229/0.12),transparent_55%)]";

/** Abstract 5×5 board for the Bingo project (no live deployment to screenshot). */
const BINGO_MARKED = new Set([0, 6, 12, 18, 24, 2, 7, 17, 22, 10, 11, 13]);
function BingoPlaceholder() {
    return (
        <div
            aria-hidden="true"
            className={placeholderBg}
        >
            <div className="grid w-[44%] rotate-[-4deg] grid-cols-5 gap-1.5 rounded-lg border border-line-strong bg-surface p-3 shadow-xl shadow-slate-900/10 transition-transform duration-500 group-hover:rotate-0">
                {Array.from({ length: 25 }, (_, i) => (
                    <span
                        key={i}
                        className={`aspect-square rounded ${
                            BINGO_MARKED.has(i)
                                ? i % 6 === 0
                                    ? "bg-accent"
                                    : "bg-accent/45"
                                : "bg-fg/10"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}

/** Abstract phone with a sign-in form for the React Native auth project. */
function MobilePlaceholder() {
    return (
        <div
            aria-hidden="true"
            className={placeholderBg}
        >
            <div className="flex h-[78%] aspect-9/17 rotate-[-4deg] flex-col rounded-[1.1rem] border-2 border-line-strong bg-surface p-3 shadow-xl shadow-slate-900/10 transition-transform duration-500 group-hover:rotate-0">
                <span className="mx-auto h-1 w-1/3 rounded-full bg-fg/20" />
                <span className="mt-4 h-2 w-1/2 rounded bg-fg/70" />
                <span className="mt-3 h-4 w-full rounded border border-line-strong" />
                <span className="mt-2 h-4 w-full rounded border border-line-strong" />
                <span className="mt-3 h-4 w-full rounded bg-accent" />
                <span className="mt-2 h-1.5 w-2/3 self-center rounded bg-fg/15" />
            </div>
        </div>
    );
}

/** Illustration for CareerCraft AI (its public pages are only a sign-in form). */
function ResumePlaceholder() {
    return (
        <div
            aria-hidden="true"
            className={placeholderBg}
        >
            <div className="w-[52%] rotate-[-4deg] rounded-lg border border-line-strong bg-surface p-4 shadow-xl shadow-slate-900/10 transition-transform duration-500 group-hover:rotate-0">
                <div className="flex items-center gap-2">
                    <LuFileText
                        className="text-accent"
                        size={16}
                    />
                    <span className="h-2 w-1/2 rounded bg-fg/70" />
                </div>
                <span className="mt-3 block h-1.5 w-full rounded bg-fg/15" />
                <span className="mt-1.5 block h-1.5 w-5/6 rounded bg-fg/15" />
                <span className="mt-1.5 block h-1.5 w-4/6 rounded bg-fg/15" />
                <span className="mt-3 block h-1.5 w-2/5 rounded bg-accent/60" />
                <span className="mt-1.5 block h-1.5 w-full rounded bg-fg/15" />
                <span className="mt-1.5 block h-1.5 w-3/4 rounded bg-fg/15" />
            </div>
            <span className="absolute right-[18%] bottom-[18%] grid size-9 place-items-center rounded-full bg-accent text-accent-ink">
                <LuSparkles size={18} />
            </span>
        </div>
    );
}
