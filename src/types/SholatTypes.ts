export type Kota = {
  id: string;
  lokasi: string;
};

export type JadwalSholatType = {
  subuh?: string;
  dzuhur?: string;
  ashar?: string;
  maghrib?: string;
  isya?: string;
  [key: string]: string | undefined;
};

export type Sholat = {
  id: number;
  nama: string;
  kategory_id?: number;
  jumlah_rakaat?: number;
  waktu?: string;
  tata_cara_id?: number;
};
