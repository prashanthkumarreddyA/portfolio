import type { ReactNode } from "react";

export function Chip({ children }: { children: ReactNode }) {
    return <span className="chip">{children}</span>;
}

export function ChipList({
    items,
    label,
}: {
    items: readonly string[];
    label: string;
}) {
    return (
        <ul
            className="flex flex-wrap gap-2"
            aria-label={label}
        >
            {items.map((item) => (
                <li key={item}>
                    <Chip>{item}</Chip>
                </li>
            ))}
        </ul>
    );
}
