import HeroSectionQuran from "./components/HeroSectionQuran";
import ListQuran from "./components/ListQuran";

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
