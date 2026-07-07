import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return { title: t("title") };
}

export default async function ContactPage() {
  const t = await getTranslations("contact");

  return (
    <main className="flex flex-1 flex-col">
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-container px-4 md:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-neutral-800 md:text-5xl">
            {t("title")}
          </h1>
          <div className="mt-8 max-w-3xl space-y-4 text-lg text-neutral-600">
            <p>{t("description")}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
