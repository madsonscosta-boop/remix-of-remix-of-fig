import { Link, useParams } from "react-router-dom";
import { getPortfolioItem, portfolioItems, parseTags, type PortfolioItem } from "@/lib/portfolio";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Play, TrendingUp, Eye, Users, Share2, Euro, Sparkles } from "lucide-react";
import NotFound from "./NotFound";

const METRIC_ICONS = {
  play: Play,
  trend: TrendingUp,
  eye: Eye,
  users: Users,
  share: Share2,
  euro: Euro,
  spark: Sparkles,
} as const;

function MetricsBlock({ metrics }: { metrics: NonNullable<PortfolioItem["metrics"]> }) {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <div className="mb-8 flex items-center gap-3">
        <span className="h-px flex-1 bg-[#6f64ff]/20" />
        <span className="text-tag text-[#6f64ff]">The numbers</span>
        <span className="h-px flex-1 bg-[#6f64ff]/20" />
      </div>
      <div className="relative overflow-hidden rounded-[2rem] border border-[#6f64ff]/15 bg-gradient-to-br from-white via-[#f5f3ff] to-[#ece9ff] p-8 md:p-12 shadow-[0_30px_80px_-40px_rgba(111,100,255,0.45)]">
        <div className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full bg-[#6f64ff]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-[#4031ff]/15 blur-3xl" />
        <div
          className={`relative grid gap-10 grid-cols-1 sm:grid-cols-2 ${
            metrics.length === 3 ? "md:grid-cols-3" : metrics.length === 4 ? "md:grid-cols-4" : metrics.length === 2 ? "md:grid-cols-2" : "md:grid-cols-5"
          }`}
        >
          {metrics.map((m, i) => {
            const Icon = METRIC_ICONS[m.icon] ?? Sparkles;
            return (
              <div
                key={i}
                className={`group relative flex flex-col items-start gap-4 px-2 md:px-6 ${
                  i !== 0 ? "md:border-l md:border-[#6f64ff]/15" : ""
                }`}
              >
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6f64ff] to-[#4031ff] text-white shadow-lg shadow-[#6f64ff]/30 transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-6deg]">
                  <Icon className="h-7 w-7" strokeWidth={2.25} />
                </span>
                <div className="flex flex-col">
                  <span className="bg-gradient-to-r from-[#4031ff] to-[#6f64ff] bg-clip-text text-5xl md:text-6xl font-semibold leading-none tracking-tight text-transparent">
                    {m.value}
                  </span>
                  <span className="text-tag mt-3 text-[#0E1020]/60">{m.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


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

      {item.metrics && item.metrics.length > 0 && <MetricsBlock metrics={item.metrics} />}



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
