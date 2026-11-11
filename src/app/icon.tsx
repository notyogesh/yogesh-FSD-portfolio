import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Favicon: a "Y" monogram on the site's red gradient. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#15110e",
          borderRadius: 8,
          color: "#ff8a50",
          fontSize: 22,
          fontWeight: 700,
        }}
      >
        Y
      </div>
    ),
    size,
  );
}
