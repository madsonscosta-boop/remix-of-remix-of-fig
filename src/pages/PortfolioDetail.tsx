import { Link, useParams } from "react-router-dom";
import { getPortfolioItem, portfolioItems } from "@/lib/portfolio";
import { usePageMeta } from "@/hooks/usePageMeta";
import NotFound from "./NotFound";

export default function PortfolioDetail() {
  const { slug = "" } = useParams();
  const item = getPortfolioItem(slug);
  usePageMeta(
    item ? `${item.title} — FIG` : "Portfolio — FIG",
    item?.summary ?? "FIG portfolio project."
  );

  if (!item) return <NotFound />;

  const others = portfolioItems.filter((p) => p.slug !== item.slug).slice(0, 4);

  return (
    <article className="bg-[#fff4f7]">
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10">
        <Link to="/" className="text-sm text-[#0E1020]/70 hover:text-[#0E1020]">← Back</Link>
        <p className="mt-6 font-display text-sm uppercase tracking-widest text-[#0E1020]/60 whitespace-pre-line">{item.category}</p>
        <h1 className="mt-3 font-display text-5xl leading-tight text-[#0E1020] md:text-6xl">{item.title}</h1>
        <p className="mt-4 whitespace-pre-line text-lg text-[#0E1020]/80 font-sans">{item.summary}</p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        {item.layout === "video-image-video" && item.videos && item.centerImage ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 items-center">
            <div className="relative aspect-[9/16] overflow-hidden rounded-3xl bg-background">
              <video className="h-full w-full object-cover" playsInline muted loop autoPlay preload="metadata"><source src={item.videos[0]} type="video/mp4" /></video>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-background">
              <img src={item.centerImage} alt={item.title} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="relative aspect-[9/16] overflow-hidden rounded-3xl bg-background">
              <video className="h-full w-full object-cover" playsInline muted loop autoPlay preload="metadata"><source src={item.videos[1]} type="video/mp4" /></video>
            </div>
          </div>
        ) : item.images && item.images.length > 0 ? (
          <div className={`grid grid-cols-1 gap-4 ${item.images.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"}`}>
            {item.images.map((src, i) => (
              <div key={i} className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-background">
                <img src={src} alt={`${item.title} — image ${i + 1}`} className="h-full w-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        ) : item.videos && item.videos.length === 1 ? (
          <div className="flex justify-center">
            <div className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-3xl bg-black">
              <video className="h-full w-full object-contain" playsInline muted loop autoPlay preload="metadata" controls><source src={item.videos[0]} type="video/mp4" /></video>
            </div>
          </div>
        ) : (
          <div className={`grid grid-cols-1 gap-4 ${item.videos && item.videos.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"}`}>
            {(item.videos ?? [null, null, null]).map((src, i) => (
              <div key={i} className="relative aspect-[9/16] overflow-hidden rounded-3xl bg-background">
                {src ? (
                  <video className="h-full w-full object-cover" playsInline muted loop autoPlay preload="metadata" aria-label={`${item.title} — video ${i + 1}`}>
                    <source src={src} type="video/mp4" />
                  </video>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-brand/5 text-xs uppercase tracking-widest text-brand/50">
                    Video {i + 1}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="font-display text-2xl text-brand">Other projects</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          {others.map((p) => (
            <Link key={p.slug} to={`/portfolio/${p.slug}`} className="group overflow-hidden rounded-2xl bg-background">
              <img src={p.src} alt={p.alt} loading="lazy" className="aspect-[4/3] h-full w-full object-cover transition duration-500 group-hover:scale-105" />
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
