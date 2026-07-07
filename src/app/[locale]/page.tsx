import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations("home");

  return (
    <main className="flex flex-1 flex-col">
      <section className="flex flex-1 items-center justify-center py-20">
        <h1 className="text-5xl font-bold text-neutral-800">{t("title")}</h1>
      </section>
    </main>
  );
}
