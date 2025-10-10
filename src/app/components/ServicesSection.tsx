import { Book, Bookmark } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Al Quran Digital",
      description:
        "Baca Al Quran lengkap dengan terjemahan per kata, tafsir Kemenag, dan dengarkan audio murottal dari qari favorit Anda.",
      icon: <Book className="w-6 h-6 lg:w-9 lg:h-9 text-primary" />,
    },
    {
      title: "Sholat Digital",
      description:
        "Panduan sholat lengkap dari takbir hingga salam, disertai jadwal sholat akurat dan notifikasi adzan.",
      icon: <Bookmark className="w-6 h-6 lg:w-9 lg:h-9 text-primary" />,
    },
    {
      title: "Doa Digital",
      description:
        "Temukan ratusan doa harian shahih, simpan doa favorit, dan aktifkan pengingat untuk membacanya di waktu mustajab.",
      icon: <Book className="w-6 h-6 lg:w-9 lg:h-9 text-primary" />,
    },
    {
      title: "Sholawat Digital",
      description:
        "Lantunkan beragam sholawat Nabi, pahami keutamaannya, dan raih keberkahan setiap hari dengan fitur pengingat dan tasbih digital.",
      icon: <Book className="w-6 h-6 lg:w-9 lg:h-9 text-primary" />,
    },
    {
      title: "Dakwah Digital",
      description:
        "Tambah wawasan keislaman Anda setiap hari melalui kumpulan artikel ringan, video tausiyah, dan podcast inspiratif dari sumber terpercaya.",
      icon: <Book className="w-6 h-6 lg:w-9 lg:h-9 text-primary" />,
    },
  ];
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex items-center justify-center my-5 flex-col gap-2">
        <h2 className="text-2xl font-bold font-quicksand text-white">
          Layanan Kami
        </h2>
        <p className="text-base max-w-2xl mx-auto font-quicksand text-center text-slate-300 tracking-wide leading-relaxed">
          Kami menyediakan berbagai layanan digital untuk membantu Anda dalam
          mempelajari dan memahami Al Quran, Sholat, Doa, Sholawat, dan Dakwah.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services?.map((service, i) => (
          <div
            key={i}
            className="bg-gray-950 rounded-lg border border-gray-800 p-4 flex flex-col gap-2"
          >
            {/* icons */}
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center rounded-full bg-gray-800 p-2">
                {service.icon}
              </div>
            </div>
            {/* title */}
            <div className="flex items-center justify-center">
              <h1 className="text-lg font-bold font-quicksand text-white">
                {service.title}
              </h1>
            </div>

            {/* description */}
            <div className="flex items-center justify-center">
              <p className="text-sm text-slate-500 tracking-wide leading-relaxed text-center font-quicksand">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
