import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "Kolaksi — CRM WhatsApp + AI Chatbot untuk UMKM";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #1e1b4b 0%, #4338ca 55%, #6366f1 100%)",
          color: "white",
          fontFamily: "sans-serif"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "40px" }}>
          <div
            style={{
              width: "84px",
              height: "84px",
              borderRadius: "20px",
              background: "white",
              color: "#4338ca",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "52px",
              fontWeight: 800
            }}
          >
            K
          </div>
          <div style={{ fontSize: "44px", fontWeight: 800, letterSpacing: "-1px" }}>Kolaksi</div>
        </div>

        <div style={{ fontSize: "68px", fontWeight: 800, lineHeight: 1.1, maxWidth: "900px", letterSpacing: "-2px" }}>
          CRM WhatsApp + AI Chatbot untuk UMKM
        </div>

        <div style={{ fontSize: "32px", marginTop: "32px", color: "#c7d2fe", maxWidth: "880px", lineHeight: 1.4 }}>
          Satukan chat di satu inbox, balas pelanggan otomatis 24 jam, dan kelola tim CS dalam satu dashboard.
        </div>

        <div style={{ display: "flex", gap: "16px", marginTop: "48px" }}>
          {["Inbox Terpadu", "AI Chatbot", "Multi-Agent", "WhatsApp Business API"].map((t) => (
            <div
              key={t}
              style={{
                fontSize: "24px",
                fontWeight: 600,
                padding: "12px 24px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.25)"
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
