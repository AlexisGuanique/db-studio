import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

interface Breadcrumb {
  label: string;
  href?: string;
}

export function ServicesHero({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[];
}) {
  return (
    <section className="services-hero relative flex min-h-[min(52vh,480px)] items-center justify-center overflow-hidden py-14 md:min-h-[min(56vh,520px)] md:py-16">
      <Image
        src="/images/who-we-are-studio.jpg"
        alt=""
        fill
        priority
        className="services-hero__bg object-cover object-center"
        sizes="100vw"
        aria-hidden
      />
      <div className="services-hero__overlay absolute inset-0" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 text-center md:px-8 lg:px-12">
        <Reveal immediate direction="up">
          <nav
            className="mb-5 text-sm font-medium text-white/80"
            aria-label="Breadcrumb"
          >
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.label}>
                {i > 0 && <span className="mx-2 text-white/50">/</span>}
                {crumb.href ? (
                  <Link href={crumb.href} className="transition hover:text-cream">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-cream">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>

          <p className="services-hero__pill mx-auto inline-block rounded-full border-2 border-white px-4 py-1.5 text-xs font-semibold text-white sm:text-sm md:px-5 md:py-2">
            It is order, clarity, direction, and real growth.
          </p>

          <h1 className="mt-5 text-2xl font-semibold uppercase leading-tight tracking-wide text-white sm:text-3xl md:text-4xl">
            Brand Management Work
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/90 md:text-base">
            Brand Management is a comprehensive brand and growth support service
            for businesses that are already operating but know they can do better.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 md:mt-8 md:gap-4">
            <Button href="/booking" variant="primary" interactive>
              Book a Strategy Call
            </Button>
            <Button href="/memberships" variant="outline" interactive>
              View Program Details
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
