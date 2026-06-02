import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "outline-light";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-burgundy text-white border-2 border-burgundy hover:bg-[#4a1619] hover:border-[#4a1619]",
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
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-[5px] px-6 py-3 text-sm font-medium uppercase tracking-wide transition-colors duration-300 ${variantClasses[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
