import { Ayat } from "@/types/QuranTypes";
import NomerPage from "../../components/NomorPage";

interface ListAyatProps {
  ayat: Ayat;
}

const ListAyat = ({ ayat }: ListAyatProps) => {
  return (
    <>
      <div className="rounded-lg border-gray-800 border bg-card text-card-foreground shadow-sm transition-all duration-300 border-l-4 relative hover:shadow-md">
        <div className="p-4 sm:p-6 font-quicksa">
          <NomerPage nomer={String(ayat.nomorAyat)} />
          <div className="mb-1">
            <p className="text-lg sm:text-xl md:text-2xl to-white leading-[1.5] sm:leading-[2] md:leading-[3] text-right font-noto break-words">
              {ayat.teksArab}
            </p>
          </div>
          <div className="mb-1">
            <p className="text-[12px] sm:text-base leading-relaxed text-muted-foreground font-medium italic break-words font-quicksand">
              {ayat.teksLatin}
            </p>
          </div>
          <div>
            <p className="text-[12px] sm:text-base leading-relaxed break-words font-quicksand">
             Artinya : {ayat.teksIndonesia}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListAyat;
