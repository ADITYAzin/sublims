"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-brand-200 text-white hover:bg-brand-300 active:bg-brand-400",
  outline:
    "border border-brand-200 text-brand-200 hover:bg-brand-50 active:bg-brand-100",
  ghost:
    "text-neutral-600 hover:bg-neutral-100 active:bg-neutral-200",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-1.5 text-sm gap-1.5",
  md: "px-6 py-2.5 text-base gap-2",
  lg: "px-8 py-3.5 text-lg gap-2.5",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={`inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 ease-out outline-offset-2 outline-brand-200 focus-visible:outline-2 ${variantStyles[variant]} ${sizeStyles[size]} ${disabled ? "cursor-not-allowed opacity-50" : ""} ${className ?? ""}`}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
export default Button;
