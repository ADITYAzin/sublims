export type Product = {
  id: number;
  kode_produk: string;
  nama_produk: string;
  brand: string;
  ukuran: string;
  panjang_cm: number;
  lebar_cm: number;
  tinggi_cm: number;
  kekuatan_statis_kg: number;
  kekuatan_dinamis_kg: number;
  kekuatan_racking_kg: number;
  akses_forklift: string;
  akses_hand_pallet: string;
  akses_stacker: string;
  warna: string;
  berat_kg: number;
  material: string;
  image_fetch_url: string;
  image_dir_path: string;
  tautan_img?: string;
};

export type RawProductRow = Product & {
  email_pic: string;
};
