import { MessageSquare, Megaphone, Instagram, Activity, Workflow } from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";

const items = [
  { icon: MessageSquare, title: "WhatsApp Business API", text: "Números verificados, plantillas y multiagente oficial." },
  { icon: Megaphone, title: "Facebook Ads", text: "Campañas conectadas directo a tu CRM turístico." },
  { icon: Instagram, title: "Instagram Ads", text: "Anuncios click-to-WhatsApp con atribución real." },
  { icon: Activity, title: "Conversion API", text: "Eventos de reserva enviados server-side sin pérdida." },
  { icon: Workflow, title: "Marketing Automation", text: "Audiencias y flujos que se actualizan solos." },
];

export function MetaProvider() {
  return (
    <section id="meta" className="relative overflow-hidden py-24 sm:py-32">
      <div className="gradient-brand pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40 [background:radial-gradient(600px_circle_at_20%_10%,white,transparent_60%)]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          tone="dark"
          eyebrow="Partner oficial"
          title="Meta Tech Provider"
          description="Conectamos tu negocio con el ecosistema oficial de Meta para potenciar WhatsApp Business, campañas publicitarias y automatizaciones avanzadas."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.07}>
              <div className="glass-dark h-full rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1">
                <it.icon className="h-6 w-6 text-primary-foreground" />
                <h3 className="mt-5 text-lg font-bold text-primary-foreground">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{it.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}