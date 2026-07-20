"use client";

import { useMemo, useState } from "react";
import { ClipboardList, Search, ShoppingCart } from "lucide-react";
import { useTranslations } from "next-intl";
import type { Product } from "@/lib/products";
import ProductCard from "@/components/catalog/ProductCard";
import CartDrawer from "@/components/catalog/CartDrawer";
import QuoteForm from "@/components/catalog/QuoteForm";
import { useCart } from "@/context/CartContext";
import Button from "@/components/ui/Button";

type CatalogClientProps = {
  products: Product[];
};

export default function CatalogClient({ products }: CatalogClientProps) {
  const t = useTranslations("catalog");
  const [cartOpen, setCartOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { totalItems } = useCart();

  const filtered = useMemo(() => {
    if (!searchQuery.trim()) return products;
    const q = searchQuery.toLowerCase();
    return products.filter(
      (p) =>
        p.kode_produk.toLowerCase().includes(q) ||
        p.nama_produk.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.material.toLowerCase().includes(q),
    );
  }, [products, searchQuery]);

  return (
    <>
      <div className="mb-8 rounded-2xl border border-neutral-100/80 bg-white p-4 shadow-[0_4px_8px_rgba(36,73,80,0.04),0_12px_28px_rgba(36,73,80,0.06)] md:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative flex-1 lg:max-w-2xl">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("search_placeholder")}
              className="h-12 w-full rounded-xl border border-neutral-200 bg-neutral-50/70 pl-12 pr-4 text-sm font-medium text-neutral-800 outline-none transition-all duration-300 placeholder:text-neutral-400 focus:border-brand-300 focus:bg-white focus:ring-4 focus:ring-brand-100/60"
            />
          </div>
          <div className="flex items-center justify-between gap-4 rounded-xl bg-brand-50 px-4 py-3 text-sm font-semibold text-brand-700 lg:justify-center">
            <ClipboardList className="h-5 w-5" />
            <span>{t("products_count", { count: filtered.length, total: products.length })}</span>
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="flex min-h-[360px] flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-200 bg-neutral-50 text-center">
          <Search className="h-10 w-10 text-neutral-300" />
          <p className="mt-4 text-base font-semibold text-neutral-700">
            {t("not_found")}
          </p>
          <p className="mt-1 text-sm text-neutral-400">
            {t("not_found_hint")}
          </p>
          <Button
            variant="ghost"
            size="sm"
            className="mt-4 rounded-xl"
            onClick={() => setSearchQuery("")}
          >
            {t("clear_filter")}
          </Button>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {totalItems > 0 && (
        <button
          onClick={() => setCartOpen(true)}
          className="fixed bottom-6 right-6 z-30 inline-flex items-center gap-3 rounded-2xl bg-brand-700 px-5 py-4 text-sm font-bold text-white shadow-[0_18px_40px_rgba(36,73,80,0.26)] transition-all duration-300 hover:-translate-y-1 hover:bg-brand-800 active:scale-95"
          aria-label="Buka daftar permintaan"
        >
          <ShoppingCart className="h-5 w-5" />
          <span>RFQ</span>
          <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-white px-2 text-xs font-extrabold text-brand-700">
            {totalItems > 99 ? "99+" : totalItems}
          </span>
        </button>
      )}

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        onRequestQuote={() => {
          setCartOpen(false);
          setQuoteOpen(true);
        }}
      />

      <QuoteForm open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
}
