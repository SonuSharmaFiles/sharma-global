/**
 * Shared validation for the contact form.
 * Used on the client (instant feedback) and re-run on the server
 * (authoritative check) so bad input can never bypass validation.
 */

export const inquiryTypes = [
  "General Inquiry",
  "Business Partnership",
  "Marketplace Inquiry",
  "Product Inquiry",
  "Supplier Inquiry",
  "Other",
] as const;

export type InquiryType = (typeof inquiryTypes)[number];

export interface ContactFormData {
  fullName: string;
  email: string;
  inquiryType: string;
  subject: string;
  message: string;
  consent: boolean;
}

export type FieldErrors = Partial<Record<keyof ContactFormData, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateContactForm(data: ContactFormData): FieldErrors {
  const errors: FieldErrors = {};

  const name = data.fullName.trim();
  if (!name) errors.fullName = "Please enter your full name.";
  else if (name.length < 2) errors.fullName = "Name looks too short.";
  else if (name.length > 100) errors.fullName = "Name is too long (max 100 characters).";

  const email = data.email.trim();
  if (!email) errors.email = "Please enter your email address.";
  else if (!EMAIL_RE.test(email))
    errors.email = "Please enter a valid email address, like name@example.com.";

  if (!inquiryTypes.includes(data.inquiryType as InquiryType))
    errors.inquiryType = "Please choose an inquiry type.";

  const subject = data.subject.trim();
  if (!subject) errors.subject = "Please enter a subject.";
  else if (subject.length > 150) errors.subject = "Subject is too long (max 150 characters).";

  const message = data.message.trim();
  if (!message) errors.message = "Please write a message.";
  else if (message.length < 10)
    errors.message = "Please add a little more detail (at least 10 characters).";
  else if (message.length > 5000)
    errors.message = "Message is too long (max 5,000 characters).";

  if (!data.consent)
    errors.consent = "Please confirm you agree to the processing of your inquiry.";

  return errors;
}
