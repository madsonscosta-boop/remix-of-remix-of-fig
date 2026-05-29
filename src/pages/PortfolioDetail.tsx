import { Link, useParams } from "react-router-dom";
import { getPortfolioItem, portfolioItems, parseTags, type PortfolioItem } from "@/lib/portfolio";
import { usePageMeta } from "@/hooks/usePageMeta";
import NotFound from "./NotFound";

function highlightText(text: string, highlights: string[]) {
  if (!highlights.length) return text;
  const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`(${highlights.map(escape).join("|")})`, "gi");
  return text.split(pattern).map((part, i) =>
    highlights.some((h) => h.toLowerCase() === part.toLowerCase()) ? (
      <span key={i} className="highlight-chip">{part}</span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

function renderSummary(item: PortfolioItem) {
  const highlights = item.highlights ?? [];
  // Split text into sections by labels like "The brief:", "Our approach:", "The result:"
  const labelRegex = /(The brief:|Our approach:|The result:)/g;
  const tokens = item.summary.split(labelRegex).filter((t) => t.trim() !== "");

  // If no labels found, just render plain
  if (!labelRegex.test(item.summary)) {
    return (
      <p className="text-body whitespace-pre-line text-[#0E1020]/80">
        {highlightText(item.summary, highlights)}
      </p>
    );
  }

  const sections: { label: string; body: string }[] = [];
  for (let i = 0; i < tokens.length; i++) {
    if (/The brief:|Our approach:|The result:/.test(tokens[i])) {
      sections.push({ label: tokens[i].replace(":", ""), body: (tokens[i + 1] ?? "").trim() });
      i++;
    }
  }

  return (
    <div className="space-y-8">
      {sections.map((s, idx) => (
        <div key={idx}>
          <h2 className="text-tag text-[#6f64ff] mb-3">
            {s.label}
          </h2>
          <p className="text-body whitespace-pre-line text-[#0E1020]/85">
            {highlightText(s.body, highlights)}
          </p>
        </div>
      ))}
    </div>
  );
}

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
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-12">
        <Link to="/" className="text-minor text-[#0E1020]/70 hover:text-[#0E1020]">← Back</Link>
        <div className="mt-8 flex flex-wrap gap-2">
          {parseTags(item.category).map((tag) => (
            <span key={tag} className="text-tag rounded-full bg-[#6f64ff]/10 px-3 py-1 text-[#6f64ff]">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-title mt-4 text-[#6f64ff]">
          {item.title}
        </h1>
        <div className="mt-3 h-1 w-16 bg-[#6f64ff] rounded-full" />
        <div className="mt-10 max-w-3xl">{renderSummary(item)}</div>
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
              <div key={i} className={`relative overflow-hidden rounded-3xl bg-background ${item.fit === "contain" ? "aspect-video" : "aspect-[9/16]"}`}>
                {src ? (
                  <video className={`h-full w-full ${item.fit === "contain" ? "object-contain" : "object-cover"}`} playsInline muted loop autoPlay preload="metadata" aria-label={`${item.title} — video ${i + 1}`}>
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
        {item.credits && (
          <p className="text-minor mt-6 whitespace-pre-line text-[#0E1020]/60">{item.credits}</p>
        )}
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="text-heading text-brand">Other projects</h2>
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
