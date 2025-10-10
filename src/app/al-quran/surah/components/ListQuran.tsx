"use client";
import { Quran } from "@/types/QuranTypes";

interface ListQuranProps {
  dataAlquran: Quran;
}

const ListQuran = ({ dataAlquran }: ListQuranProps) => {
  return (
    <>
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center space-x-2 lg:space-x-3 flex-1 min-w-0 font-quicksand">
          <div className="relative flex-shrink-0">
            <div className="w-8 h-8 relative flex items-center justify-center">
              <div className="absolute inset-0 border-2 rounded-full opacity-80 border-amber-500"></div>
              <div className="absolute inset-1 border rounded-full opacity-60 border-amber-400"></div>
              <span className="font-semibold text-xs z-10 text-amber-600">
                {dataAlquran.nomor}
              </span>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-0.5 rounded-full opacity-60 bg-amber-500"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-0.5 rounded-full opacity-60 bg-amber-500"></div>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0.5 h-0.5 rounded-full opacity-60 bg-amber-500"></div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0.5 h-0.5 rounded-full opacity-60 bg-amber-500"></div>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-xs lg:text-sm mb-1 transition-colors line-clamp-1">
              {dataAlquran.namaLatin}
            </h3>
            <p className="text-xs text-muted-foreground font-light line-clamp-1">
              {dataAlquran.arti}
            </p>
            <div className="flex items-center gap-1 mt-1">
              <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs px-1 py-0 h-3 lg:h-4 border-border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-map-pin h-1 w-1 lg:h-2 lg:w-2 mr-1"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="truncate max-w-12 lg:max-w-none">
                  {dataAlquran.tempatTurun}
                </span>
              </div>
              <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs px-1 py-0 h-3 lg:h-4 border-border text-muted-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-file-text h-1 w-1 lg:h-2 lg:w-2 mr-1"
                >
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <path d="M10 9H8"></path>
                  <path d="M16 13H8"></path>
                  <path d="M16 17H8"></path>
                </svg>
                {dataAlquran.jumlahAyat}
              </div>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 ml-2 lg:ml-3">
          <p className="text-sm lg:text-lg font-arabic text-primary leading-relaxed">
            {dataAlquran.nama}
          </p>
        </div>
      </div>
    </>
  );
};

export default ListQuran;
