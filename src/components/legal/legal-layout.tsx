import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteFooter } from "@/components/landing/final-cta";

export function LegalLayout({
  title,
  updatedAt,
  intro,
  children,
}: {
  title: string;
  updatedAt: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <header className="gradient-brand relative overflow-hidden px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-16">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(700px_circle_at_80%_0%,white,transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
          <h1 className="mt-6 text-balance text-3xl font-extrabold text-primary-foreground sm:text-4xl md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75 sm:text-base">
            {intro}
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.18em] text-primary-foreground/60">
            Última actualización: {updatedAt}
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
        <article className="space-y-10">{children}</article>

        <div className="mt-14 rounded-2xl border border-border bg-secondary/60 p-6">
          <h2 className="text-base font-bold text-brand-navy">Contacto legal y de datos</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Teraxware S.A.S. · Colombia · Correo:{" "}
            <a className="font-semibold text-brand-navy" href="mailto:legal@teraxware.com">
              legal@teraxware.com
            </a>{" "}
            · Protección de datos:{" "}
            <a className="font-semibold text-brand-navy" href="mailto:datos@teraxware.com">
              datos@teraxware.com
            </a>
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
            <Link to="/terminos" className="text-brand-navy hover:underline">
              Términos y Condiciones
            </Link>
            <Link to="/privacidad" className="text-brand-navy hover:underline">
              Política de Privacidad y Tratamiento de Datos
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

export function LegalSection({
  index,
  title,
  children,
}: {
  index: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-bold text-brand-navy sm:text-2xl">
        <span className="mr-2 text-muted-foreground">{index}.</span>
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-brand-navy">
        {children}
      </div>
    </section>
  );
}