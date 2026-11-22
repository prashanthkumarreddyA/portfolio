import { LuArrowDown, LuDownload, LuMapPin, LuSend } from "react-icons/lu";

import handWave from "../../assets/hand-wave.webp";
import { profile, socialLinks } from "../../data/profile";
import { CallToAction } from "../ui/CallToAction";
import { SocialLinks } from "../ui/SocialLinks";

const codeStack = ["Node.js", "Express.js", "React.js", "MongoDB", "MySQL"];

export function Hero() {
    return (
        <section
            id="top"
            aria-label="Introduction"
            className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20 sm:pt-32"
        >
            {/* Subtle indigo gradient accent */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_50%_at_88%_12%,rgb(79_70_229/0.13),transparent_70%),radial-gradient(40%_45%_at_0%_100%,rgb(15_118_110/0.06),transparent_70%)]"
            />
            {/* Subtle dotted grid background */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-60 [background-image:radial-gradient(rgb(30_41_59/0.10)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]"
            />

            <div className="container-page relative grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
                <div>
                    <p className="flex animate-fade-up items-center gap-2 text-lg text-muted sm:text-xl">
                        Hello
                        <img
                            src={handWave}
                            alt=""
                            width={28}
                            height={28}
                            className="size-7 origin-[70%_70%] motion-safe:animate-[wave_2.2s_ease-in-out_1s_2]"
                        />
                        , I&apos;m
                    </p>
                    <h1
                        className="mt-3 animate-fade-up text-[2.6rem] leading-[1.05] font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl"
                        style={{ animationDelay: "80ms" }}
                    >
                        {profile.name}
                    </h1>
                    <p
                        className="mt-5 flex animate-fade-up flex-wrap items-center gap-x-3 gap-y-1 text-xl font-medium sm:text-2xl"
                        style={{ animationDelay: "160ms" }}
                    >
                        <span className="text-accent">{profile.title}</span>
                        <span
                            className="hidden text-line-strong sm:inline"
                            aria-hidden="true"
                        >
                            |
                        </span>
                        <span className="text-base text-muted sm:text-lg">
                            {profile.tagline.join(" · ")}
                        </span>
                    </p>
                    <p
                        className="mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-muted sm:text-lg"
                        style={{ animationDelay: "240ms" }}
                    >
                        {profile.intro}
                    </p>
                    <p
                        className="mt-5 flex animate-fade-up flex-wrap items-center gap-x-4 gap-y-2 text-sm text-subtle"
                        style={{ animationDelay: "300ms" }}
                    >
                        <span className="inline-flex items-center gap-2">
                            <span
                                className="relative flex size-2"
                                aria-hidden="true"
                            >
                                <span className="absolute inline-flex size-full rounded-full bg-accent-2 opacity-50 motion-safe:animate-ping" />
                                <span className="relative inline-flex size-2 rounded-full bg-accent-2" />
                            </span>
                            Currently at {profile.currentCompany}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                            <LuMapPin
                                size={14}
                                aria-hidden="true"
                            />
                            {profile.location}
                        </span>
                    </p>

                    <div
                        className="mt-9 flex animate-fade-up flex-wrap gap-3"
                        style={{ animationDelay: "380ms" }}
                    >
                        <CallToAction
                            href="#projects"
                            icon={<LuArrowDown size={14} />}
                        >
                            View Projects
                        </CallToAction>
                        <CallToAction
                            href={profile.resume.href}
                            download={profile.resume.fileName}
                            variant="outline"
                            icon={<LuDownload size={14} />}
                        >
                            Download Resume
                        </CallToAction>
                        <CallToAction
                            href="#contact"
                            variant="outline"
                            icon={<LuSend size={13} />}
                        >
                            Contact Me
                        </CallToAction>
                    </div>

                    <div
                        className="mt-9 animate-fade-up"
                        style={{ animationDelay: "460ms" }}
                    >
                        <SocialLinks links={socialLinks} />
                    </div>
                </div>

                {/* Profile summary rendered as a code card (replaces the v1 stock photo) */}
                <div
                    className="animate-fade-up"
                    style={{ animationDelay: "300ms" }}
                >
                    <figure
                        className="overflow-hidden rounded-2xl border border-navy bg-navy text-on-navy shadow-2xl shadow-indigo-900/25"
                        aria-label="Profile summary"
                    >
                        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                            <span className="size-3 rounded-full bg-[#ff5f57]" />
                            <span className="size-3 rounded-full bg-[#febc2e]" />
                            <span className="size-3 rounded-full bg-[#28c840]" />
                            <span className="ml-3 font-mono text-xs text-on-navy-muted">
                                developer.ts
                            </span>
                        </div>
                        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 sm:p-6 sm:text-sm">
                            <code>
                                <span className="text-[#c792ea]">const</span>{" "}
                                <span className="text-[#82aaff]">
                                    developer
                                </span>{" "}
                                = {"{"}
                                {"\n"}
                                {"  "}name: <Str>{profile.name}</Str>,{"\n"}
                                {"  "}role: <Str>{profile.title}</Str>,{"\n"}
                                {"  "}experience:{" "}
                                <Str>{`${profile.yearsOfExperience} years`}</Str>
                                ,{"\n"}
                                {"  "}stack: [{"\n"}
                                {codeStack.map((s, i) => (
                                    <span key={s}>
                                        {"    "}
                                        <Str>{s}</Str>
                                        {i < codeStack.length - 1 ? "," : ""}
                                        {"\n"}
                                    </span>
                                ))}
                                {"  "}],{"\n"}
                                {"  "}location: <Str>{profile.location}</Str>,
                                {"\n"}
                                {"}"};
                            </code>
                        </pre>
                    </figure>
                </div>
            </div>
        </section>
    );
}

function Str({ children }: { children: string }) {
    // indigo-300 on navy: 7.34:1
    return <span className="text-[#a5b4fc]">&quot;{children}&quot;</span>;
}
