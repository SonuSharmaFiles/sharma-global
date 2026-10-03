import { LegalLayout, LegalSection } from "@/components/legal/LegalLayout";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Disclaimer",
  description:
    "Important information about the scope and limits of the content on the SHARMA GLOBAL LLC website.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <LegalLayout
      title="Disclaimer"
      intro="This page explains what the information on this website is — and is not — intended to be."
    >
      <LegalSection number={1} title="General Informational Purpose">
        <p>
          The content of this website is provided for general informational
          purposes only. It introduces SHARMA GLOBAL LLC, its business model
          and its product focus. It is not professional, legal, financial or
          purchasing advice.
        </p>
      </LegalSection>

      <LegalSection number={2} title="Accuracy and Completeness">
        <p>
          We make reasonable efforts to keep the information on this website
          accurate and current, but we make no guarantee that it is complete,
          correct or up to date at any given moment. The business is growing,
          and details may change as it develops.
        </p>
      </LegalSection>

      <LegalSection number={3} title="Product Descriptions and Marketplace Listings">
        <p>
          Product categories and descriptions shown here are general. The
          authoritative details for any product — availability,
          specifications, prices, shipping, returns and warranty terms — are
          those shown on the relevant marketplace listing at the time of
          purchase. Those details may change at any time and should always be
          confirmed on the marketplace before buying.
        </p>
      </LegalSection>

      <LegalSection number={4} title="External Links">
        <p>
          This website may link to external websites, including online
          marketplaces. We do not control external sites and accept no
          responsibility for their content, accuracy or practices. Following
          an external link is at your own discretion.
        </p>
      </LegalSection>

      <LegalSection number={5} title="Third-Party Services">
        <p>
          Services provided by third parties — such as marketplace platforms,
          payment processing and delivery — are governed entirely by those
          third parties&apos; own terms and policies.
        </p>
      </LegalSection>

      <LegalSection number={6} title="No Implied Marketplace Endorsement">
        <p>
          References to third-party marketplaces, including their names or
          logos, identify where our products may be sold. They do not imply
          sponsorship, endorsement or partnership beyond any relationship
          that has been independently verified.
        </p>
      </LegalSection>

      <LegalSection number={7} title="Limitation of Responsibility">
        <p>
          To the extent permitted by applicable law, SHARMA GLOBAL LLC is
          not liable for loss or damage arising from reliance on the
          information published on this website. Nothing in this disclaimer
          limits any responsibility that cannot be excluded under applicable
          law, including any consumer rights that apply to purchases made
          through marketplace listings.
        </p>
      </LegalSection>

      <LegalSection number={8} title="Changes to Website Content">
        <p>
          We may update, correct or remove content on this website at any
          time without prior notice.
        </p>
      </LegalSection>

      <LegalSection number={9} title="Contact">
        <p>
          If you have questions about this disclaimer or notice information
          that seems out of date, please let us know through our{" "}
          <a href="/contact" className="font-semibold text-brand underline underline-offset-2">
            Contact page
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
