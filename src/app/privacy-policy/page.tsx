import {
  LegalLayout,
  LegalSection,
  VerifyNote,
} from "@/components/legal/LegalLayout";
import { company } from "@/config/company";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How SHARMA GLOBAL LLC collects, uses, and protects personal information on this website.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      intro="This policy explains, in plain language, what information this website collects, how it is used, and the choices you have."
    >
      <LegalSection number={1} title="Introduction">
        <p>
          SHARMA GLOBAL LLC (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or
          &ldquo;the Company&rdquo;) respects your privacy. This Privacy
          Policy describes how information is handled when you visit this
          website or contact us through it. We aim to collect as little
          personal information as possible.
        </p>
      </LegalSection>

      <LegalSection number={2} title="Company Information">
        <p>
          This website is operated by SHARMA GLOBAL LLC, a limited liability
          company
          {company.registrationJurisdiction
            ? ` registered in ${company.registrationJurisdiction}`
            : ""}
          . The founder of the company is based in Nepal.
        </p>
        {company.registeredAddress && (
          <p>
            Registered address: {company.registeredAddress}.
          </p>
        )}
        {!company.registrationJurisdiction && (
          <VerifyNote>
            The company&apos;s registration jurisdiction and registered
            address will be published here once verified by the owner.
          </VerifyNote>
        )}
      </LegalSection>

      <LegalSection number={3} title="Scope of This Policy">
        <p>
          This policy applies only to this website. It does not apply to
          third-party online marketplaces (such as Amazon) where our products
          may be sold, or to any other third-party websites linked from here.
          Those services have their own privacy policies.
        </p>
      </LegalSection>

      <LegalSection number={4} title="Information We Collect">
        <p>
          The only personal information this website collects directly is
          what you choose to submit through the contact form:
        </p>
        <ul>
          <li>Your full name</li>
          <li>Your email address</li>
          <li>The inquiry type, subject and message you write</li>
        </ul>
        <p>
          We do not require you to create an account, and we do not collect
          payment information — this website does not process orders or
          payments.
        </p>
      </LegalSection>

      <LegalSection number={5} title="Information Collected Automatically">
        <p>
          Like most websites, our hosting provider may automatically record
          basic technical logs when you visit, such as your IP address,
          browser type, the pages requested, and the time of the request.
          These logs are used for security, troubleshooting and keeping the
          website running reliably.
        </p>
      </LegalSection>

      <LegalSection number={6} title="How We Use Information">
        <p>We use the information described above only to:</p>
        <ul>
          <li>Respond to inquiries you send us</li>
          <li>Operate, secure and maintain the website</li>
          <li>Comply with legal obligations where applicable</li>
        </ul>
        <p>
          We do not sell personal information, and we do not use it for
          third-party advertising.
        </p>
      </LegalSection>

      <LegalSection number={7} title="Contact Form Information">
        <p>
          Messages submitted through the contact form are delivered to the
          Company so we can reply to you. We keep correspondence only as long
          as needed to handle your inquiry and any follow-up, after which it
          may be deleted in the normal course of business.
        </p>
      </LegalSection>

      <LegalSection number={8} title="Cookies and Similar Technologies">
        <p>
          This website currently uses only the essential technologies needed
          for it to function. It does not set advertising or cross-site
          tracking cookies. For full details, see our{" "}
          <a href="/cookie-policy" className="font-semibold text-brand underline underline-offset-2">
            Cookie Policy
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection number={9} title="Analytics and Performance Tools">
        <p>
          No third-party analytics service is active on this website at this
          time. If analytics tools are added in the future, this policy and
          the Cookie Policy will be updated to name the provider and explain
          what is collected, and consent will be requested where required.
        </p>
      </LegalSection>

      <LegalSection number={10} title="Third-Party Websites and Marketplaces">
        <p>
          When you follow a link from this website to an online marketplace
          or any other external site, that site&apos;s own privacy policy
          applies. Any purchase you make on a marketplace is handled entirely
          by that marketplace, including the personal and payment information
          involved.
        </p>
      </LegalSection>

      <LegalSection number={11} title="Information Sharing and Disclosure">
        <p>We share information only in these limited situations:</p>
        <ul>
          <li>
            With service providers that help operate the website (such as our
            hosting provider), only as needed to provide the service
          </li>
          <li>
            When required by law, regulation, or a valid legal process
          </li>
          <li>
            To protect the rights, safety or property of the Company or
            others
          </li>
        </ul>
      </LegalSection>

      <LegalSection number={12} title="Data Retention">
        <p>
          We keep personal information only as long as it is needed for the
          purposes described in this policy. Contact correspondence is kept
          for as long as reasonably necessary to handle the inquiry; hosting
          logs are retained according to our hosting provider&apos;s standard
          practices.
        </p>
      </LegalSection>

      <LegalSection number={13} title="Data Security">
        <p>
          This website is served over an encrypted connection (HTTPS), and we
          take reasonable steps to protect the information we handle. No
          method of transmission or storage is completely secure, however,
          and we cannot guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection number={14} title="International Data Transfers">
        <p>
          This website serves an international audience, and the Company
          operates across borders. Information you submit may be processed in
          countries other than your own, including by our hosting provider&apos;s
          infrastructure. Where required by applicable law, we take
          reasonable steps to ensure such transfers are handled
          appropriately.
        </p>
      </LegalSection>

      <LegalSection number={15} title="Your Privacy Rights and Requests">
        <p>
          Depending on where you live, you may have rights over your personal
          information — such as the right to request access to it, to correct
          it, or to ask for it to be deleted. To make a request about
          information you submitted through this website, contact us using
          the details on the{" "}
          <a href="/contact" className="font-semibold text-brand underline underline-offset-2">
            Contact page
          </a>
          . We will respond to genuine requests within a reasonable time and
          as required by applicable law.
        </p>
      </LegalSection>

      <LegalSection number={16} title="Children's Privacy">
        <p>
          This website is a corporate information site and is not directed at
          children. We do not knowingly collect personal information from
          children. If you believe a child has submitted information to us,
          please contact us so we can delete it.
        </p>
      </LegalSection>

      <LegalSection number={17} title="Third-Party Links">
        <p>
          This website may contain links to external websites that we do not
          control. We are not responsible for the content or privacy
          practices of those sites, and we encourage you to review their
          policies.
        </p>
      </LegalSection>

      <LegalSection number={18} title="Changes to This Privacy Policy">
        <p>
          We may update this policy as the website or the business evolves —
          for example, if analytics or new integrations are added. The
          &ldquo;Last updated&rdquo; date at the top of this page shows when
          it was most recently changed. Significant changes will be reflected
          here before they take effect.
        </p>
      </LegalSection>

      <LegalSection number={19} title="Contact Information">
        <p>
          Questions about this policy or about your personal information can
          be sent through our{" "}
          <a href="/contact" className="font-semibold text-brand underline underline-offset-2">
            Contact page
          </a>
          {company.businessEmail ? (
            <>
              {" "}
              or by email to{" "}
              <a
                href={`mailto:${company.businessEmail}`}
                className="font-semibold text-brand underline underline-offset-2"
              >
                {company.businessEmail}
              </a>
            </>
          ) : null}
          .
        </p>
        {!company.businessEmail && (
          <VerifyNote>
            The official privacy contact email will be added once verified.
          </VerifyNote>
        )}
      </LegalSection>
    </LegalLayout>
  );
}
