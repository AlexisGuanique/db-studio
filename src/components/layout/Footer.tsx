import Link from "next/link";
import {
  footerHelpLinks,
  footerQuickLinks,
  site,
} from "@/lib/site";
import { Button } from "@/components/ui/Button";

export function Footer() {
  return (
    <footer className="bg-burgundy text-white">
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:px-8">
          <h2 className="text-2xl font-semibold uppercase tracking-wide md:text-3xl">
            WORK FASTER WITH US!
          </h2>
          <p className="mt-2 text-lg text-white/90">
            Where Every Detail Becomes an Experience.
          </p>

          <div className="mx-auto mt-10 max-w-md">
            <h3 className="mb-4 text-lg font-medium uppercase">
              Subscribe to our newsletter!
            </h3>
            <form className="flex flex-col gap-3 sm:flex-row" action="#" method="post">
              <label htmlFor="newsletter-email" className="sr-only">
                Email
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Email"
                className="flex-1 rounded-[5px] border-2 border-white/30 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:border-white focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-[5px] bg-cream px-6 py-3 text-sm font-semibold uppercase tracking-wide text-burgundy transition hover:bg-white"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {footerQuickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/80 transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
            Help
          </h3>
          <ul className="space-y-2">
            {footerHelpLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/80 transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
            Operating Hours
          </h3>
          <p className="text-sm text-white/80">{site.hours}</p>
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-white/90">
            {site.tagline}
          </p>
          <div className="mt-4">
            <Button href="/booking" variant="outline-light">
              Book a Strategy Call
            </Button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
            Contact
          </h3>
          <div className="space-y-2 text-sm text-white/80">
            <p>{site.legalName}</p>
            <p>
              Email:{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-white hover:underline"
              >
                {site.email}
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href={`tel:${site.phone.replace(/\D/g, "")}`} className="text-white hover:underline">
                {site.phone}
              </a>
            </p>
          </div>

          <div className="mt-6 flex gap-4">
            <span className="text-sm text-white/60">Social Media</span>
            <div className="flex gap-3">
              {["Instagram", "Facebook", "LinkedIn"].map((social) => (
                <span
                  key={social}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-xs text-white/60"
                  title={social}
                >
                  •
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {site.name} Media. All rights reserved.
      </div>
    </footer>
  );
}
