"use client";

import { usePathname } from "next/navigation";

export default function HideFooterOnHome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Hide footer on home page (paths like "/id" or "/en" with no further segments)
  const isHome = /^\/[a-z]{2}$/.test(pathname);

  if (isHome) return null;

  return <>{children}</>;
}
