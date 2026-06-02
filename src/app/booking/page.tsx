import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Strategy Call",
};

export default function BookingPage() {
  return (
    <>
      <PageHero
        title="Book a Strategy Call"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Book a Strategy Call" },
        ]}
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-xl px-4 lg:px-8">
          <p className="text-text-secondary">
            Schedule a strategy call with DB Studio to explore how we can support
            your brand with structured growth, production, and strategic
            positioning.
          </p>

          <form className="mt-8 space-y-4" action="#" method="post">
            <div>
              <label htmlFor="fullName" className="mb-1 block text-sm font-medium">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                className="w-full rounded-[5px] border-2 border-burgundy/20 px-4 py-3 focus:border-burgundy focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="bookingEmail" className="mb-1 block text-sm font-medium">
                Email
              </label>
              <input
                id="bookingEmail"
                name="email"
                type="email"
                required
                className="w-full rounded-[5px] border-2 border-burgundy/20 px-4 py-3 focus:border-burgundy focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1 block text-sm font-medium">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full rounded-[5px] border-2 border-burgundy/20 px-4 py-3 focus:border-burgundy focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="company" className="mb-1 block text-sm font-medium">
                Company / Brand
              </label>
              <input
                id="company"
                name="company"
                type="text"
                className="w-full rounded-[5px] border-2 border-burgundy/20 px-4 py-3 focus:border-burgundy focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="interest" className="mb-1 block text-sm font-medium">
                Area of Interest
              </label>
              <select
                id="interest"
                name="interest"
                className="w-full rounded-[5px] border-2 border-burgundy/20 px-4 py-3 focus:border-burgundy focus:outline-none"
              >
                <option value="brand-management">Brand Management</option>
                <option value="studio-membership">Studio Membership</option>
                <option value="collaborations">Collaborations</option>
                <option value="partnership">Partnership</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="bookingMessage" className="mb-1 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="bookingMessage"
                name="message"
                rows={4}
                className="w-full rounded-[5px] border-2 border-burgundy/20 px-4 py-3 focus:border-burgundy focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-[5px] bg-burgundy px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#4a1619]"
            >
              Request Strategy Call
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-text-secondary">
            Or reach us directly at{" "}
            <a href={`mailto:${site.email}`} className="text-burgundy hover:underline">
              {site.email}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
