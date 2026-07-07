export type Product = {
  id: number;
  name_id: string;
  name_en: string;
  description_id: string;
  description_en: string;
  price: number;
  image: string;
};

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
