import type { Metadata } from "next";
import { PosPageClient } from "@/components/pos/PosPageClient";

export const metadata: Metadata = {
  title: "Point of Sale",
  robots: { index: false, follow: false },
};

export default function POSPage() {
  return <PosPageClient />;
}
