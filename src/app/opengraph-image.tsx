import { ImageResponse } from "next/og";
import { company } from "@/config/company";

export const dynamic = "force-static";

export const alt = `${company.legalName} — E-commerce & Home Essentials`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Branded Open Graph image generated at build time — no binary asset needed. */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#193C32",
          color: "#F5F4EF",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "28px",
            letterSpacing: "6px",
            color: "#C99A56",
            fontWeight: 700,
          }}
        >
          SHARMA GLOBAL LLC
        </div>
        <div
          style={{
            marginTop: "32px",
            fontSize: "72px",
            fontWeight: 800,
            lineHeight: 1.1,
            maxWidth: "900px",
          }}
        >
          Everyday Essentials. Thoughtfully Chosen.
        </div>
        <div
          style={{
            marginTop: "28px",
            fontSize: "30px",
            color: "#F5F4EFcc",
            maxWidth: "860px",
          }}
        >
          Home &amp; Kitchen products through trusted online marketplaces
        </div>
      </div>
    ),
    { ...size }
  );
}
