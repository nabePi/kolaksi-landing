import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

export const metadata = {
  metadataBase: new URL("https://kolaksi.id"),
  title: "Kolaksi - CRM WhatsApp Official untuk UMKM | Anti-Blokir & Tracking CS",
  description:
    "Ubah chat WhatsApp jadi closing. Kolaksi adalah CRM WhatsApp Official untuk UMKM Indonesia. Fitur tracking kinerja CS, broadcast anti-blokir, dan manajemen database pelanggan.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg"
  },
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Leads WhatsApp Numpuk tapi Closing Sedikit?",
    description:
      "Rapikan chat, pantau kinerja CS, dan broadcast aman anti-blokir dengan Kolaksi. CRM WhatsApp Official khusus UMKM.",
    url: "https://kolaksi.id",
    siteName: "Kolaksi",
    locale: "id_ID",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Kolaksi - CRM WhatsApp Official untuk UMKM",
    description:
      "Ubah chat WhatsApp jadi closing. Fitur tracking response CS dan broadcast anti-blokir."
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
