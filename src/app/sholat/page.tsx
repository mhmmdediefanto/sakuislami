import React from "react";

const fetchKota = async () => {
  const res = await fetch("https://api.myquran.com/v2/sholat/kota/semua", {
    next: { revalidate: 3600 }, // Contoh: cache data selama 1 jam
  });
  const data = await res.json();
  return data.data;
};

import HeroSection from "./components/HeroSection";

const page = async () => {
  const kotas = await fetchKota();
  return (
    <main className="min-h-screen w-full max-w-7xl mx-auto  dark:text-white">
      {/* Header: Jadwal Sholat Interaktif (static) */}
      <HeroSection kotas={kotas}/>

      {/* Konten Utama: Grid Kartu Sholat */}
      <section className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Kartu Sholat Fardhu */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow p-6 flex flex-col gap-2 border-t-4 border-emerald-500">
          <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-300">
            Sholat Fardhu 5 Waktu
          </h3>
          <ul className="list-disc ml-5 text-sm">
            <li>Panduan langkah demi langkah (niat, bacaan, gerakan)</li>
            <li>Audio/video tutorial (coming soon)</li>
            <li>Detail raka&apos;at & waktu pelaksanaan</li>
          </ul>
        </div>
        {/* Kartu Sholat Sunnah */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow p-6 flex flex-col gap-2 border-t-4 border-emerald-400">
          <h3 className="text-xl font-bold text-emerald-500 dark:text-emerald-200">
            Sholat Sunnah
          </h3>
          <ul className="list-disc ml-5 text-sm">
            <li>Dhuha, Tahajjud, Rawatib, Istikharah, Hari Raya, dll</li>
            <li>Keutamaan masing-masing sholat sunnah</li>
          </ul>
        </div>
        {/* Kartu Sholat Khusus */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow p-6 flex flex-col gap-2 border-t-4 border-emerald-300">
          <h3 className="text-xl font-bold text-emerald-400 dark:text-emerald-100">
            Sholat Khusus
          </h3>
          <ul className="list-disc ml-5 text-sm">
            <li>Sholat Jenazah, Gerhana (Khusuf/Kusuf)</li>
            <li>Panduan & keutamaan singkat</li>
          </ul>
        </div>
      </section>

      {/* Sidebar Navigasi & Detail Panduan (static mockup) */}
      <section className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-8 py-8">
        <aside className="md:w-1/4 w-full bg-emerald-50 dark:bg-neutral-900 rounded-lg p-4 mb-4 md:mb-0">
          <h4 className="font-bold text-emerald-600 dark:text-emerald-300 mb-2">
            Navigasi Panduan
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#ruku" className="hover:text-emerald-500">
                Ruku&apos;
              </a>
            </li>
            <li>
              <a href="#sujud" className="hover:text-emerald-500">
                Sujud
              </a>
            </li>
            <li>
              <a href="#tasyahud" className="hover:text-emerald-500">
                Tasyahud
              </a>
            </li>
            <li>
              <a href="#salam" className="hover:text-emerald-500">
                Salam
              </a>
            </li>
          </ul>
        </aside>
        <div className="md:w-3/4 w-full bg-white dark:bg-neutral-800 rounded-lg p-6 shadow">
          <h4 className="font-bold text-lg mb-2">
            Panduan Gerakan Sholat (Static)
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <div
              id="ruku"
              className="p-3 rounded border border-emerald-100 dark:border-emerald-900"
            >
              <span className="font-semibold">Ruku&apos;</span>
              <p className="text-sm mt-1">
                Penjelasan singkat gerakan ruku&apos; dan bacaan.
              </p>
            </div>
            <div
              id="sujud"
              className="p-3 rounded border border-emerald-100 dark:border-emerald-900"
            >
              <span className="font-semibold">Sujud</span>
              <p className="text-sm mt-1">
                Penjelasan singkat gerakan sujud dan bacaan.
              </p>
            </div>
            <div
              id="tasyahud"
              className="p-3 rounded border border-emerald-100 dark:border-emerald-900"
            >
              <span className="font-semibold">Tasyahud</span>
              <p className="text-sm mt-1">
                Penjelasan singkat tasyahud awal & akhir.
              </p>
            </div>
            <div
              id="salam"
              className="p-3 rounded border border-emerald-100 dark:border-emerald-900"
            >
              <span className="font-semibold">Salam</span>
              <p className="text-sm mt-1">
                Penjelasan singkat salam penutup sholat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ensiklopedia Bacaan Sholat */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h4 className="font-bold text-lg mb-4">Ensiklopedia Bacaan Sholat</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bacaan Card */}
          {[
            "Niat",
            "Doa Iftitah",
            "Al-Fatihah",
            "Surah Pendek",
            "Ruku&apos;",
            "I&apos;tidal",
            "Sujud",
            "Tasyahud Awal",
            "Tasyahud Akhir",
            "Doa Setelah Tasyahud",
            "Salam",
          ].map((bacaan) => (
            <div
              key={bacaan}
              className="bg-white dark:bg-neutral-800 rounded-lg shadow p-4 flex flex-col gap-2 border-l-4 border-emerald-400"
            >
              <span className="font-bold text-emerald-500">{bacaan}</span>
              <div className="text-sm text-gray-700 dark:text-gray-300">
                Teks Arab (harakat)
              </div>
              <div className="text-xs text-gray-500">Transliterasi Latin</div>
              <div className="text-xs text-gray-500">Terjemahan Indonesia</div>
              <button className="mt-2 px-2 py-1 bg-emerald-500 text-white rounded text-xs">
                Play Audio
              </button>
            </div>
          ))}
        </div>
        <div className="mt-4 flex gap-2">
          <button className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-200 rounded">
            Tampilkan Transliterasi
          </button>
          <button className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-200 rounded">
            Tampilkan Terjemahan
          </button>
        </div>
      </section>

      {/* Fiqih Sholat (Checklist/Infografis) */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h4 className="font-bold text-lg mb-4">
          Fiqih Sholat (Tanya Jawab Populer)
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-4 border-l-4 border-emerald-500">
            <span className="font-bold text-emerald-500">
              Rukun, Syarat Sah, Pembatal Sholat
            </span>
            <ul className="list-check ml-5 text-sm mt-2">
              <li>Rukun Sholat</li>
              <li>Syarat Sah Sholat</li>
              <li>Pembatal Sholat</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-4 border-l-4 border-emerald-400">
            <span className="font-bold text-emerald-400">Hukum Terkait</span>
            <ul className="list-disc ml-5 text-sm mt-2">
              <li>Thaharah: Wudhu & Tayamum</li>
              <li>Qadha Sholat</li>
              <li>Sholat Safar: Qashar & Jamak</li>
              <li>Sholat bagi yang sakit/berhalangan</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pojok Keutamaan Sholat */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h4 className="font-bold text-lg mb-4">Pojok Keutamaan Sholat</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-4 border-l-4 border-emerald-500">
            <span className="font-bold text-emerald-500">Ayat & Hadits</span>
            <ul className="list-disc ml-5 text-sm mt-2">
              <li>Ayat Al-Qur&apos;an tentang sholat</li>
              <li>Hadits keutamaan sholat</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-4 border-l-4 border-emerald-400">
            <span className="font-bold text-emerald-400">Hikmah Sholat</span>
            <ul className="list-disc ml-5 text-sm mt-2">
              <li>Dampak positif sholat untuk mental & spiritual</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
