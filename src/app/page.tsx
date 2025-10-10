import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-4 my-10">
        <HeroSection />
        <ServicesSection />
      </div>
    </>
  );
}
