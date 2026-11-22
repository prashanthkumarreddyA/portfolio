/**
 * Backup of project links that are NOT rendered on the portfolio.
 * Nothing here is imported by the UI; it exists so no original URL is lost.
 * Restore an entry by moving it back into personalProjects in ./projects.ts.
 */
export interface ArchivedProject {
    name: string;
    liveUrl: string;
    /** Why the project is hidden. */
    reason: string;
    /** Screenshot kept in src/assets/projects/, if any. */
    screenshot?: string;
}

export const archivedProjectLinks: ArchivedProject[] = [
    // Removed from display Nov 2026: ownership not confirmed.
    {
        name: "Movix App",
        liveUrl: "https://movix-app-mocha.vercel.app/",
        reason: "Ownership not confirmed: the live site says 'created by : Sanket Patil' and no matching repository exists on github.com/prashanthkumarreddyA.",
        screenshot: "src/assets/projects/movix-960.webp",
    },
    {
        name: "IPL Dashboard",
        liveUrl: "https://sanketipl.ccbp.tech/",
        reason: "Ownership not confirmed: deployed under a 'sanket' subdomain and no matching repository exists on github.com/prashanthkumarreddyA.",
        screenshot: "src/assets/projects/ipl-dashboard-960.webp",
    },
    // Already hidden (commented out) on the v1 portfolio.
    {
        name: "YouTube Clone",
        liveUrl: "https://sanket-youtube-clone.netlify.app/",
        reason: "Hidden on v1; deployed under a 'sanket' subdomain.",
    },
    {
        name: "Nxt Watch",
        liveUrl: "https://nxtwatchsanket.ccbp.tech/login",
        reason: "Hidden on v1. Likely source: github.com/prashanthkumarreddyA/NxtWatch-Like-YouTube (74% match), but deployed under a 'sanket' subdomain.",
    },
    {
        name: "Doctors",
        liveUrl: "https://kratin-llc.vercel.app/",
        reason: "Hidden on v1; no matching repository found.",
    },
];
