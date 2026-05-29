import { Link } from "react-router-dom";
import { portfolioItems, parseTags } from "@/lib/portfolio";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function Trabalhos() {
  usePageMeta("Works — FIG", "FIG portfolio: branding, content, social, and paid media.");
  return (
    <>
      <section className="bg-cream px-6 pt-20 pb-12 md:pt-28">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-tag text-brand/70">Portfolio</p>
          <h1 className="text-title mt-4 text-brand">
            Brands that <span className="italic">showed up</span>.
          </h1>
          <p className="text-body mx-auto mt-6 max-w-2xl text-brand/80">
            A selection of projects where we helped brands build presence, community, and results on social media.
          </p>
        </div>
      </section>

      <section className="bg-cream px-6 pb-20 pt-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2 md:gap-5">
          {portfolioItems.map((img) => (
            <Link
              key={img.slug}
              to={`/portfolio/${img.slug}`}
              className={`group overflow-hidden rounded-2xl ${img.fit === "contain" ? "bg-transparent" : "bg-background"} ${img.cls}`}
              aria-label={`View project: ${img.title}`}
            >
              {img.coverVideo ? (
                <video src={img.coverVideo} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" playsInline muted loop autoPlay preload="metadata" aria-label={img.alt} />
              ) : (
                <img src={img.src} alt={img.alt} loading="lazy" className={`h-full w-full ${img.fit === "contain" ? "object-contain p-6" : "object-cover"} transition duration-500 group-hover:scale-105`} />
              )}
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-cream px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-heading text-brand">All projects</h2>
          <div className="mt-10 divide-y divide-brand/15 border-t border-brand/15">
            {portfolioItems.map((p) => (
              <Link key={p.slug} to={`/portfolio/${p.slug}`} className="group grid grid-cols-1 gap-4 py-8 transition md:grid-cols-12 md:items-center">
                <p className="text-heading text-brand md:col-span-4">{p.title}</p>
                <div className="flex flex-wrap gap-2 md:col-span-6">
                  {parseTags(p.category).map((tag) => (
                    <span key={tag} className="text-tag rounded-full bg-brand/10 px-3 py-1 text-brand/80">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-minor text-brand transition group-hover:translate-x-1 md:col-span-2 md:text-right">View project →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand px-6 py-20 text-primary-foreground">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-title">Want to be the next case?</h2>
          <Link to="/contact" className="text-minor mt-10 inline-flex rounded-full border border-primary-foreground/70 px-8 py-3 transition hover:bg-primary-foreground/10">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
