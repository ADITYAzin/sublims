"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";

type HeroSectionProps = {
  headline: string;
  subheadline: string;
  primaryCta: string;
  secondaryCta: string;
  catalogUrl: string;
  whatsappUrl: string;
};

export default function HeroSection({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  catalogUrl,
  whatsappUrl,
}: HeroSectionProps) {
  return (
      <section className="relative flex flex-1 items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#f2f7f8_0%,#ffffff_52%,#e0edef_100%)]">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/video/SUBLiMS.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative mx-auto w-full max-w-container px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center"
        >
          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl md:text-6xl">
            {headline}
          </h1>
          <p className="mx-auto mt-6 max-w-4xl text-lg font-medium leading-relaxed text-white md:text-xl">
            {subheadline}
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
            <Link href={catalogUrl}>
              <Button size="lg" className="w-[260px] rounded-xl bg-brand-500 shadow-[0_12px_28px_rgba(74,125,134,0.22)] hover:bg-brand-600">
                {primaryCta}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="w-[260px] rounded-xl border-brand-300 bg-white/70 text-brand-700 backdrop-blur-md hover:border-brand-400 hover:bg-brand-50">
                <MessageCircle className="h-5 w-5" />
                {secondaryCta}
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
