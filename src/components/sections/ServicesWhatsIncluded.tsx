import { Reveal } from "@/components/ui/Reveal";

export function ServicesWhatsIncluded({
  items,
}: {
  items: readonly string[];
}) {
  return (
    <section className="services-included bg-white py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 md:px-8 lg:px-12">
        <Reveal direction="up">
          <h2 className="services-included__title">What&apos;s Included</h2>
        </Reveal>

        <Reveal direction="up" delay={100}>
          <div className="services-included__card mt-10 md:mt-12">
            <h3 className="services-included__card-heading">
              What&apos;s Included in the Brand Management Package?
            </h3>
            <ul className="services-included__list mt-8">
              {items.map((item) => (
                <li key={item} className="services-included__item">
                  <span className="services-included__bullet" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
