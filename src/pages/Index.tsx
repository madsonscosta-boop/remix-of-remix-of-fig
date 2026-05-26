import { Link } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { portfolioItems } from "@/lib/portfolio";
import { mailtoLink, EMAIL } from "@/lib/contact";

export default function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 50% at 20% 10%, oklch(0.45 0.30 275 / 0.5), transparent 70%), radial-gradient(50% 60% at 90% 30%, oklch(0.62 0.22 278 / 0.35), transparent 70%)",
          }}
        />
        <div className="pb-32">
          <div className="relative aspect-video w-full overflow-hidden bg-card/40">
            <video
              src="/hero.mp4"
              className="h-full w-full object-cover"
              playsInline
              muted
              loop
              autoPlay
              preload="metadata"
            />
          </div>

          <div className="mx-auto max-w-7xl px-6">


          <div className="mt-24 rounded-3xl px-8 py-16 text-center text-primary-foreground md:px-16 md:py-20" style={{ backgroundColor: "#6f64ff" }}>
            <p className="mx-auto max-w-3xl font-display text-3xl leading-snug md:text-4xl">
              Grow where it matters.
            </p>
            <p className="mx-auto mt-6 max-w-2xl font-display text-2xl leading-snug md:text-3xl">
              We help brands build recognition, create relevant content, and cultivate engaged communities through strategic digital marketing.
            </p>
            <Link to="/#contact" className="mt-10 inline-flex flex-col items-center rounded-full border border-primary-foreground/70 px-8 py-3 text-sm leading-tight transition hover:bg-primary-foreground/10">
              <span>Like what you see?</span>
              <span>Let's talk!</span>
            </Link>
          </div>
          </div>
        </div>

      </section>

      {/* GALLERY MOSAIC */}
      <section id="portfolio" className="bg-cream px-6 pt-20">
        <div className="mx-auto grid max-w-[68rem] grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
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

      {/* SERVICES */}
      <section id="services" className="bg-cream px-6 py-20 scroll-mt-24">
        <div className="mx-auto max-w-7xl rounded-3xl bg-primary px-6 py-20 text-center md:px-16 md:py-24">
          <h2 className="font-display text-4xl text-cream md:text-5xl">Our social media services</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {[
              { t: "Social Strategy", d: "Positioning, content pillars, and editorial calendars aligned with your audience and brand objectives." },
              { t: "Social Media Management", d: "Daily channel operation: posting, community management, customer service, and monthly reports with actionable insights." },
              { t: "Content Creation", d: "Photos, reels, and carousels that translate your brand identity into native content for each platform." },
              { t: "Creative Content", d: "Original concepts, campaigns, and formats built to spark conversation, saves, and shares — not just impressions." },
              { t: "Paid Media", d: "Media management across Meta, Google, TikTok, and YouTube with funnel modeling, high-performance creatives, and weekly optimization to reduce CAC and scale results." },
              { t: "Video Production", d: "Scripting, filming, and editing videos for ads, UGC, and organic content with a focus on performance and storytelling." },
            ].map((s) => (
              <Popover key={s.t}>
                <PopoverTrigger asChild>
                  <button type="button" className="rounded-full border border-cream px-6 py-2.5 text-sm text-cream transition hover:bg-cream hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-cream">
                    {s.t}
                  </button>
                </PopoverTrigger>
                <PopoverContent side="top" className="max-w-xs rounded-2xl border-cream/30 bg-primary text-cream">
                  <p className="font-display text-lg">{s.t}</p>
                  <p className="mt-2 text-sm text-cream/80">{s.d}</p>
                </PopoverContent>
              </Popover>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE / SHOWCASE */}
      <section className="border-t border-border/40 bg-[#0e1020] text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <p className="font-display text-2xl leading-tight md:text-4xl">
            "Working with FIG made a huge difference. My Instagram grew from 400 to 1,395 followers, the workshops sold out, and I felt comfortable in front of cameras, even getting invited to TV. Professional and dedicated support. Highly recommend!"
          </p>
          <div className="mt-10 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-cream" />
            <div>
              <p className="font-medium">Oficina Amor</p>
              <p className="text-sm text-primary-foreground/70">Head of Growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — Email (no backend) */}
      <section id="contact" className="bg-cream px-6 py-20 scroll-mt-24">
        <div className="mx-auto max-w-6xl rounded-3xl bg-background px-6 py-16 text-[#6f64ff] md:px-16 md:py-20">
          <h2 className="text-center font-display text-4xl leading-tight md:text-5xl">
            Like what you see?
            <br />
            Let's make it happen!
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-center text-base text-[#6f64ff]/80">
            Send an email and we'll get back to you shortly.
          </p>

          <div className="mx-auto mt-12 max-w-md">
            <a
              href={mailtoLink()}
              className="block rounded-full bg-[#6f64ff] px-8 py-5 text-center text-base font-semibold text-white shadow-lg shadow-[#6f64ff]/30 transition hover:bg-[#5a50e6] hover:scale-105 hover:shadow-xl"
            >
              Send email
            </a>
          </div>

          <p className="mt-6 text-center text-sm text-[#6f64ff]/70">
            or write to{" "}
            <a href={mailtoLink()} className="underline">{EMAIL}</a>
          </p>
        </div>
      </section>
    </>
  );
}
