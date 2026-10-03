import {
  LegalLayout,
  LegalSection,
  VerifyNote,
} from "@/components/legal/LegalLayout";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "The terms that govern your use of the SHARMA GLOBAL LLC corporate website.",
  path: "/terms-of-service",
});

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      intro="These terms govern your use of this website. Please read them carefully — by using the site, you agree to them."
    >
      <LegalSection number={1} title="Introduction">
        <p>
          Welcome to the corporate website of SHARMA GLOBAL LLC (&ldquo;the
          Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). These Terms of
          Service (&ldquo;Terms&rdquo;) apply to your access to and use of
          this website.
        </p>
      </LegalSection>

      <LegalSection number={2} title="Acceptance of Terms">
        <p>
          By accessing or using this website, you accept these Terms. If you
          do not agree with them, please do not use the website.
        </p>
      </LegalSection>

      <LegalSection number={3} title="About SHARMA GLOBAL LLC">
        <p>
          SHARMA GLOBAL LLC is a limited liability company engaged in
          e-commerce, with a primary focus on Home &amp; Kitchen products
          sold through third-party online marketplaces.
        </p>
      </LegalSection>

      <LegalSection number={4} title="Website Purpose">
        <p>
          This website is a corporate information site. It introduces the
          Company, its business model, its product focus and its marketplace
          presence. <strong>It is not an online store:</strong> this website
          does not process orders, payments, shipping or returns.
        </p>
      </LegalSection>

      <LegalSection number={5} title="Permitted Use">
        <p>You may use this website to:</p>
        <ul>
          <li>Read about the Company and its business</li>
          <li>Contact the Company with genuine inquiries</li>
          <li>Follow links to the Company&apos;s verified marketplace profiles</li>
        </ul>
      </LegalSection>

      <LegalSection number={6} title="Prohibited Conduct">
        <p>When using this website, you must not:</p>
        <ul>
          <li>Attempt to gain unauthorized access to the website or its systems</li>
          <li>Use the contact form to send spam, abusive or unlawful content</li>
          <li>Interfere with the website&apos;s operation or security</li>
          <li>Scrape, copy or republish content in a misleading way</li>
          <li>Impersonate the Company or misrepresent an affiliation with it</li>
        </ul>
      </LegalSection>

      <LegalSection number={7} title="Intellectual Property">
        <p>
          The content of this website — including text, the SHARMA GLOBAL
          brand mark, layout and design — belongs to the Company or its
          licensors and is protected by applicable intellectual property
          laws. You may not use the Company&apos;s name or brand mark without
          prior written permission. Third-party names and logos remain the
          property of their respective owners.
        </p>
      </LegalSection>

      <LegalSection number={8} title="Product and Marketplace Information">
        <p>
          Product categories and descriptions on this website are provided
          for general information. Actual product availability, pricing,
          specifications, shipping and returns are shown on the relevant
          marketplace listing, which is the authoritative source for each
          purchase.
        </p>
      </LegalSection>

      <LegalSection number={9} title="Third-Party Websites">
        <p>
          This website may link to third-party websites, including online
          marketplaces. We do not control those sites and are not
          responsible for their content, policies or practices. Links do not
          imply endorsement.
        </p>
      </LegalSection>

      <LegalSection number={10} title="External Marketplace Transactions">
        <p>
          Any purchase of our products takes place on a third-party
          marketplace and is governed by that marketplace&apos;s terms,
          policies and the specific product listing — including payment,
          delivery, returns and refunds. This website is not part of that
          transaction.
        </p>
      </LegalSection>

      <LegalSection number={11} title="Website Availability">
        <p>
          We aim to keep the website available and working well, but we do
          not guarantee uninterrupted access. We may modify, suspend or
          discontinue any part of the website at any time.
        </p>
      </LegalSection>

      <LegalSection number={12} title="Accuracy of Information">
        <p>
          We try to keep the information on this website accurate and up to
          date, but we do not warrant that it is complete, current or
          error-free. Content may change without notice.
        </p>
      </LegalSection>

      <LegalSection number={13} title="Disclaimer of Warranties">
        <p>
          This website is provided on an &ldquo;as is&rdquo; and &ldquo;as
          available&rdquo; basis, without warranties of any kind, whether
          express or implied, to the extent permitted by applicable law.
        </p>
      </LegalSection>

      <LegalSection number={14} title="Limitation of Liability">
        <p>
          To the maximum extent permitted by applicable law, the Company
          will not be liable for indirect, incidental or consequential
          damages arising from your use of this website. Nothing in these
          Terms excludes or limits liability that cannot be excluded or
          limited under applicable law.
        </p>
      </LegalSection>

      <LegalSection number={15} title="Indemnification">
        <p>
          To the extent permitted by applicable law, you agree to hold the
          Company harmless from claims arising out of your misuse of this
          website or your violation of these Terms.
        </p>
      </LegalSection>

      <LegalSection number={16} title="Privacy">
        <p>
          Your use of this website is also governed by our{" "}
          <a href="/privacy-policy" className="font-semibold text-brand underline underline-offset-2">
            Privacy Policy
          </a>
          , which explains how personal information is handled.
        </p>
      </LegalSection>

      <LegalSection number={17} title="Changes to These Terms">
        <p>
          We may update these Terms from time to time. The &ldquo;Last
          updated&rdquo; date at the top of this page shows the most recent
          revision. Continued use of the website after changes take effect
          constitutes acceptance of the updated Terms.
        </p>
      </LegalSection>

      <LegalSection number={18} title="Governing Law and Jurisdiction">
        <VerifyNote>
          The governing law and jurisdiction for these Terms will be
          specified after the Company&apos;s registration jurisdiction is
          confirmed and the appropriate provision has been reviewed. Until
          then, no specific governing law is stated here.
        </VerifyNote>
      </LegalSection>

      <LegalSection number={19} title="Severability">
        <p>
          If any provision of these Terms is found to be unenforceable, the
          remaining provisions continue in full force and effect.
        </p>
      </LegalSection>

      <LegalSection number={20} title="Entire Agreement">
        <p>
          These Terms, together with the Privacy Policy and other policies
          published on this website, make up the entire agreement between
          you and the Company regarding your use of this website.
        </p>
      </LegalSection>

      <LegalSection number={21} title="Contact Information">
        <p>
          Questions about these Terms can be sent through our{" "}
          <a href="/contact" className="font-semibold text-brand underline underline-offset-2">
            Contact page
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
