import marketing from "@/assets/marketing-dashboard.jpg";
import { Reveal, SectionHeading } from "./reveal";

const services = [
  ["Meta Ads", "Campañas orientadas a reservas, no a likes."],
  ["Remarketing", "Recupera viajeros que cotizaron y no compraron."],
  ["Automatización", "Flujos que trabajan mientras tu equipo vende."],
  ["Email Marketing", "Ofertas segmentadas por destino y temporada."],
  ["Embudos de Conversión", "Del anuncio a la reserva con trazabilidad total."],
  ["Analytics", "ROAS, CPL y ventas reales en un solo panel."],
];

export function Marketing() {
  return (
    <section id="marketing" className="relative overflow-hidden py-24 sm:py-32">
      <div className="gradient-soft pointer-events-none absolute inset-0 -z-10" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Growth"
          title="Marketing que genera reservas"
          description="Medimos lo que importa: leads calificados, cotizaciones enviadas y viajes vendidos."
        />

        <Reveal delay={0.1}>
          <div className="mt-14 overflow-hidden rounded-3xl border border-border shadow-float">
            <img
              src={marketing}
              alt="Panel de métricas de marketing con embudo de conversión y ROAS"
              width={1408}
              height={960}
              loading="lazy"
              className="w-full"
            />
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(([title, text], i) => (
            <Reveal key={title} delay={i * 0.06}>
              <div className="glass h-full rounded-2xl p-6 shadow-card">
                <h3 className="text-base font-bold text-brand-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}