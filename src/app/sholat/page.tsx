import React from "react";
import bacaanSholat from "@/datas/bacaan_sholat.json";
import sholat from "@/datas/sholat.json";

const fetchKota = async () => {
  const res = await fetch("https://api.myquran.com/v2/sholat/kota/semua", {
    next: { revalidate: 3600 }, // Contoh: cache data selama 1 jam
  });
  const data = await res.json();
  return data.data;
};

export const metadata: Metadata = generateSeoMetadata({
  title: `Sholat - Harian | ${SITE_NAME}`,
  description:
    "Kumpulan jadwal sholat harian dalam Islam lengkap dengan teks Arab, transliterasi, dan terjemahan bahasa Indonesia",
  url: SITE_URL,
});

import HeroSection from "./components/HeroSection";
import CardService from "./components/CardService";
import PageCleint from "./PageCleint";
import Link from "next/link";
import { Metadata } from "next";
import { generateSeoMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/constants/seo";

const page = async () => {
  const kotas = await fetchKota();
  const listBacaan = bacaanSholat.list_bacaan;
  const sholats = sholat.sholat;
  const listBacaanSholat = bacaanSholat.list_bacaan_sholat;

  const listBacaanSholatRelasi = listBacaan.map((bacaan) => {
    const bacaanRelasi = listBacaanSholat.find(
      (item) => item.list_bacaan_id === bacaan.id
    );
    return {
      ...bacaan,
      bacaanRelasi,
    };
  });

  return (
    <main className="min-h-screen w-full max-w-7xl mx-auto  dark:text-white">
      {/* Header: Jadwal Sholat Interaktif (static) */}
      <HeroSection kotas={kotas} />

      {/* Konten Utama: Grid Kartu Sholat */}
      <section className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <CardService title="Sholat Fardhu 5 Waktu">
          <li>Panduan langkah demi langkah (niat, bacaan, gerakan)</li>
          <li>Audio/video tutorial (coming soon)</li>
          <li>Detail raka&apos;at & waktu pelaksanaan</li>
        </CardService>
        <CardService title="Sholat Sunnah">
          <li>Dhuha, Tahajjud, Rawatib, Istikharah, Hari Raya, dll</li>
          <li>Keutamaan masing-masing sholat sunnah</li>
        </CardService>
        <CardService title="Sholat Khusus">
          <li>Sholat Jenazah, Gerhana (Khusuf/Kusuf)</li>
          <li>Panduan & keutamaan singkat</li>
        </CardService>
      </section>
      <section className="w-full max-w-6xl mx-auto px-4">
        <CardService title="Tata Cara Sholat 5 Waktu">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {sholats.map((sholat) => (
              <Link
                href={`/sholat/${sholat.id}`}
                key={sholat.id}
                className="bg-gray-800/60 rounded-xl md:p-3 p-2 border border-gray-700 hover:border-emerald-500 transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-gray-100 font-medium">
                    {sholat.nama}
                  </span>
                  <span className="text-xs md:text-sm text-emerald-400">
                    Detail
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </CardService>
      </section>

      <PageCleint listBacaanSholatRelasi={listBacaanSholatRelasi} />

      {/* Fiqih Sholat (Checklist/Infografis) */}
      <section className="max-w-6xl mx-auto px-4 py-8 font-quicksand">
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
      <section className="max-w-6xl mx-auto px-4 py-8 font-quicksand">
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
