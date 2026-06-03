"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type CSSProperties } from "react";
import { navLinks } from "@/lib/site";

function HeaderCta({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/booking"
      className={`header-cta inline-flex min-h-[44px] items-center justify-center rounded-[10px] border-2 border-burgundy bg-cream px-6 py-3 text-center text-xs font-medium uppercase leading-snug tracking-wide text-text-primary hover:border-cream hover:bg-burgundy hover:text-white xl:min-h-[48px] xl:px-7 xl:py-3.5 xl:text-sm ${className}`}
    >
      <span className="header-cta__label">Book A Strategy Call</span>
    </Link>
  );
}

function NavLink({
  href,
  label,
  isActive,
  onClick,
  style,
  className = "",
}: {
  href: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
  style?: CSSProperties;
  className?: string;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      style={style}
      className={`header-nav-link whitespace-nowrap px-2 py-1 text-[11px] font-normal uppercase xl:px-2.5 xl:text-xs ${className} ${
        isActive
          ? "header-nav-link--active text-cream"
          : "text-white/90 hover:text-cream"
      }`}
    >
      {label}
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="header-enter sticky top-0 z-50 border-b border-white/10 bg-burgundy">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 lg:px-8">
        <Link href="/" className="header-logo flex shrink-0 items-center">
          <Image
            src="/logo-db-studio.png"
            alt="DB Studio"
            width={130}
            height={124}
            className="h-[72px] w-auto sm:h-[80px] xl:h-[88px]"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Main">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                isActive={isActive}
              />
            );
          })}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <HeaderCta />
        </div>

        <button
          type="button"
          className="flex flex-col gap-1.5 p-2 transition-transform duration-300 hover:scale-110 xl:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span
            className={`block h-0.5 w-6 origin-center bg-cream transition-all duration-300 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-cream transition-all duration-300 ${mobileOpen ? "scale-x-0 opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 origin-center bg-cream transition-all duration-300 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      <div
        className={`mobile-nav-panel xl:hidden ${mobileOpen ? "mobile-nav-panel--open" : ""}`}
      >
        <nav
          className="mobile-nav-panel__inner border-t border-white/10 bg-burgundy px-4"
          aria-label="Mobile"
          aria-hidden={!mobileOpen}
        >
          <ul className="flex flex-col gap-1 py-4">
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                className="mobile-nav-item"
                style={
                  mobileOpen
                    ? { animationDelay: `${index * 60 + 80}ms` }
                    : undefined
                }
              >
                <NavLink
                  href={link.href}
                  label={link.label}
                  className="block w-full"
                  isActive={
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href)
                  }
                  onClick={() => setMobileOpen(false)}
                />
              </li>
            ))}
            <li
              className="mobile-nav-item pt-3"
              style={
                mobileOpen
                  ? { animationDelay: `${navLinks.length * 60 + 80}ms` }
                  : undefined
              }
            >
              <HeaderCta className="w-full justify-center" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
