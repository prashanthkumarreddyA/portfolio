/**
 * EmailJS settings for the contact form (same account as v1).
 * These are public, browser-side identifiers by design. They can be overridden
 * with VITE_EMAILJS_* environment variables in Netlify.
 */
export const emailjsConfig = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "service_46smyji",
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "template_3laxg6k",
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "yXqwug4gF_mDffJxS",
};
