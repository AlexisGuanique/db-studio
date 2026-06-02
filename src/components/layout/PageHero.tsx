import Link from "next/link";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  breadcrumbs?: Breadcrumb[];
}

export function PageHero({ title, breadcrumbs }: PageHeroProps) {
  return (
    <section className="bg-cream py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-4 text-sm text-text-secondary" aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.label}>
                {i > 0 && <span className="mx-2">/</span>}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-burgundy">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-burgundy">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-3xl font-semibold uppercase tracking-wide text-burgundy md:text-4xl lg:text-5xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
