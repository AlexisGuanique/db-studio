import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function ContactUsPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold uppercase text-burgundy">
              Get in touch with us!
            </h2>
            <p className="mt-4 text-text-secondary">
              Ready to take your brand to the next level? Connect with our team
              to explore a strategic approach built around clarity, production,
              and measurable growth.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border-2 border-burgundy/20 bg-cream p-6">
              <h3 className="text-sm font-semibold uppercase text-burgundy">
                Phone Numbers
              </h3>
              <a
                href={`tel:${site.phone.replace(/\D/g, "")}`}
                className="mt-2 block text-lg font-medium hover:text-burgundy"
              >
                {site.phone}
              </a>
            </div>
            <div className="rounded-lg border-2 border-burgundy/20 bg-cream p-6">
              <h3 className="text-sm font-semibold uppercase text-burgundy">
                Email
              </h3>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 block text-lg font-medium hover:text-burgundy"
              >
                {site.email}
              </a>
            </div>
            <div className="rounded-lg border-2 border-burgundy/20 bg-cream p-6">
              <h3 className="text-sm font-semibold uppercase text-burgundy">
                Address
              </h3>
              <p className="mt-2 text-text-secondary">
                Orlando, Florida — United States
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Button href="/booking">Book a Strategy Call</Button>
            <Button href="/memberships" variant="outline">
              Apply for Studio Membership
            </Button>
          </div>

          <div className="mt-16 max-w-2xl">
            <h3 className="text-xl font-semibold uppercase text-burgundy">
              Contact Form
            </h3>
            <p className="mt-2 text-text-secondary">
              At DB Studio Media, we specialize in helping brands grow online
              through creative digital solutions and strategic media services.
              Let&apos;s work together to turn your ideas into impactful results.
            </p>

            <form className="mt-8 space-y-4" action="#" method="post">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-[5px] border-2 border-burgundy/20 bg-white px-4 py-3 focus:border-burgundy focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-[5px] border-2 border-burgundy/20 bg-white px-4 py-3 focus:border-burgundy focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-[5px] border-2 border-burgundy/20 bg-white px-4 py-3 focus:border-burgundy focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="rounded-[5px] bg-burgundy px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#4a1619]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
