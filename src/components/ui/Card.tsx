import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-border bg-surface p-6 transition-colors hover:border-accent/60 ${className}`}
    >
      {children}
    </div>
  );
}
