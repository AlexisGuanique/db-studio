import Image from "next/image";
import { PartnershipVideo } from "@/components/sections/PartnershipVideo";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import {
  partnershipConnecting,
  partnershipExpanding,
  partnershipIntro,
  partnershipMediaPartner,
} from "@/lib/partnership";

export function PartnershipContent() {
  return (
    <>
      <section className="partnership-intro bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="partnership-intro__layout grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal direction="left">
              <div className="partnership-intro__content lg:py-2">
                <SectionTitle>{partnershipIntro.title}</SectionTitle>
                <div className="partnership-intro__text mt-6 space-y-4">
                  {partnershipIntro.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-8">
                  <Button
                    href={partnershipIntro.instagramHref}
                    variant="outline"
                    interactive
                    external
                  >
                    Follow Us on Instagram
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={120}>
              <PartnershipVideo
                src={partnershipIntro.video.src}
                poster={partnershipIntro.video.poster}
                ariaLabel={partnershipIntro.video.ariaLabel}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="partnership-media bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <Reveal direction="up">
            <h2 className="partnership-section__title">
              {partnershipMediaPartner.title}
            </h2>
          </Reveal>

          <div className="partnership-media__layout mt-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal direction="left" delay={80}>
              <div className="partnership-media__logo-wrap">
                <Image
                  src={partnershipMediaPartner.logo.src}
                  alt={partnershipMediaPartner.logo.alt}
                  width={partnershipMediaPartner.logo.width}
                  height={partnershipMediaPartner.logo.height}
                  className="partnership-media__logo"
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
              </div>
            </Reveal>

            <Reveal direction="right" delay={120}>
              <div className="partnership-media__text space-y-4">
                {partnershipMediaPartner.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="partnership-expanding bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="partnership-expanding__layout grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal direction="left">
              <h2 className="partnership-section__title">
                {partnershipExpanding.title}
              </h2>
              <div className="partnership-expanding__text mt-6 space-y-4">
                {partnershipExpanding.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal direction="right" delay={120}>
              <PartnershipVideo
                src={partnershipExpanding.video.src}
                poster={partnershipExpanding.video.poster}
                ariaLabel={partnershipExpanding.video.ariaLabel}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="partnership-connecting bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <Reveal direction="up">
            <h2 className="partnership-section__title">
              {partnershipConnecting.title}
            </h2>
            <p className="partnership-connecting__intro mt-6 max-w-3xl">
              {partnershipConnecting.intro}
            </p>
          </Reveal>

          <div className="partnership-connecting__list mt-12 space-y-8">
            {partnershipConnecting.items.map((item, index) => (
              <Reveal key={item.text.slice(0, 40)} direction="up" delay={index * 70}>
                <div className="partnership-connecting__row">
                  <div className="partnership-connecting__icon-wrap">
                    <Image
                      src={item.icon}
                      alt=""
                      width={300}
                      height={145}
                      className="partnership-connecting__icon"
                      aria-hidden
                    />
                  </div>
                  <p
                    className={`partnership-connecting__text${
                      index === partnershipConnecting.items.length - 1
                        ? " partnership-connecting__text--goal"
                        : ""
                    }`}
                  >
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
