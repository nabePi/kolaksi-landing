"use client";

import Navbar, { WhatsAppIcon, InstagramIcon, MessengerIcon } from "./components/Navbar";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  CheckCircle2,
  ChevronDown,
  Database,
  HelpCircle,
  History,
  Inbox,
  Layers3,
  LogIn,
  Menu,
  MessageCircle,
  ShieldCheck,
  Star,
  Tag,
  Send,
  UserPlus,
  Users,
  Workflow,
  X,
  Zap
} from "lucide-react";

const statsBar = [
  { value: "30+", label: "UMKM Aktif" },
  { value: "2.000+", label: "Chat Terkelola" },
  { value: "3x", label: "Lebih Cepat Respon" },
  { value: "4.8/5", label: "Rating Pengguna" }
];

const problems = [
  {
    title: "Chat Numpuk, Nggak Ada yang Balas",
    icon: "📉",
    color: "red",
    description: "Pesan masuk dari banyak pelanggan tapi cuma dikelola dari satu HP. Lead potensial kelewat karena respon lambat.",
  },
  {
    title: "Tim CS Nggak Bisa Kolaborasi",
    icon: "👥",
    color: "orange",
    description: "Staf CS nggak bisa akses chat yang sama sekaligus. Pesan sering dobel dibalas atau malah nggak dibalas sama sekali.",
  },
  {
    title: "Pertanyaan Sama Berulang Terus",
    icon: "🔁",
    color: "slate",
    description: "CS habis waktu jawab pertanyaan yang itu-itu lagi: harga, stok, cara order. Padahal bisa diotomasi dengan AI.",
  },
];

const features = [
  { icon: MessageCircle, title: "Inbox Terpadu", text: "Semua pesan WhatsApp masuk ke satu dashboard. Tim bisa balas dari mana saja tanpa perlu pegang HP bersama." },
  { icon: Users, title: "Multi-Agent", text: "Undang staf CS ke platform. Assign percakapan ke anggota tim tertentu dan pantau siapa yang sedang handle pelanggan." },
  { icon: Zap, title: "AI Chatbot Otomatis", text: "Balas pertanyaan pelanggan secara otomatis 24/7 berdasarkan pengetahuan yang kamu ajarkan. Kamu tetap bisa ambil alih kapan saja." },
  { icon: Database, title: "Dokumen Pengetahuan", text: "Upload daftar produk, harga, FAQ, atau SOP bisnis kamu. AI akan belajar dari dokumen ini untuk menjawab pelanggan." },
  { icon: Workflow, title: "API & Webhook", text: "Kirim pesan otomatis dari sistem toko online kamu saat ada order baru, pembayaran, atau pengiriman. Integrasi dengan n8n dan Zapier." },
  { icon: Inbox, title: "Quick Reply", text: "Simpan template jawaban untuk pertanyaan yang sering muncul. CS cukup pilih dan kirim — tidak perlu ngetik ulang." },
  { icon: ShieldCheck, title: "WhatsApp Business API Resmi", text: "Terhubung langsung via jalur resmi Meta. Nomor lebih terjaga, tidak mudah diblokir, dan tampil lebih profesional." },
  { icon: History, title: "Riwayat Percakapan", text: "Akses histori chat pelanggan hingga 30 hari ke belakang. Tidak perlu scroll HP — semua tersimpan di dashboard." },
  { icon: Tag, title: "Label & Assignment", text: "Beri label pada percakapan dan assign ke CS tertentu. Kerja tim lebih terstruktur, tidak ada chat yang terlewat." },
];

const pricing = [
  { name: "FREE", price: "Gratis", period: "selamanya", description: "Untuk Anda yang baru ingin mencoba atau bisnis yang baru mulai.", features: ["1 nomor WhatsApp", "Inbox terpadu", "Riwayat pesan 7 hari"] },
  { name: "BASIC", price: "Rp 39.000", period: "bulan", annual: "Tahunan: Rp 31.200/bln (hemat 20%)", description: "Untuk usaha mikro atau solo founder yang butuh bantuan tim kecil.", features: ["Semua fitur FREE", "2 nomor WhatsApp", "2 anggota tim", "Riwayat pesan 30 hari", "API Access & Webhook"] },
  { name: "LITE", price: "Rp 99.000", period: "bulan", annual: "Tahunan: Rp 79.200/bln (hemat 20%)", description: "Paling populer untuk UMKM yang ingin layanan pelanggan lebih cepat dengan AI.", featured: true, features: ["Semua fitur BASIC", "3 nomor WhatsApp", "5 anggota tim", "AI Chatbot otomatis", "1.000 balasan AI/bulan", "5 dokumen pengetahuan"] },
  { name: "PRO", price: "Rp 199.000", period: "bulan", annual: "Tahunan: Rp 159.200/bln (hemat 20%)", description: "Untuk bisnis yang sudah punya tim dan butuh kapasitas lebih besar.", features: ["Semua fitur LITE", "5 nomor WhatsApp", "10 anggota tim", "5 AI Chatbot", "5.000 balasan AI/bulan", "20 dokumen pengetahuan"] },
];

