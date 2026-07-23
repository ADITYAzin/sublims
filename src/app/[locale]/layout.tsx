import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext";
import HideFooterOnHome from "@/components/layout/HideFooterOnHome";

const locales = ["id"];

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <CartProvider>
        <Navbar />
        <div className="flex flex-1 flex-col">{children}</div>
        <HideFooterOnHome>
          <Footer />
        </HideFooterOnHome>
      </CartProvider>
    </NextIntlClientProvider>
  );
}
