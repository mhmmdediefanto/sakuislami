"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center px-6 font-quicksand">
      <h1 className="text-7xl md:text-8xl font-extrabold text-emerald-500 mb-4 animate-pulse">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">
        Halaman Tidak Ditemukan
      </h2>
      <p className="text-gray-400 mb-8 max-w-md">
        Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-emerald-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-emerald-400 transition-all duration-300"
      >
        <ArrowLeft className="w-5 h-5" />
        Kembali ke Beranda
      </Link>

      <div className="absolute bottom-6 text-gray-600 text-sm">
        © {new Date().getFullYear()} <span className="text-emerald-500 font-semibold">SakuIslami.id</span>
      </div>
    </div>
  );
};

export default NotFound;
