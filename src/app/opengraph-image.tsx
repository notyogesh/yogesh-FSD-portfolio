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
          background: "radial-gradient(80% 90% at 50% -10%, rgba(229,18,29,0.5), #0c0a0a 70%)",
          color: "#f4efec",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, color: "#cfc6c2" }}>
          <div style={{ width: 14, height: 14, borderRadius: 14, background: "#ff6b72" }} />
          Open for work · Chennai
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 118, fontWeight: 900, lineHeight: 1, color: "#e5121d", letterSpacing: -2 }}>
            {SITE.name.toUpperCase()}
          </div>
          <div style={{ fontSize: 46, fontWeight: 700, letterSpacing: 4 }}>DIGITAL MARKETING &amp; GROWTH</div>
          <div style={{ fontSize: 30, color: "#cfc6c2" }}>₹20L+ ad spend managed · 3x ROAS · 80% lower CPL</div>
        </div>
      </div>
    ),
    size,
  );
}
