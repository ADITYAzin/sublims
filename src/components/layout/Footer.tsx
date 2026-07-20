import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-neutral-100 bg-white">
      <div className="mx-auto max-w-container px-4 py-8 md:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <span className="text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} SUBLiMS. {t("copyright")}.
          </span>
        </div>
      </div>
    </footer>
  );
}