const testimonials = [
  { quote: "Kolaksi bantu tim saya balas chat 3x lebih cepat. Lead yang dulu kelewat sekarang jadi closing.", name: "Andi Wijaya", role: "Owner, Fashion Store Jakarta" },
  { quote: "Sebelumnya kami share 1 HP untuk 3 CS. Sekarang semua tim bisa kerja bareng tanpa tumpang tindih.", name: "Rina Susanti", role: "Manager, Wedding Organizer Bandung" },
  { quote: "AI Chatbot-nya balas pertanyaan harga dan stok otomatis. CS saya sekarang fokus closing, bukan jawab pertanyaan yang sama terus.", name: "Budi Santoso", role: "Founder, Frozen Food Surabaya" }
];

const useCases = [
  { label: "Fashion", image: "/images/fashion.jpg", title: "Balas tanya stok, ukuran, dan repeat order lebih cepat tanpa chat tercecer." },
  { label: "Wedding", image: "/images/wedding.jpg", title: "Tim CS bisa kolaborasi balas inquiry, follow-up DP, dan konfirmasi jadwal dalam satu dashboard." },
  { label: "Klinik & Kesehatan", image: "/images/clinic.jpg", title: "AI chatbot otomatis balas tanya jadwal dokter dan cara reservasi 24 jam." },
  { label: "Frozen Food", image: "/images/frozen-food.jpg", title: "Kirim notifikasi order dan status pengiriman otomatis via API ke pelanggan." },
  { label: "Toko Online", image: "/images/teknostore.jpg", title: "Hubungkan toko ke Kolaksi via API — pesan masuk, CS langsung bisa tangani dari satu tempat." },
];

const faqs = [
  { question: "Apakah perlu kartu kredit untuk mulai?", answer: "Tidak. Paket FREE gratis selamanya dan bisa langsung dipakai tanpa kartu kredit. Kamu baru bayar kalau memutuskan upgrade ke paket berbayar." },
  { question: "Apakah bisa ganti paket kapan saja?", answer: "Bisa. Kamu bisa upgrade atau downgrade kapan saja dan langsung aktif. Jika ada sisa masa langganan, nilainya diperhitungkan sebagai kredit untuk paket baru." },
  { question: "Apakah ada kontrak jangka panjang?", answer: "Tidak ada kontrak. Paket bulanan bisa dihentikan kapan saja. Paket tahunan aktif sampai masa berlakunya habis dan kamu hemat sampai 20%." },
  { question: "Bagaimana cara pembayarannya?", answer: "Tersedia via QRIS, Transfer Bank (BCA, BNI, Mandiri, Permata), dan E-Wallet. Semua proses pembayaran ada di menu Billing dalam aplikasi." },
  { question: "Apa itu AI Chatbot dan balasan AI?", answer: "AI Chatbot membalas pertanyaan pelanggan secara otomatis 24 jam berdasarkan informasi yang kamu ajarkan (produk, harga, FAQ). Setiap balasan otomatis dihitung 1 balasan AI. Paket LITE sudah termasuk 1.000 balasan/bulan, PRO 5.000 balasan/bulan. Kamu tetap bisa ambil alih percakapan kapan saja." },
  { question: "AI Chatbot bisa Bahasa Indonesia?", answer: "Ya, AI sepenuhnya mendukung Bahasa Indonesia dan menyesuaikan gaya bahasa sesuai cara kamu mengajarkannya." },
  { question: "Berapa nomor WhatsApp yang bisa dihubungkan?", answer: "Tergantung paket: FREE (1), BASIC (2), LITE (3), PRO (5). Setiap nomor menggunakan WhatsApp Business API resmi dari Meta, jadi lebih aman dan profesional." },
  { question: "Kapan Instagram dan Facebook Messenger tersedia?", answer: "Integrasi Instagram DM dan Facebook Messenger sedang dalam pengembangan dan akan segera hadir dalam satu inbox bersama WhatsApp. Kami akan beri tahu saat fiturnya siap." }
];

