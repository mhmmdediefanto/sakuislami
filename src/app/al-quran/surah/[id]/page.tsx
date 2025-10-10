import DetailClientQuran from "../components/DetailClientQuran";

const fetchDetailAlquran = async (id: string) => {
  const res = await fetch(`https://equran.id/api/v2/surat/${id}`, {
    next: { revalidate: 3600 }, // Contoh: cache data selama 1 jam
  });
  const data = await res.json();
  return data.data;
};
const fetchAlquran = async () => {
  const res = await fetch("https://equran.id/api/v2/surat", {
    next: { revalidate: 3600 }, // Contoh: cache data selama 1 jam
  });
  const data = await res.json();
  return data.data;
};

export default async function SurahDetailPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const detailAlquran = await fetchDetailAlquran(id);

  const dataAlquran = await fetchAlquran();
  return (
    <>
      <DetailClientQuran
        dataAlquran={dataAlquran}
        id={Number(id)}
        detailAlquran={detailAlquran}
      />
    </>
  );
}
