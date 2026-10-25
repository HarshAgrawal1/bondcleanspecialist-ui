import type { Metadata } from "next";
import { Merriweather, Source_Sans_3 } from "next/font/google";
import { QuoteProvider } from "@/components/QuoteModal";
import "./globals.css";

const merriweather = Merriweather({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bond Clean Specialist | Cleaning for Homes and Businesses",
  description:
    "Residential and commercial cleaning across Brisbane and the Gold Coast. Bond cleaning, spring cleaning, carpets, ovens and commercial work, quoted to the property.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${merriweather.variable} ${sourceSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col"><QuoteProvider>{children}</QuoteProvider></body>
    </html>
  );
}
