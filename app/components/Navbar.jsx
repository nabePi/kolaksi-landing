"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { LogIn, Menu, UserPlus, X } from "lucide-react";
import { WhatsAppIcon, InstagramIcon, MessengerIcon } from "./icons";

export { WhatsAppIcon, InstagramIcon, MessengerIcon };

const navLinks = [
  { section: "fitur", label: "Fitur" },
  { section: "harga", label: "Harga" },
  { section: "faq", label: "FAQ" }
];

function getNavHref(section, isHome) {
  return isHome ? `#${section}` : `/#${section}`;
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
