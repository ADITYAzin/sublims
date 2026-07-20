import { Building2, CheckCircle2, Target, Quote } from "lucide-react";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import CTABanner from "@/components/sections/CTABanner";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function AboutPage() {
  const t = await getTranslations("about");
  const tHome = await getTranslations("home");

  const whatsappNumber = "6285113668629";
  const whatsappBase = `https://wa.me/${whatsappNumber}`;
  const facts = [t("founded"), t("location"), t("focus")];
  const missions = [t("mission_1"), t("mission_2"), t("mission_3"), t("mission_4")];

  return (
    <main className="flex flex-1 flex-col bg-white">
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#f2f7f8_0%,#ffffff_52%,#e0edef_100%)] py-20 md:py-24">
        <div className="mx-auto grid max-w-container items-start gap-10 px-4 md:grid-cols-[0.95fr_1.05fr] md:px-6 lg:px-8">
          <div>
                        <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] text-neutral-900 md:text-5xl">
              {t("title")}
            </h1>
            <p className="mt-5 text-lg font-medium leading-relaxed text-neutral-700">
              {t("lead")}
            </p>
          </div>

          <div className="rounded-2xl border border-white/70 bg-white/80 p-5 shadow-[0_20px_48px_rgba(36,73,80,0.12)] backdrop-blur-md">
            
            <div className="mt-0 min-h-[260px] rounded-2xl bg-brand-900 p-6 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]">
              <Quote className="h-9 w-9 text-brand-100" />
              <p className="mt-12 max-w-full text-xl font-medium text-justify">
                {t("description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-container gap-6 px-4 md:grid-cols-2 md:px-6 lg:px-8">
          <div className="rounded-2xl border border-neutral-100/80 bg-white p-8 shadow-[0_4px_8px_rgba(36,73,80,0.04),0_12px_28px_rgba(36,73,80,0.06)]">
            <h2 className="text-3xl font-bold text-neutral-900">{t("vision_title")}</h2>
            <p className="mt-4 leading-relaxed text-neutral-600">{t("vision")}</p>
          </div>

          <div className="rounded-2xl border border-neutral-100/80 bg-brand-50 p-8 shadow-[0_4px_8px_rgba(36,73,80,0.04),0_12px_28px_rgba(36,73,80,0.06)]">
            <h2 className="text-3xl font-bold text-neutral-900">{t("mission_title")}</h2>
            <div className="mt-6 space-y-4">
              {missions.map((mission) => (
                <div key={mission} className="flex gap-3 rounded-xl bg-white/80 p-4 backdrop-blur-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <p className="leading-relaxed text-neutral-700">{mission}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        text={tHome("cta.text")}
        buttonLabel={tHome("cta.button")}
        whatsappUrl={`${whatsappBase}?text=Halo%2C%20saya%20ingin%20konsultasi%20kebutuhan%20pallet%20dan%20keranjang%20plastik%20untuk%20skala%20besar.`}
      />
    </main>
  );
}
