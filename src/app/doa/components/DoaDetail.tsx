import { Doa } from "@/types/DoaTypes";
import { ArrowLeft, ArrowRight, BookOpenText, InfoIcon } from "lucide-react";
import React from "react";
import CardDetail from "./CardDetail";
import Link from "next/link";
import { truncate } from "@/hooks/truncate";

interface DoaDetailProps {
  doa: Doa;
  doas: Doa[];
}

const DoaDetail = ({ doa, doas }: DoaDetailProps) => {
  // const truncate = useTruncate;
  const filterByGrup = (grup: string) => {
    const result = doas
      .filter((item) => item.grup === grup)
      .sort((a, b) => a.id - b.id);

    return result.length > 2 ? result.slice(0, 4) : result;
  };
  const result = filterByGrup(doa.grup);

  const previousDoa = doas.find((item) => item.id === doa.id - 1) ?? doas[0];

  const nextDoa = doas.find((item) => item.id === doa.id + 1) ?? doas[0];

  return (
    <>
      <div className="w-full rounded-lg border-l-4 border-primary border-t-gray-400 border-b-gray-400 border-r-gray-400">
        <div className="flex justify-between items-center bg-primary/5 md:p-5 p-3">
          <div className="flex items-center gap-2">
            {/* icons */}
            <div className="rounded-full bg-primary md:p-3 p-2">
              <BookOpenText className="text-white lg:w-5 lg:h-5 h-3 w-3" />
            </div>
            {/* judul */}
            <div className="flex flex-col gap-3">
              <h1 className="font-semibold md:text-2xl text-[15px]">
                {doa.nama}
              </h1>
              <div className="flex items-center gap-1">
                <p className="rounded-full bg-gray-900 p-1 md:text-[13px] text-[10px] px-2 font-semibold">
                  {doa.grup}
                </p>
                {doa.tag.map((item, i) => (
                  <p
                    key={i}
                    className="rounded-full p-1 md:text-[11px] text-[8px] px-2 border-gray-600 border"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="md:mx-7 mx-4">
          <CardDetail.Card>
            <CardDetail.CardDetailTitle className="text-primary text-center">
              Teks Arab
            </CardDetail.CardDetailTitle>
            <CardDetail.CardContent className="bg-gray-900">
              <CardDetail.CardDetailContent className="text-end font-arabic md:text-4xl leading-[2]">
                {doa.ar}
              </CardDetail.CardDetailContent>
            </CardDetail.CardContent>
          </CardDetail.Card>
          <CardDetail.Card>
            <CardDetail.CardDetailTitle className="text-primary text-center">
              Literasi
            </CardDetail.CardDetailTitle>
            <CardDetail.CardContent className="bg-gray-900">
              <CardDetail.CardDetailContent className="text-start lg:text-lg">
                {doa.tr}
              </CardDetail.CardDetailContent>
            </CardDetail.CardContent>
          </CardDetail.Card>
          <CardDetail.Card>
            <CardDetail.CardDetailTitle className="text-primary text-center">
              Terjemahan
            </CardDetail.CardDetailTitle>
            <CardDetail.CardContent className="bg-primary/5 border border-primary">
              <CardDetail.CardDetailContent className="text-start italic lg:text-lg">
                {doa.idn}
              </CardDetail.CardDetailContent>
            </CardDetail.CardContent>
          </CardDetail.Card>
          <CardDetail.Card>
            <CardDetail.CardDetailTitle className="text-primary text-center">
              <InfoIcon className="md:w-5 md:h-5 w-3 h-3" /> Keterangan Dan
              Dalil
            </CardDetail.CardDetailTitle>
            <CardDetail.CardContent className="bg-primary/5 border border-primary">
              <CardDetail.CardDetailContent className="text-start lg:text-lg">
                {doa.idn}
              </CardDetail.CardDetailContent>
            </CardDetail.CardContent>
          </CardDetail.Card>
        </div>
      </div>

      <div className="flex justify-between items-center w-full flex-wrap gap-2">
        <Link
          href={`/doa/${previousDoa.id}`}
          className="flex items-center gap-1 border active:bg-primary/30 hover:bg-primary/40 border-gray-800 md:p-3 p-2 rounded-lg text-[12px] md:text-lg"
        >
          <ArrowLeft className="md:w-5 md:h-5 w-4 h-4" />
          <p>{truncate(previousDoa.nama, 13)}</p>
        </Link>
        <Link
          href={`/doa/${nextDoa.id}`}
          className="flex items-center gap-1 border active:bg-primary/30 hover:bg-primary/40 border-gray-800 md:p-3 p-2 rounded-lg text-[12px] md:text-lg"
        >
          <p>{truncate(nextDoa.nama, 13)}</p>
          <ArrowRight className="md:w-5 md:h-5 w-4 h-4" />
        </Link>
      </div>

      <div className="w-full flex my-5 flex-col">
        <h1 className="md:text-2xl text-center text-lg text-white font-semibold font-quicksand mb-10">
          {`Doa Lainnya Dalam Kategori "${doa.grup}"`}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {result.map((item, i) => (
            <div
              key={i}
              className="w-full p-3 border-gray-800 border rounded-lg flex items-center gap-3"
            >
              <div className="rounded-full bg-gray-900 md:p-3 p-2">
                <BookOpenText className="text-primary lg:w-5 lg:h-5 h-3 w-3" />
              </div>
              <div className="w-full flex flex-col">
                <Link
                  className="inline-block md:text-lg text-sm font-semibold hover:text-primary transition-all easy-in-out duration-300"
                  href={`/doa/${item.id}`}
                >
                  {item.nama}
                </Link>
                <p className="md:text-sm text-[12px]">
                  {truncate(item.idn, 50)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DoaDetail;
