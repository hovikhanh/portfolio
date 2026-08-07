interface BadgeProps {
  children: string;
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="rounded border border-border bg-background px-2 py-1 font-mono text-xs text-accent">
      {children}
    </span>
  );
}
