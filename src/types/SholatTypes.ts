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
