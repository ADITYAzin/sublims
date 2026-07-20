"use client";

import { PackageCheck, Ruler, ShieldCheck } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

type ValueItem = {
  title: string;
  description: string;
  icon: "stock" | "material" | "spec";
};

type WhyChooseUsProps = {
  heading: string;
  subheading: string;
  values: [ValueItem, ValueItem, ValueItem];
};

const iconMap = {
  stock: PackageCheck,
  material: ShieldCheck,
  spec: Ruler,
};

const iconBgMap = {
  stock: "bg-blue-50 text-blue-600",
  material: "bg-emerald-50 text-emerald-600",
  spec: "bg-amber-50 text-amber-600",
};

function ValueCard({ title, description, icon }: ValueItem) {
  const Icon = iconMap[icon];

  return (
    <div className="rounded-2xl border border-neutral-100/80 bg-white p-8 shadow-[0_4px_8px_rgba(36,73,80,0.04),0_12px_28px_rgba(36,73,80,0.06)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-brand-200/60 hover:shadow-[0_18px_44px_rgba(36,73,80,0.12)]">
      <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${iconBgMap[icon]}`}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-bold text-neutral-900">{title}</h3>
      <p className="mt-3 leading-relaxed text-neutral-600">{description}</p>
    </div>
  );
}

export default function WhyChooseUs({
  heading,
  subheading,
  values,
}: WhyChooseUsProps) {
  return (
    <AnimatedSection className="bg-brand-50 py-16 md:py-24">
      <div className="mx-auto max-w-container px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-600">
            {subheading}
          </span>
          <h2 className="mt-3 text-3xl font-bold text-neutral-900 md:text-4xl">
            {heading}
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((val) => (
            <ValueCard key={val.title} {...val} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
