"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type CSSProperties } from "react";
import { navLinks, type NavItem } from "@/lib/site";

function HeaderCta({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/booking"
      className={`header-cta inline-flex min-h-[44px] items-center justify-center rounded-[10px] border-2 border-burgundy bg-cream px-6 py-3 text-center text-xs font-medium uppercase leading-snug tracking-wide text-text-primary hover:border-cream hover:bg-burgundy hover:text-white xl:min-h-[48px] xl:px-7 xl:py-3.5 xl:text-sm ${className}`}
    >
      <span className="header-cta__label">Book a Strategic Call</span>
    </Link>
  );
}

function NavDropdown({
  item,
  pathname,
  onNavigate,
}: {
  item: Extract<NavItem, { children: unknown }>;
  pathname: string;
  onNavigate?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const isActive = item.children.some((child) =>
    child.href === "/" ? pathname === "/" : pathname.startsWith(child.href.split("#")[0]),
  );

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={`header-nav-link flex items-center gap-1 whitespace-nowrap px-2 py-1 text-[11px] font-normal uppercase xl:px-2.5 xl:text-xs ${
          isActive ? "header-nav-link--active text-cream" : "text-white/90 hover:text-cream"
        }`}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {item.label}
        <span aria-hidden className="text-[10px]">▾</span>
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 min-w-[200px] rounded-lg border border-white/10 bg-[#4a1619] py-2 shadow-xl">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={onNavigate}
              className="block px-4 py-2 text-xs uppercase text-white/90 hover:bg-burgundy hover:text-cream"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
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

  const isLinkActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.split("#")[0]);

  return (
    <header className="header-enter sticky top-0 z-50 border-b border-white/10 bg-burgundy">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 lg:px-8">
        <Link href="/" className="header-logo flex shrink-0 items-center">
          <Image
            src="/logo-db-studio.png"
            alt="DB Studio Media"
            width={130}
            height={124}
            className="h-[72px] w-auto sm:h-[80px] xl:h-[88px]"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Main">
          {navLinks.map((link) =>
            "children" in link ? (
              <NavDropdown key={link.label} item={link} pathname={pathname} />
            ) : (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                isActive={isLinkActive(link.href)}
              />
            ),
          )}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <HeaderCta />
        </div>

        <button
          type="button"
          className="flex flex-col gap-1.5 p-2 xl:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className={`block h-0.5 w-6 bg-cream transition ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-cream transition ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-cream transition ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-white/10 bg-burgundy px-4 py-4 xl:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) =>
              "children" in link ? (
                <li key={link.label}>
                  <p className="px-2 py-2 text-xs font-semibold uppercase text-cream/70">{link.label}</p>
                  <ul className="ml-2 border-l border-white/10 pl-3">
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <NavLink
                          href={child.href}
                          label={child.label}
                          isActive={isLinkActive(child.href)}
                          onClick={() => setMobileOpen(false)}
                          className="block w-full py-2"
                        />
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={link.href}>
                  <NavLink
                    href={link.href}
                    label={link.label}
                    isActive={isLinkActive(link.href)}
                    onClick={() => setMobileOpen(false)}
                    className="block w-full py-2"
                  />
                </li>
              ),
            )}
            <li className="pt-3">
              <HeaderCta className="w-full justify-center" />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
