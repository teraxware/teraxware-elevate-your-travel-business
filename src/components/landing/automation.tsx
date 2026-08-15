import { UserPlus, MessageCircle, Bot, Headset, TicketCheck, Repeat, ArrowRight } from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";

const flow = [
  { icon: UserPlus, label: "Lead" },
  { icon: MessageCircle, label: "WhatsApp" },
  { icon: Bot, label: "Chatbot" },
  { icon: Headset, label: "Asesor" },
  { icon: TicketCheck, label: "Reserva" },
  { icon: Repeat, label: "Seguimiento" },
];

const benefits = [
  ["Respuestas automáticas", "Contesta en segundos a cualquier hora, en todos los canales."],
  ["Captura de leads", "Cada conversación se convierte en un contacto con origen y campaña."],
  ["Calificación de clientes", "Scoring por intención, destino y presupuesto antes del asesor."],
  ["Seguimiento comercial", "Recordatorios y secuencias que recuperan cotizaciones frías."],
];

export function Automation() {
  return (
    <section id="automatizacion" className="relative overflow-hidden py-24 sm:py-32">
      <div className="gradient-soft pointer-events-none absolute inset-0 -z-10" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Automatización"
          title="Automatiza cada interacción"
          description="Del primer mensaje a la postventa, sin que se pierda una sola oportunidad en el camino."
        />

        <Reveal delay={0.1}>
          <div className="glass mt-14 rounded-3xl p-6 shadow-card sm:p-10">
            <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center">
              {flow.map((step, i) => (
                <div key={step.label} className="flex flex-1 items-center gap-3">
                  <div className="flex flex-1 flex-col items-center gap-3 rounded-2xl border border-border bg-card px-3 py-5 text-center shadow-card">
                    <span className="gradient-brand grid h-10 w-10 place-items-center rounded-xl text-primary-foreground">
                      <step.icon className="h-4.5 w-4.5" />
                    </span>
                    <span className="text-sm font-semibold text-brand-navy">{step.label}</span>
                  </div>
                  {i < flow.length - 1 ? (
                    <ArrowRight className="hidden h-4 w-4 shrink-0 text-brand-violet md:block" />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(([title, text], i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-card">
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