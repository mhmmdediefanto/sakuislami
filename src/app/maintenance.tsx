// File: app/maintenance/page.tsx

import { Wrench } from "lucide-react"; // Mengimpor ikon

export default function MaintenancePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-4">
      <div className="flex flex-col items-center text-center">
        {/* Ikon Maintenance */}
        <Wrench className="h-20 w-20 text-slate-400" />

        {/* Judul Utama */}
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
          Situs Sedang Dalam Perbaikan
        </h1>

        {/* Deskripsi */}
        <p className="mt-4 text-base text-slate-600">
          Kami sedang melakukan beberapa pembaruan untuk meningkatkan pengalaman
          Anda. <br />
          Kami akan segera kembali online!
        </p>

        {/* Informasi Kontak (Opsional) */}
        <p className="mt-8 text-sm text-slate-500">
          Terima kasih atas kesabaran Anda.
        </p>
      </div>
    </main>
  );
}
