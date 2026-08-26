import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { ArrowRight } from "lucide-react";

export default function LatestArticlesSection() {
  // Select featured articles from our blog dataset
  const featuredSlugs = [
    "how-to-watch-nba-games-live-2026",
    "how-to-watch-nfl-games-live-2026",
  ];

  const latestPosts = featuredSlugs
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter(Boolean) as typeof blogPosts;

  // Fallback to all available blog posts
  const displayPosts = latestPosts.length > 0 ? latestPosts : blogPosts;

  return (
    <section className="py-20 bg-[#050607] text-white relative z-10 border-t border-white/10 overflow-hidden">
      {/* Glow background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <span className="inline-block py-1 px-4 rounded-full bg-[#FFB800]/10 border border-[#FFB800]/30 text-[#FFB800] text-xs font-bold tracking-widest uppercase mb-4">
            Guides & News
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Latest Articles
          </h2>
          <p className="text-stone-400 text-base sm:text-lg">
            Stay up to date with the latest IPTV guides, tips, and insights.
          </p>
        </div>

        <div className={`w-full grid gap-8 mb-14 ${displayPosts.length === 2 ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
          {displayPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id} className="block w-full h-full">
              <article className="w-full bg-[#050607] rounded-2xl overflow-hidden flex flex-col group cursor-pointer hover:-translate-y-2 transition-all duration-300 h-full border border-white/10 hover:border-[#FFB800]/50 shadow-xl">
                <div className="h-48 relative overflow-hidden shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={post.title}
                    src={post.coverImage || "/blog/high-quality-iptv-service.webp"}
                  />
                  <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-[#050607] to-transparent"></div>
                  <span className="absolute top-4 left-4 px-3 py-1 bg-black/70 backdrop-blur-md text-white rounded-full text-xs font-bold border border-white/10">
                    {post.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold leading-snug text-white group-hover:text-[#FFB800] transition-colors mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-stone-400 text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">
                    {post.description}
                  </p>
                  <div className="mt-auto text-stone-500 text-xs font-medium flex items-center justify-between border-t border-white/10 pt-4">
                    <span>{post.date}</span>
                    <span className="flex items-center text-[#FFB800] group-hover:translate-x-1 transition-transform font-bold text-sm">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog">
            <button className="bg-white/5 hover:bg-[#FFB800] text-white border border-white/15 hover:border-[#FFB800] px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-300 flex items-center justify-center mx-auto gap-2 shadow-lg">
              View All Articles
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
