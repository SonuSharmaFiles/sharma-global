/**
 * Original brand illustrations for SHARMA GLOBAL LLC.
 *
 * Style: warm editorial line art — deep forest-green strokes, soft
 * cream/tint fills, restrained gold accents. All artwork is original
 * SVG drawn for this brand; no stock imagery or trademarks.
 */

const INK = "#193C32";
const MID = "#31594B";
const TINT = "#E9EFE9";
const GOLD = "#C99A56";
const GOLDSOFT = "#EAD9BC";
const CREAM = "#F5F4EF";

/* ────────────────────────────────────────────────────────────────
 * Hero: a calm modern kitchen still life — window light, shelves
 * with jars and plates, a kettle, utensils and plants.
 * ──────────────────────────────────────────────────────────────── */
export function HeroIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 360"
      className={className}
      role="img"
      aria-label="Illustration of a calm modern kitchen with shelves, jars, a kettle and plants"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* soft backdrop arch */}
      <path
        d="M70 330V150c0-55 45-100 100-100h140c55 0 100 45 100 100v180"
        fill={TINT}
      />

      {/* window */}
      <rect x="42" y="64" width="112" height="128" rx="10" fill="#FFFFFF" stroke={INK} strokeWidth="2.5" />
      <line x1="98" y1="66" x2="98" y2="190" stroke={INK} strokeWidth="2" />
      <line x1="44" y1="128" x2="152" y2="128" stroke={INK} strokeWidth="2" />
      <circle cx="126" cy="96" r="13" fill={GOLDSOFT} />
      {/* windowsill + plant */}
      <rect x="34" y="192" width="128" height="9" rx="4" fill={TINT} stroke={INK} strokeWidth="2.5" />
      <path d="M86 174c-8-4-12-12-10-21 9 1 15 8 16 17" fill={TINT} stroke={MID} strokeWidth="2" strokeLinejoin="round" />
      <path d="M96 174c8-4 12-12 10-21-9 1-15 8-16 17" fill={TINT} stroke={MID} strokeWidth="2" strokeLinejoin="round" />
      <line x1="91" y1="178" x2="91" y2="160" stroke={MID} strokeWidth="2" />
      <path d="M80 178h22l-3 14H83z" fill="#FFFFFF" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />

      {/* upper shelf */}
      <line x1="252" y1="100" x2="446" y2="100" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      {/* jars */}
      <rect x="264" y="60" width="26" height="40" rx="5" fill="#FFFFFF" stroke={INK} strokeWidth="2.5" />
      <rect x="267" y="52" width="20" height="8" rx="3" fill={GOLDSOFT} stroke={INK} strokeWidth="2" />
      <path d="M268 78h18M268 86h18" stroke={MID} strokeWidth="1.8" strokeLinecap="round" />
      <rect x="300" y="68" width="22" height="32" rx="5" fill="#FFFFFF" stroke={INK} strokeWidth="2.5" />
      <rect x="303" y="60" width="16" height="8" rx="3" fill={GOLDSOFT} stroke={INK} strokeWidth="2" />
      <path d="M304 84h14" stroke={MID} strokeWidth="1.8" strokeLinecap="round" />
      {/* plate stack */}
      <rect x="352" y="90" width="60" height="7" rx="3.5" fill="#FFFFFF" stroke={INK} strokeWidth="2.2" />
      <rect x="358" y="81" width="48" height="7" rx="3.5" fill="#FFFFFF" stroke={INK} strokeWidth="2.2" />
      <rect x="364" y="72" width="36" height="7" rx="3.5" fill={GOLDSOFT} stroke={INK} strokeWidth="2.2" />

      {/* lower shelf */}
      <line x1="300" y1="178" x2="446" y2="178" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      {/* books */}
      <rect x="312" y="140" width="12" height="38" rx="2" fill={TINT} stroke={INK} strokeWidth="2.2" />
      <rect x="327" y="146" width="10" height="32" rx="2" fill="#FFFFFF" stroke={INK} strokeWidth="2.2" />
      <rect x="340" y="136" width="12" height="42" rx="2" fill={GOLDSOFT} stroke={INK} strokeWidth="2.2" />
      {/* small plant */}
      <path d="M414 160c-7-3-10-10-8-18 7 1 12 7 13 14" fill={TINT} stroke={MID} strokeWidth="2" strokeLinejoin="round" />
      <path d="M422 160c7-3 10-10 8-18-7 1-12 7-13 14" fill={TINT} stroke={MID} strokeWidth="2" strokeLinejoin="round" />
      <line x1="418" y1="162" x2="418" y2="148" stroke={MID} strokeWidth="2" />
      <path d="M408 162h20l-3 16h-14z" fill="#FFFFFF" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />

      {/* counter */}
      <line x1="24" y1="298" x2="456" y2="298" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />

      {/* kettle */}
      <path d="M142 224h68c3 20-2 46-6 60a14 14 0 0 1-13 10h-30a14 14 0 0 1-13-10c-4-14-9-40-6-60z" fill="#FFFFFF" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M142 232l-26 10c-5 2-5 9 0 11l20 8" fill="#FFFFFF" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M150 222c4-12 48-12 52 0" stroke={INK} strokeWidth="2.5" />
      <circle cx="176" cy="204" r="5.5" fill={GOLD} stroke={INK} strokeWidth="2" />
      <line x1="176" y1="210" x2="176" y2="216" stroke={INK} strokeWidth="2" />
      {/* steam */}
      <path d="M160 190c-3-6 3-9 0-15M192 192c-3-6 3-9 0-15" stroke={GOLD} strokeWidth="2.2" strokeLinecap="round" />

      {/* cutting board */}
      <g transform="rotate(5 262 264)">
        <rect x="238" y="226" width="48" height="70" rx="12" fill={GOLDSOFT} stroke={INK} strokeWidth="2.5" />
        <circle cx="262" cy="240" r="4" fill={CREAM} stroke={INK} strokeWidth="2" />
      </g>

      {/* utensil crock */}
      <path d="M312 252h48l-4 46h-40z" fill={TINT} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      {/* spatula */}
      <line x1="326" y1="252" x2="320" y2="216" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx="318" cy="206" rx="7.5" ry="11" fill="#FFFFFF" stroke={INK} strokeWidth="2.5" />
      {/* whisk */}
      <line x1="348" y1="252" x2="354" y2="222" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M349 222c-4-12 14-16 12-2M359 221c6-11-12-17-12-3" stroke={INK} strokeWidth="2" strokeLinecap="round" />

      {/* potted plant on counter */}
      <path d="M398 298l5-24h38l5 24" fill="#FFFFFF" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M414 270c-12-4-18-16-14-30 12 2 20 12 20 24" fill={TINT} stroke={MID} strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M430 270c12-4 18-16 14-30-12 2-20 12-20 24" fill={TINT} stroke={MID} strokeWidth="2.2" strokeLinejoin="round" />
      <line x1="422" y1="272" x2="422" y2="248" stroke={MID} strokeWidth="2.2" />

      {/* gold accents */}
      <circle cx="228" cy="160" r="3" fill={GOLD} />
      <circle cx="448" cy="64" r="3" fill={GOLD} />
      <circle cx="56" cy="240" r="3" fill={GOLD} />
    </svg>
  );
}

