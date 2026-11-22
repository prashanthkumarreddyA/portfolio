import { LuAward, LuGraduationCap } from "react-icons/lu";

import { achievements, education } from "../../data/education";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";

export function Education() {
    return (
        <Section
            id="education"
            eyebrow="Education & achievements"
            title="Background"
            tone="alt"
        >
            <div className="grid gap-5 lg:grid-cols-3">
                {education.map((item, i) => (
                    <Reveal
                        key={item.institution}
                        delay={i * 80}
                    >
                        <article className="card flex h-full gap-4 p-6">
                            <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">
                                <LuGraduationCap
                                    size={22}
                                    aria-hidden="true"
                                />
                            </span>
                            <div>
                                <h3 className="text-lg leading-snug font-semibold">
                                    {item.credential}
                                </h3>
                                <p className="mt-1.5 text-[15px] text-muted">
                                    {item.institution}
                                </p>
                                <p className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm text-subtle">
                                    <span>{item.period}</span>
                                    <span aria-hidden="true">·</span>
                                    <span>{item.location}</span>
                                    {item.detail && (
                                        <>
                                            <span aria-hidden="true">·</span>
                                            <span className="text-fg/80">
                                                {item.detail}
                                            </span>
                                        </>
                                    )}
                                </p>
                            </div>
                        </article>
                    </Reveal>
                ))}

                {achievements.map((a) => (
                    <Reveal
                        key={a.title}
                        delay={160}
                    >
                        <article className="card flex h-full gap-4 border-accent/25 bg-gradient-to-br from-accent/[0.07] to-transparent p-6">
                            <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-accent text-accent-ink">
                                <LuAward
                                    size={22}
                                    aria-hidden="true"
                                />
                            </span>
                            <div>
                                <p className="font-mono text-xs tracking-wider text-accent uppercase">
                                    Achievement
                                </p>
                                <h3 className="mt-1 text-lg font-semibold">
                                    {a.title}
                                </h3>
                                <p className="mt-1.5 text-[15px] leading-relaxed text-muted">
                                    {a.description}
                                </p>
                            </div>
                        </article>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}
