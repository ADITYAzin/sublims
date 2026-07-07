"use client";

import Button from "@/components/ui/Button";
import QuantityInput from "@/components/ui/QuantityInput";
import { formatPrice, type Product } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div className="flex flex-col rounded-lg border border-neutral-100 bg-white p-5 shadow-sm transition-all duration-200 ease-out hover:border-brand-100 hover:shadow-md">
      <div className="mb-4 aspect-square w-full rounded-lg bg-neutral-50" />

      <h3 className="text-lg font-semibold text-neutral-800">{product.name_id}</h3>
      <p className="mt-1 line-clamp-2 text-sm text-neutral-500">
        {product.description_id}
      </p>
      <p className="mt-2 text-xl font-bold text-brand-600">
        {formatPrice(product.price)}
      </p>

      <div className="mt-4 flex items-center gap-3">
        <QuantityInput value={qty} onChange={setQty} min={1} />
        <div className="flex-1" />
      </div>

      <Button
        onClick={handleAdd}
        variant={added ? "ghost" : "primary"}
        size="sm"
        className="mt-3 w-full"
      >
        <ShoppingCart className="h-4 w-4" />
        {added ? "Ditambahkan!" : "Tambah ke Keranjang"}
      </Button>
    </div>
  );
}
