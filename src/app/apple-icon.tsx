import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #c81e45, #e0234e)",
          color: "white",
          fontSize: 120,
          fontWeight: 700,
        }}
      >
        Y
      </div>
    ),
    size,
  );
}
