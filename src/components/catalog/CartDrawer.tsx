"use client";

import { X, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import QuantityInput from "@/components/ui/QuantityInput";
import Button from "@/components/ui/Button";
import { useEffect, useRef } from "react";

type CartDrawerProps = {
  open: boolean;
  onClose: () => void;
  onRequestQuote: () => void;
};

export default function CartDrawer({
  open,
  onClose,
  onRequestQuote,
}: CartDrawerProps) {
  const { items, updateQuantity, removeItem, totalItems } = useCart();
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  return (
    <>
      {open && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-white shadow-xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-neutral-100 px-6 py-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-brand-200" />
            <h2 className="text-lg font-semibold text-neutral-800">
              Daftar Permintaan ({totalItems})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600"
            aria-label="Tutup"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="mt-20 text-center text-neutral-400">
              <ShoppingBag className="mx-auto h-12 w-12 opacity-30" />
              <p className="mt-3 text-sm">Daftar permintaan masih kosong</p>
              <p className="mt-1 text-xs text-neutral-300">
                Klik &quot;Minta Penawaran&quot; pada produk yang Anda minati
              </p>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={item.product.id}
                  className="flex gap-4 rounded-lg border border-neutral-100 p-3"
                >
                  <div className="h-16 w-16 flex-shrink-0 rounded-md bg-neutral-50" />
                  <div className="flex flex-1 flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-xs font-medium text-brand-600">
                          {item.product.kode_produk}
                        </p>
                        <p className="text-sm font-medium text-neutral-800">
                          {item.product.nama_produk}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="ml-2 rounded p-0.5 text-neutral-300 transition-colors hover:text-red-500"
                        aria-label="Hapus"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-2">
                      <QuantityInput
                        value={item.quantity}
                        onChange={(qty) => updateQuantity(item.product.id, qty)}
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-neutral-100 px-6 py-4">
            <p className="mb-3 text-xs text-neutral-400">
              {totalItems} produk akan dimasukkan dalam penawaran
            </p>
            <Button onClick={onRequestQuote} className="w-full" size="lg">
              Minta Penawaran
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
