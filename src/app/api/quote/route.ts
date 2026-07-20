import { NextResponse } from "next/server";
import { Resend } from "resend";

function getEmailConfig() {
  return {
    apiKey: process.env.RESEND_API_KEY || "",
    to: process.env.EMAIL_TO || "sales@sublims.com",
    from: process.env.EMAIL_FROM || "SUBLiMS <onboarding@resend.dev>",
  };
}

function formatProducts(items: { name: string; code: string; qty: number }[]) {
  return items
    .map((item, index) => `${index + 1}. ${item.name} (${item.code}) x${item.qty}`)
    .join("<br/>");
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const { apiKey, to, from } = getEmailConfig();
    const resend = apiKey ? new Resend(apiKey) : null;

    if (!resend) {
      return NextResponse.json(
        {
          success: false,
          message: "Email service belum dikonfigurasi. Tambahkan RESEND_API_KEY di environment.",
        },
        { status: 500 },
      );
    }

    const inquiryType = payload.inquiryType === "pertanyaan" ? "pertanyaan" : "penawaran";
    const subject =
      inquiryType === "penawaran"
        ? "Permintaan Penawaran Harga - SUBLiMS"
        : "Pertanyaan Produk - SUBLiMS";

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">
        <h2 style="margin-bottom: 12px;">${inquiryType === "penawaran" ? "PENAWARAN HARGA" : "PERTANYAAN PRODUK"}</h2>
        <p><strong>Nama:</strong> ${payload.name || "-"}</p>
        <p><strong>Perusahaan:</strong> ${payload.company || "-"}</p>
        <p><strong>No. HP:</strong> ${payload.contact || "-"}</p>
        <p><strong>Email:</strong> ${payload.email || "-"}</p>
        <p><strong>Metode:</strong> ${payload.method === "email" ? "Email" : "WhatsApp"}</p>
        <p><strong>Catatan:</strong> ${payload.notes ? payload.notes.replace(/\n/g, "<br/>") : "-"}</p>
        <h3 style="margin-top: 20px; margin-bottom: 8px;">Detail Produk</h3>
        <div>${formatProducts(payload.items || []) || "-"}</div>
      </div>
    `;

    const text = [
      inquiryType === "penawaran" ? "PENAWARAN HARGA - SUBLiMS" : "PERTANYAAN PRODUK - SUBLiMS",
      "",
      `Nama: ${payload.name || "-"}`,
      `Perusahaan: ${payload.company || "-"}`,
      `No. HP: ${payload.contact || "-"}`,
      `Email: ${payload.email || "-"}`,
      `Metode: ${payload.method === "email" ? "Email" : "WhatsApp"}`,
      "",
      "Catatan:",
      payload.notes || "-",
      "",
      "Detail Produk:",
      (payload.items || []).map((item: { name: string; code: string; qty: number }, index: number) => `${index + 1}. ${item.name} (${item.code}) x${item.qty}`).join("\n") || "-",
    ].join("\n");

    const response = await resend.emails.send({
      from,
      to: [to],
      replyTo: payload.email || undefined,
      subject,
      html,
      text,
    });

    return NextResponse.json({
      success: true,
      message: "Permintaan berhasil dikirim ke email penjual.",
      id: response.data?.id ?? null,
    });
  } catch (error) {
    console.error("Quote submission failed:", error);

    const message =
      error instanceof Error && error.message
        ? error.message
        : "Gagal mengirim permintaan. Silakan coba lagi.";

    return NextResponse.json(
      {
        success: false,
        message,
      },
      { status: 500 },
    );
  }
}
