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
  description: "CRM WhatsApp Official untuk UMKM: inbox terpadu, AI Chatbot otomatis 24 jam, multi-agent CS. Mulai gratis, tanpa kartu kredit.",
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
    canonical: "https://kolaksi.id/",
    languages: {
      "id-ID": "https://kolaksi.id/",
      "x-default": "https://kolaksi.id/"
    }
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
  other: {
    "format-detection": "telephone=no"
  },
  openGraph: {
    title: "Kolaksi — WhatsApp CRM & AI",
    description: "Inbox terpadu, AI balas 24 jam, tim CS bareng. Meta API. Gratis.",
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
    site: "@kolaksiid",
    creator: "@kolaksiid",
    title: "Kolaksi — CRM WhatsApp & AI Chatbot untuk UMKM Indonesia",
    description: "Satukan chat WhatsApp di satu inbox, balas pelanggan otomatis dengan AI Chatbot 24 jam, dan kelola tim CS. WhatsApp Business API resmi. Mulai gratis, tanpa kartu kredit.",
    images: ["/opengraph-image"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="alternate" hrefLang="id-ID" href="https://kolaksi.id/" />
        <link rel="alternate" hrefLang="x-default" href="https://kolaksi.id/" />
        <meta name="author" content="Generasi Izzah Indonesia" />
        <meta name="geo.region" content="ID-JB" />
        <meta name="geo.placename" content="Bekasi, Jawa Barat, Indonesia" />
      </head>
      <body className={`${plusJakarta.variable} font-sans bg-slate-50 text-slate-900 selection:bg-brand-100 selection:text-brand-900`}>
        {children}
      </body>
    </html>
  );
}
