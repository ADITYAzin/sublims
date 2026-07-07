"use client";

import { useState } from "react";
import type { Product } from "@/lib/products";
import ProductCard from "@/components/catalog/ProductCard";
import CartDrawer from "@/components/catalog/CartDrawer";
import QuoteForm from "@/components/catalog/QuoteForm";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Button from "@/components/ui/Button";

type CatalogClientProps = {
  products: Product[];
};

export default function CatalogClient({ products }: CatalogClientProps) {
  const [cartOpen, setCartOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-neutral-500">
          {products.length} produk tersedia
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCartOpen(true)}
          className="relative"
        >
          <ShoppingCart className="h-4 w-4" />
          Keranjang
          {totalItems > 0 && (
            <span className="ml-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-brand-200 text-xs font-bold text-white">
              {totalItems > 99 ? "99+" : totalItems}
            </span>
          )}
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        onRequestQuote={() => {
          setCartOpen(false);
          setQuoteOpen(true);
        }}
      />

      <QuoteForm
        open={quoteOpen}
        onClose={() => setQuoteOpen(false)}
      />
    </>
  );
}
