"use client";

import Link from "next/link";
import SidebarDaftarList from "./SidebarDaftarList";
import { ArrowLeft, ListMusic } from "lucide-react";
import HeaderDetailQuran from "./HeaderDetailQuran";
import FullAudio from "./FullAudio";
import { DetailQuran, Quran } from "@/types/QuranTypes";
import React from "react";
import ListQuranMobile from "./ListQuranMobile";
import ListAyat from "./ListAyat";

interface DetailQuranProps {
  detailAlquran: DetailQuran | undefined;
  dataAlquran: Quran[];
  id: number;
}

const DetailClientQuran = ({
  detailAlquran,
  dataAlquran,
  id,
}: DetailQuranProps) => {
  const [modalAudio, setModalAudio] = React.useState(false);
  const [modalListMobile, setModalListMobile] = React.useState(false);

  React.useEffect(() => {
    setModalAudio(false);
  }, [id]);
  return (
    <>
      <div className="flex w-full max-w-7xl mx-auto h-screen overflow-hidden">
        {/* Sidebar */}
        <div className="hidden md:flex w-[350px] flex-col border-r border-white/10 bg-gray-950">
          <SidebarDaftarList dataAlquran={dataAlquran} id={Number(id)} />
        </div>

        {/* Konten Utama */}
        <div className="flex-1 p-6">
          <Link
            className="mb-4 flex items-center font-quicksand text-sm"
            href="/al-quran"
          >
            <ArrowLeft className="mr-2 w-5 h-5" /> Kembali Ke Daftar Al-Qur`an
          </Link>
          <HeaderDetailQuran
            detailAlquran={detailAlquran}
            id={Number(id)}
            modalAudio={modalAudio}
            setModalAudio={setModalAudio}
          />
          <div className="flex flex-col gap-5 items-center justify-center mt-3">
            {/* Nanti isi konten detail di sini */}
            <button
              onClick={() => setModalListMobile(!modalListMobile)}
              className="border sm:hidden border-primary text-primary text-[12px] w-full justify-center font-quicksand py-2 px-3 rounded-lg flex items-center gap-2 hover:bg-primary hover:text-white cursor-pointer transition-all ease-in-out duration-300"
            >
              <ListMusic className="w-5 h-5" /> Buka Surat Lain
            </button>
            <div className="h-[60vh] w-full overflow-y-auto">
              <div className="grid grid-cols-1 gap-4">
                {detailAlquran?.ayat?.map((item, i) => {
                  return <ListAyat ayat={item} key={i} />;
                })}
              </div>
            </div>
            {/* Simulasi konten panjang */}
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-200 ease-in-out transform ${
          modalListMobile
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0 pointer-events-none"
        } fixed bottom-0 left-0 w-full z-50`}
      >
        <ListQuranMobile
          dataAlquran={dataAlquran}
          id={Number(id)}
          setModalListMobile={setModalListMobile}
        />
      </div>

      <div
        className={`transition-all duration-500 ease-in-out transform ${
          modalAudio
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0 pointer-events-none"
        } fixed bottom-0 left-0 w-full z-50`}
      >
        <FullAudio
          setModalAudio={setModalAudio}
          detailAlquran={detailAlquran}
        />
      </div>
    </>
  );
};

export default DetailClientQuran;
