"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Download, MessageSquare, Ruler, Truck, X } from "lucide-react";
import type { Product } from "@/lib/products";

type Props = {
  product: Product;
  onClose: () => void;
};

function SpecItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-neutral-100 bg-white p-4 shadow-[0_4px_10px_rgba(36,73,80,0.04)]">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-400">{label}</p>
      <p className="mt-2 font-bold text-neutral-900">{value}</p>
    </div>
  );
}

export default function ProductModal({ product, onClose }: Props) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const whatsappText = encodeURIComponent(
    `Halo Sales SUBLIMS, kami membutuhkan penawaran harga grosir untuk model ${product.kode_produk}.`,
  );
  const waLink = `https://wa.me/?text=${whatsappText}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Tutup detail produk"
        className="absolute inset-0 bg-brand-900/55 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-10 grid max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-[0_28px_70px_rgba(18,36,40,0.24)] md:grid-cols-[0.92fr_1.08fr]">
        <div className="relative min-h-[320px] overflow-hidden bg-[linear-gradient(135deg,#122428_0%,#37636b_100%)] p-6 text-white md:min-h-[620px]">
          <Image
            src={product.tautan_img || "/images/placeholder.png"}
            alt={product.nama_produk}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain"
          />
          <div className="relative z-10 mt-48 rounded-2xl border border-white/20 bg-white/90 p-5 text-neutral-900 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-md md:mt-80">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-700">SUBLIMS</p>
            <p className="mt-2 text-2xl font-extrabold leading-tight">{product.kode_produk}</p>
            <p className="mt-2 text-sm font-medium leading-relaxed text-neutral-600">{product.nama_produk}</p>
          </div>
        </div>

        <div className="flex max-h-[92vh] flex-col overflow-y-auto p-6 md:p-8">
          <div className="flex items-start justify-between gap-5">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-600">Detail spesifikasi</p>
              <h2 className="mt-3 text-2xl font-extrabold leading-tight text-neutral-900 md:text-3xl">
                {product.nama_produk}
              </h2>
              <p className="mt-2 text-sm font-medium text-neutral-500">{product.kode_produk} / {product.brand}</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup"
              className="rounded-xl border border-neutral-200 bg-white p-2.5 text-neutral-500 transition-all duration-300 hover:bg-neutral-50 hover:text-neutral-900"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <SpecItem label="Ukuran" value={product.ukuran} />
            <SpecItem label="Material" value={product.material} />
            <SpecItem label="Berat" value={`${product.berat_kg} kg`} />
            <SpecItem label="Warna" value={product.warna} />
          </div>

          <div className="mt-8 rounded-2xl bg-brand-50 p-5">
            <div className="flex items-center gap-3">
              <Ruler className="h-5 w-5 text-brand-700" />
              <h3 className="text-lg font-bold text-neutral-900">Kapasitas Beban</h3>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center text-sm">
              <div className="rounded-xl bg-white p-4">
                <p className="text-lg font-extrabold text-neutral-900">{product.kekuatan_statis_kg.toLocaleString("id")}</p>
                <p className="mt-1 text-xs font-semibold text-neutral-400">Statis</p>
              </div>
              <div className="rounded-xl bg-white p-4">
                <p className="text-lg font-extrabold text-neutral-900">{product.kekuatan_dinamis_kg.toLocaleString("id")}</p>
                <p className="mt-1 text-xs font-semibold text-neutral-400">Dinamis</p>
              </div>
              <div className="rounded-xl bg-white p-4">
                <p className="text-lg font-extrabold text-neutral-900">{product.kekuatan_racking_kg.toLocaleString("id")}</p>
                <p className="mt-1 text-xs font-semibold text-neutral-400">Racking</p>
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-neutral-100 bg-white p-5 shadow-[0_4px_12px_rgba(36,73,80,0.05)]">
            <div className="flex items-center gap-3">
              <Truck className="h-5 w-5 text-brand-700" />
              <h3 className="text-lg font-bold text-neutral-900">Akses Operasional</h3>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <SpecItem label="Forklift" value={product.akses_forklift} />
              <SpecItem label="Hand Pallet" value={product.akses_hand_pallet} />
              <SpecItem label="Stacker" value={product.akses_stacker} />
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-3.5 text-sm font-bold text-white shadow-[0_12px_28px_rgba(74,125,134,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-brand-700"
            >
              <MessageSquare className="h-4 w-4" />
              Minta Penawaran Harga
            </a>
            <a
              href={`/products/${product.kode_produk}.pdf`}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white px-5 py-3.5 text-sm font-bold text-neutral-700 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700"
            >
              <Download className="h-4 w-4" />
              Unduh Datasheet
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
