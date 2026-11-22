import type { AnchorHTMLAttributes, ReactNode } from "react";
import { LuArrowUpRight } from "react-icons/lu";

interface CallToActionProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    children: ReactNode;
    variant?: "primary" | "outline";
    /** Icon shown in the round badge. Defaults to the diagonal arrow from v1. */
    icon?: ReactNode;
}

/**
 * The v1 "CallToAction" button (white with a yellow slide-fill on hover),
 * rebuilt as a real link so it works with keyboard, screen readers and middle-click.
 */
export function CallToAction({
    href,
    children,
    variant = "primary",
    icon,
    className = "",
    ...rest
}: CallToActionProps) {
    return (
        <a
            href={href}
            className={`cta ${variant === "primary" ? "cta-primary" : "cta-outline"} ${className}`}
            {...rest}
        >
            <span>{children}</span>
            <span
                className="cta-icon"
                aria-hidden="true"
            >
                {icon ?? <LuArrowUpRight size={14} />}
            </span>
        </a>
    );
}
