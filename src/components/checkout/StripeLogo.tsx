import Image from "next/image";

const LOGO_WIDTH = 293;
const LOGO_HEIGHT = 122;

export function StripeLogo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <div className="flex shrink-0 justify-center">
      <Image
        src="/images/stripe-logo.png"
        alt="Stripe"
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        className={`max-w-none object-contain ${className}`}
        style={{ width: "auto" }}
        priority
      />
    </div>
  );
}
