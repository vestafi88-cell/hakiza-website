import { ImageResponse } from "next/og";

export const alt = "Hakiza Ronald — Founder of Vestafi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#07090F",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#C9A452",
          }}
        >
          HAKIZA RONALD .COM
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 700,
              color: "#EAE4DA",
              lineHeight: 1.05,
            }}
          >
            Founder of Vestafi.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 40,
              fontStyle: "italic",
              color: "#C9A452",
              marginTop: 16,
            }}
          >
            Building Africa&rsquo;s path to property ownership.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "rgba(234,228,218,0.6)",
            letterSpacing: 1,
          }}
        >
          African entrepreneur · YALI Fellow · Founder of Ugabus (acq. Treepz)
        </div>
      </div>
    ),
    { ...size }
  );
}
