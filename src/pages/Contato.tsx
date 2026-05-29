import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";
import { mailtoLink, EMAIL } from "@/lib/contact";

export default function Contato() {
  usePageMeta("Contact — FIG", "Talk to FIG via email.");
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-tag text-brand-glow">Contact</p>
      <h1 className="text-title mt-3">
        Let's talk about <span className="italic">attention</span>.
      </h1>
      <p className="text-body mt-6 text-muted-foreground">
        No form, no waiting. Send an email and we'll get back to you shortly.
      </p>

      <div className="mt-12">
        <a
          href={mailtoLink()}
          className="rounded-2xl border border-border bg-card px-7 py-6 text-center text-foreground transition hover:border-brand-glow block"
        >
          <span className="text-tag block text-muted-foreground">Email</span>
          <span className="text-heading mt-2 block">Send email</span>
          <span className="text-minor mt-1 block text-muted-foreground">{EMAIL}</span>
        </a>
      </div>

      <p className="text-minor mt-12 text-muted-foreground">
        <Link to="/" className="hover:text-brand-glow">← back to home</Link>
      </p>
    </section>
  );
}
