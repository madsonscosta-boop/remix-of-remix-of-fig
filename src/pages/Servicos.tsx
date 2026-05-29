import { usePageMeta } from "@/hooks/usePageMeta";

const services = [
  { t: "Video", d: "From idea to final cut. Organic content, UGC, and ads built to perform in the first 3 seconds.", items: ["Creative direction", "4K production", "Editing + motion", "UGC at scale"] },
  { t: "Paid Media", d: "Daily management with funnel modeling, weekly creative testing, and transparent dashboards.", items: ["Meta Ads", "Google Ads", "TikTok / YouTube", "Weekly reports"] },
  { t: "Brand Strategy", d: "Positioning, offer, and copywriting. Creativity works best when it starts with a good question.", items: ["Audience research", "Positioning", "Offer + copy", "Conversion funnel"] },
];

export default function Servicos() {
  usePageMeta("Services — FIG", "Video, paid media, and content strategy.");
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <p className="text-tag text-brand-glow">Services</p>
      <h1 className="text-title mt-3 max-w-3xl">
        Everything your brand needs to <span className="italic">become the conversation</span>.
      </h1>

      <div className="mt-20 space-y-px overflow-hidden rounded-3xl border border-border">
        {services.map((s, i) => (
          <article key={s.t} className="grid gap-8 bg-card p-10 md:grid-cols-[1fr_2fr] md:p-14">
            <div>
              <p className="text-minor text-muted-foreground">0{i + 1}</p>
              <p className="text-heading mt-2">{s.t}</p>
            </div>
            <div>
              <p className="text-body text-foreground/85">{s.d}</p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {s.items.map((it) => (
                  <li key={it} className="text-minor flex items-center gap-2 text-muted-foreground">
                    <span className="h-1 w-1 rounded-full bg-brand-glow" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
