import { send } from "@emailjs/browser";
import type { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { LuLoaderCircle, LuSend } from "react-icons/lu";
import { toast } from "react-toastify";

import { emailjsConfig } from "../../config/emailjs";
import { profile } from "../../data/profile";

/** Field names match the existing EmailJS template variables from v1. */
export interface ContactFormValues {
    from_name: string;
    reply_to: string;
    phone_number: string;
    subject: string;
    message: string;
}

const inputClass =
    "w-full rounded-lg border border-line-strong bg-surface px-4 py-3 text-[15px] text-fg placeholder:text-subtle outline-none transition-colors focus:border-accent aria-[invalid=true]:border-red-400";

export function ContactForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormValues>({ mode: "onTouched" });

    const onSubmit = async (data: ContactFormValues) => {
        try {
            await send(
                emailjsConfig.serviceId,
                emailjsConfig.templateId,
                { ...data },
                {
                    publicKey: emailjsConfig.publicKey,
                }
            );
            toast.success("Thanks! Your message has been sent.");
            reset();
        } catch {
            toast.error(
                `Sorry, the message could not be sent. Please email me at ${profile.email}.`
            );
        }
    };

    return (
        <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="card grid gap-5 p-6 sm:grid-cols-2 sm:p-8"
            aria-label="Contact form"
        >
            <Field
                id="from_name"
                label="Name"
                error={errors.from_name?.message}
            >
                <input
                    id="from_name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    className={inputClass}
                    aria-invalid={errors.from_name ? "true" : "false"}
                    aria-describedby={
                        errors.from_name ? "from_name-error" : undefined
                    }
                    {...register("from_name", { required: "Name is required" })}
                />
            </Field>

            <Field
                id="reply_to"
                label="Email"
                error={errors.reply_to?.message}
            >
                <input
                    id="reply_to"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className={inputClass}
                    aria-invalid={errors.reply_to ? "true" : "false"}
                    aria-describedby={
                        errors.reply_to ? "reply_to-error" : undefined
                    }
                    {...register("reply_to", {
                        required: "Email is required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Enter a valid email address",
                        },
                    })}
                />
            </Field>

            <Field
                id="phone_number"
                label="Phone (optional)"
                error={errors.phone_number?.message}
            >
                <input
                    id="phone_number"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+91 ..."
                    className={inputClass}
                    aria-invalid={errors.phone_number ? "true" : "false"}
                    aria-describedby={
                        errors.phone_number ? "phone_number-error" : undefined
                    }
                    {...register("phone_number", {
                        validate: (v) =>
                            !v ||
                            /^[+\d][\d\s()-]{7,}$/.test(v.trim()) ||
                            "Enter a valid phone number",
                    })}
                />
            </Field>

            <Field
                id="subject"
                label="Subject"
                error={errors.subject?.message}
            >
                <input
                    id="subject"
                    type="text"
                    placeholder="What's this about?"
                    className={inputClass}
                    aria-invalid={errors.subject ? "true" : "false"}
                    aria-describedby={
                        errors.subject ? "subject-error" : undefined
                    }
                    {...register("subject", {
                        required: "Subject is required",
                        minLength: {
                            value: 3,
                            message: "Subject is too short",
                        },
                    })}
                />
            </Field>

            <Field
                id="message"
                label="Message"
                error={errors.message?.message}
                full
            >
                <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about the role or project..."
                    className={`${inputClass} resize-y`}
                    aria-invalid={errors.message ? "true" : "false"}
                    aria-describedby={
                        errors.message ? "message-error" : undefined
                    }
                    {...register("message", {
                        required: "Message is required",
                        minLength: {
                            value: 20,
                            message: "Please write at least 20 characters",
                        },
                        maxLength: {
                            value: 1000,
                            message: "Maximum 1000 characters",
                        },
                    })}
                />
            </Field>

            <div className="sm:col-span-2">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="cta cta-primary cursor-pointer disabled:cursor-wait disabled:opacity-70"
                >
                    {isSubmitting ? "Sending..." : "Send message"}
                    <span
                        className="cta-icon"
                        aria-hidden="true"
                    >
                        {isSubmitting ? (
                            <LuLoaderCircle
                                size={13}
                                className="animate-spin"
                            />
                        ) : (
                            <LuSend size={13} />
                        )}
                    </span>
                </button>
            </div>
        </form>
    );
}

interface FieldProps {
    id: string;
    label: string;
    error?: string;
    full?: boolean;
    children: ReactNode;
}

function Field({ id, label, error, full, children }: FieldProps) {
    return (
        <div className={full ? "sm:col-span-2" : ""}>
            <label
                htmlFor={id}
                className="mb-2 block text-sm font-medium text-fg/90"
            >
                {label}
            </label>
            {children}
            {error && (
                <p
                    id={`${id}-error`}
                    role="alert"
                    className="mt-1.5 text-sm text-red-300"
                >
                    {error}
                </p>
            )}
        </div>
    );
}
