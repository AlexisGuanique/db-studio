import Link from "next/link";
import Image from "next/image";
import {
  footerLegalLinks,
  footerQuickLinks,
  site,
} from "@/lib/site";
import { Button } from "@/components/ui/Button";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="bg-white px-4 sm:px-6 lg:px-8">
        <div className="footer-newsletter mx-auto max-w-7xl overflow-hidden rounded-t-3xl border-2 border-burgundy/35 border-b-0 bg-cream text-text-primary shadow-[0_-4px_24px_rgba(91,27,31,0.08)]">
          <div className="flex flex-col gap-10 px-6 py-12 sm:px-8 md:py-14 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-12 lg:py-16">
            <div className="text-center lg:max-w-md lg:text-left">
              <h2 className="text-xl font-semibold uppercase tracking-wide text-burgundy sm:text-2xl md:text-3xl">
                WORK FASTER WITH US!
              </h2>
              <p className="mt-4 text-base text-text-secondary md:text-lg">
                Where Every Detail Becomes an Experience.
              </p>
            </div>
            <div className="w-full lg:max-w-lg lg:shrink-0">
              <h3 className="mb-4 text-center text-base font-semibold uppercase tracking-wide text-burgundy lg:text-left lg:text-lg">
                Subscribe to our newsletter!
              </h3>
              <form className="footer-newsletter__form flex" action="#" method="post">
                <label htmlFor="newsletter-email" className="sr-only">Email</label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Email"
                  className="min-w-0 flex-1 rounded-l-[10px] border-2 border-r-0 border-burgundy/25 bg-white px-4 py-3 text-text-primary placeholder:text-text-secondary/60 focus:border-burgundy focus:outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-r-[10px] border-2 border-burgundy bg-burgundy px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-cream hover:text-burgundy sm:px-6"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Link href="/" className="mb-6 inline-block">
            <Image src="/logo-db-studio-footer.png" alt="DB Studio Media" width={255} height={250} className="h-20 w-auto" />
          </Link>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
          <ul className="space-y-2">
            {footerQuickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/80 transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Legal</h3>
          <ul className="space-y-2">
            {footerLegalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/80 transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Operating Hours</h3>
          <p className="text-sm text-white/80">{site.hours}</p>
          <p className="mt-4 text-sm font-medium uppercase tracking-wide text-white/90">{site.tagline}</p>
          <div className="mt-4">
            <Button href="/booking" variant="outline-light">Book a Strategic Call</Button>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Contact</h3>
          <div className="space-y-2 text-sm text-white/80">
            <p>{site.legalName}</p>
            <p>{site.stateOfIncorporation}</p>
            <p>{site.address}</p>
            <p>
              Email:{" "}
              <a href={`mailto:${site.email}`} className="text-white hover:underline">{site.email}</a>
            </p>
            <p>
              <Link href="/contact-us" className="text-white hover:underline">Contact form</Link>
            </p>
            <p>
              Phone:{" "}
              <a href={`tel:${site.phone.replace(/\D/g, "")}`} className="text-white hover:underline">{site.phone}</a>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-8 lg:flex-row lg:justify-between lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="rounded border border-white/20 px-3 py-1 text-xs text-white/70">
              Secure payments with Stripe
            </span>
            <span className="rounded border border-white/20 px-3 py-1 text-xs text-white/70">
              Secure payments with Square
            </span>
            <span className="rounded border border-white/20 px-3 py-1 text-xs text-white/70">
              🔒 SSL Secured
            </span>
          </div>
          <p className="text-center text-xs text-white/50">
            © 2026 DB Studio Media LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
