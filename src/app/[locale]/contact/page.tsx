import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ContactPage() {
  const t = await getTranslations("contact");

  const details = [
    { label: t("email_label"), value: t("email"), icon: Mail },
    { label: t("phone_label"), value: t("phone"), icon: Phone },
    { label: t("address_label"), value: t("address"), icon: MapPin },
    { label: t("hours_label"), value: t("hours"), icon: Clock },
  ];

  return (
    <main className="flex flex-1 flex-col bg-white">
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#f2f7f8_0%,#ffffff_52%,#e0edef_100%)] py-20 md:py-24">
        <div className="absolute inset-0">
          <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-brand-100/40 blur-3xl" />
          <div className="absolute -bottom-12 right-1/4 h-48 w-48 rounded-full bg-brand-200/25 blur-2xl" />
          <div className="absolute left-1/4 top-1/3 h-3 w-3 rounded-full bg-brand-300/40" />
          <div className="absolute right-1/3 top-1/5 h-2 w-2 rounded-full bg-brand-400/30" />
          <div className="absolute bottom-1/4 left-1/2 h-2.5 w-2.5 rounded-full bg-brand-200/50" />
        </div>
        <div className="relative mx-auto max-w-container px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex h-1 w-12 rounded-full bg-brand-400" />
            <h1 className="text-4xl font-extrabold leading-[1.1] text-neutral-900 md:text-5xl">
              {t("title")}
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-container px-4 md:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-5">
              <div className="rounded-2xl border border-neutral-100/80 bg-white p-6 shadow-[0_4px_8px_rgba(36,73,80,0.04),0_12px_28px_rgba(36,73,80,0.06)]">
                <div className="grid gap-4">
                  {details.map(({ label, value, icon: Icon }) => (
                    <div key={label} className="flex gap-4 rounded-xl bg-neutral-50 p-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-neutral-500">{label}</p>
                        <p className="mt-1 font-semibold leading-relaxed text-neutral-900">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative aspect-[8/5] overflow-hidden rounded-2xl border border-neutral-100/80 shadow-[0_4px_8px_rgba(36,73,80,0.04),0_18px_44px_rgba(36,73,80,0.1)]">
              <Image
                src="/images/forklift-pallet.jpg"
                alt="Forklift memindahkan pallet di gudang"
                fill
                sizes="(max-width: 768px) 100vw, 55vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
