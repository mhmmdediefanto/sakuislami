"use client";

import React from "react";
import CardBacaanSholat from "./components/CardBacaanSholat";
import { BacaanSholatType } from "@/types/BacaanSholatTypes";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

interface PageClientProps {
  listBacaanSholatRelasi: BacaanSholatType[];
}

const PageCleint = ({ listBacaanSholatRelasi }: PageClientProps) => {
  const [bacaanDetail, setBacaanDetail] =
    React.useState<BacaanSholatType | null>(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const handleDetail = (bacaan: BacaanSholatType) => {
    setBacaanDetail(bacaan);
  };

  return (
    <>
      {/* Ensiklopedia Bacaan Sholat */}
      <section className="max-w-6xl mx-auto px-4 py-8 font-quicksand">
        <h4 className="font-bold text-lg mb-4">Ensiklopedia Bacaan Sholat</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {listBacaanSholatRelasi?.map((bacaan, i) => (
            <CardBacaanSholat
              key={i}
              setIsOpen={setIsOpen}
              bacaan={bacaan}
              handleDetail={handleDetail}
            />
          ))}
        </div>
      </section>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/50 overflow-y-scroll flex w-screen items-center justify-center p-4 font-quicksand">
          <DialogPanel className="max-w-4xl w-full space-y-4 bg-gray-900 p-6 border border-gray-800 md:rounded-2xl rounded-lg shadow-xl text-white  max-h-full sm:max-h-[90vh] overflow-y-auto">
            {/* Judul Bacaan */}
            <DialogTitle className="text-xl font-bold text-emerald-400 text-center">
              {bacaanDetail?.title}
            </DialogTitle>

            {/* Teks Arab */}
            {Array.isArray(bacaanDetail?.bacaanRelasi?.bacaan) ? (
              <div className="space-y-3 mt-4">
                {bacaanDetail?.bacaanRelasi?.bacaan.map((item, i) => (
                  <div key={i}>
                    <p className="text-primary font-semibold">{item.title}</p>
                    <p className="md:text-2xl text-end text-[14px] leading-relaxed font-arabic text-emerald-300">
                      {item.teks_arab}
                    </p>
                    <p className="md:text-sm text-[11px] italic text-gray-300">
                      {item.teks_latin}
                    </p>
                    <p className="md:text-sm text-[11px]  text-gray-300">
                      {item.artinya}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-3 text-center mt-4">
                <p className="md:text-2xl text-[14px] leading-relaxed font-arabic text-emerald-300">
                  {bacaanDetail?.bacaanRelasi?.bacaan?.teks_arab}
                </p>
                <p className="text-[11px] md:text-sm italic text-gray-300">
                  {bacaanDetail?.bacaanRelasi?.bacaan?.teks_latin}
                </p>
                <p className="text-[11px] md:text-sm text-gray-400">
                  {bacaanDetail?.bacaanRelasi?.bacaan?.artinya}
                </p>
              </div>
            )}

            {/* Tombol Tutup */}
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setIsOpen(false)}
                className="md:px-5 md:py-2 px-3 text-sm py-2 bg-emerald-600 hover:bg-emerald-700 rounded-lg font-medium transition"
              >
                Tutup
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default PageCleint;
