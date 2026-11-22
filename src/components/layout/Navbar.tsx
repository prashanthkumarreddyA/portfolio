import { useEffect, useState } from "react";
import { LuDownload, LuMenu, LuX } from "react-icons/lu";

import { navItems, profile } from "../../data/profile";
import { useActiveSection } from "../../hooks/useActiveSection";

const sectionIds = navItems.map((item) => item.id);

export function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const active = useActiveSection(sectionIds);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Mobile menu: lock page scroll and close on Escape.
    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) =>
            e.key === "Escape" && setOpen(false);
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKey);
        };
    }, [open]);

    return (
        <>
            <header
                className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 ${
                    open
                        ? "border-b border-line bg-ink"
                        : scrolled
                          ? "border-b border-line bg-ink/85 backdrop-blur-md"
                          : "border-b border-transparent"
                }`}
            >
                <nav
                    aria-label="Primary"
                    className="container-page flex h-16 items-center justify-between sm:h-18"
                >
                    <a
                        href="#top"
                        className="text-xl font-bold tracking-tight"
                        onClick={() => setOpen(false)}
                    >
                        Prashanth<span className="text-accent">.</span>
                    </a>

                    {/* Desktop */}
                    <div className="hidden items-center gap-1 md:flex">
                        <ul className="flex items-center gap-1">
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <a
                                        href={`#${item.id}`}
                                        aria-current={
                                            active === item.id
                                                ? "true"
                                                : undefined
                                        }
                                        className={`relative block rounded-md px-3 py-2 text-[15px] transition-colors hover:text-fg ${
                                            active === item.id
                                                ? "text-fg"
                                                : "text-muted"
                                        }`}
                                    >
                                        {item.label}
                                        <span
                                            className={`absolute bottom-0.5 left-1/2 block h-0.5 -translate-x-1/2 rounded-full bg-accent transition-all duration-300 ${
                                                active === item.id
                                                    ? "w-4"
                                                    : "w-0"
                                            }`}
                                            aria-hidden="true"
                                        />
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <a
                            href={profile.resume.href}
                            download={profile.resume.fileName}
                            className="cta cta-primary ml-4 h-10 px-4 text-sm"
                        >
                            Resume
                            <LuDownload
                                size={15}
                                aria-hidden="true"
                            />
                        </a>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        type="button"
                        className="grid size-10 place-items-center rounded-md text-fg md:hidden"
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        aria-label={open ? "Close menu" : "Open menu"}
                        onClick={() => setOpen((v) => !v)}
                    >
                        {open ? <LuX size={24} /> : <LuMenu size={24} />}
                    </button>
                </nav>
            </header>

            {/* Mobile full-screen menu (v1 pattern). Rendered outside <header> because the
                header's backdrop-filter would otherwise become the containing block for position:fixed. */}
            <div
                id="mobile-menu"
                hidden={!open}
                className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-ink md:hidden"
            >
                <ul className="container-page flex flex-col gap-1 pt-6">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <a
                                href={`#${item.id}`}
                                onClick={() => setOpen(false)}
                                className="sweep block rounded-md px-3 py-3 text-2xl font-semibold"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                    <li className="mt-6 px-3">
                        <a
                            href={profile.resume.href}
                            download={profile.resume.fileName}
                            onClick={() => setOpen(false)}
                            className="cta cta-primary w-full"
                        >
                            Download Resume
                            <LuDownload
                                size={16}
                                aria-hidden="true"
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}
