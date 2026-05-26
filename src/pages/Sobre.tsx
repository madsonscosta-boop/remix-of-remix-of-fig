import { usePageMeta } from "@/hooks/usePageMeta";

export default function Sobre() {
  usePageMeta("About — FIG", "Who is FIG and how we think about attention.");
  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <p className="text-xs uppercase tracking-[0.25em] text-brand-glow">About</p>
      <h1 className="mt-3 font-display text-6xl leading-[0.95] md:text-7xl">
        <span className="italic">Marketing that makes brands understood, remembered, and chosen.</span>
      </h1>
      <div className="mt-12 space-y-6 text-lg text-foreground/85">
        <p>FIG is a digital marketing studio based in Rotterdam, helping brands grow through strategy, content, paid visibility, and digital presence.</p>
        <p>We work as strategic partners, not just executors. That means we think alongside our clients, understand what makes their brand meaningful, and create marketing that feels clear, intentional, and connected to real business objectives.</p>
        <p>Behind FIG are two people with backgrounds in communications, PR, and paid media who decided to join forces to build something of their own. We're ambitious, practical, and genuinely invested in seeing the brands we work with grow.</p>
        <p>For us, marketing isn't just about being seen. It's about being understood, remembered, and chosen.</p>
      </div>

    </section>
  );
}
