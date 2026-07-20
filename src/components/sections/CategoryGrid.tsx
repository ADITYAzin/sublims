"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Box, Package } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

type CategoryCard = {
  title: string;
  description: string;
  icon: "pallet" | "crate";
  url: string;
};

type CategoryGridProps = {
  heading: string;
  viewAllLabel: string;
  categories: [CategoryCard, CategoryCard];
};

const iconMap = {
  pallet: Package,
  crate: Box,
};

function CategoryCard({ title, description, icon, url, viewAllLabel }: CategoryCard & { viewAllLabel: string }) {
  const Icon = iconMap[icon];
  const isPrimary = icon === "pallet";

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className={`group relative overflow-hidden rounded-2xl border border-neutral-100/80 bg-white p-8 shadow-[0_4px_8px_rgba(36,73,80,0.04),0_12px_28px_rgba(36,73,80,0.06)] transition-all duration-300 hover:border-brand-200/70 hover:shadow-[0_18px_44px_rgba(36,73,80,0.12)] ${isPrimary ? "md:col-span-7" : "md:col-span-5"}`}
    >
      <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-brand-100/60 blur-2xl" />
      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-100">
          <Icon className="h-7 w-7" />
        </div>
        <h3 className="text-2xl font-bold text-neutral-900">{title}</h3>
        <p className="mt-3 max-w-xl leading-relaxed text-neutral-600">{description}</p>
        <div className="mt-8">
          <Link href={url}>
            <Button variant="outline" className="rounded-xl border-brand-200 text-brand-700 hover:border-brand-300 hover:bg-brand-50">
              {viewAllLabel} <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function CategoryGrid({
  heading,
  viewAllLabel,
  categories,
}: CategoryGridProps) {
  return (
    <AnimatedSection className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-container px-4 md:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-600">Katalog Kami</span>
          <h2 className="mt-3 text-3xl font-bold text-neutral-900 md:text-4xl">
            {heading}
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-12">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.title}
              title={cat.title}
              description={cat.description}
              icon={cat.icon}
              url={cat.url}
              viewAllLabel={viewAllLabel}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
