"use client";
import { Loader2, Search } from "lucide-react";
import React from "react";
import ListQuran from "./ListQuran";
import { Quran } from "@/types/QuranTypes";
import Link from "next/link";
import { useDebounce } from "@/hooks/useDebounce";

interface ListQuranProps {
  dataAlquran: Quran[];
  id: number;
}

const SidebarDaftarList = ({ dataAlquran, id }: ListQuranProps) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const debounseSearch = useDebounce(searchTerm, 400);

  const isSearching = searchTerm !== debounseSearch;

  const filteredQuran = React.useMemo(() => {
    if (!debounseSearch) return dataAlquran;
    const term = debounseSearch.toLowerCase();
    return dataAlquran.filter(
      (q) =>
        q.namaLatin.toLowerCase().includes(term) ||
        q.arti.toLowerCase().includes(term) ||
        q.nomor.toString().includes(term)
    );
  }, [debounseSearch, dataAlquran]);

  return (
    <>
      <div className="w-full mx-auto px-4 py-6 font-quicksand border-b border-l border-white/10">
        <h1 className="text-lg font-bold text-white mb-3">Daftar Surah</h1>
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cari Surat..."
            className="w-full pl-10 pr-4 py-2 font-quicksand rounded-md bg-gray-950 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>
      <div className="w-full min-h-[73vh] overflow-y-scroll border-l border-white/10 pe-4 ps-2 py-6">
        <div className="grid grid-cols-1 gap-3">
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
            filteredQuran?.map((item, index) => (
              <Link
                key={index}
                href={`/al-quran/surah/${item.nomor}`}
                className={`w-full px-2 py-2 ${
                  item.nomor === id
                    ? "border-l-2 border-primary rounded-l-lg bg-primary/5"
                    : ""
                }`}
              >
                <ListQuran dataAlquran={item} />
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default SidebarDaftarList;
