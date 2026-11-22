import { FaInstagram, FaYoutube } from "react-icons/fa";

import { navItems, profile, socialLinks } from "../../data/profile";
import { SocialLinks } from "../ui/SocialLinks";

/** v1 footer links are kept; Instagram/YouTube remain here only (not in the professional contact area). */
const footerLinks = [
    ...socialLinks,
    {
        label: "Instagram",
        href: "https://www.instagram.com/im_prashanthreddy/",
        icon: FaInstagram,
    },
    {
        label: "YouTube",
        href: "https://www.youtube.com/@prashanthkumarreddy5",
        icon: FaYoutube,
    },
];

export function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="border-t border-line bg-ink">
            <div className="container-page flex flex-col items-center gap-8 py-12 text-center">
                <a
                    href="#top"
                    className="text-xl font-bold tracking-tight"
                >
                    Prashanth<span className="text-accent">.</span>
                </a>
                <nav aria-label="Footer">
                    <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[15px] text-muted">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    className="transition-colors hover:text-fg"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <SocialLinks
                    links={footerLinks}
                    size="sm"
                />
            </div>
            <div className="border-t border-line">
                <p className="container-page py-6 text-center text-sm text-subtle">
                    © {year} {profile.fullName}. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
