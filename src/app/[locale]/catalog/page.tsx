import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { getProducts } from "@/lib/getProducts";
import CatalogClient from "./CatalogClient";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "catalog" });
  return { title: t("title") };
}

export default async function CatalogPage() {
  const t = await getTranslations("catalog");
  const products = await getProducts();

  return (
    <main className="flex flex-1 flex-col">
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-container px-4 md:px-6 lg:px-8">
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-neutral-800 md:text-5xl">
              {t("title")}
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-neutral-500">
              {t("description")}
            </p>
          </div>

          <CatalogClient products={products} />
        </div>
      </section>
    </main>
  );
}
