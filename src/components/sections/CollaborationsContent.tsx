import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import {
  collaborationBenefits,
  collaborationBrands,
  collaborationFormats,
  collaborationVoices,
  collaborationsIntro,
} from "@/lib/collaborations";

export function CollaborationsContent() {
  return (
    <>
      <section className="collaborations-intro bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="collaborations-intro__layout grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal direction="left">
              <div className="collaborations-intro__image section-image mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none">
                <Image
                  src="/images/who-we-are-studio.jpg"
                  alt="DB Studio podcast and recording setup with professional microphones"
                  width={1024}
                  height={677}
                  className="section-image__photo aspect-[3/2] w-full"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              </div>
            </Reveal>

            <Reveal direction="right" delay={120}>
              <div className="collaborations-intro__content lg:py-2">
                <SectionTitle>Collaborations That Build Visibility</SectionTitle>
                <div className="collaborations-intro__text mt-6 space-y-4">
                  {collaborationsIntro.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="collaborations-brands bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <Reveal direction="up">
            <h2 className="collaborations-brands__title">
              Brand Connected Through Campaigns
            </h2>
            <div className="collaborations-brands__grid mt-10">
              {collaborationBrands.map((brand, index) => (
                <Reveal key={brand.name} direction="up" delay={index * 70}>
                  <div className="collaborations-brands__logo-card">
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      width={brand.width}
                      height={brand.height}
                      className="collaborations-brands__logo"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="collaborations-brands__caption mt-8 text-center">
              Partnering with top brands and growth-focused projects across the
              United States.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="collaborations-formats bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <Reveal direction="up">
            <h2 className="collaborations-formats__title">Collaborations Formats</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {collaborationFormats.map((format, index) => (
                <Reveal key={format.title} direction="up" delay={index * 80}>
                  <div className="collaborations-formats__card">
                    <h3 className="collaborations-formats__card-title">
                      {format.title}
                    </h3>
                    <p className="collaborations-formats__card-text">
                      {format.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="collaborations-voices bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="collaborations-voices__layout">
            <Reveal direction="left" className="collaborations-voices__reveal">
              <div className="collaborations-voices__image section-image">
                <Image
                  src="/images/collaborations/connecting-voices.png"
                  alt="Professional creator in a structured brand collaboration setting"
                  width={788}
                  height={518}
                  className="section-image__photo collaborations-voices__photo"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              </div>
            </Reveal>

            <Reveal direction="right" delay={100} className="collaborations-voices__reveal">
              <div className="collaborations-voices__panel">
                <SectionTitle light>Connecting Brands with the Right Voices</SectionTitle>
                <p className="collaborations-voices__lead mt-4">
                  DB Studio Media connects brands with:
                </p>
                <ul className="collaborations-voices__list mt-6">
                  {collaborationVoices.map((item) => (
                    <li key={item} className="collaborations-voices__item">
                      <span className="collaborations-voices__mark" aria-hidden>
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="collaborations-benefits bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <Reveal direction="up">
            <h2 className="collaborations-benefits__title">
              Why Brand Collaborate With DB Studio LLC
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {collaborationBenefits.map((benefit, index) => (
                <Reveal key={benefit.title} direction="up" delay={index * 70}>
                  <div className="collaborations-benefits__card">
                    <span className="collaborations-benefits__icon" aria-hidden>
                      {index + 1}
                    </span>
                    <h3 className="collaborations-benefits__card-title">
                      {benefit.title}
                    </h3>
                    <p className="collaborations-benefits__card-text">
                      {benefit.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="collaborations-cta bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-8 lg:px-12">
          <Reveal direction="up">
            <h2 className="collaborations-cta__title">
              Let&apos;s Build Strategic Collaborations
            </h2>
            <p className="collaborations-cta__text mt-4">
              If you&apos;re ready to elevate your brand through powerful
              collaborations, we&apos;re here to make it happen.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:gap-4">
              <Button href="/booking" variant="primary" interactive>
                Book a Strategy Call
              </Button>
              <Button href="/contact-us" variant="outline" interactive>
                Contact us
              </Button>
              <Button href="/memberships" variant="outline" interactive>
                Explore the Studio
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
