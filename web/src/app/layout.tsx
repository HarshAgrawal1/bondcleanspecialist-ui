import type { Metadata } from "next";
import { QuoteProvider } from "@/components/QuoteModal";
import { SEO_KEYWORDS } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bond Clean Specialist | Cleaning for Homes and Businesses",
  description:
    "Residential and commercial cleaning across Brisbane, the Gold Coast and Logan. Bond cleaning, spring cleaning, carpets, ovens and commercial work, quoted to the property.",
  keywords: [...SEO_KEYWORDS],
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Source+Sans+3:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-full flex-col">
        <QuoteProvider>{children}</QuoteProvider>
      </body>
    </html>
  );
}
