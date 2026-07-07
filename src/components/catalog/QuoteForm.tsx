"use client";

import { useState } from "react";
import { X, Send, Mail, MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/products";

type QuoteFormProps = {
  open: boolean;
  onClose: () => void;
};

type DeliveryMethod = "whatsapp" | "email";

const WA_NUMBER = "6281234567890";
const EMAIL_ADDRESS = "sales@sublims.com";

function buildWhatsAppUrl(
  number: string,
  name: string,
  phone: string,
  notes: string,
  items: { name: string; qty: number; price: number }[],
  total: number,
): string {
  const lines = [
    "*PERTANYAAN PRODUK - Sublims*",
    "",
    `*Dari:* ${name}`,
    `*No. HP:* ${phone}`,
    "",
    "*--- Detail Produk ---*",
  ];

  items.forEach((item, i) => {
    lines.push(
      `${i + 1}. ${item.name} x${item.qty} = ${formatPrice(item.price * item.qty)}`,
    );
  });

  lines.push("");
  lines.push(`*Total:* ${formatPrice(total)}`);

  if (notes.trim()) {
    lines.push("");
    lines.push(`*Catatan:* ${notes.trim()}`);
  }

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${number}?text=${text}`;
}

function buildEmailUrl(
  email: string,
  name: string,
  emailAddr: string,
  notes: string,
  items: { name: string; qty: number; price: number }[],
  total: number,
): string {
  const subject = encodeURIComponent("Permintaan Penawaran - Sublims");

  const lines = [
    "PERTANYAAN PRODUK - Sublims",
    "",
    `Dari: ${name}`,
    `Email: ${emailAddr}`,
    "",
    "--- Detail Produk ---",
  ];

  items.forEach((item, i) => {
    lines.push(
      `${i + 1}. ${item.name} x${item.qty} = ${formatPrice(item.price * item.qty)}`,
    );
  });

  lines.push("");
  lines.push(`Total: ${formatPrice(total)}`);

  if (notes.trim()) {
    lines.push("");
    lines.push(`Catatan: ${notes.trim()}`);
  }

  const body = encodeURIComponent(lines.join("\n"));
  return `mailto:${email}?subject=${subject}&body=${body}`;
}

export default function QuoteForm({ open, onClose }: QuoteFormProps) {
  const { items, totalPrice, clearCart } = useCart();
  const [method, setMethod] = useState<DeliveryMethod>("whatsapp");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [notes, setNotes] = useState("");

  if (!open) return null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const productItems = items.map((item) => ({
      name: item.product.name_id,
      qty: item.quantity,
      price: item.product.price,
    }));

    let url: string;
    if (method === "whatsapp") {
      url = buildWhatsAppUrl(WA_NUMBER, name, contact, notes, productItems, totalPrice);
    } else {
      url = buildEmailUrl(EMAIL_ADDRESS, name, contact, notes, productItems, totalPrice);
    }

    window.open(url, "_blank");
    clearCart();
    onClose();
  }

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="flex max-h-[90vh] w-full max-w-lg flex-col overflow-y-auto rounded-xl bg-white shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between border-b border-neutral-100 px-6 py-4">
            <h2 className="text-lg font-semibold text-neutral-800">
              Kirim Penawaran
            </h2>
            <button
              onClick={onClose}
              className="rounded-lg p-1.5 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4">
            <div className="mb-6">
              <h3 className="mb-3 text-sm font-medium text-neutral-700">
                Rincian Produk
              </h3>
              <div className="space-y-2">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex items-center justify-between rounded-lg bg-neutral-50 px-4 py-2.5 text-sm"
                  >
                    <span className="text-neutral-700">
                      {item.product.name_id}{" "}
                      <span className="text-neutral-400">x{item.quantity}</span>
                    </span>
                    <span className="font-medium text-brand-600">
                      {formatPrice(item.product.price * item.quantity)}
                    </span>
                  </div>
                ))}
                <div className="flex items-center justify-between border-t border-neutral-200 pt-2 text-sm font-semibold">
                  <span className="text-neutral-800">Total</span>
                  <span className="text-brand-600">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="mb-3 text-sm font-medium text-neutral-700">
                Opsi Pengiriman
              </h3>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setMethod("whatsapp")}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm font-medium transition-all duration-200 ${
                    method === "whatsapp"
                      ? "border-brand-200 bg-brand-50 text-brand-600"
                      : "border-neutral-200 text-neutral-500 hover:border-neutral-300"
                  }`}
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </button>
                <button
                  type="button"
                  onClick={() => setMethod("email")}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm font-medium transition-all duration-200 ${
                    method === "email"
                      ? "border-brand-200 bg-brand-50 text-brand-600"
                      : "border-neutral-200 text-neutral-500 hover:border-neutral-300"
                  }`}
                >
                  <Mail className="h-5 w-5" />
                  Email
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Nama Lengkap"
                placeholder="Masukkan nama Anda"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              {method === "whatsapp" ? (
                <Input
                  label="No. WhatsApp"
                  type="tel"
                  placeholder="0812xxxxxxxx"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  required
                />
              ) : (
                <Input
                  label="Alamat Email"
                  type="email"
                  placeholder="email@anda.com"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  required
                />
              )}

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-neutral-700">
                  Catatan Tambahan
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Contoh: Butuh dalam 2 minggu, ukuran XXL"
                  rows={3}
                  className="rounded-lg border border-neutral-200 px-4 py-3 text-sm text-neutral-800 placeholder-neutral-400 outline-none transition-all duration-200 ease-out focus:ring-2 focus:ring-brand-200"
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                <Send className="h-4 w-4" />
                Kirim Penawaran
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
