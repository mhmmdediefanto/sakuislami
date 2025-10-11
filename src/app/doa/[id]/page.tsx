import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import DoaDetail from "../components/DoaDetail";

const fetchDetailDoa = async (id: string) => {
  const res = await fetch(`https://equran.id/api/doa/${id}`, {
    next: { revalidate: 3600 }, // Contoh: cache data selama 1 jam
  });
  const data = await res.json();
  return data.data;
};

const fetchDoa = async () => {
  const res = await fetch("https://equran.id/api/doa", {
    next: { revalidate: 3600 }, // Contoh: cache data selama 1 jam
  });
  const data = await res.json();

  return data.data;
};

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const doa = await fetchDetailDoa(id);
  const doas = await fetchDoa();
  return (
    <>
      <div className="w-full max-w-7xl mx-auto font-quicksand px-4 my-5">
        <Link href="/doa" className="flex items-center gap-1 mb-5">
          {" "}
          <ArrowLeft className="w-5 h-5" /> Kembali Ke Daftar Doa
        </Link>
        <DoaDetail doa={doa}  doas={doas}/>
      </div>
    </>
  );
};

export default page;
