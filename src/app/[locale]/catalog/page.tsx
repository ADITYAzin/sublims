import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { getProducts } from "@/lib/getProducts";
import CatalogClient from "./CatalogClient";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "catalog" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function CatalogPage() {
  const t = await getTranslations("catalog");
  const products = await getProducts();

  return (
    <main className="flex flex-1 flex-col bg-white">
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#f2f7f8_0%,#ffffff_52%,#e0edef_100%)] py-20 md:py-24">
        <div className="absolute inset-0">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-100/40 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-brand-200/25 blur-2xl" />
          <div className="absolute right-1/4 top-1/2 h-3 w-3 rounded-full bg-brand-300/40" />
          <div className="absolute left-1/3 top-1/4 h-2 w-2 rounded-full bg-brand-400/30" />
          <div className="absolute bottom-1/3 right-1/3 h-2.5 w-2.5 rounded-full bg-brand-200/50" />
        </div>
        <div className="relative mx-auto max-w-container px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex h-1 w-12 rounded-full bg-brand-400" />
            <h1 className="text-4xl font-extrabold leading-[1.08] text-neutral-900 md:text-5xl">
              {t("title")}
            </h1>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-container px-4 md:px-6 lg:px-8">
          <CatalogClient products={products} />
        </div>
      </section>
    </main>
  );
}
