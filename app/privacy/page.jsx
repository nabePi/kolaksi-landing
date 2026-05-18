import Navbar, { WhatsAppIcon } from "../components/Navbar";
import { ShieldCheck, BadgeCheck, Star } from "lucide-react";

export const metadata = {
  title: "Kebijakan Privasi - Kolaksi CRM",
  description: "Kami menghargai privasi data Anda. Baca bagaimana Kolaksi mengumpulkan, menggunakan, dan melindungi informasi bisnis Anda.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      <header className="pt-32 pb-16 bg-white relative overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-slate-50/50" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider mb-6 border border-slate-200">Legal</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Kebijakan Privasi
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Transparansi adalah kunci. Pelajari bagaimana kami mengelola, melindungi, dan menghargai data bisnis Anda.
          </p>
        </div>
      </header>

      <div className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
          <div className="prose prose-lg prose-slate max-w-none text-slate-600">
            <p className="text-sm text-slate-500 mb-8 pb-4 border-b border-slate-100">
              Terakhir diperbarui: <strong>5 Februari 2026</strong>
            </p>

            <p className="lead text-xl text-slate-700 font-medium mb-8">
              Di <strong>Kolaksi</strong> (Generasi Izzah Indonesia), kami paham betul bahwa data pelanggan adalah aset paling berharga bagi bisnis Anda. Dokumen ini menjelaskan secara transparan bagaimana kami menjaga amanah tersebut.
            </p>

            <div className="space-y-12">
              <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-100 text-brand-600 text-sm">1</span>
                  Data yang Kami Kumpulkan
                </h3>
                <p>Agar layanan Kolaksi bisa berjalan optimal, kami perlu mengelola beberapa jenis informasi:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Identitas Bisnis:</strong> Nama perusahaan, alamat email, nomor telepon, dan NPWP (jika ada).</li>
                  <li><strong>Kredensial WhatsApp:</strong> Token akses API dan ID Akun WhatsApp Business (WABA ID) yang diperlukan untuk menghubungkan nomor Anda ke dashboard Kolaksi.</li>
                  <li><strong>Data Percakapan:</strong> Pesan masuk dan keluar, kontak pelanggan, dan file media yang dikirim melalui platform kami.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-100 text-brand-600 text-sm">2</span>
                  Bagaimana Data Digunakan
                </h3>
                <p>Kami bukan broker data. Informasi Anda hanya digunakan untuk:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Menyediakan fitur utama dashboard (kirim/terima pesan, broadcast, auto-reply).</li>
                  <li>Mengirimkan notifikasi penting terkait akun (misal: kuota habis, tagihan, atau update fitur).</li>
                  <li>Menganalisis performa sistem agar server kami tetap ngebut dan stabil.</li>
                </ul>
                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 mt-6 rounded-r-lg">
                  <p className="text-emerald-800 text-sm m-0 font-medium">
                    🛡️ <strong>Janji Kami:</strong> Kami tidak akan pernah menjual, menyewakan, atau menukar data kontak pelanggan Anda kepada pihak ketiga manapun. Data pelanggan Anda adalah milik Anda 100%.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-100 text-brand-600 text-sm">3</span>
                  Penyimpanan & Keamanan
                </h3>
                <p className="mb-4">
                  Keamanan adalah fitur "default" kami, bukan add-on.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Enkripsi:</strong> Semua data yang dikirim dari browser Anda ke server kami dilindungi dengan enkripsi SSL/TLS 256-bit (standar perbankan).</li>
                  <li><strong>Server:</strong> Data disimpan di pusat data yang aman dengan akses fisik terbatas.</li>
                  <li><strong>Akses Internal:</strong> Hanya tim engineer inti yang memiliki akses ke server database, itu pun dengan protokol keamanan ketat (2FA & VPN).</li>
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-100 text-brand-600 text-sm">4</span>
                  Pihak Ketiga (Sub-processor)
                </h3>
                <p>Untuk menjalankan layanan, kami bekerja sama dengan mitra teknologi terpercaya:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Meta (WhatsApp):</strong> Sebagai penyedia infrastruktur pesan utama.</li>
                  <li><strong>Google Cloud / AWS:</strong> Sebagai penyedia infrastruktur server (hosting).</li>
                  <li><strong>Payment Gateway (Midtrans/Xendit):</strong> Untuk memproses pembayaran langganan Anda.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-100 text-brand-600 text-sm">5</span>
                  Kontrol di Tangan Anda
                </h3>
                <p>Kapanpun Anda mau, Anda berhak untuk:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Meminta salinan data (Export Data) yang kami simpan.</li>
                  <li>Meminta penghapusan akun dan seluruh data terkait (Right to be Forgotten).</li>
                  <li>Berhenti berlangganan dan menarik izin akses API WhatsApp.</li>
                </ul>
              </section>

              <div className="pt-8 border-t border-slate-100 mt-12">
                <p className="text-base text-slate-500 text-center">
                  Masih ada yang mengganjal soal privasi?<br />
                  Jangan ragu untuk ngobrol sama tim DPO (Data Protection Officer) kami di:{" "}
                  <a href="mailto:privacy@kolaksi.id" className="text-brand-600 font-bold hover:underline">privacy@kolaksi.id</a>
                </p>
              </div>
            </div>
          </div>
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
                <li><a href="/#fitur" className="hover:text-brand-400 transition-colors">Fitur</a></li>
                <li><a href="/#harga" className="hover:text-brand-400 transition-colors">Harga</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Kontak</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="/#faq" className="hover:text-brand-400 transition-colors">FAQ</a></li>
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
    </>
  );
}
