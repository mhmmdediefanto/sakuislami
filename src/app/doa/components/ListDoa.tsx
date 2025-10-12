"use client";

import { Loader2, Search } from "lucide-react";
import React from "react";
import { CardDoa } from "./CardDoa";
import { Doa } from "@/types/DoaTypes";
import { useDebounce } from "@/hooks/useDebounce";

interface ListDoaProps {
  doas: Doa[];
}

const ListDoa = ({ doas }: ListDoaProps) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const isDebounced = useDebounce(searchTerm, 500);
  const isSearching = searchTerm !== isDebounced;

  const filteredDoa = React.useMemo(() => {
    if (!isDebounced) return doas;
    const term = isDebounced.toLowerCase();
    return doas.filter(
      (q) =>
        q.nama.toLowerCase().includes(term) ||
        q.grup.toLowerCase().includes(term) ||
        q.id.toString().includes(term)
    );
  }, [isDebounced, doas]);

  return (
    <>
      <div className="w-full flex items-center justify-center mb-10 mt-4">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cari Surat..."
            className="w-full pl-10 pr-4 py-2 font-quicksand rounded-md bg-gray-950 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          {/* Spinner kecil di kanan input */}
          {isSearching && (
            <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 animate-spin text-emerald-400" />
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-4 gap-4">
        {filteredDoa?.map((item, i) => (
          <CardDoa.Card key={i}>
            <CardDoa.CardHeader title={item.nama} grup={item.grup} />
            <CardDoa.CardContent tentang={item.tentang}>
              {item.tag?.map((tag: string, i: number) => (
                <CardDoa.CardContentTag key={i}>{tag}</CardDoa.CardContentTag>
              ))}
            </CardDoa.CardContent>
            <CardDoa.CardFooter id={String(item.id)} />
          </CardDoa.Card>
        ))}
      </div>
    </>
  );
};

export default ListDoa;
