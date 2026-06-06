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
          background: "#07090F",
          color: "#C9A452",
          fontSize: 96,
          fontWeight: 700,
          fontFamily: "Georgia, serif",
        }}
      >
        HR
      </div>
    ),
    { ...size }
  );
}
