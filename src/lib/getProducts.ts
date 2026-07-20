import path from "node:path";
import fs from "node:fs";
import Papa from "papaparse";
import type { Product } from "./products";

function normalizeText(value: unknown): string {
  if (typeof value === "number" && Number.isFinite(value)) return String(value);
  return typeof value === "string" ? value.trim() : "";
}

function toNumber(value: unknown): number {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string") {
    const parsed = Number(value.replace(/,/g, "").trim());
    return Number.isFinite(parsed) ? parsed : 0;
  }
  return 0;
}

export async function getProducts(): Promise<Product[]> {
  const filePath = path.join(process.cwd(), "public", "sublims_product.csv");
  const csvData = fs.readFileSync(filePath, "utf-8");

  const { data } = Papa.parse<Record<string, unknown>>(csvData, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
  });

  return data.map((row, index) => {
    const code = normalizeText(row.PRODUK ?? row.kode_produk) || `Produk ${index + 1}`;
    const ukuran = normalizeText(row.UKURAN ?? row.ukuran) || "Ukuran menyesuaikan";
    const beratKg = toNumber(row.BERAT ?? row.berat_kg);

    return {
      id: index + 1,
      kode_produk: code,
      nama_produk: normalizeText(row.NAMA_PRODUK ?? row.nama_produk ?? row.PRODUK) || code,
      brand: normalizeText(row.BRAND ?? row.brand) || "SUBLIMS",
      ukuran,
      panjang_cm: 0,
      lebar_cm: 0,
      tinggi_cm: 0,
      kekuatan_statis_kg: toNumber(row.KEKUATAN_STATIS ?? row.kekuatan_statis_kg),
      kekuatan_dinamis_kg: toNumber(row.KEKUATAN_DINAMIS ?? row.kekuatan_dinamis_kg),
      kekuatan_racking_kg: toNumber(row.KEKUATAN_RACKING ?? row.kekuatan_racking_kg),
      akses_forklift: normalizeText(row.AKSES_FORKLIFT ?? row.akses_forklift) || "0",
      akses_hand_pallet: normalizeText(row.AKSES_HANDPALLET ?? row.akses_hand_pallet) || "0",
      akses_stacker: normalizeText(row.AKSES_STACKER ?? row.akses_stacker) || "0",
      warna: normalizeText(row.WARNA ?? row.warna) || "Standar",
      berat_kg: beratKg,
      material: normalizeText(row.MATERIAL ?? row.material) || "Material standar",
      image_fetch_url: normalizeText(row.image_fetch_url),
      image_dir_path: normalizeText(row.image_dir_path),
      tautan_img: normalizeText(row.TAUTAN_IMG ?? row.tautan_img),
    } satisfies Product;
  });
}

export async function getProductById(id: number): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find((p) => p.id === id);
}
