import Image from "next/image";

const HeroSectionQuran = () => {
  return (
    <div
      className="relative w-full min-h-[65vh] flex items-center justify-center flex-col gap-4 
  bg-gradient-to-b from-emerald-950 via-emerald-900 to-[#0F172A] py-10 overflow-hidden rounded-lg"
    >
      {/* Gambar Background */}
      <Image
        src="/quran.png"
        alt="quran"
        fill
        className="object-contain opacity-10 pointer-events-none select-none"
      />

      {/* Teks di Atas */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-4 px-4">
        <h1
          className="text-4xl leading-[1.2] md:text-6xl lg:font-bold font-semibold font-quicksand text-center 
      bg-gradient-to-r from-emerald-200 via-teal-300 to-emerald-500 bg-clip-text text-transparent"
        >
          Jelajahi Keindahan Al-Quran
        </h1>
        <p className="text-base max-w-2xl mx-auto font-quicksand text-center text-slate-200 tracking-wide leading-relaxed">
          Temukan makna mendalam dan keindahan ayat-ayat suci Al-Quran dengan
          fitur interaktif kami yang memudahkan pembelajaran dan pemahaman.
        </p>
      </div>
    </div>
  );
};

export default HeroSectionQuran;
