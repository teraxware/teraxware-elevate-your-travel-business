import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Plataforma", href: "#plataforma" },
  { label: "Automatización", href: "#automatizacion" },
  { label: "Meta", href: "#meta" },
  { label: "Marketing", href: "#marketing" },
  { label: "Resultados", href: "#resultados" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:px-6 ${
          scrolled ? "glass shadow-card" : "border border-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5">
          <span className="gradient-brand grid h-9 w-9 place-items-center rounded-xl text-sm font-bold text-primary-foreground">
            T
          </span>
          <span className="text-lg font-bold tracking-tight text-brand-navy">Teraxware</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-brand-navy"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#demo"
            className="rounded-xl px-4 py-2 text-sm font-semibold text-brand-navy transition-colors hover:bg-secondary"
          >
            Ver Plataforma
          </a>
          <a
            href="#demo"
            className="gradient-brand rounded-xl px-4 py-2 text-sm font-semibold text-primary-foreground shadow-card transition-transform hover:-translate-y-0.5"
          >
            Solicitar Demo
          </a>
        </div>

        <button
          type="button"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-border text-brand-navy md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-brand-navy hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#demo"
              onClick={() => setOpen(false)}
              className="gradient-brand mt-2 rounded-xl px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Solicitar Demo
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}