"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, MessageSquare, Plus, Ruler, Truck } from "lucide-react";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/lib/products";
import QuoteForm from "./QuoteForm";


type ProductCardProps = {
  product: Product;
};

function formatSize(size: string) {
  return size.replace(/\s*[Cc]m\s*/, " cm").replace(/\s+/g, " ").trim();
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

  function handleAdd(e?: React.MouseEvent<HTMLButtonElement>) {
    e?.stopPropagation();
    addItem(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }


  return (
    <>
      <article
        className="group relative flex min-h-[450px] flex-col overflow-hidden rounded-[24px] border border-neutral-100/80 bg-white shadow-[0_4px_8px_rgba(36,73,80,0.04),0_12px_28px_rgba(36,73,80,0.06)] outline-none transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200/70 hover:shadow-[0_18px_44px_rgba(36,73,80,0.12)]"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-[linear-gradient(135deg,#f2f7f8_0%,#ffffff_45%,#e0edef_100%)]">
          <Image
            src={product.tautan_img || "/images/placeholder.png"}
            alt={product.nama_produk}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              {product.brand && product.brand.toUpperCase() !== "SUBLIMS" && (
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-600">{product.brand}</p>
              )}
              <h3 className="mt-2 text-lg font-bold leading-snug text-neutral-900">
                {product.nama_produk}
              </h3>
            </div>

          </div>

          <div className="mt-5 rounded-2xl border border-brand-100/60 bg-gradient-to-br from-brand-50/80 to-white p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-400">Spesifikasi utama</p>
              <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-brand-700 shadow-[0_4px_10px_rgba(36,73,80,0.06)]">
                {product.material}
              </span>
            </div>
            <div className="mt-3 space-y-2 text-sm text-neutral-600">
              <div className="flex items-center justify-between rounded-xl bg-white/80 px-3 py-2.5">
                <div className="flex items-center gap-2">
                  <Ruler className="h-4 w-4 shrink-0 text-brand-600" />
                  <span className="font-semibold text-neutral-800">Ukuran</span>
                </div>
                <span className="text-right font-semibold text-neutral-700">{formatSize(product.ukuran)}</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-white/80 px-3 py-2.5">
                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4 shrink-0 text-brand-600" />
                  <span className="font-semibold text-neutral-800">Berat</span>
                </div>
                <span className="font-semibold text-neutral-700">{product.berat_kg} kg</span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-neutral-600">
              Forklift <span className="ml-1 font-extrabold text-brand-700">{product.akses_forklift}</span>
            </span>
            <span className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-neutral-600">
              Hand Pallet <span className="ml-1 font-extrabold text-brand-700">{product.akses_hand_pallet}</span>
            </span>
            <span className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-neutral-600">
              Stacker <span className="ml-1 font-extrabold text-brand-700">{product.akses_stacker}</span>
            </span>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs">
            <div className="rounded-xl border border-neutral-100 bg-white px-2 py-3 shadow-[0_4px_10px_rgba(36,73,80,0.04)]">
              <span className="block text-sm font-extrabold text-neutral-900">{product.kekuatan_statis_kg.toLocaleString("id")}</span>
              <span className="mt-1 block font-medium text-neutral-400">Statis</span>
            </div>
            <div className="rounded-xl border border-neutral-100 bg-white px-2 py-3 shadow-[0_4px_10px_rgba(36,73,80,0.04)]">
              <span className="block text-sm font-extrabold text-neutral-900">{product.kekuatan_dinamis_kg.toLocaleString("id")}</span>
              <span className="mt-1 block font-medium text-neutral-400">Dinamis</span>
            </div>
            <div className="rounded-xl border border-neutral-100 bg-white px-2 py-3 shadow-[0_4px_10px_rgba(36,73,80,0.04)]">
              <span className="block text-sm font-extrabold text-neutral-900">{product.kekuatan_racking_kg.toLocaleString("id")}</span>
              <span className="mt-1 block font-medium text-neutral-400">Racking</span>
            </div>
          </div>

          <div className="mt-auto flex items-center gap-2 pt-5">
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setQuoteOpen(true); }}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-3.5 text-sm font-bold text-white shadow-[0_12px_28px_rgba(74,125,134,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-brand-700"
            >
              <MessageSquare className="h-4 w-4" />
              Minta Penawaran
            </button>
            <button
              type="button"
              onClick={handleAdd}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-white text-brand-700 shadow-[0_8px_18px_rgba(36,73,80,0.08)] transition-all duration-300 hover:border-brand-300 hover:bg-brand-50 active:scale-95"
              aria-label="Tambah ke keranjang"
            >
              {added ? <Check className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </article>

      <QuoteForm open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
}
