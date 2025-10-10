"use client";

import { DetailQuran } from "@/types/QuranTypes";
import NomerPage from "../../components/NomorPage";
import { File, MapPin, Play } from "lucide-react";

interface DetailQuranProps {
  detailAlquran: DetailQuran | undefined;
  id: number;
  setModalAudio: (value: boolean) => void;
  modalAudio: boolean;
}

const HeaderDetailQuran = ({
  detailAlquran,
  id,
  modalAudio,
  setModalAudio,
}: DetailQuranProps) => {
  return (
    <>
      <div className="w-full rounded-lg bg-primary/5 md:p-9 p-4 border-l-4 border-primary">
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <NomerPage nomer={String(id)} />
              <div className="font-quicksand">
                <h1 className="md:text-4xl text-lg font-semibold ">
                  {detailAlquran?.namaLatin}
                </h1>
                <p className="md:text-sm text-[10px] text-gray-300 mt-1 ">
                  {detailAlquran?.arti}
                </p>
              </div>
            </div>
            <h1 className="md:text-4xl text-lg font-semibold text-primary">
              {detailAlquran?.nama}
            </h1>
          </div>
          <div className="flex flex-wrap gap-3 font-quicksand">
            <div className="flex items-center gap-2">
              <p className="lg:text-[12px] text-[7px] text-white rounded-full bg-gray-800 px-2 py-1 flex items-center gap-1">
                <MapPin className="lg:w-4 lg:h-4 h-3 w-3" />{" "}
                {detailAlquran?.tempatTurun}
              </p>
              <p className="lg:text-[12px] text-[7px] text-white rounded-full border border-gray-800 px-2 py-1 flex items-center gap-1">
                <File className="lg:w-4 lg:h-4 h-3 w-3" />
                {detailAlquran?.jumlahAyat} Ayat
              </p>
              <div
                onClick={() => setModalAudio(!modalAudio)}
                className="cursor-pointer bg-primary/30 text-primary lg:text-sm text-[8px] md:px-3 md:py-2 px-2 py-1 rounded-lg flex items-center md:gap-3 border border-primary"
              >
                <Play className="md:w-4 md:h-4 w-3 h-3 me-1" />
                <div>
                  <span className="hidden md:inline">Putar Full</span> Audio
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderDetailQuran;
