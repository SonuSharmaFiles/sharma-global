import { LegalLayout, LegalSection } from "@/components/legal/LegalLayout";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Accessibility Statement",
  description:
    "SHARMA GLOBAL LLC's commitment to making this website accessible to everyone, including people who use assistive technologies.",
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <LegalLayout
      title="Accessibility Statement"
      intro="We want everyone to be able to use this website comfortably, including people who rely on assistive technologies."
    >
      <LegalSection title="Our Commitment">
        <p>
          SHARMA GLOBAL LLC is committed to making this website accessible
          to as many people as possible, regardless of ability or the
          technology they use. Accessibility is treated as part of the
          design, not an afterthought.
        </p>
      </LegalSection>

      <LegalSection title="How This Website Is Built">
        <p>
          The website aims to meet the WCAG 2.2 Level AA success criteria
          wherever applicable. In practice, that includes:
        </p>
        <ul>
          <li>
            <strong>Keyboard navigation:</strong> all menus, links, buttons
            and the contact form can be operated with a keyboard, and a
            &ldquo;Skip to main content&rdquo; link is provided.
          </li>
          <li>
            <strong>Visible focus:</strong> a clear focus outline shows
            where you are on the page when navigating by keyboard.
          </li>
          <li>
            <strong>Readable text and contrast:</strong> font sizes, line
            lengths and color contrast are chosen for comfortable reading.
          </li>
          <li>
            <strong>Alternative text:</strong> meaningful images carry
            descriptive alt text; decorative graphics are hidden from screen
            readers.
          </li>
          <li>
            <strong>Semantic HTML:</strong> proper headings, landmarks,
            lists and labels so screen readers can navigate the structure.
          </li>
          <li>
            <strong>Accessible forms:</strong> every form field has a
            visible label, clear required-field indicators and helpful,
            specific error messages.
          </li>
          <li>
            <strong>Reduced motion:</strong> animations are minimized for
            visitors whose system settings request reduced motion.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Known Limitations">
        <p>
          We have not yet commissioned an independent accessibility audit,
          so we do not claim formal WCAG conformance. Some placeholder
          visuals will be replaced with photographs over time, and their alt
          text will be reviewed as part of that work.
        </p>
      </LegalSection>

      <LegalSection title="Feedback">
        <p>
          If you encounter any barrier while using this website — something
          you cannot read, reach or operate — please tell us through the{" "}
          <a href="/contact" className="font-semibold text-brand underline underline-offset-2">
            Contact page
          </a>
          . Accessibility feedback is genuinely welcome and helps us
          improve.
        </p>
      </LegalSection>

      <LegalSection title="Review">
        <p>
          This statement is reviewed when the website changes significantly.
          The date of the most recent review appears at the top of this
          page.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
