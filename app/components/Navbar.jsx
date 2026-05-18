"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { LogIn, Menu, UserPlus, X } from "lucide-react";

const navLinks = [
  { section: "fitur", label: "Fitur" },
  { section: "harga", label: "Harga" },
  { section: "faq", label: "FAQ" }
];

function getNavHref(section, isHome) {
  return isHome ? `#${section}` : `/#${section}`;
}

export function WhatsAppIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export function MessengerIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.627 0-12 4.975-12 11.111 0 3.497 1.745 6.616 4.472 8.652v4.237l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111 0-6.136-5.373-11.111-12-11.111zm1.193 14.963l-3.056-3.259-5.963 3.259 6.559-6.963 3.13 3.259 5.889-3.259-6.559 6.963z" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2" onClick={closeMenu}>
          <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold">K</div>
          <span className="text-xl font-bold text-slate-900 tracking-tight">Kolaksi</span>
        </a>

        <div className="hidden md:flex gap-8">
          {navLinks.map((item) => (
            <a key={item.section} href={getNavHref(item.section, isHome)} className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="https://app.kolaksi.id" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-700 border border-slate-200 rounded-lg hover:border-slate-300 hover:shadow-sm transition-all">
            <LogIn size={17} />
            Masuk
          </a>
          <a href="/#daftar" className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-brand-600 rounded-full hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/20">
            <UserPlus size={17} />
            Daftar
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
          onClick={() => setOpen((c) => !c)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-b border-slate-100 absolute w-full left-0 top-16 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((item) => (
              <a key={item.section} href={getNavHref(item.section, isHome)} onClick={closeMenu} className="block text-base font-medium text-slate-600 hover:text-brand-600">
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <a href="https://wa.me/6285177854195" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="flex items-center justify-center gap-2 w-full py-3 text-center text-base font-bold text-emerald-700 border border-emerald-200 rounded-xl hover:bg-emerald-50">
                <WhatsAppIcon className="w-5 h-5" />
                Hubungi WhatsApp
              </a>
              <a href="https://app.kolaksi.id" onClick={closeMenu} className="flex items-center justify-center gap-2 w-full py-3 text-center text-base font-bold text-slate-700 border border-slate-200 rounded-xl hover:bg-slate-50">
                <LogIn size={18} />
                Masuk
              </a>
              <a href="/#daftar" onClick={closeMenu} className="flex items-center justify-center gap-2 w-full py-3 text-center text-base font-bold text-white bg-brand-600 rounded-xl hover:bg-brand-700">
                <UserPlus size={18} />
                Daftar Kolaksi
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
