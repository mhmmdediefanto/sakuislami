export type BacaanSholatType = {
  id: number;
  title: string;
  bacaanRelasi?: BacaanType ;
};

export type BacaanType = {
  id: number;
  list_bacaan_id: number;
  title: string;
  bacaan: Bacaan[] | Bacaan;
};

export type Bacaan = {
  title: string;
  teks_arab: string;
  teks_latin: string;
  artinya: string;
}