import React from "react";
import sholat from "@/datas/sholat.json";
import DetailSholat from "./components/DetailSholat";

const page = async ({
  params,
}: {
  params: Promise<{ id: string }> | { id: string };
}) => {
  const { id } = (await params) as { id: string };

  const tataCaraSholat = sholat.tata_cara.find(
    (item) => item.sholat_id === Number(id)
  );

  const sholatInfo = sholat.sholat.find((s) => s.id === Number(id));

  return <DetailSholat tataCara={tataCaraSholat} sholatInfo={sholatInfo} />;
};

export default page;
