import { Doa } from "@/types/DoaTypes";
import { BookOpenText, InfoIcon } from "lucide-react";
import React from "react";
import CardDetail from "./CardDetail";

interface DoaDetailProps {
  doa: Doa;
  doas: Doa[];
}

const DoaDetail = ({ doa, doas }: DoaDetailProps) => {
  const filterByGrup = (grup: string) => {
    const result = doas
      .filter((item) => item.grup === grup)
      .sort((a, b) => a.id - b.id);

    return result.length > 2 ? result.slice(0, 2) : result;
  };

 const result = filterByGrup(doa.grup);

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
              <CardDetail.CardDetailContent className="text-end font-arabic md:text-2xl leading-[2]">
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
    </>
  );
};

export default DoaDetail;