/* ────────────────────────────────────────────────────────────────
 * Marketplace: a storefront with parcels under a golden route of
 * connected destinations — selling through online marketplaces.
 * Drawn for dark (brand green) backgrounds.
 * ──────────────────────────────────────────────────────────────── */
export function MarketplaceIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 360"
      className={className}
      role="img"
      aria-label="Illustration of a small storefront with parcels, connected to destinations along a golden route"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* route */}
      <path
        d="M48 128C128 64 352 64 432 128"
        stroke={GOLD}
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="1 9"
      />
      <circle cx="48" cy="128" r="5" fill={GOLD} />
      <circle cx="240" cy="80" r="8" stroke={GOLD} strokeWidth="2" />
      <circle cx="240" cy="80" r="3" fill={GOLD} />
      <circle cx="432" cy="128" r="5" fill={GOLD} />

      {/* ground */}
      <line x1="96" y1="300" x2="384" y2="300" stroke={CREAM} strokeWidth="3" strokeLinecap="round" />

      {/* storefront */}
      <rect x="156" y="172" width="150" height="128" rx="6" fill={MID} stroke={CREAM} strokeWidth="2.5" />
      {/* awning */}
      <path d="M144 172v-12c0-8 6-14 14-14h146c8 0 14 6 14 14v12" fill={MID} stroke={CREAM} strokeWidth="2.5" />
      <path
        d="M144 172a18 13 0 0 0 36 0a19 13 0 0 0 38 0a18 13 0 0 0 36 0a19 13 0 0 0 38 0a18 13 0 0 0 26 0"
        fill={CREAM}
        stroke={CREAM}
        strokeWidth="2"
      />
      {/* door */}
      <rect x="216" y="216" width="36" height="84" rx="4" fill={INK} stroke={CREAM} strokeWidth="2.5" />
      <circle cx="245" cy="260" r="2.5" fill={GOLD} />
      {/* shop window */}
      <rect x="268" y="216" width="26" height="40" rx="4" fill={INK} stroke={CREAM} strokeWidth="2" />
      <path d="M270 244l22-22" stroke={CREAM} strokeWidth="1.5" />
      {/* sign */}
      <rect x="196" y="186" width="70" height="16" rx="8" fill={GOLDSOFT} />
      {/* awning pole shadow dots */}
      <circle cx="178" cy="218" r="2.5" fill={GOLD} />
      <circle cx="192" cy="218" r="2.5" fill={GOLD} />

      {/* parcels */}
      <rect x="326" y="256" width="58" height="44" rx="5" fill={GOLDSOFT} stroke={INK} strokeWidth="2.5" />
      <line x1="355" y1="256" x2="355" y2="300" stroke={INK} strokeWidth="2.5" />
      <g transform="rotate(-6 362 240)">
        <rect x="336" y="218" width="38" height="30" rx="4" fill={CREAM} stroke={INK} strokeWidth="2.5" />
        <line x1="355" y1="218" x2="355" y2="248" stroke={INK} strokeWidth="2.2" />
      </g>
      {/* trolley of plants left */}
      <path d="M104 300l4-20h32l4 20" fill={MID} stroke={CREAM} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M118 278c-8-3-12-11-10-20 8 1 13 8 14 15" fill={MID} stroke={CREAM} strokeWidth="2" strokeLinejoin="round" />
      <path d="M130 278c8-3 12-11 10-20-8 1-13 8-14 15" fill={MID} stroke={CREAM} strokeWidth="2" strokeLinejoin="round" />

      {/* stars */}
      <circle cx="96" cy="196" r="3" fill={GOLD} />
      <circle cx="398" cy="176" r="3" fill={GOLD} />
      <path d="M72 236l4 4m0-4l-4 4" stroke={GOLDSOFT} strokeWidth="2" strokeLinecap="round" />
      <path d="M406 92l5 5m0-5l-5 5" stroke={GOLDSOFT} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* ────────────────────────────────────────────────────────────────
 * Corner ornament: concentric arcs + gold satellite, used to dress
 * interior page heroes and CTA bands. Decorative only.
 * ──────────────────────────────────────────────────────────────── */
