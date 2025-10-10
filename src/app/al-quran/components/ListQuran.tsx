"use client";
import { Quran } from "@/types/QuranTypes";
import CardQuran from "./CardQuran";
import { Search, Loader2 } from "lucide-react";
import React from "react";
import { useDebounce } from "@/hooks/useDebounce";
import Link from "next/link";

interface ListQuranProps {
  dataAlquran: Quran[];
}

const ListQuran = ({ dataAlquran }: ListQuranProps) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const debouncedSearch = useDebounce(searchTerm, 500);

  // Detect apakah sedang mengetik (belum debounce selesai)
  const isSearching = searchTerm !== debouncedSearch;

  // Filter data setelah debounce selesai
  const filteredQuran = React.useMemo(() => {
    if (!debouncedSearch) return dataAlquran;
    const term = debouncedSearch.toLowerCase();
    return dataAlquran.filter(
      (q) =>
        q.namaLatin.toLowerCase().includes(term) ||
        q.arti.toLowerCase().includes(term) ||
        q.nomor.toString().includes(term)
    );
  }, [debouncedSearch, dataAlquran]);

  return (
    <div className="w-full flex flex-col my-10">
      <h1 className="lg:text-3xl text-lg font-semibold font-quicksand text-center">
        Cari Surat Al-Quran
      </h1>
      <p className="lg:text-base text-[12px] font-quicksand text-center text-gray-400">
        Cari berdasarkan nama surat, nomor, atau arti
      </p>

      {/* Search Input */}
      <div className="w-full flex items-center justify-center mb-10 mt-4">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cari Surat..."
            className="w-full pl-10 pr-4 py-2 font-quicksand rounded-md bg-gray-950 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          {/* Spinner kecil di kanan input */}
          {isSearching && (
            <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 animate-spin text-emerald-400" />
          )}
        </div>
      </div>

      {/* Loading Indicator */}
      {isSearching ? (
        <div className="flex justify-center items-center py-10 text-gray-400 font-quicksand">
          <Loader2 className="w-6 h-6 animate-spin mr-2 text-emerald-400" />
          <span>Mencari surat...</span>
        </div>
      ) : filteredQuran.length === 0 ? (
        <p className="text-center text-gray-500 font-quicksand">
          Surat tidak ditemukan 😔
        </p>
      ) : (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredQuran.map((quran, i) => (
            <Link
              key={i}
              href={`/al-quran/surah/${quran.nomor}`}
              className="w-full"
            >
              <CardQuran quran={quran} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListQuran;
