import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { QuoteButton } from "@/components/QuoteModal";
import { PageHero } from "@/components/Sections";
import { BLOG_POSTS, getPost } from "@/lib/blog";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: `${post.title} | Bond Clean Specialist`, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <Header />
      <main>
        <PageHero
          image="/images/bond-living.jpg"
          kicker={`Blog · ${post.date}`}
          title={post.title}
          lede={post.excerpt}
        />
        <section className="bg-white py-[76px]">
          <div className="mx-auto w-[min(720px,calc(100%-32px))]">
            {post.sections.map((s, i) => (
              <div key={s.heading ?? i} className={i === 0 ? "" : "mt-10"}>
                {s.heading && (
                  <h2 className="mb-3 font-serif text-[1.35rem] font-semibold leading-snug text-navy">{s.heading}</h2>
                )}
                {s.paras.map((p) => (
                  <p key={p.slice(0, 48)} className="mt-3 text-[1.05rem] leading-relaxed text-slate-700 first:mt-0">
                    {p}
                  </p>
                ))}
              </div>
            ))}
            <QuoteButton className="mt-10 inline-block rounded-lg bg-gold px-5 py-3 font-bold text-navy hover:bg-gold-deep">
              Get a free quote
            </QuoteButton>
            <p className="mt-6">
              <Link href="/about/blog" className="font-bold text-navy underline underline-offset-2 hover:text-navy-deep">
                ← All cleaning tips
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
