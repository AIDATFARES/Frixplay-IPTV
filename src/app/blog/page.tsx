"use client";

import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { ArrowRight, Mail } from "lucide-react";

export default function Blog() {
  const featuredPost = blogPosts[0];
  const gridPosts = blogPosts.slice(1);

  return (
    <main className="flex-grow pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto w-full relative z-10">
      {/* Header */}
      <header className="mb-16 text-center md:text-left">
        <h1 className="font-display-lg text-display-lg text-on-surface mb-4">Latest News &amp; Streaming Tips</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Stay updated with the latest in 4K streaming technology, new channel additions, and guides to optimize your Flash 4K experience.
        </p>
      </header>

      {/* Featured Post */}
      {featuredPost && (
        <section className="mb-24">
          <Link href={`/blog/${featuredPost.slug}`}>
            <div className="glass-panel rounded-2xl overflow-hidden flex flex-col md:flex-row group cursor-pointer hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500">
              <div className="md:w-3/5 h-64 md:h-96 relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  alt={featuredPost.title}
                  src={featuredPost.coverImage || ""}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent md:bg-gradient-to-r md:from-transparent md:to-surface-container-lowest opacity-80 md:opacity-100"></div>
              </div>
              <div className="md:w-2/5 p-8 md:p-12 flex flex-col justify-center z-10 relative bg-surface-container-lowest md:bg-transparent">
                <span className="inline-block px-3 py-1 bg-tertiary/20 text-tertiary rounded-full font-label-caps text-label-caps mb-4 w-max border border-tertiary/30">
                  {featuredPost.category}
                </span>
                <h3 className="font-headline-lg text-headline-lg text-on-surface mb-4 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 line-clamp-3">
                  {featuredPost.description}
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <span className="text-on-surface font-title-md text-title-md">Read Article</span>
                  <ArrowRight className="text-primary w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Blog Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {gridPosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.id}>
            <article className="glass-panel rounded-xl overflow-hidden flex flex-col group cursor-pointer hover:-translate-y-2 transition-transform duration-300 h-full">
              <div className="h-48 relative overflow-hidden shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={post.title}
                  src={post.coverImage || ""}
                />
                <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-surface-container-lowest to-transparent"></div>
                <span className="absolute top-4 left-4 px-2 py-1 bg-surface-container/80 backdrop-blur-md text-on-surface rounded font-label-caps text-label-caps border border-white/10">
                  {post.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow bg-surface-container-lowest/50">
                <h3 className="font-title-md text-title-md text-on-surface mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 line-clamp-2">
                  {post.description}
                </p>
                <div className="mt-auto text-on-surface-variant font-label-caps text-label-caps opacity-60">
                  {post.date} • 5 min read
                </div>
              </div>
            </article>
          </Link>
        ))}
      </section>

      {/* Newsletter Signup */}
      <section className="glass-panel rounded-2xl p-8 md:p-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50 pointer-events-none"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <Mail className="w-10 h-10 text-tertiary mb-4 mx-auto" />
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Never Miss an Update</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
            Subscribe to our newsletter for the latest streaming tips, platform updates, and exclusive reseller offers delivered straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center" onSubmit={(e) => e.preventDefault()}>
            <input
              className="bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 font-body-lg text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-full sm:w-96 transition-all"
              placeholder="Enter your email address"
              type="email"
            />
            <button
              className="bg-gradient-to-r from-primary-container to-secondary-container text-white font-title-md text-title-md px-8 py-3 rounded-lg whitespace-nowrap hover:opacity-90 transition-opacity"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
