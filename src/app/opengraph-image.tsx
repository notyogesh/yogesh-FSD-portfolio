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
          background: "radial-gradient(70% 90% at 100% 0%, rgba(255,138,80,0.5), #f3eee6 65%)",
          color: "#15110e",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, color: "#5f564d" }}>
          <div style={{ width: 14, height: 14, borderRadius: 14, background: "#d9381e" }} />
          Business development &amp; full stack · Chennai
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <div style={{ fontSize: 150, fontWeight: 700, lineHeight: 1 }}>I build it.</div>
          <div style={{ fontSize: 150, fontWeight: 700, lineHeight: 1, color: "#d9381e" }}>I grow it.</div>
        </div>
        <div style={{ fontSize: 34, color: "#15110e" }}>
          {`${SITE.name} · Next.js · Node.js · Flutter · Google Ads · SEO · GA4`}
        </div>
      </div>
    ),
    size,
  );
}
