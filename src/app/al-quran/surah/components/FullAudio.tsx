import Equalizer from "@/app/components/Equalizer";
import { DetailQuran } from "@/types/QuranTypes";
import {
  Pause, // Ganti Play dengan Pause saat dibutuhkan
  Play,
  RotateCcw,
  SkipBack,
  SkipForward,
  Volume2,
  X,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface audioProps {
  setModalAudio: (value: boolean) => void;
  detailAlquran: DetailQuran | undefined;
}

const FullAudio = ({ setModalAudio, detailAlquran }: audioProps) => {
  // --- Langkah 1: Siapkan State dan Referensi ---
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // useRef untuk mengakses elemen <audio> secara langsung
  const audioRef = useRef<HTMLAudioElement>(null);

  // --- Langkah 2: Pilih URL Audio dari Props ---
  const qariTarget = "Misyari-Rasyid-Al-Afasi";
  const audioUrl = detailAlquran?.audioFull
    ? Object.values(detailAlquran.audioFull).find((url) =>
        url.includes(qariTarget)
      )
    : undefined;

  // --- Langkah 3: Hubungkan State dengan Elemen Audio ---
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Fungsi untuk update durasi saat metadata audio termuat
    const setAudioData = () => {
      setDuration(audio.duration);
      setCurrentTime(audio.currentTime);
    };

    // Fungsi untuk update waktu saat audio berjalan
    const setAudioTime = () => setCurrentTime(audio.currentTime);

    // Tambahkan event listener
    audio.addEventListener("loadedmetadata", setAudioData);
    audio.addEventListener("timeupdate", setAudioTime);

    // Cleanup function: hapus event listener saat komponen unmount
    return () => {
      audio.removeEventListener("loadedmetadata", setAudioData);
      audio.removeEventListener("timeupdate", setAudioTime);
    };
  }, []);

  // --- Langkah 4: Buat Fungsi untuk Kontrol Audio ---
  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = Number(event.target.value);
    setCurrentTime(audio.currentTime);
  };

  // Helper function untuk format waktu dari detik ke MM:SS
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  const handleClosingAudio = () => {
    setModalAudio(false);
    setIsPlaying(false);
    audioRef.current?.pause();
  };

  return (
    <div className="w-full fixed bottom-0 left-0 z-[100] bg-neutral-950 border-t border-gray-700 p-5 shadow-lg">
      {/* Elemen <audio> yang akan memutar musik, disembunyikan */}
      <audio
        ref={audioRef}
        src={audioUrl}
        onEnded={() => setIsPlaying(false)}
      />

      <div
        className="mb-10 sm:hidden w-full flex justify-end cursor-pointer"
        onClick={() => {
          handleClosingAudio();
        }}
      >
        <X className="w-6 h-6 text-white bg-gray-900 rounded-lg p-1" />
      </div>

      <div className="flex items-center flex-wrap sm:justify-between sm:flex-nowrap">
        <div className="flex justify-center flex-col sm:flex-row md:justify-start w-full items-center gap-3 mb-10 md:mb-0">
          <div className="bg-gradient-to-br from-emerald-400 via-emerald-300 to-emerald-600 rounded-full p-2 flex items-center justify-center">
            {isPlaying ? (
              <Equalizer />
            ) : (
              <Volume2 className="w-4 h-4 text-white" />
            )}
          </div>
          <div className="flex flex-col justify-center items-center sm:items-start sm:justify-start">
            <h1 className="font-quicksand text-lg font-semibold">
              {detailAlquran?.namaLatin}
            </h1>
            <p className="font-quicksand text-[12px] text-gray-200">
              {qariTarget.replace(/-/g, " ")} {/* Menampilkan nama Qari */}
            </p>
          </div>
        </div>

        <div className="flex gap-5 w-full">
          <div className="flex flex-col items-center gap-5 w-full">
            <div className="flex gap-5 items-center">
              <SkipBack className="md:w-5 w-3 h-3 md:h-5 text-white cursor-pointer" />
              <RotateCcw className="md:w-5 w-3 h-3 md:h-5 text-white cursor-pointer" />
              <div
                className="bg-gradient-to-t from-emerald-400 via-emerald-500 to-emerald-600 rounded-lg p-3 cursor-pointer"
                onClick={togglePlayPause} // <- Hubungkan ke fungsi play/pause
              >
                {/* Ganti ikon berdasarkan state isPlaying */}
                {isPlaying ? (
                  <Pause className="md:w-5 w-3 h-3 md:h-5 text-white" />
                ) : (
                  <Play className="md:w-5 w-3 h-3 md:h-5 text-white" />
                )}
              </div>
              <SkipForward className="md:w-5 w-3 h-3 md:h-5 text-white cursor-pointer" />
              <Volume2 className="md:w-4 w-3 h-3 md:h-4 text-white" />
            </div>

            <div className="md:w-[400px] w-full font-quicksand flex items-center gap-2">
              <p className="text-[12px] ">{formatTime(currentTime)}</p>
              <input
                type="range"
                value={currentTime}
                max={duration || 0}
                onChange={handleSeek} // <- Hubungkan ke fungsi seek
                className="w-full accent-primary"
              />
              <p className="text-[12px] ">{formatTime(duration)}</p>
            </div>
          </div>

          <div
            className="hidden md:block cursor-pointer"
            onClick={() => {
              handleClosingAudio();
            }}
          >
            <X className="w-6 h-6 text-white bg-gray-900 rounded-lg p-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullAudio;
