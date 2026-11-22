import { useEffect, useState } from "react";

/** Returns the id of the section currently in the upper part of the viewport. */
export function useActiveSection(ids: readonly string[]) {
    const [active, setActive] = useState<string>("");

    useEffect(() => {
        if (typeof IntersectionObserver === "undefined") return;
        const elements = ids
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null);

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort(
                        (a, b) =>
                            a.boundingClientRect.top - b.boundingClientRect.top
                    );
                if (visible[0]) setActive(visible[0].target.id);
            },
            { rootMargin: "-30% 0px -60% 0px" }
        );
        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [ids]);

    return active;
}
