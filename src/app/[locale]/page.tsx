import { getTranslations } from "next-intl/server";
import HeroSection from "@/components/sections/HeroSection";
// import CategoryGrid from "@/components/sections/CategoryGrid";
// import WhyChooseUs from "@/components/sections/WhyChooseUs";
// import CTABanner from "@/components/sections/CTABanner";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations("home");

  const whatsappNumber = "6285113668629";
  const whatsappBase = `https://wa.me/${whatsappNumber}`;

  return (
    <main className="flex flex-1 flex-col">
      <HeroSection
        headline={t("hero.headline")}
        subheadline={t("hero.subheadline")}
        primaryCta={t("hero.primary_cta")}
        secondaryCta={t("hero.secondary_cta")}
        catalogUrl={`/${locale}/catalog`}
        whatsappUrl={`${whatsappBase}?text=Halo%2C%20saya%20tertarik%20dengan%20produk%20pallet%20SUBLiMS.%20Mohon%20info%20lebih%20lanjut.`}
      />

      {/* <CategoryGrid
        heading={t("categories.heading")}
        viewAllLabel={t("categories.view_all")}
        categories={[
          {
            title: t("categories.pallet_title"),
            description: t("categories.pallet_desc"),
            icon: "pallet",
            url: `/${locale}/catalog`,
          },
          {
            title: t("categories.crate_title"),
            description: t("categories.crate_desc"),
            icon: "crate",
            url: `/${locale}/catalog`,
          },
        ]}
      /> */}

      {/* <WhyChooseUs
        heading={t("values.heading")}
        subheading={t("values.subheading")}
        values={[
          {
            title: t("values.stock_title"),
            description: t("values.stock_desc"),
            icon: "stock",
          },
          {
            title: t("values.material_title"),
            description: t("values.material_desc"),
            icon: "material",
          },
          {
            title: t("values.spec_title"),
            description: t("values.spec_desc"),
            icon: "spec",
          },
        ]}
      /> */}

      {/* <CTABanner
        text={t("cta.text")}
        buttonLabel={t("cta.button")}
        whatsappUrl={`${whatsappBase}?text=Halo%2C%20saya%20ingin%20konsultasi%20kebutuhan%20pallet%20untuk%20skala%20besar.`}
      /> */}
    </main>
  );
}
