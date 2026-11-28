import { profile } from "../../data/profile";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";

export function About() {
    return (
        <Section
            id="about"
            eyebrow="About me"
            title="Backend-focused full stack developer, shipping production features end to end."
            tone="alt"
        >
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
                <Reveal className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
                    {profile.about.map((paragraph) => (
                        <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                    ))}
                </Reveal>

                <Reveal delay={120}>
                    <h3 className="mb-5 text-sm font-semibold tracking-wide text-fg uppercase">
                        Career journey
                    </h3>
                    <ol className="relative space-y-6 border-l border-line pl-6">
                        {profile.journey.map((step, i) => (
                            <li
                                key={step.text}
                                className="relative"
                            >
                                <span
                                    aria-hidden="true"
                                    className={`absolute top-1.5 -left-[1.95rem] size-3 rounded-full border-2 ${
                                        i === 0
                                            ? "border-accent bg-accent"
                                            : "border-line-strong bg-ink-2"
                                    }`}
                                />
                                <p className="font-mono text-xs text-subtle">
                                    {step.period}
                                </p>
                                <p className="mt-1 text-[15px] text-fg">
                                    {step.text}
                                </p>
                            </li>
                        ))}
                    </ol>
                </Reveal>
            </div>

            <Reveal delay={80}>
                <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
                    {profile.stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="flex flex-col-reverse gap-1 bg-surface p-6 sm:p-8"
                        >
                            <dt className="text-sm text-muted">{stat.label}</dt>
                            <dd className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">
                                {stat.value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </Reveal>
        </Section>
    );
}
