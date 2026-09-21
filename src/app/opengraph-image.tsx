import { ImageResponse } from "next/og";
import { profile } from "@/lib/content";

export const alt = `${profile.name} | ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0d0e10",
          padding: 72,
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              border: "1.5px solid rgba(255,138,76,0.6)",
              background: "#141518",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="36" height="36" viewBox="0 0 64 64" fill="none">
              <path
                d="M18 48 32 16 46 48"
                stroke="#ff8a4c"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M25 35 H39" stroke="#ff8a4c" strokeWidth="6" strokeLinecap="round" />
            </svg>
          </div>
          <div style={{ fontSize: 26, color: "rgba(255,255,255,0.7)" }}>
            azri.dev
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 30, color: "#ff8a4c", fontWeight: 600 }}>
            {profile.roleLong}
          </div>
          <div
            style={{
              marginTop: 16,
              fontSize: 74,
              fontWeight: 800,
              letterSpacing: -2,
              lineHeight: 1.05,
              maxWidth: 960,
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 28,
              color: "rgba(255,255,255,0.7)",
              maxWidth: 900,
            }}
          >
            Flutter, Android, iOS and Kotlin Multiplatform. Based in Jakarta.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
