import { Quran } from "@/types/QuranTypes";
import { BookOpenText, Loader2, Search, X } from "lucide-react";
import React from "react";
import NomerPage from "../../components/NomorPage";
import Link from "next/link";
import { useDebounce } from "@/hooks/useDebounce";

interface ListQuranProps {
  dataAlquran: Quran[];
  id: number;
  setModalListMobile: (value: boolean) => void;
}

const ListQuranMobile = ({
  dataAlquran,
  id,
  setModalListMobile,
}: ListQuranProps) => {
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
    <>
      <div className="fixed left-0 bottom-0 min-h-[60vh] w-full z-[100] bg-gray-950">
        <div className="border border-gray-800 font-quicksand p-3 mb-2 flex items-center justify-between">
          <h1 className="text-white text-[16px] flex items-center gap-2 w-full">
            {" "}
            <BookOpenText className="w-5 h-5 text-primary" />
            Pilih Surah
            <span className="text-gray-200 text-sm">(144)</span>
          </h1>
          <div
            onClick={() => setModalListMobile(false)}
            className="sm:hidden w-full flex justify-end cursor-pointer"
          >
            <X className="w-6 h-6 text-white bg-gray-900 rounded-lg p-1" />
          </div>
        </div>

        <div className="relative w-full max-w-md px-3 mb-4">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cari Surat..."
            className="w-full pl-10 pr-4 py-2 text-sm font-quicksand rounded-md bg-gray-950 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div className="w-full h-[55vh] overflow-y-scroll">
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
                <button
                  key={index}
                  className={`w-full p-3  font-quicksand rounded-lg text-left  transition-all duration-200 hover:shadow-md shadow-lg ${
                    item.nomor === id ? "border-primary border-l-4" : ""
                  }`}
                >
                  <Link
                    className="flex items-center justify-between"
                    href={`/al-quran/surah/${item.nomor}`}
                  >
                    <div className="flex items-center space-x-3 min-w-0 flex-1">
                      <NomerPage nomer={String(item.nomor)} />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-sm truncate font-arabic">
                            {item.namaLatin}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            ({item.nama})
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-xs text-muted-foreground truncate">
                            {item.arti}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            •
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {item.jumlahAyat} ayat
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground flex-shrink-0">
                      {item.tempatTurun}
                    </div>
                  </Link>
                </button>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListQuranMobile;
