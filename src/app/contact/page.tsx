import { Mail, MapPin, Clock, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { company } from "@/config/company";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with SHARMA GLOBAL LLC for business inquiries, marketplace questions, partnerships, or general communication.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch"
        lede="Have a business inquiry or a question about SHARMA GLOBAL LLC? We'd be happy to hear from you."
      />

      <section className="py-16 sm:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Contact details — verified only */}
          <aside className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold text-ink">
              Contact Information
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              We publish contact details only once they are verified, so you
              can trust every channel listed here.
            </p>
            <ul className="mt-8 space-y-6">
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand/5">
                  <Mail className="h-5 w-5 text-brand" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-ink">Business Email</h3>
                  {company.businessEmail ? (
                    <a
                      href={`mailto:${company.businessEmail}`}
                      className="mt-1 block text-sm font-semibold text-brand underline underline-offset-2"
                    >
                      {company.businessEmail}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm text-muted italic">
                      Our official email address will be published here soon.
                    </p>
                  )}
                </div>
              </li>
              {company.businessPhones.length > 0 && (
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand/5">
                    <Phone className="h-5 w-5 text-brand" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-ink">Phone</h3>
                    {company.businessPhones.map((p) => (
                      <a
                        key={p.number}
                        href={`tel:${p.number.replace(/[^+\d]/g, "")}`}
                        className="mt-1 block text-sm font-semibold text-brand underline underline-offset-2"
                      >
                        {p.number}{" "}
                        <span className="font-normal text-muted">
                          ({p.label})
                        </span>
                      </a>
                    ))}
                  </div>
                </li>
              )}
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand/5">
                  <MapPin className="h-5 w-5 text-brand" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-ink">Location</h3>
                  <p className="mt-1 text-sm text-muted">
                    Founder based in {company.founder.location}
                  </p>
                  {company.registeredAddress && (
                    <p className="mt-1 text-sm text-muted">
                      {company.registeredAddress}
                    </p>
                  )}
                </div>
              </li>
              {company.businessHours && (
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand/5">
                    <Clock className="h-5 w-5 text-brand" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-ink">Business Hours</h3>
                    <p className="mt-1 text-sm text-muted">
                      {company.businessHours}
                    </p>
                  </div>
                </li>
              )}
            </ul>

            <div className="mt-10 rounded-card border border-line bg-card p-5 text-xs leading-relaxed text-muted">
              <strong className="font-semibold text-ink">Privacy notice: </strong>
              The information you submit through this form is used only to
              respond to your inquiry. We do not add you to mailing lists or
              share your details for marketing. See our{" "}
              <a href="/privacy-policy" className="font-semibold text-brand underline underline-offset-2">
                Privacy Policy
              </a>{" "}
              for details.
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-card border border-line bg-card p-6 sm:p-10">
              <h2 className="font-display text-2xl font-bold text-ink">
                Send Us a Message
              </h2>
              <p className="mt-2 mb-8 text-sm text-muted">
                We aim to respond to every genuine inquiry.
              </p>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