function DashboardMockup() {
  return (
    <div className="rounded-2xl shadow-2xl bg-white border border-slate-200 p-1.5 overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
      <div className="bg-white rounded-xl h-[400px] w-full flex flex-col overflow-hidden text-xs select-none ring-1 ring-slate-900/5">
        <div className="h-7 bg-slate-100 border-b border-slate-200 flex items-center px-3 gap-2 flex-shrink-0">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-white border border-slate-200 rounded px-3 py-0.5 text-[9px] text-slate-400 flex items-center gap-1">
              <ShieldCheck size={9} className="text-emerald-500" /> app.kolaksi.id/inbox
            </div>
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden bg-slate-50">
        <div className="w-14 bg-slate-900 flex flex-col items-center py-3 gap-3 flex-shrink-0">
          <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold mb-2">K</div>
          <div className="w-8 h-8 bg-brand-600/20 rounded-lg text-brand-400 flex items-center justify-center ring-1 ring-brand-500/40"><Layers3 size={15} /></div>
          <div className="w-8 h-8 rounded-lg text-slate-500 hover:text-slate-300 flex items-center justify-center"><MessageCircle size={15} /></div>
          <div className="w-8 h-8 rounded-lg text-slate-500 hover:text-slate-300 flex items-center justify-center"><Zap size={15} /></div>
          <div className="w-8 h-8 rounded-lg text-slate-500 hover:text-slate-300 flex items-center justify-center"><Users size={15} /></div>
          <div className="mt-auto w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 border-2 border-slate-800 flex items-center justify-center text-white text-[10px] font-bold">R</div>
        </div>

        <div className="w-60 bg-white border-r border-slate-200 flex flex-col">
          <div className="p-3 border-b border-slate-100 bg-white">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-slate-800 text-[13px]">Inbox Terpadu</span>
              <span className="bg-red-100 text-red-600 px-1.5 py-0.5 rounded-full text-[10px] font-bold">2 Belum dibalas</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg px-2 py-1.5 text-slate-400 flex items-center gap-2">
              <span className="text-[10px]">Cari percakapan...</span>
            </div>
          </div>
          <div className="overflow-y-auto flex-1">
            {[
              { name: "Budi Santoso", msg: "Siap, saya transfer sekarang ya...", initial: "B", color: "from-brand-400 to-indigo-500", tag: "Hot Lead", tagClass: "bg-amber-100 text-amber-700", handler: "Rina", handlerClass: "bg-indigo-100 text-indigo-600", active: true, unread: 0 },
              { name: "Siti Aminah", msg: "Min, harga kaos polos berapa?", initial: "S", color: "from-pink-400 to-rose-500", tag: "Dibalas AI", tagClass: "bg-violet-100 text-violet-700", handler: "AI", handlerClass: "bg-violet-100 text-violet-600", active: false, unread: 1 },
              { name: "Toko Maju Jaya", msg: "Oke makasih infonya 🙏", initial: "T", color: "from-emerald-400 to-teal-500", tag: "Selesai", tagClass: "bg-emerald-100 text-emerald-700", handler: "Dimas", handlerClass: "bg-indigo-100 text-indigo-600", active: false, unread: 0 },
            ].map((c) => (
              <div key={c.name} className={`p-3 border-l-2 ${c.active ? "border-brand-500 bg-brand-50" : "border-transparent hover:bg-slate-50"} cursor-pointer`}>
                <div className="flex items-start gap-2.5">
                  <div className="relative flex-shrink-0">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${c.color} flex items-center justify-center text-white text-[11px] font-bold`}>{c.initial}</div>
                    <WhatsAppIcon className="w-3 h-3 absolute -bottom-0.5 -right-0.5 bg-white rounded-full p-px" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex justify-between items-center mb-0.5">
                      <span className="font-bold text-slate-800 text-[11px] truncate">{c.name}</span>
                      <span className="text-[9px] text-slate-400 flex-shrink-0">10:4{c.unread + 1}</span>
                    </div>
                    <p className="text-slate-500 truncate text-[10px] mb-1">{c.msg}</p>
                    <div className="flex items-center gap-1">
                      <span className={`${c.tagClass} px-1.5 py-0.5 rounded text-[9px] font-semibold flex items-center gap-0.5`}>
                        {c.handler === "AI" && <Zap size={8} />}{c.tag}
                      </span>
                      {c.unread > 0 && <span className="ml-auto w-4 h-4 rounded-full bg-brand-600 text-white text-[9px] flex items-center justify-center font-bold">{c.unread}</span>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 bg-slate-50 flex flex-col min-w-0">
          <div className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-4 flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-400 to-indigo-500 text-white flex items-center justify-center font-bold text-xs">B</div>
              <div>
                <div className="flex items-center gap-1.5">
                  <div className="font-bold text-slate-800 text-xs">Budi Santoso</div>
                  <WhatsAppIcon className="w-3 h-3" />
                  <span className="bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded text-[9px] font-semibold flex items-center gap-0.5"><Tag size={8} />Hot Lead</span>
                </div>
                <div className="text-[10px] text-slate-400 flex items-center gap-1">
                  Ditangani oleh <span className="font-semibold text-indigo-600">CS Rina</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="bg-violet-50 border border-violet-200 text-violet-600 px-2.5 py-1.5 rounded-lg text-[10px] font-semibold flex items-center gap-1"><Zap size={11} />AI Aktif</button>
              <button className="bg-brand-600 text-white px-3 py-1.5 rounded-lg text-[11px] font-semibold hover:bg-brand-700">Tutup Deal</button>
            </div>
          </div>

          <div className="flex-1 p-4 space-y-3 overflow-y-auto">
            <div className="flex gap-2.5">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-400 to-indigo-500 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">B</div>
              <div className="bg-white p-2.5 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 max-w-[80%]">
                <p className="text-slate-700 text-[11px]">Halo, kaos polos warna hitam ready ga? Harganya berapa ya?</p>
                <span className="text-[9px] text-slate-400 mt-1 block">10:28</span>
              </div>
            </div>

            <div className="flex gap-2.5 flex-row-reverse">
              <div className="w-7 h-7 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center flex-shrink-0"><Zap size={13} /></div>
              <div className="max-w-[82%]">
                <div className="bg-violet-50 border border-violet-100 p-2.5 rounded-2xl rounded-tr-none shadow-sm">
                  <p className="text-slate-700 text-[11px]">Halo Kak! Kaos polos hitam <strong>ready</strong> ✅. Harga <strong>Rp 75.000/pcs</strong>, beli 3 lebih jadi Rp 65.000/pcs. Mau dibantu order? 😊</p>
                </div>
                <span className="text-[9px] text-violet-500 mt-1 flex items-center justify-end gap-1"><Zap size={9} />Dibalas otomatis oleh AI • 10:28</span>
              </div>
            </div>

            <div className="flex justify-center">
              <span className="bg-slate-200/70 text-slate-500 text-[9px] px-2.5 py-1 rounded-full flex items-center gap-1"><Users size={9} />CS Rina mengambil alih percakapan</span>
            </div>

            <div className="flex gap-2.5">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-400 to-indigo-500 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">B</div>
              <div className="bg-white p-2.5 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 max-w-[80%]">
                <p className="text-slate-700 text-[11px]">Mau ambil yang 3 pcs deh. Bisa COD?</p>
                <span className="text-[9px] text-slate-400 mt-1 block">10:40</span>
              </div>
            </div>

            <div className="flex gap-2.5 flex-row-reverse">
              <div className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-[10px] font-bold flex-shrink-0">R</div>
              <div className="bg-brand-600 p-2.5 rounded-2xl rounded-tr-none shadow-sm max-w-[80%]">
                <p className="text-white text-[11px]">Bisa kak! COD area Jakarta free ongkir. Saya bantu prosesnya ya 🙌</p>
                <span className="text-[9px] text-brand-200 mt-1 block text-right">CS Rina • 10:41</span>
              </div>
            </div>

            <div className="flex gap-2.5">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-400 to-indigo-500 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">B</div>
              <div className="bg-white p-2.5 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 max-w-[80%]">
                <p className="text-slate-700 text-[11px]">Siap, saya transfer sekarang ya...</p>
                <span className="text-[9px] text-slate-400 mt-1 block">10:42</span>
              </div>
            </div>
          </div>

          <div className="px-4 py-2 bg-white border-t border-slate-100 flex-shrink-0">
            <div className="flex gap-1.5 mb-2">
              <span className="bg-slate-100 text-slate-500 text-[9px] px-2 py-1 rounded-full">/ongkir</span>
              <span className="bg-slate-100 text-slate-500 text-[9px] px-2 py-1 rounded-full">/rekening</span>
              <span className="bg-slate-100 text-slate-500 text-[9px] px-2 py-1 rounded-full">/katalog</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-slate-50 rounded-full px-3 py-2 text-slate-400 text-[10px] flex items-center">
                Ketik pesan atau "/" untuk Quick Reply...
              </div>
              <div className="w-8 h-8 bg-brand-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                <Send size={13} />
              </div>
            </div>
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
    <div className="p-5 sm:p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-brand-900/5 hover:-translate-y-1 transition-all duration-300 group overflow-hidden relative">
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${c.border} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />

      <div className="mb-5 sm:mb-8 bg-slate-50 border border-slate-100 rounded-xl p-3 sm:p-4 w-full select-none transform group-hover:scale-[1.02] transition-transform duration-500 relative h-28 sm:h-36 flex items-center justify-center overflow-hidden">
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
          <div className="w-full space-y-2 z-10">
            <div className="flex gap-2 items-center">
              <div className="w-6 h-6 rounded-full bg-slate-200 flex-shrink-0" />
              <div className="bg-white rounded-xl p-2 shadow-sm border border-slate-100 text-[10px] text-slate-600">Harga produk A berapa ya?</div>
            </div>
            <div className="flex gap-2 items-center opacity-70">
              <div className="w-6 h-6 rounded-full bg-slate-200 flex-shrink-0" />
              <div className="bg-white rounded-xl p-2 shadow-sm border border-slate-100 text-[10px] text-slate-600">Min, harganya berapa?</div>
            </div>
            <div className="flex gap-2 items-center opacity-40">
              <div className="w-6 h-6 rounded-full bg-slate-200 flex-shrink-0" />
              <div className="bg-white rounded-xl p-2 shadow-sm border border-slate-100 text-[10px] text-slate-600">Cara ordernya gimana kak?</div>
            </div>
            <div className="flex justify-end"><span className="text-[9px] text-slate-400 italic">CS masih harus jawab satu-satu...</span></div>
          </div>
        )}
      </div>

      <h3 className={`text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 ${c.hover} transition-colors flex items-center gap-2`}>
        <span className="text-xl sm:text-2xl">{problem.icon}</span> {problem.title}
      </h3>
      <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">{problem.description}</p>
    </div>
  );
}

export default function Home() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Kolaksi",
    url: "https://kolaksi.id",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: [
      { "@type": "Offer", name: "FREE", price: "0", priceCurrency: "IDR" },
      { "@type": "Offer", name: "BASIC", price: "39000", priceCurrency: "IDR" },
      { "@type": "Offer", name: "LITE", price: "99000", priceCurrency: "IDR" },
      { "@type": "Offer", name: "PRO", price: "199000", priceCurrency: "IDR" }
    ],
    description: "CRM WhatsApp Official untuk UMKM. Kelola chat di inbox terpadu, balas pelanggan otomatis dengan AI chatbot, dan kolaborasi tim CS dalam satu dashboard.",
    author: { "@type": "Organization", name: "Generasi Izzah Indonesia", url: "https://kolaksi.id" }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer }
    }))
  };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Kolaksi",
    legalName: "Generasi Izzah Indonesia",
    url: "https://kolaksi.id",
    logo: "https://kolaksi.id/favicon.svg",
    description: "CRM WhatsApp Official untuk UMKM Indonesia: inbox terpadu, AI Chatbot otomatis, dan kolaborasi tim CS dengan WhatsApp Business API resmi.",
    email: "hello@kolaksi.id",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+62-851-7785-4195",
      email: "hello@kolaksi.id",
      contactType: "customer support",
      availableLanguage: ["Indonesian"]
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jalan Raya Panggung No 3, Jatibening, Pondok Gede",
      addressLocality: "Bekasi",
      addressRegion: "Jawa Barat",
      postalCode: "17412",
      addressCountry: "ID"
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
            <div className="absolute top-20 right-10 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
            <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs sm:text-sm font-medium">
                    <WhatsAppIcon className="w-4 h-4 text-emerald-500" />
                    CRM WhatsApp Official
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs sm:text-sm font-medium">
                    <InstagramIcon className="w-4 h-4 text-pink-500" />
                    Instagram DM
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 bg-amber-100 px-1.5 py-0.5 rounded-full">Segera</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs sm:text-sm font-medium">
                    <MessengerIcon className="w-4 h-4 text-blue-500" />
                    FB Messenger
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 bg-amber-100 px-1.5 py-0.5 rounded-full">Segera</span>
                  </div>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-4 sm:mb-6 leading-tight">
                  Kelola{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-500">WhatsApp Bisnis</span>
                  {" "}dalam Satu Platform
                </h1>

                <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-6 sm:mb-8 max-w-xl leading-relaxed">
                  Chat numpuk dan lead kelewat? Satukan semua pesan WhatsApp di satu inbox, biarkan <strong className="text-slate-800">AI balas pelanggan otomatis 24 jam</strong>, dan kelola tim CS tanpa rebutan HP — semua dalam satu dashboard.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center">
                  <a href="https://app.kolaksi.id" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white transition-all duration-200 bg-brand-600 rounded-full hover:bg-brand-700 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-600">
                    <UserPlus size={18} className="sm:w-5 sm:h-5" />
                    Mulai Gratis Sekarang
                  </a>
                  <a href="#harga" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-slate-700 border border-slate-200 rounded-full hover:border-slate-300 hover:bg-slate-50 transition-all">
                    Lihat Harga
                    <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </a>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 mt-3 sm:mt-4 flex items-center gap-1">
                  <CheckCircle2 size={14} className="text-emerald-600 sm:w-4 sm:h-4" />
                  Paket FREE gratis selamanya — tanpa kartu kredit
                </p>
              </div>

              <div className="relative hidden sm:block">
                <DashboardMockup />
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-16 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {statsBar.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-600">{s.value}</div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20 lg:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wide mb-4">
                Testimoni
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">Apa Kata Pengguna Kolaksi</h2>
              <p className="text-slate-600 text-base sm:text-lg">Cerita UMKM yang sudah merapikan chat dan mempercepat respon dengan Kolaksi.</p>
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

        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">Masalah yang Sering Terjadi</h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Satu HP untuk semua chat, tim CS nggak bisa kerja bareng, dan waktu habis jawab pertanyaan yang sama terus.
            </p>
            <p className="text-brand-600 text-base sm:text-lg leading-relaxed mt-3 sm:mt-4 font-bold">
              Kolaksi hadir untuk ngatasin 3 masalah ini.
            </p>
          </div>
        </section>

        <section className="pb-16 sm:pb-20 lg:pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {problems.map((p, i) => (
                <ProblemCard key={p.title} problem={p} index={i} />
              ))}
            </div>
          </div>
        </section>

        <section id="fitur" className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#444cf7_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wide mb-4">
                Fitur
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">Fitur Lengkap untuk Kelola WhatsApp Bisnis</h2>
              <p className="text-slate-600 text-base sm:text-lg">Semua yang kamu butuhkan untuk mengelola komunikasi pelanggan dalam satu platform.</p>
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

        <section className="py-12 sm:py-16 bg-brand-50 border-y border-brand-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">Siap rapikan chat WhatsApp bisnis kamu?</h3>
            <p className="text-slate-600 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
              Mulai dengan paket FREE — gratis selamanya, tanpa kartu kredit. Connect nomor WhatsApp dan langsung bisa dipakai.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a href="https://app.kolaksi.id" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white transition-all duration-200 bg-brand-600 rounded-full hover:bg-brand-700 hover:shadow-lg hover:-translate-y-0.5">
                <UserPlus size={18} className="sm:w-5 sm:h-5" />
                Coba Gratis Sekarang
              </a>
              <a href="#harga" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-slate-700 border border-slate-200 rounded-full hover:border-slate-300 hover:bg-slate-50 transition-all">
                Lihat Harga
                <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wide mb-4">
                Contoh Penggunaan
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">Cocok untuk Berbagai Bisnis UMKM</h2>
              <p className="text-slate-600 text-base sm:text-lg">Selama pelanggan banyak bertanya lewat WhatsApp, Kolaksi siap membantu.</p>
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

        <section id="cara-mulai" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-brand-50 to-indigo-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-brand-700 text-xs font-bold uppercase tracking-wide mb-4 border border-brand-100">
                Cara Mulai
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">Mulai Pakai Kolaksi dalam 3 Langkah</h2>
              <p className="text-slate-600 text-base sm:text-lg">Tanpa ribet, tanpa kartu kredit. Bisnis kamu siap balas pelanggan lebih cepat hari ini juga.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: UserPlus, step: "1", title: "Daftar Gratis", text: "Buat akun Kolaksi dalam hitungan menit. Mulai dari paket FREE, tanpa kartu kredit." },
                { icon: WhatsAppIcon, step: "2", title: "Hubungkan WhatsApp", text: "Sambungkan nomor WhatsApp bisnis kamu lewat WhatsApp Business API resmi dari Meta." },
                { icon: Zap, step: "3", title: "Balas & Otomasi", text: "Balas chat dari satu inbox, ajari AI Chatbot, dan undang tim CS untuk kolaborasi." },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.step} className="relative p-6 sm:p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="absolute -top-3 -left-3 w-9 h-9 rounded-full bg-brand-600 text-white font-bold flex items-center justify-center shadow-lg shadow-brand-600/30">{s.step}</div>
                    <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{s.text}</p>
                  </div>
                );
              })}
            </div>
            <div className="text-center mt-10">
              <a href="https://app.kolaksi.id" className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white transition-all duration-200 bg-brand-600 rounded-full hover:bg-brand-700 hover:shadow-lg hover:-translate-y-0.5">
                <UserPlus size={18} className="sm:w-5 sm:h-5" />
                Mulai Gratis Sekarang
              </a>
              <p className="text-xs sm:text-sm text-slate-500 mt-3">Gratis selamanya • Tanpa kartu kredit • Upgrade kapan saja</p>
            </div>
          </div>
        </section>

        <section id="harga" className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wide mb-4">
                Harga
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">Pilih Paket yang Cocok</h2>
              <p className="text-slate-600 text-base sm:text-lg">Mulai gratis, upgrade kapan saja sesuai kebutuhan bisnis kamu.</p>
              <div className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs sm:text-sm font-semibold">
                <BadgeCheck size={16} className="flex-shrink-0" />
                Hemat sampai 20% dengan langganan tahunan — setara 2,4 bulan gratis
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {pricing.map((plan) => (
                <div key={plan.name} className={`relative p-8 rounded-2xl border ${plan.featured ? "border-brand-500 shadow-xl shadow-brand-900/10" : "border-slate-100 shadow-sm"} bg-white hover:shadow-lg transition-all duration-300 flex flex-col`}>
                  {plan.featured && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-brand-600 text-white text-xs font-bold rounded-full">Paling Populer</span>}
                  <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
                  <p className="text-slate-500 text-sm mt-1">{plan.description}</p>
                  <div className="mt-6 mb-6">
                    <span className="text-3xl font-extrabold text-slate-900">{plan.price}</span>
                    {plan.period && <span className="text-slate-400 text-sm">/{plan.period}</span>}
                    {plan.annual && <p className="text-xs text-emerald-600 font-semibold mt-1.5">{plan.annual}</p>}
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                        <Check size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="https://app.kolaksi.id" className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all ${plan.featured ? "bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-600/20" : "border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"}`}>
                    {plan.name === "FREE" ? "Mulai Gratis" : `Pilih ${plan.name}`}
                    <ArrowRight size={16} />
                  </a>
                </div>
              ))}
            </div>
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs sm:text-sm text-slate-500">
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 size={15} className="text-emerald-500" />Tanpa kontrak, berhenti kapan saja</span>
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 size={15} className="text-emerald-500" />Upgrade/downgrade kapan saja</span>
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 size={15} className="text-emerald-500" />Sisa langganan jadi kredit saat upgrade</span>
            </div>

            <div className="mt-12 sm:mt-16 max-w-5xl mx-auto">
              <h3 className="text-center text-lg sm:text-xl font-bold text-slate-900 mb-6">Perbandingan Lengkap Paket Kolaksi</h3>
              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                <table className="w-full text-sm text-left border-collapse bg-white">
                  <caption className="sr-only">Perbandingan fitur dan harga paket Kolaksi: FREE, BASIC, LITE, dan PRO.</caption>
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th scope="col" className="p-3 sm:p-4 font-bold text-slate-700">Fitur</th>
                      <th scope="col" className="p-3 sm:p-4 font-bold text-slate-700 text-center">FREE</th>
                      <th scope="col" className="p-3 sm:p-4 font-bold text-slate-700 text-center">BASIC</th>
                      <th scope="col" className="p-3 sm:p-4 font-bold text-brand-700 text-center bg-brand-50">LITE</th>
                      <th scope="col" className="p-3 sm:p-4 font-bold text-slate-700 text-center">PRO</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-600">
                    {[
                      ["Harga per bulan", "Gratis", "Rp 39.000", "Rp 99.000", "Rp 199.000"],
                      ["Nomor WhatsApp", "1", "2", "3", "5"],
                      ["Anggota tim", "—", "2 orang", "5 orang", "10 orang"],
                      ["AI Chatbot otomatis", "❌", "❌", "✅", "✅"],
                      ["Balasan AI per bulan", "—", "—", "1.000", "5.000"],
                      ["Dokumen pengetahuan", "—", "—", "5", "20"],
                      ["Riwayat pesan", "7 hari", "30 hari", "30 hari", "30 hari"],
                      ["API & Webhook", "❌", "✅", "✅", "✅"],
                    ].map((row, ri) => (
                      <tr key={row[0]} className={`border-b border-slate-100 ${ri === 0 ? "font-semibold text-slate-900" : ""}`}>
                        <th scope="row" className="p-3 sm:p-4 font-medium text-slate-700 text-left">{row[0]}</th>
                        <td className="p-3 sm:p-4 text-center">{row[1]}</td>
                        <td className="p-3 sm:p-4 text-center">{row[2]}</td>
                        <td className="p-3 sm:p-4 text-center bg-brand-50/50">{row[3]}</td>
                        <td className="p-3 sm:p-4 text-center">{row[4]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-center text-xs text-slate-500 mt-4">Semua paket menggunakan WhatsApp Business API resmi dari Meta. Langganan tahunan hemat sampai 20%.</p>
            </div>
          </div>
        </section>

        <section id="tentang" className="py-14 sm:py-20 bg-white border-t border-slate-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wide mb-4">
                Tentang Kolaksi
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">Apa itu Kolaksi?</h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                <strong className="text-slate-900">Kolaksi adalah CRM WhatsApp Official untuk UMKM Indonesia</strong> — satu platform untuk menyatukan semua chat WhatsApp di inbox terpadu, membalas pelanggan otomatis dengan AI Chatbot 24 jam, dan mengelola tim CS dalam satu dashboard, menggunakan WhatsApp Business API resmi dari Meta.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mt-8">
              {[
                { icon: Users, label: "Untuk siapa", value: "UMKM, toko online, kuliner, jasa & klinik" },
                { icon: BadgeCheck, label: "Harga", value: "Mulai gratis selamanya — Rp 39rb s/d 199rb/bln" },
                { icon: ShieldCheck, label: "Teknologi", value: "WhatsApp Business API resmi dari Meta" },
                { icon: Zap, label: "Keunggulan", value: "AI Chatbot balas pelanggan otomatis 24 jam" },
              ].map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.label} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="w-9 h-9 rounded-lg bg-brand-100 text-brand-600 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wide text-slate-400">{f.label}</div>
                      <div className="text-sm font-semibold text-slate-800 mt-0.5">{f.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="text-center text-slate-500 text-sm leading-relaxed mt-6">
              Fitur utama: inbox terpadu, AI Chatbot dengan dokumen pengetahuan, multi-agent untuk tim CS, Quick Reply, label &amp; assignment, serta API &amp; Webhook untuk integrasi dengan toko online, n8n, dan Zapier. Integrasi Instagram DM dan Facebook Messenger akan segera hadir. Kolaksi dikembangkan oleh Generasi Izzah Indonesia.
            </p>
          </div>
        </section>

        <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wide mb-4">
                FAQ
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">Pertanyaan yang Sering Ditanyakan</h2>
              <p className="text-slate-600 text-base sm:text-lg">Semua yang perlu kamu tahu sebelum mulai menggunakan Kolaksi.</p>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm">
                  <details className="group">
                    <summary className="w-full flex items-center justify-between p-4 sm:p-6 cursor-pointer list-none">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <HelpCircle size={18} className="text-brand-600 flex-shrink-0 sm:w-5 sm:h-5" />
                        <span className="font-bold text-slate-900 text-xs sm:text-sm">{faq.question}</span>
                      </div>
                      <ChevronDown size={16} className="text-slate-400 group-open:rotate-180 transition-transform sm:w-[18px] sm:h-[18px]" />
                    </summary>
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 pl-10 sm:pl-14">
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="daftar" className="py-14 sm:py-20 bg-brand-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">Mulai Kelola Chat WhatsApp Bisnis Kamu Hari Ini</h2>
            <p className="text-brand-100 text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto">
              Paket FREE tersedia selamanya — tidak perlu kartu kredit. Upgrade kapan saja saat bisnis kamu berkembang.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <a href="https://app.kolaksi.id" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-brand-900 transition-all duration-200 bg-white rounded-xl hover:bg-brand-50 hover:shadow-lg">
                <UserPlus size={18} className="sm:w-5 sm:h-5" />
                Mulai Gratis Sekarang
              </a>
            </div>
            <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-white/80">
              <span className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-emerald-400 sm:w-[14px] sm:h-[14px]" />Paket FREE gratis selamanya</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-emerald-400 sm:w-[14px] sm:h-[14px]" />Tanpa kartu kredit</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-emerald-400 sm:w-[14px] sm:h-[14px]" />Upgrade kapan saja</span>
            </div>
          </div>
        </section>
      </main>

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-100 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] p-3">
        <div className="flex gap-2">
          <a href="https://wa.me/6285177854195" target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-bold text-emerald-700 border border-emerald-200 rounded-lg hover:bg-emerald-50 transition-all">
            <WhatsAppIcon className="w-4 h-4" />
            Hubungi
          </a>
          <a href="https://app.kolaksi.id" className="flex-[2] inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold text-white bg-brand-600 rounded-lg hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/20">
            <UserPlus size={14} />
            Daftar Gratis
          </a>
        </div>
      </div>

      <footer className="bg-slate-900 text-slate-300 py-10 sm:py-16 border-t border-slate-800 pb-24 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 pb-6 sm:pb-8 border-b border-slate-800">
            <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-800 text-slate-300 text-xs font-medium">
              <ShieldCheck size={14} className="text-emerald-400 sm:w-4 sm:h-4" />
              WhatsApp Business API Resmi
            </div>
            <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-800 text-slate-300 text-xs font-medium">
              <BadgeCheck size={14} className="text-brand-400 sm:w-4 sm:h-4" />
              Data Terenkripsi
            </div>
            <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-800 text-slate-300 text-xs font-medium">
              <Star size={14} className="text-amber-400 fill-amber-400 sm:w-4 sm:h-4" />
              4.8/5 dari 30+ Pengguna
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-12 mb-8 sm:mb-12">
            <div className="space-y-4 col-span-2 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-brand-900/50">K</div>
                <span className="text-xl font-bold text-white tracking-tight">Kolaksi</span>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">Platform CRM WhatsApp Official yang membantu UMKM menyatukan chat di satu inbox, membalas pelanggan otomatis dengan AI Chatbot, dan mengelola tim CS dengan WhatsApp Business API resmi.</p>
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
    </>
  );
}
