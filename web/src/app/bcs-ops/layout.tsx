import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Owner panel | Bond Clean Specialist",
  robots: { index: false, follow: false },
};

export default function BcsOpsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
