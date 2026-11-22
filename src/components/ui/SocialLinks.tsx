import type { SocialLink } from "../../data/types";

interface SocialLinksProps {
    links: SocialLink[];
    size?: "sm" | "md";
    /** "dark" for use on the navy footer. */
    tone?: "light" | "dark";
}

const toneClass = {
    light: "border-line-strong bg-surface text-muted hover:border-accent hover:bg-accent hover:text-accent-ink",
    dark: "border-white/15 text-on-navy hover:border-white hover:bg-white hover:text-navy",
};

export function SocialLinks({
    links,
    size = "md",
    tone = "light",
}: SocialLinksProps) {
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
                            className={`${box} grid place-items-center rounded-full border transition-colors duration-200 ${toneClass[tone]}`}
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
