import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import dashboard from "@/assets/dashboard-hero.jpg";
import { Reveal } from "./reveal";

export function FinalCta() {
  return (
    <section id="demo" className="relative overflow-hidden py-24 sm:py-32">
      <div className="gradient-soft pointer-events-none absolute inset-0 -z-10" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="gradient-brand relative overflow-hidden rounded-[2.5rem] px-6 py-20 text-center shadow-float sm:px-16">
            <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(700px_circle_at_80%_0%,white,transparent_60%)]" />

            <motion.img
              src={dashboard}
              alt="Vista previa del panel de control de Teraxware"
              width={1600}
              height={1104}
              loading="lazy"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -bottom-16 -left-24 hidden w-72 rotate-6 rounded-2xl opacity-30 lg:block"
            />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-balance text-3xl font-extrabold text-primary-foreground sm:text-4xl md:text-5xl">
                Impulsa tu agencia con tecnología diseñada para vender más.
              </h2>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#demo"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-background px-7 py-3.5 text-sm font-semibold text-brand-navy shadow-card transition-transform hover:-translate-y-0.5 sm:w-auto"
                >
                  Agenda una Demo
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#demo"
                  className="glass-dark inline-flex w-full items-center justify-center rounded-2xl px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:w-auto"
                >
                  Hablar con un Experto
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <div className="flex items-center gap-2.5">
          <span className="gradient-brand grid h-8 w-8 place-items-center rounded-lg text-xs font-bold text-primary-foreground">
            T
          </span>
          <span className="font-bold text-brand-navy">Teraxware</span>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-muted-foreground">
          <Link to="/terminos" className="transition-colors hover:text-brand-navy">
            Términos y Condiciones
          </Link>
          <Link to="/privacidad" className="transition-colors hover:text-brand-navy">
            Política de Privacidad y Datos
          </Link>
        </nav>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Teraxware · Tecnología para empresas turísticas
        </p>
      </div>
    </footer>
  );
}