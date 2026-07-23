"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { X, Send, Mail, MessageCircle, HelpCircle, FileText } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useCart } from "@/context/CartContext";

type QuoteFormProps = {
  open: boolean;
  onClose: () => void;
};

type DeliveryMethod = "whatsapp" | "email";
type InquiryType = "penawaran" | "pertanyaan";

const WA_NUMBER = "6285113668629";
function buildWhatsAppUrl(
  number: string,
  name: string,
  company: string,
  phone: string,
  email: string,
  inquiryType: InquiryType,
  notes: string,
  items: { name: string; code: string; qty: number }[],
): string {
  const header = inquiryType === "penawaran"
    ? "*PENAWARAN HARGA - SUBLIMS*"
    : "*PERTANYAAN PRODUK - SUBLIMS*";

  const lines = [
    header,
    "",
    `*Dari:* ${name}`,
    `*Perusahaan:* ${company}`,
    `*No. HP:* ${phone}`,
  ];

  if (email.trim()) {
    lines.push(`*Email:* ${email}`);
  }

  lines.push("", "*Detail Produk:*");

  items.forEach((item, i) => {
    lines.push(
      `${i + 1}. ${item.name} (${item.code}) x${item.qty}`,
    );
  });

  if (notes.trim()) {
    lines.push("");
    if (inquiryType === "penawaran") {
      lines.push(`*Catatan:* ${notes.trim()}`);
    } else {
      lines.push(`*Pertanyaan:* ${notes.trim()}`);
    }
  }

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${number}?text=${text}`;
}

export default function QuoteForm({ open, onClose }: QuoteFormProps) {
  const { items, clearCart } = useCart();
  const [method, setMethod] = useState<DeliveryMethod>("whatsapp");
  const [inquiryType, setInquiryType] = useState<InquiryType>("penawaran");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  const router = useRouter();
  const params = useParams();
  const locale = params?.locale ?? "id";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  if (!open) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const productItems = items.map((item) => ({
      name: item.product.nama_produk,
      code: item.product.kode_produk,
      qty: item.quantity,
    }));

    if (method === "whatsapp") {
      const url = buildWhatsAppUrl(WA_NUMBER, name, company, contact, email, inquiryType, notes, productItems);
      window.open(url, "_blank");
      clearCart();
      onClose();
      return;
    }

    const payload = {
      inquiryType,
      method,
      name,
      company,
      contact,
      email,
      notes,
      items: productItems,
    };
    setIsSubmitting(true);
    setStatus(null);

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json();

      if (res.ok && json.success) {
        const ref = json.id ? `?ref=${encodeURIComponent(json.id)}` : "";
        setStatus({ type: "success", message: json.message || "Permintaan berhasil dikirim." });
        clearCart();
        // close modal first to remove backdrop, then navigate to localized thanks page
        onClose();
        router.push(`/${locale}/thanks${ref}`);
        return;
      } else {
        setStatus({ type: "error", message: json?.message || "Gagal mengirim permintaan." });
      }
    } catch (err) {
      setStatus({ type: "error", message: "Terjadi kesalahan jaringan. Silakan coba lagi." });
    } finally {
      setIsSubmitting(false);
    }
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
              Kirim Permintaan Penawaran
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
                      {item.product.kode_produk} — {item.product.nama_produk}{" "}
                      <span className="text-neutral-400">x{item.quantity}</span>
                    </span>
                  </div>
                ))}
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

            <div className="mb-6">
              <h3 className="mb-3 text-sm font-medium text-neutral-700">
                Ajukan
              </h3>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setInquiryType("penawaran")}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm font-medium transition-all duration-200 ${
                    inquiryType === "penawaran"
                      ? "border-brand-200 bg-brand-50 text-brand-600"
                      : "border-neutral-200 text-neutral-500 hover:border-neutral-300"
                  }`}
                >
                  <FileText className="h-5 w-5" />
                  Penawaran Harga
                </button>
                <button
                  type="button"
                  onClick={() => setInquiryType("pertanyaan")}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm font-medium transition-all duration-200 ${
                    inquiryType === "pertanyaan"
                      ? "border-brand-200 bg-brand-50 text-brand-600"
                      : "border-neutral-200 text-neutral-500 hover:border-neutral-300"
                  }`}
                >
                  <HelpCircle className="h-5 w-5" />
                  Pertanyaan Produk
                </button>
              </div>
            </div>

            {status && (
              <div
                className={`mb-4 rounded-md px-4 py-2 text-sm ${
                  status.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
                }`}
              >
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Nama Lengkap"
                placeholder="Masukkan nama Anda"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <Input
                label="Nama Perusahaan"
                placeholder="Masukkan nama perusahaan"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
              />

              <Input
                label="Phone Number"
                type="tel"
                placeholder="0812xxxxxxxx"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
              />

              <Input
                label="Alamat Email"
                type="email"
                placeholder="Masukkan alamat email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-neutral-700">
                  {inquiryType === "penawaran" ? "Catatan Tambahan" : "Sampaikan Pertanyaan Anda"}
                  <span className="ml-0.5 text-red-500">*</span>
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={
                    inquiryType === "penawaran"
                      ? "Contoh: Butuh dalam 2 minggu, ukuran XXL"
                      : "Tuliskan pertanyaan Anda di sini..."
                  }
                  rows={3}
                  required
                  className="rounded-lg border border-neutral-200 px-4 py-3 text-sm text-neutral-800 placeholder-neutral-400 outline-none transition-all duration-200 ease-out focus:ring-2 focus:ring-brand-200"
                />
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                <Send className="h-4 w-4" />
                {isSubmitting ? "Mengirim..." : "Kirim Permintaan"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
