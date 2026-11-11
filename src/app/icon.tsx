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
          background: "linear-gradient(135deg, #4c1d95, #6d28d9)",
          borderRadius: 8,
          color: "white",
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
