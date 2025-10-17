import { Metadata } from "next";
import HeroSectionQuran from "./components/HeroSectionQuran";
import ListQuran from "./components/ListQuran";

const metadata: Metadata = {
  title: "Al-Quran Digital | Saku Islami Digital Indonesia",
  description:
    "Saku Islami Digital Indonesia adalah platform yang membantu Anda untuk mempelajari dan memahami Al Quran dengan cara yang lebih efektif dan efisien.",
};

export function generateMetadata() {
  return metadata;
}

const fetchAlquran = async () => {
  const res = await fetch("https://equran.id/api/v2/surat", {
    next: { revalidate: 3600 }, // Contoh: cache data selama 1 jam
  });
  const data = await res.json();
  return data.data;
};

const pageAlQuran = async () => {
  const dataAlquran = await fetchAlquran();
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <HeroSectionQuran />
      <ListQuran dataAlquran={dataAlquran} />
    </div>
  );
};

export default pageAlQuran;
