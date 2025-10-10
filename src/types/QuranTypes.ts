export type Quran = {
  nomor: number;
  nama: string;
  namaLatin: string;
  deskripsi: string;
  jumlahAyat: number;
  tempatTurun: string;
  audioFull: object;
  arti: string;
};

export type Ayat = {
  audio: object;
  nomorAyat: number;
  teksArab: string;
  teksIndonesia: string;
  teksLatin: string;
};

export type DetailQuran = {
  arti: string;
  audioFull: object;
  ayat: Ayat[];
  deskripsi: string;
  jumlahAyat: number;
  nama: string;
  namaLatin: string;
  nomor: number;
  tempatTurun: string;
  suratSebelum: object;
  suratSelanjutnya: object;
};
