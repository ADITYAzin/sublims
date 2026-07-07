import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-neutral-100 bg-white p-6 shadow-sm transition-all duration-200 ease-out ${
        hover
          ? "hover:border-brand-100 hover:shadow-md"
          : ""
      } ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
