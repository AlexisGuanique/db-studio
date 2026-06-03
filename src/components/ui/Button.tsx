import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "outline-light";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
  interactive?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-burgundy text-white border-2 border-burgundy hover:bg-cream hover:border-burgundy hover:text-burgundy",
  outline:
    "bg-cream text-text-primary border-2 border-burgundy hover:bg-burgundy hover:text-white",
  "outline-light":
    "bg-transparent text-white border-2 border-white hover:bg-white hover:text-burgundy",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
  interactive = false,
}: ButtonProps) {
  const interactiveClasses = interactive
    ? `btn-interactive btn-interactive--${variant}`
    : "";
  const classes = `inline-flex min-h-[48px] items-center justify-center rounded-[10px] px-8 py-3.5 text-center text-sm font-medium uppercase leading-snug tracking-wide transition-colors duration-300 ${variantClasses[variant]} ${interactiveClasses} ${className}`;

  const content = interactive ? (
    <span className="btn-interactive__label">
      {children}
      <span className="btn-interactive__arrow" aria-hidden="true">
        →
      </span>
    </span>
  ) : (
    children
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
