"use client";

import { useState, useTransition } from "react";
import { CheckCircle2, AlertCircle, Loader2, Info } from "lucide-react";
import {
  inquiryTypes,
  validateContactForm,
  type ContactFormData,
  type FieldErrors,
} from "@/lib/validation";
import { submitContactForm } from "@/app/contact/actions";

const initialData: ContactFormData = {
  fullName: "",
  email: "",
  inquiryType: "",
  subject: "",
  message: "",
  consent: false,
};

type Status =
  | { kind: "idle" }
  | { kind: "success" }
  | { kind: "not-configured"; message: string }
  | { kind: "error"; message: string };

const inputClass =
  "w-full rounded-button border border-line bg-white px-4 py-3 text-[15px] text-ink placeholder:text-muted/60 focus:border-brand focus:outline-2 focus:outline-offset-0 focus:outline-brand/30 aria-[invalid=true]:border-red-500";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600">
      <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      {message}
    </p>
  );
}

export function ContactForm() {
  const [data, setData] = useState<ContactFormData>(initialData);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [pending, startTransition] = useTransition();

  function set<K extends keyof ContactFormData>(
    key: K,
    value: ContactFormData[K]
  ) {
    setData((d) => ({ ...d, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const clientErrors = validateContactForm(data);
    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      setStatus({ kind: "idle" });
      return;
    }
    const honeypot =
      (new FormData(e.currentTarget).get("website") as string) || "";
    startTransition(async () => {
      const result = await submitContactForm({ ...data, website: honeypot });
      if (result.status === "success") {
        setStatus({ kind: "success" });
        setData(initialData);
      } else if (result.status === "validation-error") {
        setErrors(result.fieldErrors ?? {});
      } else if (result.status === "not-configured") {
        setStatus({ kind: "not-configured", message: result.message ?? "" });
      } else {
        setStatus({ kind: "error", message: result.message ?? "" });
      }
    });
  }

  if (status.kind === "success") {
    return (
      <div
        role="status"
        className="rounded-card border border-brand/20 bg-brand/5 p-8 text-center"
      >
        <CheckCircle2
          className="mx-auto h-10 w-10 text-brand"
          aria-hidden="true"
        />
        <h3 className="mt-4 font-display text-xl font-bold text-ink">
          Message sent — thank you
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          We have received your inquiry and will respond as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      {status.kind === "not-configured" && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-card border border-gold/40 bg-gold/5 p-4 text-sm leading-relaxed text-ink/80"
        >
          <Info className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold" aria-hidden="true" />
          {status.message}
        </div>
      )}
      {status.kind === "error" && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-card border border-red-200 bg-red-50 p-4 text-sm leading-relaxed text-red-700"
        >
          <AlertCircle className="mt-0.5 h-4.5 w-4.5 shrink-0" aria-hidden="true" />
          {status.message}
        </div>
      )}

      <p className="text-xs text-muted">
        Fields marked <span aria-hidden="true">*</span>
        <span className="sr-only">with an asterisk</span> are required.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="mb-1.5 block text-sm font-semibold text-ink">
            Full Name <span className="text-gold" aria-hidden="true">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            value={data.fullName}
            onChange={(e) => set("fullName", e.target.value)}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            className={inputClass}
            placeholder="Your name"
          />
          <FieldError id="fullName-error" message={errors.fullName} />
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-ink">
            Email Address <span className="text-gold" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={data.email}
            onChange={(e) => set("email", e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClass}
            placeholder="name@example.com"
          />
          <FieldError id="email-error" message={errors.email} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="inquiryType" className="mb-1.5 block text-sm font-semibold text-ink">
            Inquiry Type <span className="text-gold" aria-hidden="true">*</span>
          </label>
          <select
            id="inquiryType"
            name="inquiryType"
            required
            value={data.inquiryType}
            onChange={(e) => set("inquiryType", e.target.value)}
            aria-invalid={!!errors.inquiryType}
            aria-describedby={errors.inquiryType ? "inquiryType-error" : undefined}
            className={inputClass}
          >
            <option value="" disabled>
              Choose a topic…
            </option>
            {inquiryTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <FieldError id="inquiryType-error" message={errors.inquiryType} />
        </div>

        <div>
          <label htmlFor="subject" className="mb-1.5 block text-sm font-semibold text-ink">
            Subject <span className="text-gold" aria-hidden="true">*</span>
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            value={data.subject}
            onChange={(e) => set("subject", e.target.value)}
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            className={inputClass}
            placeholder="How can we help?"
          />
          <FieldError id="subject-error" message={errors.subject} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-ink">
          Message <span className="text-gold" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          value={data.message}
          onChange={(e) => set("message", e.target.value)}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={inputClass}
          placeholder="Tell us a little about your inquiry…"
        />
        <FieldError id="message-error" message={errors.message} />
      </div>

      {/* Honeypot — hidden from real users, catches naive bots. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm leading-relaxed text-ink/80">
          <input
            type="checkbox"
            name="consent"
            checked={data.consent}
            onChange={(e) => set("consent", e.target.checked)}
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            className="mt-1 h-4 w-4 shrink-0 accent-brand"
          />
          <span>
            I agree that SHARMA GLOBAL LLC may process the information I have
            provided in order to respond to my inquiry, as described in the{" "}
            <a href="/privacy-policy" className="font-semibold text-brand underline underline-offset-2">
              Privacy Policy
            </a>
            . <span className="text-gold" aria-hidden="true">*</span>
          </span>
        </label>
        <FieldError id="consent-error" message={errors.consent} />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center justify-center gap-2 rounded-button bg-brand px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-light disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        {pending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
