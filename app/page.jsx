"use client";

import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Check,
  CheckCircle2,
  ChevronDown,
  Database,
  HelpCircle,
  Inbox,
  Layers3,
  LogIn,
  Menu,
  MessageCircle,
  Radio,
  Send,
  ShieldAlert,
  ShieldCheck,
  Star,
  UserPlus,
  Users,
  Workflow,
  X,
  Zap
} from "lucide-react";

const navLinks = [
  { href: "#fitur", label: "Fitur" },
  { href: "#harga", label: "Harga" },
  { href: "#faq", label: "FAQ" }
];

const statsBar = [
  { value: "50+", label: "UMKM Aktif" },
  { value: "10rb+", label: "Chat Terkelola" },
  { value: "3x", label: "Lebih Cepat Respon" },
  { value: "4.8/5", label: "Rating Pengguna" }
];

const problems = [
  {
    title: "Chat Tenggelam",
    icon: "📉",
    color: "red",
    description: "Chat masuk terlalu banyak, lead potensial kelewat nggak dibales. Customer kabur ke kompetitor gara-gara slow response.",
  },
  {
    title: "CS 'Hantu'",
    icon: "👻",
    color: "orange",
    description: "Nggak tau CS mana yang rajin, mana yang cuma read doang. Owner susah evaluasi tim soalnya nggak ada data.",
  },
  {
    title: "Takut Keblokir",
    icon: "🚫",
    color: "slate",
    description: "Broadcast promo pakai tool ilegal, besoknya nomor hangus dibanned WA. Database hilang, omset melayang.",
  },
];

const features = [
  { icon: MessageCircle, title: "Unified Inbox", text: "Semua chat dari berbagai sumber masuk ke satu inbox. Gak perlu buka banyak app, semua terpusat." },
  { icon: Radio, title: "Broadcast WhatsApp", text: "Kirim promo, pengumuman, atau follow-up ke banyak pelanggan sekaligus dengan template resmi yang aman." },
  { icon: Database, title: "CRM & Kontak", text: "Kelola data pelanggan, tag, segment, dan history chat. Semua rapi di satu tempat, siap dipakai kapan saja." },
  { icon: BarChart3, title: "Analytics & Report", text: "Lihat statistik chat, waktu respon, dan performa tim dalam bentuk laporan yang mudah dipahami." },
  { icon: Zap, title: "Auto Reply", text: "Atur balasan otomatis untuk jam di luar kerja atau pertanyaan yang sering muncul. Pelanggan tetap dilayani 24/7." },
  { icon: ShieldCheck, title: "Nomor Aman & Resmi", text: "Pakai jalur resmi WhatsApp Business API. Nomor lebih terjaga, nggak gampang diblokir, dan lebih profesional." },
  { icon: Send, title: "Message Templates", text: "Kirim template WhatsApp untuk notifikasi, follow-up, reminder, dan campaign dengan format yang lebih konsisten." },
  { icon: Inbox, title: "Quick Reply", text: "Balas chat cepat dengan jawaban siap pakai. CS nggak perlu ngetik ulang jawaban yang sama berkali-kali." },
  { icon: Workflow, title: "Label & Assignment", text: "Atur label pelanggan dan assign chat ke CS tertentu. Kerja tim jadi lebih terstruktur dan nggak bertumpuk." },
];

const pricing = [
  { name: "FREE", price: "Rp 0", period: "selamanya", description: "Coba Kolaksi tanpa biaya. Cocok untuk solo founder yang mulai merapikan chat.", features: ["Connect WhatsApp, IG, Messenger", "Unlimited Message", "Akses Inbox", "Quick Reply"] },
  { name: "BASIC", price: "Rp 25.000", period: "month", description: "Untuk tim kecil yang mulai kebanjiran chat dan butuh integrasi.", features: ["Semua fitur FREE", "n8n Integration", "API Access", "30-day message history", "1 WhatsApp Number"] },
  { name: "LITE", price: "Rp 49.000", period: "month", description: "Untuk bisnis yang butuh AI chatbot, tim, dan manajemen konten.", featured: true, features: ["Semua fitur BASIC", "AI Chatbot", "5 Knowledge Documents", "n8n Integration", "5 Team Members", "90-day message history", "Media Library", "1 WhatsApp Number"] }
];

