import type { ReactNode } from "react";

import { Reveal } from "./Reveal";

interface SectionProps {
    id: string;
    eyebrow?: string;
    title?: string;
    lead?: string;
    /** Alternating backgrounds, carried over from the v1 dark/light sections. */
    tone?: "base" | "alt";
    children: ReactNode;
    className?: string;
}

export function Section({
    id,
    eyebrow,
    title,
    lead,
    tone = "base",
    children,
    className = "",
}: SectionProps) {
    const headingId = title ? `${id}-heading` : undefined;
    return (
        <section
            id={id}
            aria-labelledby={headingId}
            className={`py-20 sm:py-28 ${tone === "alt" ? "bg-ink-2" : "bg-ink"} ${className}`}
        >
            <div className="container-page">
                {title && (
                    <Reveal className="mb-12 max-w-2xl sm:mb-16">
                        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
                        <h2
                            id={headingId}
                            className="text-3xl font-bold tracking-tight text-balance sm:text-[2.6rem] sm:leading-[1.15]"
                        >
                            {title}
                        </h2>
                        {lead && (
                            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                                {lead}
                            </p>
                        )}
                    </Reveal>
                )}
                {children}
            </div>
        </section>
    );
}
