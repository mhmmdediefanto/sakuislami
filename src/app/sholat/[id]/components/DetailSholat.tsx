"use client"

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

type Langkah = {
  urutan: number;
  nama?: string;
  arab?: string;
  latin?: string;
  arti?: string;
};

type TataCara = {
  id?: number;
  sholat_id?: number;
  nama_sholat?: string;
  jumlah_rakaat?: number;
  langkah?: Langkah[];
};

type SholatInfo = {
  id?: number;
  nama?: string;
  jumlah_rakaat?: number;
  waktu?: string;
};

export default function DetailSholat({
  tataCara,
  sholatInfo,
}: {
  tataCara?: TataCara | null;
  sholatInfo?: SholatInfo | null;
}) {
  if (!tataCara) {
    return (
      <main className="min-h-screen flex items-center justify-center p-6 font-quicksand">
        <div className="rounded-lg bg-white/80 dark:bg-black/60 shadow-md p-6 max-w-xl w-full">
          <h2 className="text-lg font-semibold">Tidak ditemukan</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Data tata cara sholat tidak tersedia.
          </p>
        </div>
      </main>
    );
  }

  const langkah: Langkah[] = tataCara.langkah || [];

  return (
    <main className="min-h-screen p-6 bg-slate-50 dark:bg-[#071023] font-quicksand">
      <Link href="/sholat" className="w-full max-w-6xl mx-auto py-5 flex items-center gap-3 hover:text-primary">
        <ArrowLeft className="w-6 h-6" /> Kembali
      </Link>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: main content */}
        <section className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-xl shadow-md p-6">
          <header className="mb-4">
            <h1 className="text-2xl font-extrabold">
              {tataCara.nama_sholat || sholatInfo?.nama}
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-300 mt-1">
              {sholatInfo?.waktu}
            </p>
          </header>

          <div className="space-y-4">
            {langkah.map((l) => (
              <article
                key={l.urutan}
                className="rounded-lg border border-slate-100 dark:border-slate-800 p-4 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-sm font-semibold">
                      {l.urutan}. {l.nama}
                    </h3>
                  </div>
                  <div className="ml-2 text-xs text-slate-400">{l.urutan}</div>
                </div>

                {l.arab && (
                  <p
                    className="mt-3 text-right text-2xl leading-relaxed font-sans"
                    dir="rtl"
                  >
                    {l.arab}
                  </p>
                )}

                {l.latin && (
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 font-medium">
                    {l.latin}
                  </p>
                )}

                {l.arti && (
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    {l.arti}
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Right: summary / sticky */}
        <aside className="lg:col-span-1">
          <div className="sticky top-6 space-y-4">
            <div className="rounded-xl bg-white dark:bg-slate-900 shadow p-4">
              <h4 className="text-sm font-semibold">Ringkasan</h4>
              <dl className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex justify-between py-1">
                  <dt className="font-medium">Nama</dt>
                  <dd>{sholatInfo?.nama || tataCara.nama_sholat}</dd>
                </div>
                <div className="flex justify-between py-1">
                  <dt className="font-medium">Rakaat</dt>
                  <dd>{tataCara.jumlah_rakaat || sholatInfo?.jumlah_rakaat}</dd>
                </div>
                <div className="flex justify-between py-1">
                  <dt className="font-medium">Langkah</dt>
                  <dd>{langkah.length}</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 p-4 text-white shadow">
              <h5 className="font-bold">Mulai Praktik</h5>
              <p className="text-sm mt-2">
                Ikuti langkah-langkah di bagian kiri. Bacaan Arab ditampilkan
                dengan orientasi kanan-ke-kiri untuk kenyamanan.
              </p>
              <div className="mt-3 flex gap-2">
                <button className="flex-1 bg-white/10 hover:bg-white/20 py-2 rounded-md">
                  Mulai
                </button>
                <button className="flex-1 bg-white/20 hover:bg-white/30 py-2 rounded-md">
                  Cetak
                </button>
              </div>
            </div>

            <div className="rounded-xl bg-white dark:bg-slate-900 shadow p-4 text-sm">
              <h6 className="font-semibold">Catatan</h6>
              <p className="text-slate-500 mt-2">
                Tampilan ini mendukung RTL untuk teks Arab dan responsif ke
                perangkat mobile.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
