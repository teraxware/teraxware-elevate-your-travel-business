import { Reveal, SectionHeading } from "./reveal";

const kpis = [
  ["+300%", "Incremento de leads"],
  ["-70%", "Tiempo operativo"],
  ["24/7", "Atención automatizada"],
  ["+40%", "Conversión comercial"],
];

export function Results() {
  return (
    <section id="resultados" className="relative overflow-hidden py-24 sm:py-32">
      <div className="gradient-brand pointer-events-none absolute inset-0 -z-10" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading tone="dark" title="Resultados para empresas turísticas" />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map(([value, label], i) => (
            <Reveal key={label} delay={i * 0.08}>
              <div className="glass-dark h-full rounded-3xl p-8 text-center">
                <p className="text-4xl font-extrabold text-primary-foreground sm:text-5xl">
                  {value}
                </p>
                <p className="mt-3 text-sm font-medium text-primary-foreground/70">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}