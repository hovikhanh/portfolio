import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ghost";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary: "bg-accent text-background hover:bg-accent-bright",
  ghost:
    "border border-border text-foreground hover:border-accent hover:text-accent",
};

const BASE_CLASSES =
  "inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-mono font-medium transition-colors";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
}

export function Button({ variant = "primary", className = "", children, ...rest }: ButtonProps) {
  return (
    <button className={`${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  children: ReactNode;
}

export function LinkButton({ variant = "primary", className = "", children, ...rest }: LinkButtonProps) {
  return (
    <a className={`${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${className}`} {...rest}>
      {children}
    </a>
  );
}
