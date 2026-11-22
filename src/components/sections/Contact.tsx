import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";

import { profile } from "../../data/profile";
import { ContactForm } from "../contact/ContactForm";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";

const contactItems = [
    {
        label: "Email",
        value: profile.email,
        href: `mailto:${profile.email}`,
        icon: LuMail,
    },
    {
        label: "Phone",
        value: profile.phone,
        href: profile.phoneHref,
        icon: LuPhone,
    },
    {
        label: "LinkedIn",
        value: "prashanth-kumar-reddy-addula",
        href: profile.linkedin,
        icon: FaLinkedinIn,
        external: true,
    },
    {
        label: "GitHub",
        value: "prashanthkumarreddyA",
        href: profile.github,
        icon: FaGithub,
        external: true,
    },
    { label: "Location", value: profile.location, icon: LuMapPin },
];

export function Contact() {
    return (
        <Section
            id="contact"
            eyebrow="Contact"
            title="Let's work together"
            lead="Have a role, project or question in mind? Send a message and I'll get back to you."
        >
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
                <Reveal>
                    <ul className="card divide-y divide-line">
                        {contactItems.map(
                            ({ label, value, href, icon: Icon, external }) => {
                                const content = (
                                    <>
                                        <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-surface-2 text-accent">
                                            <Icon
                                                size={17}
                                                aria-hidden="true"
                                            />
                                        </span>
                                        <span className="min-w-0">
                                            <span className="block text-xs text-subtle">
                                                {label}
                                            </span>
                                            <span className="block truncate text-[15px] text-fg">
                                                {value}
                                            </span>
                                        </span>
                                    </>
                                );
                                return (
                                    <li key={label}>
                                        {href ? (
                                            <a
                                                href={href}
                                                {...(external
                                                    ? {
                                                          target: "_blank",
                                                          rel: "noopener noreferrer",
                                                      }
                                                    : {})}
                                                className="flex items-center gap-4 p-5 transition-colors hover:bg-surface-2/60"
                                            >
                                                {content}
                                            </a>
                                        ) : (
                                            <div className="flex items-center gap-4 p-5">
                                                {content}
                                            </div>
                                        )}
                                    </li>
                                );
                            }
                        )}
                    </ul>
                </Reveal>
                <Reveal delay={100}>
                    <ContactForm />
                </Reveal>
            </div>
        </Section>
    );
}
