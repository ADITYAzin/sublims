import Link from "next/link";

type ThanksPageProps = {
  searchParams?: {
    ref?: string | string[];
  };
};

export default function ThanksPage({ searchParams }: ThanksPageProps) {
  const ref =
    typeof searchParams?.ref === "string"
      ? searchParams.ref
      : Array.isArray(searchParams?.ref)
        ? searchParams.ref[0]
        : null;

  return (
    <main className="min-h-screen bg-gradient-to-br from-brand-50 via-white to-neutral-100 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-3xl flex-col items-center rounded-3xl border border-brand-100 bg-white/95 p-8 text-center shadow-xl sm:p-12">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-600/10 text-brand-700">
          <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <p className="mb-3 rounded-full bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700">
          Pesan berhasil dikirim
        </p>

        <h1 className="mb-4 text-3xl font-semibold text-neutral-800 sm:text-4xl">
          Terima kasih — permintaan Anda telah kami terima
        </h1>

        <p className="mb-4 max-w-2xl text-base leading-7 text-neutral-700 sm:text-lg">
          Permintaan Anda sudah dikirim ke tim kami di <strong>office@sublims.id</strong>.
          Kami biasanya merespons dalam <strong>1–2 hari kerja</strong>.
        </p>

        {ref ? (
          <p className="mb-4 text-sm text-neutral-600 sm:text-base">
            Nomor referensi: <strong>{ref}</strong> — simpan untuk pengecekan di kemudian hari.
          </p>
        ) : (
          <p className="mb-4 text-sm text-neutral-600 sm:text-base">
            Jika Anda tidak menerima balasan dalam 2 hari kerja, silakan hubungi kami lewat WhatsApp.
          </p>
        )}

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            Kembali ke beranda
          </Link>
          <a
            href="https://wa.me/6285113668629"
            className="rounded-full border border-brand-200 px-6 py-3 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
          >
            Hubungi WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
