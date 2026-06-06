import { ImageResponse } from "next/og";
import { profile } from "@/lib/content";

export const alt = `${profile.name} — ${profile.role}`;
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
          background: "#08090d",
          backgroundImage:
            "radial-gradient(600px circle at 80% -10%, rgba(124,108,255,0.35), transparent 60%), radial-gradient(500px circle at 0% 110%, rgba(34,211,238,0.18), transparent 55%)",
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
              border: "1.5px solid rgba(124,108,255,0.6)",
              background: "#0f1117",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="36" height="36" viewBox="0 0 64 64" fill="none">
              <path
                d="M18 48 32 16 46 48"
                stroke="#a99bff"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M25 35 H39" stroke="#a99bff" strokeWidth="6" strokeLinecap="round" />
            </svg>
          </div>
          <div style={{ fontSize: 26, color: "rgba(255,255,255,0.7)" }}>
            azri.dev
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 30, color: "#9b8dff", fontWeight: 600 }}>
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
            Flutter · Android · iOS · Kotlin Multiplatform — based in Jakarta.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