export function CornerOrnament({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const stroke = tone === "dark" ? "#D8DCD6" : "#31594B";
  return (
    <svg
      viewBox="0 0 320 320"
      className={className}
      aria-hidden="true"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
    >
      <circle cx="240" cy="80" r="150" stroke={stroke} strokeWidth="1.5" />
      <circle cx="240" cy="80" r="110" stroke={stroke} strokeWidth="1.5" />
      <circle cx="240" cy="80" r="70" stroke={stroke} strokeWidth="1.5" />
      <circle cx="240" cy="80" r="4" fill={GOLD} />
      <circle cx="132" cy="140" r="3.5" fill={GOLD} />
      <circle cx="240" cy="190" r="3" fill={GOLD} opacity="0.7" />
    </svg>
  );
}

/* ────────────────────────────────────────────────────────────────
 * Flourish: small centered divider — line · orbit dot · line.
 * ──────────────────────────────────────────────────────────────── */
export function Flourish({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 24"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <line x1="8" y1="12" x2="56" y2="12" stroke="#D8DCD6" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="80" cy="12" rx="14" ry="6" transform="rotate(-24 80 12)" stroke={GOLD} strokeWidth="1.5" />
      <circle cx="80" cy="12" r="2.5" fill={INK} />
      <line x1="104" y1="12" x2="152" y2="12" stroke="#D8DCD6" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
