"use server";

import {
  validateContactForm,
  type ContactFormData,
  type FieldErrors,
} from "@/lib/validation";
import { company } from "@/config/company";

export interface SubmitResult {
  status: "success" | "validation-error" | "not-configured" | "error";
  fieldErrors?: FieldErrors;
  message?: string;
}

/* ──────────────────────────────────────────────────────────────────
 * Simple in-memory rate limit: max 5 submissions per IP per hour.
 * Good enough for a corporate site on a single serverless region;
 * swap for a durable store (e.g. Upstash) if abuse becomes an issue.
 * ────────────────────────────────────────────────────────────────── */
const submissions = new Map<string, number[]>();
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (submissions.get(key) ?? []).filter(
    (t) => now - t < WINDOW_MS
  );
  if (recent.length >= MAX_PER_WINDOW) return true;
  recent.push(now);
  submissions.set(key, recent);
  return false;
}

/**
 * Handles contact form submissions.
 *
 * Email delivery requires CONTACT_WEBHOOK_URL to be configured (see
 * .env.example and README). Until then the action returns a clear
 * "not-configured" state — it NEVER fakes a success message.
 */
export async function submitContactForm(
  data: ContactFormData & { website?: string }
): Promise<SubmitResult> {
  // Honeypot: real users never fill the hidden "website" field.
  if (data.website) {
    // Silently accept to avoid teaching bots; nothing is sent.
    return { status: "success" };
  }

  // Authoritative server-side validation.
  const fieldErrors = validateContactForm(data);
  if (Object.keys(fieldErrors).length > 0) {
    return { status: "validation-error", fieldErrors };
  }

  if (isRateLimited("global")) {
    return {
      status: "error",
      message:
        "Too many messages have been sent recently. Please try again later.",
    };
  }

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (!webhookUrl) {
    return {
      status: "not-configured",
      message:
        "Our online form is not active yet. Please reach us by email instead — see the contact details on this page.",
    };
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // FormSubmit rejects requests that carry no browser-style origin,
        // and server actions don't send one by default.
        Origin: company.siteUrl,
        Referer: `${company.siteUrl}/contact`,
      },
      body: JSON.stringify({
        // The extra underscore fields configure FormSubmit.co (our default
        // delivery service); any other webhook simply ignores them.
        _subject: `[Website] ${data.subject.trim().slice(0, 150)}`,
        _template: "table",
        _captcha: "false",
        name: data.fullName.trim().slice(0, 100),
        email: data.email.trim().slice(0, 254),
        inquiryType: data.inquiryType,
        subject: data.subject.trim().slice(0, 150),
        message: data.message.trim().slice(0, 5000),
        submittedAt: new Date().toISOString(),
      }),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    // FormSubmit returns { success: "true"|"false", message } with HTTP 200;
    // treat an explicit "false" (e.g. email not yet activated) as a failure.
    const body = (await res.json().catch(() => null)) as {
      success?: string | boolean;
    } | null;
    if (body && String(body.success) === "false") {
      throw new Error("Delivery service reported failure");
    }
    return { status: "success" };
  } catch {
    return {
      status: "error",
      message:
        "Something went wrong while sending your message. Please try again, or contact us by email.",
    };
  }
}
