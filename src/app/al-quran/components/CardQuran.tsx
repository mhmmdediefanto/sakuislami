import { Quran } from "@/types/QuranTypes";
import { File, MapPin } from "lucide-react";

interface CardQuranProps {
  quran: Quran;
}

const CardQuran = ({ quran }: CardQuranProps) => {
  return (
    <>
      <div className="w-full p-4 border border-gray-700 rounded-lg hover:shadow-lg transition-shadow cursor-pointer hover:bg-gray-800 bg-gray-950">
        <div className="flex items-center gap-4">
          {/* /* Nomor Surat */}
          <div className="relative flex-shrink-0">
            <div className="lg:w-10 lg:h-10 w-8 h-8 sm:w-12 sm:h-12 relative flex items-center justify-center">
              <div className="absolute inset-0 border-2 rounded-full opacity-80 border-amber-500"></div>
              <div className="absolute inset-1 border rounded-full opacity-60 border-amber-400"></div>
              <span className="font-semibold text-sm sm:text-base z-10 text-amber-600">
                {quran.nomor}
              </span>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-0.5 rounded-full opacity-60 bg-amber-500"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-0.5 rounded-full opacity-60 bg-amber-500"></div>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0.5 h-0.5 rounded-full opacity-60 bg-amber-500"></div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0.5 h-0.5 rounded-full opacity-60 bg-amber-500"></div>
            </div>
          </div>

          <div className="flex flex-col flex-wrap gap-2 font-quicksand">
            {/* Nama Surat */}
            <div className="flex flex-wrap items-center gap-2">
              <p className="lg:text-lg text-xs font-semibold text-white">{quran.namaLatin}</p>
              <p className="text-[11px] lg:text-[12px] text-gray-400">({quran.arti})</p>
            </div>
            {/* turun surat dan total ayat */}
            <div className="flex items-center gap-2">
              <p className="lg:text-[12px] text-[10px] text-white rounded-full bg-gray-800 px-2 py-1 flex items-center gap-1">
                <MapPin className="lg:w-4 lg:h-4 h-3 w-3" /> {quran.tempatTurun}
              </p>
              <p className="lg:text-[12px] text-[8px] text-white rounded-full border border-gray-800 px-2 py-1 flex items-center gap-1">
                <File className="lg:w-4 lg:h-4 h-3 w-3" />
                {quran.jumlahAyat} Ayat
              </p>
            </div>
          </div>
          {/* judul surat arab */}
          <div className="text-lg sm:text-2xl font-arabic text-primary ml-auto">
            {quran.nama}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardQuran;
