import { ArrowRight } from "lucide-react";

const HeroSection = ({title, subtitle} : {title: string, subtitle: string}) => {
  return (
    <div className="w-full min-h-[75vh] flex items-center justify-center flex-col gap-4">
      <h1 className="text-5xl leading-[1.2] md:text-8xl lg:font-bold font-semibold font-quicksand text-center bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-600 bg-clip-text text-transparent">
        {title}
      </h1>
      <p className="text-base max-w-2xl mx-auto font-quicksand text-center text-slate-300 tracking-wide leading-relaxed">
        {subtitle}
      </p>
      <div className="flex items-center justify-center">
        <button className="bg-emerald-500 text-white px-4 py-2 md:text-lg text-sm rounded-md flex items-center gap-2 font-quicksand">
          Mulai Sekarang <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
