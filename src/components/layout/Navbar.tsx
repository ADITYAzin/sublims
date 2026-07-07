"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Languages, ShoppingCart } from "lucide-react";
import { useState, useCallback } from "react";
import { useCart } from "@/context/CartContext";
import CartDrawer from "@/components/catalog/CartDrawer";
import QuoteForm from "@/components/catalog/QuoteForm";

const locales = [
  { code: "id", label: "ID" },
  { code: "en", label: "EN" },
];

function useLocale() {
  const pathname = usePathname();
  return pathname.split("/")[1];
}

export default function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

  const locale = useLocale();
  const { totalItems } = useCart();

  const links = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/about`, label: t("about") },
    { href: `/${locale}/catalog`, label: t("catalog") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  const switchLocale = useCallback(
    (code: string) => {
      const newPath = pathname.replace(`/${locale}`, `/${code}`);
      router.replace(newPath);
    },
    [pathname, locale, router],
  );

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-neutral-100 bg-white/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-container items-center justify-between px-4 py-4 md:px-6 lg:px-8">
          <Link
            href={`/${locale}`}
            className="text-xl font-bold text-brand-200 transition-colors hover:text-brand-300"
          >
            Sublims
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-brand-200 ${
                    isActive ? "text-brand-200" : "text-neutral-600"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <button
              onClick={() => setCartOpen(true)}
              className="relative rounded-lg p-2 text-neutral-600 transition-colors hover:bg-neutral-100"
              aria-label="Buka keranjang"
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-200 text-xs font-bold text-white">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </button>

            <div className="ml-4 flex items-center gap-1 border-l border-neutral-200 pl-4">
              {locales.map((l) => (
                <button
                  key={l.code}
                  onClick={() => switchLocale(l.code)}
                  className={`rounded-lg px-2 py-1 text-xs font-medium transition-colors ${
                    locale === l.code
                      ? "bg-brand-200 text-white"
                      : "text-neutral-500 hover:bg-neutral-100"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setCartOpen(true)}
              className="relative rounded-lg p-2 text-neutral-600 transition-colors hover:bg-neutral-100"
              aria-label="Buka keranjang"
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-200 text-xs font-bold text-white">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex items-center gap-1"
              aria-label="Toggle menu"
            >
              <Languages className="h-5 w-5 text-neutral-600" />
            </button>
          </div>
        </nav>

        {mobileOpen && (
          <div className="border-t border-neutral-100 md:hidden">
            <div className="space-y-2 px-4 py-4">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-brand-50 text-brand-200"
                        : "text-neutral-600 hover:bg-neutral-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="flex gap-1 border-t border-neutral-100 pt-3">
                {locales.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => switchLocale(l.code)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                      locale === l.code
                        ? "bg-brand-200 text-white"
                        : "text-neutral-500 hover:bg-neutral-100"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        onRequestQuote={() => {
          setCartOpen(false);
          setQuoteOpen(true);
        }}
      />

      <QuoteForm
        open={quoteOpen}
        onClose={() => setQuoteOpen(false)}
      />
    </>
  );
}
