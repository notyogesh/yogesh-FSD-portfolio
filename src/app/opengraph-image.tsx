import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = `${SITE.name} — ${SITE.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** The preview card shown when the site is shared on LinkedIn, WhatsApp, X, Slack and so on. */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "radial-gradient(70% 90% at 95% 0%, rgba(109,40,217,0.55), #0b0b0b 70%)",
          color: "#f2f2f0",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, color: "#c9c9c4" }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 14,
              background: "#8b5cf6",
            }}
          />
          Available for work
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 92, fontWeight: 700, lineHeight: 1.05 }}>{SITE.name}</div>
          <div style={{ fontSize: 48, color: "#c4b5fd", fontWeight: 600 }}>{SITE.jobTitle}</div>
          <div style={{ fontSize: 30, color: "#c9c9c4", maxWidth: 900 }}>
            Next.js · React · Node.js · NestJS · Flutter · Chennai, India
          </div>
        </div>
      </div>
    ),
    size,
  );
}
