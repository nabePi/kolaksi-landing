import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

export const metadata = {
  metadataBase: new URL("https://kolaksi.id"),
  title: {
    default: "Kolaksi — CRM WhatsApp + AI Chatbot untuk UMKM Indonesia",
    template: "%s | Kolaksi"
  },
  description:
    "Kelola semua chat WhatsApp bisnis dalam satu inbox terpadu, balas pelanggan otomatis dengan AI Chatbot 24 jam, dan kolaborasi tim CS dalam satu dashboard. Pakai WhatsApp Business API resmi. Mulai gratis, tanpa kartu kredit.",
  applicationName: "Kolaksi",
  authors: [{ name: "Generasi Izzah Indonesia", url: "https://kolaksi.id" }],
  creator: "Generasi Izzah Indonesia",
  publisher: "Generasi Izzah Indonesia",
  category: "business",
  keywords: [
    "CRM WhatsApp",
    "WhatsApp Business API",
    "AI Chatbot WhatsApp",
    "chatbot WhatsApp Indonesia",
    "inbox WhatsApp",
    "customer service WhatsApp",
    "aplikasi CS WhatsApp",
    "omnichannel chat",
    "kelola chat WhatsApp bisnis",
    "CRM UMKM",
    "Kolaksi"
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg"
  },
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    title: "Kolaksi — CRM WhatsApp + AI Chatbot untuk UMKM",
    description:
      "Satukan chat WhatsApp di satu inbox, biarkan AI balas pelanggan otomatis 24 jam, dan kelola tim CS bareng. WhatsApp Business API resmi. Mulai gratis.",
    url: "https://kolaksi.id",
    siteName: "Kolaksi",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Kolaksi — CRM WhatsApp + AI Chatbot untuk UMKM"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Kolaksi — CRM WhatsApp + AI Chatbot untuk UMKM",
    description:
      "Satukan chat WhatsApp, balas otomatis dengan AI Chatbot 24 jam, dan kelola tim CS dalam satu dashboard. Mulai gratis.",
    images: ["/opengraph-image"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${plusJakarta.variable} font-sans bg-slate-50 text-slate-900 selection:bg-brand-100 selection:text-brand-900`}>
        {children}
      </body>
    </html>
  );
}
