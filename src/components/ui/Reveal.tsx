import type { CSSProperties, ElementType, ReactNode } from "react";

import { useReveal } from "../../hooks/useReveal";

interface RevealProps {
    children: ReactNode;
    as?: ElementType;
    delay?: number;
    className?: string;
}

/** Subtle fade-up on first scroll into view. Disabled by prefers-reduced-motion in CSS. */
export function Reveal({
    children,
    as: Tag = "div",
    delay = 0,
    className = "",
}: RevealProps) {
    const ref = useReveal<HTMLElement>();
    return (
        <Tag
            ref={ref}
            className={`reveal ${className}`}
            style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
        >
            {children}
        </Tag>
    );
}
