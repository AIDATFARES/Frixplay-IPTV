import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";
import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft } from "lucide-react";
import ArticleFAQAccordion from "@/components/blog/ArticleFAQAccordion";
import BlogOfferCard from "@/components/blog/BlogOfferCard";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<import('next').Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return { title: 'Frixplay IPTV – Post Not Found' };
  }

  const seoTitle = post.title.startsWith("Frixplay IPTV") ? post.title : `Frixplay IPTV – ${post.title}`;

  return {
    title: seoTitle,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: seoTitle,
      description: post.description,
      url: `https://www.frixplay.store/blog/${post.slug}`,
      siteName: 'Frixplay IPTV',
      ...(post.coverImage && {
        images: [
          {
            url: post.coverImage,
            width: 1200,
            height: 630,
            alt: post.title,
          }
        ]
      }),
      type: 'article',
      publishedTime: post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: post.description,
      ...(post.coverImage && {
        images: [post.coverImage],
      }),
    }
  };
}

function parseArticleContent(content: string) {
  const faqMatch = content.match(/## Frequently Asked Questions([\s\S]*?)(?=\n## |$)/);
  if (!faqMatch) {
    return { beforeFaq: content, faqs: [], afterFaq: "" };
  }

  const faqBlock = faqMatch[0];
  const faqStartIndex = content.indexOf("## Frequently Asked Questions");
  const beforeFaq = content.substring(0, faqStartIndex);
  const afterFaq = content.substring(faqStartIndex + faqBlock.length);

  const faqItems: { question: string; answer: string }[] = [];
  const qBlocks = faqMatch[1].split(/\n### /).slice(1);

  for (const block of qBlocks) {
    const lines = block.trim().split("\n");
    const question = lines[0].trim();
    const answer = lines.slice(1).join("\n").trim().replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1");
    if (question && answer) {
      faqItems.push({ question, answer });
    }
  }

  return { beforeFaq, faqs: faqItems, afterFaq };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const { beforeFaq, faqs, afterFaq } = parseArticleContent(post.content);

  const beforeFaqParts = beforeFaq.split("[CTA_OFFER_CARD]");
  const afterFaqParts = afterFaq.split("[CTA_OFFER_CARD]");

  const faqJsonLd = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  } : null;

  const markdownComponents = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    h2: ({ node, ...props }: any) => <h2 className="text-2xl font-bold mt-12 mb-6 text-on-surface" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    h3: ({ node, ...props }: any) => <h3 className="text-xl font-semibold mt-8 mb-4 text-on-surface" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    p: ({ node, ...props }: any) => <p className="mb-6 leading-relaxed" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ul: ({ node, ...props }: any) => <ul className="list-disc pl-6 mb-6 space-y-2" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ol: ({ node, ...props }: any) => <ol className="list-decimal pl-6 mb-6 space-y-2" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    a: ({ node, ...props }: any) => <a className="text-[#FFB800] hover:text-[#FFE600] no-underline font-semibold transition-colors" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    blockquote: ({ node, ...props }: any) => <blockquote className="border-l-4 border-primary pl-4 py-1 mb-6 italic bg-surface-container/30 rounded-r" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    table: ({ node, ...props }: any) => <div className="overflow-x-auto mb-8"><table className="w-full text-left border-collapse" {...props} /></div>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    th: ({ node, ...props }: any) => <th className="border-b border-outline-variant py-3 px-4 font-semibold text-on-surface bg-surface-container" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    td: ({ node, ...props }: any) => <td className="border-b border-outline-variant/30 py-3 px-4" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    img: ({ node, alt, src, ...props }: any) => (
      <span className="my-8 flex flex-col items-center">
        <img src={src} alt={alt} className="rounded-xl shadow-lg max-w-full" {...props} />
        {alt && <span className="text-sm text-center block mt-2 opacity-70">{alt}</span>}
      </span>
    ),
  };

  return (
    <main className="flex-grow pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-[1024px] mx-auto w-full relative z-10 text-format-blog">
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <Link href="/blog" className="inline-flex items-center text-primary hover:text-primary-container mb-8 transition-colors group font-semibold">
        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Blog
      </Link>

      <article className="glass-panel rounded-2xl p-6 md:p-12">
        <header className="mb-10 text-center">
          <span className="inline-block px-3 py-1 bg-tertiary/20 text-tertiary rounded-full font-label-caps text-label-caps mb-4 w-max border border-tertiary/30">
            {post.category}
          </span>
          <h1 className="font-display-md md:font-display-lg text-display-md md:text-display-lg text-on-surface mb-6">
            {post.title.replace(/^Frixplay IPTV\s*[–—-]\s*/, "")}
          </h1>
          <div className="flex items-center justify-center gap-4 text-on-surface-variant font-label-lg text-label-lg opacity-80">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.author}</span>
          </div>
        </header>

        {post.coverImage && (
          <div className="mb-12 rounded-xl overflow-hidden shadow-2xl relative w-full h-[300px] md:h-[500px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="prose prose-invert prose-lg max-w-none text-on-surface-variant 
          prose-headings:text-on-surface prose-headings:font-headline-md 
          prose-a:text-primary hover:prose-a:text-primary-container
          prose-strong:text-on-surface prose-strong:font-bold
          prose-code:text-secondary prose-code:bg-surface-container/50 prose-code:px-1 prose-code:rounded
          prose-pre:bg-surface-container prose-pre:border prose-pre:border-outline-variant
          prose-blockquote:border-l-primary prose-blockquote:bg-surface-container/30 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:not-italic
          prose-img:rounded-xl prose-img:shadow-lg
          prose-th:text-on-surface prose-th:border-b prose-th:border-outline-variant prose-th:py-2
          prose-td:border-b prose-td:border-outline-variant/50 prose-td:py-2"
        >
          {beforeFaqParts.map((part, idx) => (
            <React.Fragment key={`before-${idx}`}>
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                {part}
              </ReactMarkdown>
              {idx < beforeFaqParts.length - 1 && <BlogOfferCard />}
            </React.Fragment>
          ))}

          {faqs.length > 0 && (
            <div className="mt-12 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-on-surface">Frequently Asked Questions</h2>
              <ArticleFAQAccordion faqs={faqs} />
            </div>
          )}

          {afterFaqParts.map((part, idx) => (
            <React.Fragment key={`after-${idx}`}>
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                {part}
              </ReactMarkdown>
              {idx < afterFaqParts.length - 1 && <BlogOfferCard />}
            </React.Fragment>
          ))}
        </div>
      </article>



      {/* Related Articles Section */}
      {(() => {
        const relatedPosts = blogPosts
          .filter((p) => p.slug !== post.slug)
          .slice(0, 3);
        if (relatedPosts.length === 0) return null;
        return (
          <section className="mt-16 pt-12 border-t border-outline-variant/30">
            <h2 className="font-headline-lg text-2xl font-bold text-on-surface mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relPost) => (
                <Link href={`/blog/${relPost.slug}`} key={relPost.id}>
                  <article className="glass-panel rounded-xl overflow-hidden flex flex-col group cursor-pointer hover:-translate-y-1 transition-transform duration-300 h-full border border-white/10 hover:border-primary/50">
                    <div className="h-40 relative overflow-hidden shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        alt={relPost.title}
                        src={relPost.coverImage || "/blog/high-quality-iptv-service.webp"}
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-grow bg-surface-container-lowest/50">
                      <span className="text-xs text-tertiary font-bold mb-2">{relPost.category}</span>
                      <h3 className="font-title-md text-base font-bold text-on-surface mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {relPost.title}
                      </h3>
                      <p className="text-xs text-on-surface-variant line-clamp-2 mt-auto opacity-70">
                        {relPost.date}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        );
      })()}
    </main>
  );
}

