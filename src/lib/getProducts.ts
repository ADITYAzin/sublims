import path from "node:path";
import fs from "node:fs";
import Papa from "papaparse";
import type { Product } from "./products";

export async function getProducts(): Promise<Product[]> {
  const filePath = path.join(process.cwd(), "public", "products.csv");
  const csvData = fs.readFileSync(filePath, "utf-8");

  const { data } = Papa.parse<Product>(csvData, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
  });

  return data;
}

export async function getProductById(id: number): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find((p) => p.id === id);
}
