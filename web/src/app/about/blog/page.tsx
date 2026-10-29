import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageHero } from "@/components/Sections";
import { BLOG_POSTS } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Cleaning tips & guides | Bond Clean Specialist",
  description: "Bond cleaning checklists, preparation tips and guides for Brisbane and Gold Coast rentals and homes.",
};

export default function BlogIndexPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          image="/images/scene-vacuum.png"
          kicker="About · Blog"
          title="Cleaning tips and moving-out guides"
          lede="Practical notes on bond cleans, preparation and what to expect — written for Brisbane and Gold Coast properties."
        />
        <section className="bg-white py-[76px]">
          <div className="mx-auto w-[min(720px,calc(100%-32px))] space-y-5">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/about/blog/${post.slug}`}
                className="block rounded-xl border border-line bg-sky p-6 transition hover:border-navy/25"
              >
                <p className="text-[0.78rem] font-bold uppercase tracking-wide text-slate-500">{post.date}</p>
                <h2 className="mt-2 font-serif text-[1.35rem] leading-snug text-navy">{post.title}</h2>
                <p className="mt-2 text-[1.02rem] leading-relaxed text-slate-600">{post.excerpt}</p>
                <span className="mt-4 inline-block text-[0.86rem] font-bold text-navy">Read more →</span>
              </Link>
            ))}
          </div>
          <div className="mx-auto mt-10 w-[min(720px,calc(100%-32px))]">
            <Link href="/about" className="font-bold text-navy underline underline-offset-2 hover:text-navy-deep">
              ← Back to About
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
