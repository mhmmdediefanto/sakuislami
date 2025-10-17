import React from "react";
import HeroSection from "../components/HeroSection";
import ListDoa from "./components/ListDoa";
import { Metadata } from "next";
import { generateSeoMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/constants/seo";

const fetchDoa = async () => {
  const res = await fetch("https://equran.id/api/doa", {
    next: { revalidate: 3600 }, // Contoh: cache data selama 1 jam
  });
  const data = await res.json();
  return data.data;
};

export const metadata: Metadata = generateSeoMetadata({
  title: `Doa - Harian | ${SITE_NAME}`,
  description:
    "Kumpulan doa-doa harian dalam Islam lengkap dengan teks Arab, transliterasi, dan terjemahan bahasa Indonesia",
  url: SITE_URL,
});

const page = async () => {
  const doa = await fetchDoa();
  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-4">
        <HeroSection
          title="Doa adalah bahasa hati antara hamba dan Tuhannya."
          subtitle="Temukan doa-doa harian yang menenangkan jiwa, membimbing langkah,
dan mengingatkan kita bahwa setiap detik adalah kesempatan untuk mendekat kepada Allah SWT."
        />
        <div className=" text-center font-quicksand mb-10 my-10">
          <h1 className=" inline-block font-semibold border-b-2 border-dotted text-lg border-primary md:text-2xl">
            Kumpulan Doa-Doa Harian
          </h1>
          <p className="lg:text-sm text-[12px] text-slate-400">
            Kumpulan doa-doa harian dalam Islam lengkap dengan teks Arab,
            transliterasi, dan terjemahan bahasa Indonesia
          </p>
        </div>

        <ListDoa doas={doa} />
      </div>
    </>
  );
};

export default page;
