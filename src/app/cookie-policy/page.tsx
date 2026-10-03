import { LegalLayout, LegalSection } from "@/components/legal/LegalLayout";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Cookie Policy",
  description:
    "What cookies and similar technologies the SHARMA GLOBAL LLC website uses, and how you can control them.",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <LegalLayout
      title="Cookie Policy"
      intro="This website is deliberately light on tracking. Here is an honest account of the technologies it uses."
    >
      <LegalSection number={1} title="What Cookies Are">
        <p>
          Cookies are small text files that websites store in your browser.
          Related technologies include local storage and similar mechanisms.
          They can be used for essential functions (like remembering a
          setting) or for analytics and advertising.
        </p>
      </LegalSection>

      <LegalSection number={2} title="What This Website Uses">
        <p>
          <strong>This website currently sets no advertising cookies, no
          analytics cookies, and no cross-site tracking cookies.</strong>
        </p>
        <p>
          The only technologies in use are essential ones required for the
          website to function — for example, the technical mechanisms our
          hosting platform uses to serve pages securely and protect against
          abuse. These do not track you across other websites.
        </p>
        <p>
          Because there are no non-essential cookies, this website does not
          show a cookie consent banner. We will not pretend to offer choices
          that do not exist.
        </p>
      </LegalSection>

      <LegalSection number={3} title="Analytics Cookies">
        <p>
          No analytics service is active at this time. If we add one in the
          future, this policy will be updated to name the provider, explain
          what is collected and for how long, and — where the law requires —
          a consent banner with &ldquo;Accept All&rdquo;, &ldquo;Reject
          Non-Essential&rdquo; and &ldquo;Customize Preferences&rdquo;
          options will be shown before any analytics script loads.
        </p>
      </LegalSection>

      <LegalSection number={4} title="Marketing Technologies">
        <p>
          This website uses no marketing or advertising technologies, and no
          third-party advertising cookies.
        </p>
      </LegalSection>

      <LegalSection number={5} title="Third-Party Cookies">
        <p>
          If you follow a link from this website to an external site — such
          as an online marketplace — that site may set its own cookies under
          its own cookie policy. We do not control those cookies.
        </p>
      </LegalSection>

      <LegalSection number={6} title="Managing Cookies in Your Browser">
        <p>
          Every major browser lets you view, limit and delete cookies
          through its settings — usually under &ldquo;Privacy&rdquo; or
          &ldquo;Site data&rdquo;. Blocking essential technologies may
          affect how some websites function, though this website is designed
          to work without storing anything about you.
        </p>
      </LegalSection>

      <LegalSection number={7} title="Updates to This Policy">
        <p>
          If the website&apos;s use of cookies or similar technologies
          changes, this page will be updated first, and the &ldquo;Last
          updated&rdquo; date above will reflect the change.
        </p>
      </LegalSection>

      <LegalSection number={8} title="Contact">
        <p>
          Questions about this Cookie Policy can be sent through our{" "}
          <a href="/contact" className="font-semibold text-brand underline underline-offset-2">
            Contact page
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
