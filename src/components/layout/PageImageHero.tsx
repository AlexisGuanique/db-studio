import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageImageHeroProps {
  title: string;
  breadcrumbs: Breadcrumb[];
  imageSrc?: string;
}

export function PageImageHero({
  title,
  breadcrumbs,
  imageSrc = "/images/who-we-are-studio.jpg",
}: PageImageHeroProps) {
  return (
    <section className="page-image-hero services-hero relative flex min-h-[min(40vh,360px)] items-center justify-center overflow-hidden py-12 md:min-h-[min(44vh,400px)] md:py-14">
      <Image
        src={imageSrc}
        alt=""
        fill
        priority
        className="services-hero__bg object-cover object-center"
        sizes="100vw"
        aria-hidden
      />
      <div className="services-hero__overlay absolute inset-0" aria-hidden />

      <div className="page-image-hero__content relative z-10 mx-auto w-full max-w-7xl px-6 md:px-8 lg:px-12">
        <Reveal immediate direction="up">
          <h1 className="page-image-hero__title text-3xl font-semibold uppercase tracking-wide text-white md:text-4xl lg:text-5xl">
            {title}
          </h1>
          <nav
            className="page-image-hero__breadcrumb mt-4 text-sm text-white/80 md:text-base"
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
        </Reveal>
      </div>
    </section>
  );
}
