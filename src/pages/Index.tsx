import { Link } from "react-router-dom";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { portfolioItems } from "@/lib/portfolio";
import { mailtoLink, EMAIL } from "@/lib/contact";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Index() {
  const shuffledItems = useMemo(() => {
    const videoItems = portfolioItems.filter((p) => p.coverVideo);
    const imageItems = portfolioItems.filter((p) => !p.coverVideo);
    const shuffledVideos = shuffle(videoItems);
    const ordered = [...shuffledVideos, ...imageItems];
    return ordered.map((item) => ({
      item,
      floatDelay: Math.random() * 2,
      floatDuration: 5 + Math.random() * 3,
    }));
  }, []);



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


          <div className="mt-24 rounded-3xl px-8 py-20 text-center text-primary-foreground md:px-16 md:py-28" style={{ backgroundColor: "#0055FF" }}>
            <p className="mx-auto max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              Grow Where It Matters
            </p>
            <p className="mx-auto mt-8 max-w-2xl font-display text-lg font-light leading-relaxed text-primary-foreground/85 md:text-xl">
              We help brands build recognition, create relevant content, and cultivate engaged communities through strategic digital marketing.
            </p>
            <Link to="/#contact" className="mt-12 inline-flex flex-col items-center rounded-full border-2 border-primary-foreground bg-primary-foreground/5 px-12 py-6 font-display text-xl leading-tight transition hover:bg-primary-foreground hover:text-[#6f64ff] md:px-16 md:py-7 md:text-2xl">
              <span>Like what you see?</span>
              <span className="font-bold">Let's talk!</span>
            </Link>
          </div>
          </div>
        </div>

      </section>

      {/* GALLERY MOSAIC */}
      <section id="portfolio" className="bg-cream px-6 pt-20">
        <div className="mx-auto grid max-w-[68rem] grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
          {shuffledItems.map(({ item: img, floatDelay, floatDuration }, i) => {
            return (
              <motion.div
                key={img.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: floatDuration, delay: floatDelay, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.03, rotate: -0.5, transition: { duration: 0.4 } }}
                >
                  <Link
                    to={`/portfolio/${img.slug}`}
                    style={{ aspectRatio: img.aspect.replace("/", " / ") }}
                    className={`group relative block w-full overflow-hidden rounded-2xl shadow-md transition-shadow duration-500 hover:shadow-2xl ${img.fit === "contain" ? "bg-transparent" : "bg-background"}`}
                    aria-label={`View project: ${img.title}`}
                  >
                    {img.coverVideo ? (
                      <video src={img.coverVideo} className={`h-full w-full ${img.fit === "contain" ? "object-contain" : "object-cover"} transition duration-700 group-hover:scale-110`} playsInline muted loop autoPlay preload="metadata" aria-label={img.alt} />
                    ) : (
                      <img src={img.src} alt={img.alt} loading="lazy" className={`h-full w-full ${img.fit === "contain" ? "object-contain p-4" : "object-cover"} transition duration-700 group-hover:scale-110`} />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center bg-[#6f64ff]/40 opacity-0 transition duration-500 group-hover:opacity-100">
                      <span className="px-4 text-center font-display text-2xl text-cream md:text-3xl">{img.title}</span>
                    </div>
                  </Link>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>


      {/* SERVICES */}
      <section id="services" className="bg-cream px-6 py-20 scroll-mt-24">
        <div className="mx-auto max-w-7xl rounded-3xl bg-[#6f64ff] px-6 py-20 text-center md:px-16 md:py-24">
          <h2 className="font-display text-4xl text-cream md:text-5xl">Our social media services</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {[
              { t: "Social Strategy", d: "Positioning, content pillars, and editorial calendars aligned with your audience and brand objectives." },
              { t: "Social Media Management", d: "Daily channel operation: posting, community management, customer service, and monthly reports with actionable insights." },
              { t: "Content Creation", d: "Photos, reels, and carousels that translate your brand identity into native content for each platform." },
              { t: "Creative Content", d: "Original concepts, campaigns, and formats built to spark conversation, saves, and shares — not just impressions." },
              { t: "Paid Media", d: "Media management across Meta, Google, TikTok, and YouTube with funnel modeling, high-performance creatives, and weekly optimization to reduce CAC and scale results." },
              { t: "Lead Generation", d: "Targeted campaigns and funnel strategies designed to attract, qualify, and convert high-intent prospects into measurable business opportunities." },
            ].map((s) => (
              <Popover key={s.t}>
                <PopoverTrigger asChild>
                  <button type="button" className="rounded-full border border-cream px-6 py-2.5 text-sm text-cream transition hover:bg-cream hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-cream">
                    {s.t}
                  </button>
                </PopoverTrigger>
                <PopoverContent side="top" className="max-w-xs rounded-2xl border-cream/30 bg-[#6f64ff] text-cream">
                  <p className="font-display text-lg">{s.t}</p>
                  <p className="mt-2 text-sm text-cream/80">{s.d}</p>
                </PopoverContent>
              </Popover>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE / SHOWCASE */}
      <section className="border-t border-[#0E4C5A]/40 bg-[#D8D3C9] text-[#1a1a2e]">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <span aria-hidden className="block font-display text-7xl leading-none text-[#6f64ff]">"</span>
          <p className="mt-4 font-display text-2xl leading-tight md:text-4xl">
            Working with FIG made a huge difference, my Instagram grew from 400 to 1,395 followers, the workshops sold out, and I felt comfortable in front of cameras, even getting invited to TV; Professional and dedicated support. Highly recommend!
          </p>
          <div className="mt-10 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-[#6f64ff] ring-2 ring-[#f0d78c]/60" />
            <div>
              <p className="font-medium text-[#6f64ff]">Oficina Amor</p>
              <p className="text-sm text-[#1a1a2e]/70">Head of Growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — Email (no backend) */}
      <section id="contact" className="bg-cream px-6 py-20 scroll-mt-24">
        <div className="mx-auto max-w-6xl rounded-3xl bg-[#1a1a2e] px-6 py-16 text-[#EFE7DA] md:px-16 md:py-20 ring-1 ring-[#0E4C5A]/40">
          <h2 className="text-center font-display text-4xl leading-tight md:text-5xl">
            Like what you see?
            <br />
            <span>Let's make it happen!</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-center text-base text-[#D8D3C9]">
            Send an email and we'll get back to you shortly.
          </p>

          <div className="mx-auto mt-12 max-w-md">
            <a
              href={mailtoLink()}
              className="block rounded-full bg-[#6f64ff] px-8 py-5 text-center text-base font-semibold text-white shadow-lg shadow-[#6f64ff]/40 transition hover:bg-[#5a50e6] hover:scale-105 hover:shadow-xl hover:shadow-[#6f64ff]/40"
            >
              Send email
            </a>
          </div>

          <p className="mt-6 text-center text-sm text-[#D8D3C9]">
            or write to{" "}
            <a href={mailtoLink()} className="underline decoration-[#6f64ff] underline-offset-4">{EMAIL}</a>
          </p>
        </div>
      </section>
    </>
  );
}
