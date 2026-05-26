import { useEffect, useState } from "react";
import { Routes, Route, Link, useLocation, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "./assets/fig-logo.png";

import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Servicos from "./pages/Servicos";
import Trabalhos from "./pages/Trabalhos";
import Contato from "./pages/Contato";
import PortfolioDetail from "./pages/PortfolioDetail";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);
  return null;
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-[#0e1020]/10 bg-[#efdfe7] px-2 py-2 text-[#0e1020] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] backdrop-blur-xl">
        <Link
          to="/"
          className="flex items-center pl-2"
          onClick={() => {
            setOpen(false);
            setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
          }}
        >
          <img src={logo} alt="FIG" className="h-7 w-auto" />
        </Link>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-9 w-9 items-center justify-center rounded-full text-[#0e1020]/80 transition hover:bg-[#0e1020]/10 hover:text-[#0e1020]"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-40 bg-foreground/95 backdrop-blur-xl animate-fade-in">
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="absolute right-6 top-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-background/10 text-background transition hover:bg-background/20"
          >
            <X size={24} />
          </button>
          <nav className="flex h-full w-full flex-col items-center justify-center gap-6 text-background animate-scale-in">
            <NavLink to="/#services" className="font-display text-5xl md:text-7xl tracking-tight transition hover:text-brand-glow" onClick={() => setOpen(false)}>Services</NavLink>
            <NavLink to="/#portfolio" className="font-display text-5xl md:text-7xl tracking-tight transition hover:text-brand-glow" onClick={() => setOpen(false)}>Works</NavLink>
            <NavLink to="/about" className="font-display text-5xl md:text-7xl tracking-tight transition hover:text-brand-glow" onClick={() => setOpen(false)}>About</NavLink>
            <NavLink to="/#contact" className="mt-4 rounded-full bg-brand px-8 py-4 text-lg text-white transition hover:bg-brand-glow" onClick={() => setOpen(false)}>Talk</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0e1020] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <img src={logo} alt="FIG" className="h-10 w-auto" />
          </div>
          <p className="mt-4 max-w-sm text-sm text-white/70">For brands ready to grow.</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-white/60">Navigate</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li><Link to="/#services" className="transition hover:text-brand-glow">Services</Link></li>
            <li><Link to="/#portfolio" className="transition hover:text-brand-glow">Works</Link></li>
            <li><Link to="/about" className="transition hover:text-brand-glow">About</Link></li>
            <li><Link to="/#contact" className="transition hover:text-brand-glow">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-white/60">Legal</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li><Link to="/privacy" className="transition hover:text-brand-glow">Privacy Policy</Link></li>
            <li><a href="mailto:hello@figtheagency.com" className="transition hover:text-brand-glow">hello@figtheagency.com</a></li>
            <li><a href="https://www.instagram.com/figtheagency" className="transition hover:text-brand-glow">@figtheagency</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-xs text-white/60">
          <span>© {new Date().getFullYear()} FIG. All rights reserved.</span>
          <span>Made with love, in Rotterdam</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<Sobre />} />
          <Route path="/services" element={<Servicos />} />
          <Route path="/work" element={<Trabalhos />} />
          <Route path="/contact" element={<Contato />} />
          <Route path="/portfolio/:slug" element={<PortfolioDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
