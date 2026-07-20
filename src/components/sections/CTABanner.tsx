"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

type CTABannerProps = {
  text: string;
  buttonLabel: string;
  whatsappUrl: string;
};

export default function CTABanner({
  text,
  buttonLabel,
  whatsappUrl,
}: CTABannerProps) {
  return (
    <AnimatedSection className="bg-white  my-12">
      <div className="mx-auto max-w-container px-4 md:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-brand-900 px-6 py-12 shadow-[0_24px_60px_rgba(18,36,40,0.18)] md:px-12 md:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(162,196,201,0.28),transparent_32%)]" />
          <div className="relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <p className="max-w-3xl text-2xl font-bold leading-snug text-white md:text-3xl">
              {text}
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2.5 rounded-xl bg-white px-7 py-3.5 text-base font-semibold text-brand-700 shadow-[0_12px_28px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-1 hover:bg-brand-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-200"
            >
              <MessageCircle className="h-5 w-5" />
              {buttonLabel}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
