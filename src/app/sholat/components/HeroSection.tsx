"use client";
import { JadwalSholatType, Kota } from "@/types/SholatTypes";
import { MapPin } from "lucide-react";
import React, { useEffect, useState } from "react";
import Select from "react-select";

interface HeroSectionProps {
  kotas: Kota[];
}

const HeroSection = ({ kotas }: HeroSectionProps) => {
  const [formattedDate, setFormattedDate] = useState("");
  const [selectedKota, setSelectedKota] = useState<Kota | null>({
    id: "1415",
    lokasi: "KAB. KUDUS",
  });

  const [jadwalSholat, setJadwalSholat] = useState<JadwalSholatType>({});
  const [nextPrayer, setNextPrayer] = useState<{
    nama: string;
    waktu: Date;
  } | null>(null);
  const [countdown, setCountdown] = useState("00:00:00");

  const namaSholat = ["Subuh", "Dzuhur", "Ashar", "Maghrib", "Isya"];

  // 🔹 Format tanggal YYYY-MM-DD
  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    setFormattedDate(`${year}-${month}-${day}`);
  }, []);

  // 🔹 Ambil data jadwal sholat
  const jadwalSholatToday = async (idKota: string, date: string) => {
    try {
      const res = await fetch(
        `https://api.myquran.com/v2/sholat/jadwal/${idKota}/${date}`,
        { next: { revalidate: 3600 } }
      );
      const data = await res.json();
      setJadwalSholat(data.data.jadwal);
    } catch (error) {
      console.log(error);
    }
  };

  // 🔹 Fetch jadwal tiap kali kota berubah
  useEffect(() => {
    if (selectedKota && formattedDate) {
      jadwalSholatToday(selectedKota.id, formattedDate);
    }
  }, [selectedKota, formattedDate]);

  // 🔹 Convert waktu "HH:MM" ke objek Date
  const getDateForTime = React.useCallback((time: string) => {
    const [hour, minute] = time.split(":").map(Number);
    const date = new Date();
    date.setHours(hour, minute, 0, 0);
    return date;
  }, []);

  // 🔹 Cari waktu sholat berikutnya
  const getNextPrayer = React.useCallback(
    (jadwal: JadwalSholatType) => {
      const now = new Date();
      const urutan = ["subuh", "dzuhur", "ashar", "maghrib", "isya"];

      for (const nama of urutan) {
        if (!jadwal[nama]) continue;
        const waktu = getDateForTime(jadwal[nama]);
        if (waktu > now) {
          return { nama, waktu };
        }
      }

      // kalau semua sudah lewat, berarti subuh besok
      const besok = getDateForTime(jadwal.subuh || "04:00");
      besok.setDate(besok.getDate() + 1);
      return { nama: "subuh", waktu: besok };
    },
    [getDateForTime]
  );

  // 🔹 Hitung countdown
  const getCountdown = (target: Date) => {
    const now = new Date();
    const diff = target.getTime() - now.getTime();
    if (diff <= 0) return "00:00:00";

    const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, "0");
    const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(
      2,
      "0"
    );
    const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  // 🔹 Jalankan countdown tiap detik
  useEffect(() => {
    if (!jadwalSholat || !jadwalSholat.subuh) return;

    const next = getNextPrayer(jadwalSholat);
    setNextPrayer(next);

    const interval = setInterval(() => {
      setCountdown(getCountdown(next.waktu));
    }, 1000);

    return () => clearInterval(interval);
  }, [jadwalSholat, getNextPrayer]);

  // 🔹 Handle perubahan kota
  const handleChange = (option: Kota | null) => {
    setSelectedKota(option);
  };

  return (
    <section className="w-full py-8 px-4 flex flex-col min-h-[70vh] items-center justify-center font-quicksand">
      <h1 className="text-5xl mb-10 leading-[1.2] md:text-8xl lg:font-bold font-semibold font-quicksand text-center bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-600 bg-clip-text text-transparent">
        Sholat Adalah Tiangnya Agama
      </h1>

      {/* Kota selector */}
      <div className="w-full md:my-10 mb-4">
        <h2 className="text-2xl md:text-7xl text-center">
          Jadwal Sholat Hari Ini
        </h2>
        <div className="text-center md:text-2xl text-sm text-white mb-2">
          Cari Kota Anda
        </div>
        <div className="max-w-xs mx-auto mt-3">
          <Select<Kota, false>
            instanceId="kota-select"
            isSearchable
            placeholder="Pilih kota..."
            onChange={handleChange}
            options={kotas}
            getOptionLabel={(kota) => kota.lokasi}
            getOptionValue={(kota) => kota.id}
            value={selectedKota}
            className="w-full text-white"
            styles={{
              control: (base) => ({
                ...base,
                backgroundColor: "#1f2937",
                color: "#fff",
                borderColor: "#10b981",
                boxShadow: "none",
                "&:hover": { borderColor: "#10b981" },
              }),
              menu: (base) => ({
                ...base,
                backgroundColor: "#111827",
                color: "#fff",
              }),
              option: (base, state) => ({
                ...base,
                backgroundColor: state.isSelected
                  ? "#10b981"
                  : state.isFocused
                  ? "#374151"
                  : "#111827",
                color: "#fff",
                cursor: "pointer",
              }),
              singleValue: (base) => ({
                ...base,
                color: "#fff",
              }),
              placeholder: (base) => ({
                ...base,
                color: "#9ca3af",
              }),
              input: (base) => ({
                ...base,
                color: "#fff",
              }),
            }}
          />
        </div>
      </div>

      {/* Lokasi dan countdown */}
      <div className="flex items-center flex-wrap justify-center gap-2">
        <MapPin className="w-4 h-4 inline" />
        <span className="font-semibold">
          Lokasi:{" "}
          <span className="text-emerald-500">{selectedKota?.lokasi}</span>
        </span>

        {nextPrayer && (
          <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm">
            Menuju Sholat {nextPrayer.nama.toUpperCase()}: {countdown}
          </span>
        )}
      </div>

      {/* Jadwal sholat */}
      {jadwalSholat && (
        <div className="flex justify-around mt-6 gap-3 md:gap-10 flex-wrap">
          {namaSholat.map((s) => {
            const key = s.toLowerCase();
            return (
              <div key={s} className="flex flex-col items-center">
                <span className="text-xs md:text-3xl text-emerald-700 dark:text-emerald-200 font-semibold">
                  {s}
                </span>
                <span className="text-base font-bold md:text-2xl">
                  {jadwalSholat[key] || "--:--"}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default HeroSection;
