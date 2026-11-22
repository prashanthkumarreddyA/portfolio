import { skillCategories } from "../../data/skills";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";

export function Skills() {
    return (
        <Section
            id="skills"
            eyebrow="Technical skills"
            title="Tools and technologies I work with"
            tone="alt"
        >
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {skillCategories.map(
                    ({ title, icon: CategoryIcon, skills }, i) => (
                        <Reveal
                            key={title}
                            delay={(i % 4) * 70}
                        >
                            <article className="card card-hover h-full p-6">
                                <header className="mb-5 flex items-center gap-3">
                                    <span className="grid size-10 place-items-center rounded-lg bg-accent-soft text-accent">
                                        <CategoryIcon
                                            size={20}
                                            aria-hidden="true"
                                        />
                                    </span>
                                    <h3 className="text-lg font-semibold">
                                        {title}
                                    </h3>
                                </header>
                                <ul className="flex flex-wrap gap-2">
                                    {skills.map(({ name, icon: Icon }) => (
                                        <li
                                            key={name}
                                            className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface-2 px-3 py-1.5 text-sm text-fg/90"
                                        >
                                            {Icon ? (
                                                <Icon
                                                    size={15}
                                                    aria-hidden="true"
                                                    className="text-muted"
                                                />
                                            ) : (
                                                <span
                                                    aria-hidden="true"
                                                    className="size-1.5 rounded-full bg-accent-2"
                                                />
                                            )}
                                            {name}
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        </Reveal>
                    )
                )}
            </div>
        </Section>
    );
}
