"use client";
import { truncate } from "@/hooks/truncate";
import { BacaanSholatType } from "@/types/BacaanSholatTypes";
import { BookOpenText } from "lucide-react";
import React from "react";

interface CardBacaanSholatProps {
  bacaan: BacaanSholatType;
  handleDetail: (bacaan: BacaanSholatType) => void;
  setIsOpen: (value: boolean) => void;
}

const CardBacaanSholat = ({
  bacaan,
  handleDetail,
  setIsOpen,
}: CardBacaanSholatProps) => {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-4 flex flex-col gap-2 border-l-4 border-emerald-400">
      <span className="font-bold text-emerald-500">{bacaan.title}</span>
      <div className="text-sm text-gray-700 dark:text-gray-300 text-end font-noto">
        {Array.isArray(bacaan.bacaanRelasi?.bacaan)
          ? bacaan.bacaanRelasi?.bacaan
              .map((item) => truncate(item.teks_arab, 8))
              .join(", ")
          : truncate(bacaan.bacaanRelasi?.bacaan?.teks_arab ?? "", 90)}
      </div>
      <button
        onClick={() => {
          handleDetail(bacaan);
          setIsOpen(true);
        }}
        className="mt-2 px-2 py-1 flex items-center justify-center gap-1 bg-emerald-500 text-white rounded text-xs"
      >
        <BookOpenText className="w-4 h-4" /> Baca Lengkapnya
      </button>
    </div>
  );
};

export default CardBacaanSholat;
