import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-4 my-10">
        <HeroSection subtitle="Saku Islami Digital Indonesia adalah platform yang membantu Anda untuk
        mempelajari dan memahami Al Quran dengan cara yang lebih efektif dan
        efisien." title="Kebaikan Islam dalam Genggaman Anda"/>
        <ServicesSection />
      </div>
    </>
  );
}
