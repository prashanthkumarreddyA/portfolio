import type { SocialLink } from "../../data/types";

interface SocialLinksProps {
    links: SocialLink[];
    size?: "sm" | "md";
}

export function SocialLinks({ links, size = "md" }: SocialLinksProps) {
    const box = size === "sm" ? "size-10" : "size-11";
    return (
        <ul className="flex items-center gap-3">
            {links.map(({ label, href, icon: Icon }) => {
                const external = href.startsWith("http");
                return (
                    <li key={label}>
                        <a
                            href={href}
                            aria-label={label}
                            title={label}
                            {...(external
                                ? {
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                  }
                                : {})}
                            className={`${box} grid place-items-center rounded-full border border-line-strong text-muted transition-colors duration-200 hover:border-accent hover:bg-accent hover:text-accent-ink`}
                        >
                            <Icon
                                size={17}
                                aria-hidden="true"
                            />
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}
