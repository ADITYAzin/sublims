"use client";

import { Building2, PackagePlus, Users } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

type SocialProofProps = {
  heading: string;
  stats: {
    products: string;
    clients: string;
  };
};

export default function SocialProof({ heading, stats }: SocialProofProps) {
  return (
    <AnimatedSection className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-container px-4 md:px-6 lg:px-8">
        <div className="rounded-2xl border border-neutral-100/80 bg-white p-6 shadow-[0_4px_8px_rgba(36,73,80,0.04),0_16px_36px_rgba(36,73,80,0.07)] md:p-10">
          <h2 className="text-center text-3xl font-bold text-neutral-900 md:text-4xl">
            {heading}
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            <div className="rounded-2xl bg-brand-50 p-8 text-center">
              <PackagePlus className="mx-auto h-8 w-8 text-brand-600" />
              <p className="mt-4 text-2xl font-extrabold text-neutral-900 md:text-3xl">{stats.products}</p>
            </div>
            <div className="rounded-2xl bg-neutral-50 p-8 text-center">
              <Users className="mx-auto h-8 w-8 text-brand-600" />
              <p className="mt-4 text-2xl font-extrabold text-neutral-900 md:text-3xl">{stats.clients}</p>
            </div>
            <div className="rounded-2xl bg-brand-900 p-8 text-center text-white">
              <Building2 className="mx-auto h-8 w-8 text-brand-100" />
              <p className="mt-4 text-lg font-bold leading-snug">Manufaktur, FMCG, dan logistik</p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