const testimonials = [
  { quote: "Kolaksi bantu tim saya balas chat 3x lebih cepat. Lead yang dulu kelewat sekarang jadi closing.", name: "Andi Wijaya", role: "Owner, Fashion Store Jakarta" },
  { quote: "Sebelumnya kami share 1 HP untuk 3 CS. Sekarang semua tim bisa kerja bareng tanpa tumpang tindih.", name: "Rina Susanti", role: "Manager, Wedding Organizer Bandung" },
  { quote: "Broadcast promo lewat Kolaksi aman, nomor nggak pernah keblokir lagi. Database pelanggan tetap utuh.", name: "Budi Santoso", role: "Founder, Frozen Food Surabaya" }
];

const useCases = [
  { label: "Fashion", image: "/images/fashion.jpg", title: "Follow up ukuran, warna, dan repeat order tanpa tercecer." },
  { label: "Wedding", image: "/images/wedding.jpg", title: "Kelola inquiry paket, DP, dan jadwal produksi dalam satu alur." },
  { label: "Clinic", image: "/images/clinic.jpg", title: "Rapikan reservasi, reminder, dan konsultasi pelanggan." },
  { label: "Frozen Food", image: "/images/frozen-food.jpg", title: "Kirim promo pelanggan lama dengan segmentasi yang jelas." },
  { label: "Teknostore", image: "/images/teknostore.jpg", title: "Pantau komplain, status pesanan, dan after-sales produk." },
];

const faqs = [
  { question: "Apakah pesan yang bisa dikirim unlimited?", answer: "Ya! Semua paket Kolaksi menyediakan unlimited pesan masuk dan keluar. Kamu bisa balas chat pelanggan sepuasnya tanpa khawatir kuota habis." },
  { question: "Apakah bisa kirim broadcast / bulk message?", answer: "Bisa! Kolaksi mendukung fitur broadcast untuk mengirim pesan ke banyak pelanggan sekaligus. Cocok untuk promo, pengumuman, atau follow-up." },
  { question: "Berapa biaya broadcast WhatsApp?", answer: "Biaya broadcast dibayar langsung ke Meta (WhatsApp) sesuai tarif resmi mereka. Kolaksi tidak mengambil margin tambahan. Kamu hanya bayar sesuai harga Meta." },
  { question: "Apakah perlu nomor WhatsApp baru?", answer: "Tidak harus. Kamu bisa pakai nomor WhatsApp yang sudah ada, atau daftar nomor baru. Tim kami akan bantu proses migrasi jika diperlukan." },
  { question: "Berapa lama proses setup?", answer: "Setup Kolaksi hanya butuh waktu singkat! Setelah verifikasi nomor selesai, kamu bisa langsung login, connect channel, dan mulai pakai." },
  { question: "Apakah nomor tetap bisa dipakai di HP?", answer: "Dengan fitur WhatsApp Coexistence, nomor yang sama dapat tetap aktif di aplikasi WhatsApp dan dashboard Kolaksi. Owner tetap fleksibel membalas dari HP." }
];

function WhatsAppIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function MessengerIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.627 0-12 4.975-12 11.111 0 3.497 1.745 6.616 4.472 8.652v4.237l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111 0-6.136-5.373-11.111-12-11.111zm1.193 14.963l-3.056-3.259-5.963 3.259 6.559-6.963 3.13 3.259 5.889-3.259-6.559 6.963z" />
    </svg>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2" onClick={closeMenu}>
          <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold">K</div>
          <span className="text-xl font-bold text-slate-900 tracking-tight">Kolaksi</span>
        </a>

        <div className="hidden md:flex gap-8">
          {navLinks.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="https://app.kolaksi.id" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-700 border border-slate-200 rounded-lg hover:border-slate-300 hover:shadow-sm transition-all">
            <LogIn size={17} />
            Masuk
          </a>
          <a href="#daftar" className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-brand-600 rounded-full hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/20">
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
              <a key={item.href} href={item.href} onClick={closeMenu} className="block text-base font-medium text-slate-600 hover:text-brand-600">
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
              <a href="#daftar" onClick={closeMenu} className="flex items-center justify-center gap-2 w-full py-3 text-center text-base font-bold text-white bg-brand-600 rounded-xl hover:bg-brand-700">
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

function DashboardMockup() {
  return (
    <div className="rounded-2xl shadow-2xl bg-white border border-slate-200 p-1.5 overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
      <div className="bg-slate-50 rounded-xl h-[400px] w-full flex overflow-hidden text-xs select-none ring-1 ring-slate-900/5">
        <div className="w-16 bg-slate-900 flex flex-col items-center py-4 gap-4 flex-shrink-0">
          <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold mb-4">K</div>
          <div className="w-8 h-8 bg-slate-800 rounded-lg text-slate-400 flex items-center justify-center"><Layers3 size={16} /></div>
          <div className="w-8 h-8 bg-slate-800/50 rounded-lg text-slate-500 flex items-center justify-center"><MessageCircle size={16} /></div>
          <div className="w-8 h-8 bg-slate-800/50 rounded-lg text-slate-500 flex items-center justify-center"><Users size={16} /></div>
          <div className="mt-auto w-8 h-8 rounded-full bg-indigo-500 border-2 border-slate-800" />
        </div>

        <div className="w-64 bg-white border-r border-slate-200 flex flex-col">
          <div className="p-3 border-b border-slate-100 bg-slate-50/50">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-slate-700">Chats</span>
              <span className="bg-red-100 text-red-600 px-1.5 py-0.5 rounded text-[10px] font-bold">3 Unreplied</span>
            </div>
            <div className="bg-white border border-slate-200 rounded px-2 py-1.5 text-slate-400 flex items-center gap-2">
              <span className="text-[10px]">Search...</span>
            </div>
          </div>
          <div className="overflow-y-auto flex-1">
            {[
              ["Budi Santoso", "Siap gan, saya transfer sekarang ya...", "Hot Lead", true],
              ["Siti Aminah", "Min, paket promonya masih ada?", "Unreplied", false],
              ["Toko Maju Jaya", "Oke makasih infonya min.", "", false],
            ].map(([name, msg, tag, active]) => (
              <div key={name} className={`p-3 border-l-2 ${active ? "border-brand-500 bg-brand-50" : "border-transparent hover:bg-slate-50"} cursor-pointer`}>
                <div className="flex justify-between items-start mb-1">
                  <span className="font-bold text-slate-800 text-[11px]">{name}</span>
                  <span className="text-[10px] text-slate-400">10:42</span>
                </div>
                <p className="text-slate-600 truncate text-[11px]">{msg}</p>
                {tag && <div className="mt-2 flex gap-1">
                  <span className={`${active ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-600"} px-1.5 py-0.5 rounded text-[10px]`}>{tag}</span>
                </div>}
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 bg-slate-50 flex flex-col">
          <div className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-400 to-indigo-500 text-white flex items-center justify-center font-bold text-xs">B</div>
              <div>
                <div className="flex items-center gap-1.5">
                  <div className="font-bold text-slate-800 text-xs">Budi Santoso</div>
                  <WhatsAppIcon className="w-3 h-3" />
                </div>
                <div className="text-[10px] text-green-600 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Online
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="bg-white border border-slate-200 text-slate-600 px-3 py-1.5 rounded text-[11px] hover:bg-slate-50">Assign to Me</button>
              <button className="bg-brand-600 text-white px-3 py-1.5 rounded text-[11px] hover:bg-brand-700">Close Deal</button>
            </div>
          </div>

          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-indigo-100 flex-shrink-0" />
              <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 max-w-[80%]">
                <p className="text-slate-700 text-[11px]">Halo Kak Budi! Ada yang bisa dibantu untuk paket Wedding-nya?</p>
                <span className="text-[10px] text-slate-400 mt-1 block">CS Rina • 10:30</span>
              </div>
            </div>
            <div className="flex gap-3 flex-row-reverse">
              <div className="w-8 h-8 rounded-full bg-brand-100 flex-shrink-0" />
              <div className="bg-brand-600 p-3 rounded-2xl rounded-tr-none shadow-sm max-w-[80%]">
                <p className="text-white text-[11px]">Iya mbak, mau tanya yang paket 500 pcs itu dapet bonus apa aja ya?</p>
                <span className="text-[10px] text-brand-200 mt-1 block text-right">10:32</span>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-indigo-100 flex-shrink-0" />
              <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 max-w-[80%]">
                <p className="text-slate-700 text-[11px]">Untuk paket 500 pcs dapet <strong>Free Kartu Ucapan</strong> + <strong>Plastik Opp</strong> ya Kak. Kebetulan hari ini promo terakhir diskon 10% lho!</p>
                <span className="text-[10px] text-slate-400 mt-1 block">CS Rina • 10:35</span>
              </div>
            </div>
            <div className="flex gap-3 flex-row-reverse">
              <div className="w-8 h-8 rounded-full bg-brand-100 flex-shrink-0" />
              <div className="bg-brand-600 p-3 rounded-2xl rounded-tr-none shadow-sm max-w-[80%]">
                <p className="text-white text-[11px]">Wah boleh deh mbak. Siap gan, saya transfer sekarang ya...</p>
                <span className="text-[10px] text-brand-200 mt-1 block text-right">10:42</span>
              </div>
            </div>
          </div>

          <div className="h-14 bg-white border-t border-slate-200 flex items-center px-4 gap-3">
            <div className="flex-1 bg-slate-50 rounded-full px-4 py-2 text-slate-400 text-xs flex items-center">
              Ketik pesan atau tekan '/' untuk Quick Reply...
            </div>
            <div className="w-8 h-8 bg-brand-600 rounded-full flex items-center justify-center text-white">
              <Send size={14} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProblemCard({ problem, index }) {
  const colorMap = {
    red: { border: "from-red-400 to-red-600", hover: "hover:text-red-600", badge: "bg-red-100 text-red-500 ring-white", text: "text-red-500" },
    orange: { border: "from-orange-400 to-orange-600", hover: "hover:text-orange-600", badge: "bg-orange-100 text-orange-500 ring-white", text: "text-orange-500" },
    slate: { border: "from-slate-600 to-slate-800", hover: "hover:text-slate-700", badge: "bg-slate-100 text-slate-500 ring-white", text: "text-slate-500" },
  };
  const c = colorMap[problem.color];

  return (
    <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-brand-900/5 hover:-translate-y-1 transition-all duration-300 group overflow-hidden relative">
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${c.border} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />

      <div className="mb-8 bg-slate-50 border border-slate-100 rounded-xl p-4 w-full select-none transform group-hover:scale-[1.02] transition-transform duration-500 relative h-36 flex items-center justify-center overflow-hidden">
        {index === 0 && (
          <div className="w-full space-y-3">
            <div className="flex justify-between items-center opacity-30 blur-[0.5px]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-300" />
                <div className="space-y-1"><div className="w-16 h-2 bg-slate-300 rounded-full" /><div className="w-24 h-1.5 bg-slate-200 rounded-full" /></div>
              </div>
              <div className="w-8 h-2 bg-slate-200 rounded" />
            </div>
            <div className="flex justify-between items-center relative bg-white p-2 rounded-lg shadow-sm border border-slate-100 -mx-2">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full ${c.badge} flex items-center justify-center text-[10px] font-bold ring-2`}>?</div>
                <div><div className="w-24 h-2.5 bg-slate-800 rounded mb-1.5" /><div className={`w-20 h-2 ${c.badge.split(' ')[0]} rounded`} /></div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className={`text-[9px] font-bold ${c.text}`}>Yesterday</span>
                <div className={`w-4 h-4 rounded-full ${c.badge.split(' ')[0].replace('100', '500')} text-white text-[9px] flex items-center justify-center shadow-lg`}>5</div>
              </div>
            </div>
            <div className="flex justify-between items-center opacity-30 blur-[0.5px]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-300" />
                <div className="space-y-1"><div className="w-14 h-2 bg-slate-300 rounded-full" /><div className="w-20 h-1.5 bg-slate-200 rounded-full" /></div>
              </div>
              <div className="w-8 h-2 bg-slate-200 rounded" />
            </div>
          </div>
        )}
        {index === 1 && (
          <div className="w-full space-y-3 relative z-10">
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-slate-200 flex-shrink-0 border-2 border-white" />
              <div className="bg-white rounded-2xl rounded-tl-none p-3 shadow-sm border border-slate-100 text-[10px] text-slate-600 w-3/4">Min, barang ready ga? Mau order nih..</div>
            </div>
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-slate-200 flex-shrink-0 border-2 border-white" />
              <div className="bg-red-50 text-red-600 rounded-2xl rounded-tl-none p-3 text-[10px] w-2/3 font-semibold border border-red-100 shadow-sm">Kok ga dibales sih?</div>
            </div>
            <div className="flex justify-end pr-2"><span className="text-[9px] text-slate-400 italic flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-slate-300" /> No reply from Admin...</span></div>
          </div>
        )}
        {index === 2 && (
          <div className="relative w-full max-w-[90%] z-10">
            <div className="bg-white border-l-4 border-red-500 shadow-xl rounded-lg p-4 flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500 flex-shrink-0"><ShieldAlert size={20} /></div>
              <div>
                <div className="text-sm font-bold text-slate-800">Account Banned</div>
                <div className="text-[11px] text-slate-500 leading-tight mt-1">Your phone number is banned from using WhatsApp.</div>
              </div>
            </div>
          </div>
        )}
      </div>

      <h3 className={`text-xl font-bold text-slate-900 mb-3 ${c.hover} transition-colors flex items-center gap-2`}>
        <span className="text-2xl">{problem.icon}</span> {problem.title}
      </h3>
      <p className="text-slate-600 leading-relaxed text-sm">{problem.description}</p>
    </div>
  );
}

export default function Home() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Kolaksi",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "IDR" },
    description: "CRM WhatsApp Official untuk UMKM. Kelola chat, broadcast, dan tim CS dalam satu dashboard.",
    author: { "@type": "Organization", name: "Generasi Izzah Indonesia", url: "https://kolaksi.id" }
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
            <div className="absolute top-20 right-10 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
            <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-sm font-medium">
                    <WhatsAppIcon className="w-4 h-4 text-emerald-500" />
                    CRM WhatsApp Official
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-sm font-medium">
                    <InstagramIcon className="w-4 h-4 text-pink-500" />
                    Instagram DM
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 bg-amber-100 px-1.5 py-0.5 rounded-full">Segera</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-sm font-medium">
                    <MessengerIcon className="w-4 h-4 text-blue-500" />
                    FB Messenger
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 bg-amber-100 px-1.5 py-0.5 rounded-full">Segera</span>
                  </div>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
                  Kelola{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-500">WhatsApp Bisnis</span>
                  {" "}dalam Satu Platform
                </h1>

                <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-xl leading-relaxed">
                  Lead masuk tapi respon lambat? Tim CS berantakan? Broadcast bikin takut keblokir? Kolaksi bantu satukan semua chat, tim, dan data pelanggan di satu dashboard.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <a href="#daftar" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-brand-600 rounded-full hover:bg-brand-700 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-600">
                    <UserPlus size={20} />
                    Coba Gratis Sekarang
                  </a>
                  <a href="#fitur" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-slate-700 border border-slate-200 rounded-full hover:border-slate-300 hover:bg-slate-50 transition-all">
                    Lihat Fitur
                    <ArrowRight size={18} />
                  </a>
                </div>

                <p className="text-sm text-slate-500 mt-4 flex items-center gap-1">
                  <CheckCircle2 size={16} className="text-emerald-600" />
                  Gratis daftar — setup cuma 5 menit
                </p>
              </div>

              <div className="relative">
                <DashboardMockup />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {statsBar.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-extrabold text-brand-600">{s.value}</div>
                  <div className="text-sm text-slate-500 font-medium mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wide mb-4">
                Testimoni
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Dipercaya oleh Ratusan UMKM di Indonesia</h2>
              <p className="text-slate-600 text-lg">Ini kata mereka yang udah coba Kolaksi dan ngerasain bedanya.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div key={t.name} className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map((n) => (
                      <Star key={n} size={16} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-base leading-relaxed mb-6 font-medium">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-400 to-indigo-500 flex items-center justify-center text-white font-bold text-sm">{t.name.charAt(0)}</div>
                    <div>
                      <p className="text-slate-900 font-bold text-sm">{t.name}</p>
                      <p className="text-slate-500 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Masalah yang Sering Terjadi</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Chat tumpuk di satu HP, CS saling tumpang tindih, lead panas kelewat. Respon lambat, pelanggan kabur, omset melayang.
            </p>
            <p className="text-brand-600 text-lg leading-relaxed mt-4 font-bold">
              Kolaksi ngatasin 3 masalah utama ini.
            </p>
          </div>
        </section>

        <section className="pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {problems.map((p, i) => (
                <ProblemCard key={p.title} problem={p} index={i} />
              ))}
            </div>
          </div>
        </section>

        <section id="fitur" className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#444cf7_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wide mb-4">
                Fitur
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">9 Fitur untuk Kelola WhatsApp Bisnis</h2>
              <p className="text-slate-600 text-lg">Semua yang kamu butuhkan untuk mengelola komunikasi pelanggan dalam satu platform.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center mb-4 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{f.text}</p>
                  </div>
                );
              })}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 border border-pink-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-3 right-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-2 py-1 rounded-full">Segera Hadir</span>
                </div>
                <div className="w-10 h-10 rounded-lg bg-pink-100 text-pink-600 flex items-center justify-center mb-4">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Instagram DM</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Kelola DM Instagram dari satu dashboard bareng WhatsApp. Satu inbox untuk semua channel chat bisnismu.</p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-3 right-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-2 py-1 rounded-full">Segera Hadir</span>
                </div>
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <MessengerIcon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Facebook Messenger</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Balas chat Messenger dari Facebook Page bisnismu langsung di dashboard Kolaksi. Semua channel terhubung.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-50 border-y border-brand-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Udah liat fiturnya? Langsung coba.</h3>
            <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
              Daftar gratis, setup cuma 5 menit. Nggak perlu kartu kredit, nggak ada komitmen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://app.kolaksi.id" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-brand-600 rounded-full hover:bg-brand-700 hover:shadow-lg hover:-translate-y-0.5">
                <UserPlus size={20} />
                Coba Gratis Sekarang
              </a>
              <a href="#harga" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-slate-700 border border-slate-200 rounded-full hover:border-slate-300 hover:bg-slate-50 transition-all">
                Lihat Harga
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wide mb-4">
                Contoh Penggunaan
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Cocok untuk Berbagai Bisnis UMKM</h2>
              <p className="text-slate-600 text-lg">Selama pelanggan banyak bertanya lewat WhatsApp, Kolaksi siap membantu.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {useCases.map((item) => (
                <div key={item.label} className="rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <div className="h-32 overflow-hidden">
                    <img src={item.image} alt={item.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <span className="text-brand-600 text-xs font-extrabold uppercase tracking-wide">{item.label}</span>
                    <h3 className="text-sm font-bold text-slate-900 mt-1 leading-snug">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="harga" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wide mb-4">
                Harga
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Pilih Paket yang Cocok</h2>
              <p className="text-slate-600 text-lg">Mulai gratis, upgrade kapan saja sesuai kebutuhan bisnis kamu.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {pricing.map((plan) => (
                <div key={plan.name} className={`relative p-8 rounded-2xl border ${plan.featured ? "border-brand-500 shadow-xl shadow-brand-900/10" : "border-slate-100 shadow-sm"} bg-white hover:shadow-lg transition-all duration-300 flex flex-col`}>
                  {plan.featured && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-brand-600 text-white text-xs font-bold rounded-full">Paling Populer</span>}
                  <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
                  <p className="text-slate-500 text-sm mt-1">{plan.description}</p>
                  <div className="mt-6 mb-6">
                    <span className="text-3xl font-extrabold text-slate-900">{plan.price}</span>
                    {plan.period && <span className="text-slate-400 text-sm">/{plan.period}</span>}
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                        <Check size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="#daftar" className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all ${plan.featured ? "bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-600/20" : "border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"}`}>
                    {plan.name === "FREE" ? "Mulai Gratis" : `Pilih ${plan.name}`}
                    <ArrowRight size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="py-24 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wide mb-4">
                FAQ
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Pertanyaan yang Sering Ditanyakan</h2>
              <p className="text-slate-600 text-lg">Semua yang perlu kamu tahu sebelum mulai menggunakan Kolaksi.</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm">
                  <details className="group">
                    <summary className="w-full flex items-center justify-between p-6 cursor-pointer list-none">
                      <div className="flex items-center gap-3">
                        <HelpCircle size={20} className="text-brand-600 flex-shrink-0" />
                        <span className="font-bold text-slate-900 text-sm">{faq.question}</span>
                      </div>
                      <ChevronDown size={18} className="text-slate-400 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="px-6 pb-6 pl-14">
                      <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="daftar" className="py-20 bg-brand-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Yuk, Mulai Kelola WhatsApp Bisnis dengan Lebih Rapi</h2>
            <p className="text-brand-100 text-lg mb-10 max-w-2xl mx-auto">
              Daftar gratis, tim kami bantu onboarding. Setup cuma 5 menit, nggak perlu kartu kredit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="https://app.kolaksi.id" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-brand-900 transition-all duration-200 bg-white rounded-xl hover:bg-brand-50 hover:shadow-lg">
                <UserPlus size={20} />
                Mulai Gratis Sekarang
              </a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-white/80">
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-400" />Gratis 14 hari</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-400" />Tanpa kartu kredit</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-400" />Cancel kapan saja</span>
            </div>
          </div>
        </section>
      </main>

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-100 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] p-4">
        <div className="flex gap-3">
          <a href="https://wa.me/6285177854195" target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-emerald-700 border border-emerald-200 rounded-xl hover:bg-emerald-50 transition-all">
            <WhatsAppIcon className="w-5 h-5" />
            Hubungi
          </a>
          <a href="https://app.kolaksi.id" className="flex-[2] inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white bg-brand-600 rounded-xl hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/20">
            <UserPlus size={18} />
            Daftar Gratis
          </a>
        </div>
      </div>

      <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800 pb-24 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-12 pb-8 border-b border-slate-800">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 text-slate-300 text-xs font-medium">
              <ShieldCheck size={16} className="text-emerald-400" />
              WhatsApp Business API Resmi
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 text-slate-300 text-xs font-medium">
              <BadgeCheck size={16} className="text-brand-400" />
              Data Terenkripsi
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 text-slate-300 text-xs font-medium">
              <Star size={16} className="text-amber-400 fill-amber-400" />
              4.8/5 dari 50+ Pengguna
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-brand-900/50">K</div>
                <span className="text-xl font-bold text-white tracking-tight">Kolaksi</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">Platform CRM WhatsApp Official yang membantu UMKM meningkatkan konversi penjualan dan manajemen tim CS tanpa takut blokir.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Produk</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#fitur" className="hover:text-brand-400 transition-colors">Fitur</a></li>
                <li><a href="#harga" className="hover:text-brand-400 transition-colors">Harga</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Kontak</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#faq" className="hover:text-brand-400 transition-colors">FAQ</a></li>
                <li><a href="https://wa.me/6285177854195" target="_blank" rel="noopener noreferrer" className="hover:text-brand-400 transition-colors flex items-center gap-2">
                  <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" />
                  0851 7785 4195
                </a></li>
                <li><a href="mailto:hello@kolaksi.id" className="hover:text-brand-400 transition-colors">hello@kolaksi.id</a></li>
                <li className="pt-2 text-slate-500 text-xs">Generasi Izzah Indonesia<br />Jalan Raya Panggung No 3, Jatibening, Pondok Gede,<br />Bekasi, Jawa Barat 17412</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Legal</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="/privacy" className="hover:text-brand-400 transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-brand-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 gap-4">
            <p>&copy; 2026 Generasi Izzah Indonesia. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500" />System Operational</span>
              <p>Made in Indonesia</p>
            </div>
          </div>
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
