// Checks every external URL found in src/data/*.ts and index.html.
// Usage: npm run check:links
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname.replace(
    /^\/([A-Za-z]:)/,
    "$1"
);
const files = [
    join(root, "index.html"),
    ...readdirSync(join(root, "src/data")).map((f) =>
        join(root, "src/data", f)
    ),
];

const urls = new Set();
for (const file of files) {
    for (const match of readFileSync(file, "utf8").matchAll(
        /https?:\/\/[^\s"'`)<>]+/g
    )) {
        const url = match[0].replace(/[.,]$/, "");
        if (!/schema\.org|sitemaps\.org|w3\.org/.test(url)) urls.add(url);
    }
}

let failed = 0;
await Promise.all(
    [...urls].map(async (url) => {
        try {
            const res = await fetch(url, {
                redirect: "follow",
                signal: AbortSignal.timeout(20000),
                headers: { "user-agent": "Mozilla/5.0 (portfolio link check)" },
            });
            // LinkedIn answers bots with 999; treat it as reachable.
            const ok = res.ok || res.status === 999;
            if (!ok) failed++;
            console.log(`${ok ? "OK  " : "FAIL"} ${res.status} ${url}`);
        } catch (err) {
            failed++;
            console.log(`FAIL ---  ${url} (${err.cause?.code ?? err.name})`);
        }
    })
);
console.log(`\n${urls.size} links checked, ${failed} failed.`);
process.exit(failed ? 1 : 0);
