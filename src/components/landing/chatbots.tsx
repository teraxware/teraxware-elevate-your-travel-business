import { Clock, Calculator, Magnet, Database, ArrowUpRight } from "lucide-react";
import mobile from "@/assets/mobile-chat.png";
import { Reveal } from "./reveal";

const features = [
  { icon: Clock, title: "Atención 24/7", text: "Sin turnos ni horarios: cada consulta recibe respuesta." },
  { icon: Calculator, title: "Cotización automática", text: "Paquetes y precios generados desde tu tarifario." },
  { icon: Magnet, title: "Captura de leads", text: "Datos del viajero registrados en el CRM al instante." },
  { icon: Database, title: "Integración CRM", text: "Toda la conversación queda en la ficha del cliente." },
  { icon: ArrowUpRight, title: "Escalamiento a asesores", text: "El humano entra en el momento exacto de cerrar." },
];

export function Chatbots() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-navy">
            Inteligencia artificial
          </span>
          <h2 className="mt-5 text-3xl font-bold text-brand-navy sm:text-4xl md:text-5xl">
            Chatbots comerciales con IA
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Conversaciones reales que entienden destinos, fechas y presupuesto, y que llevan al
            viajero hasta la reserva.
          </p>

          <ul className="mt-9 space-y-4">
            {features.map((f) => (
              <li key={f.title} className="flex gap-4">
                <span className="gradient-brand mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl text-primary-foreground">
                  <f.icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-semibold text-brand-navy">{f.title}</p>
                  <p className="text-sm text-muted-foreground">{f.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.12} className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-sm">
            <div className="gradient-soft absolute inset-0 -z-10 scale-110 rounded-[3rem] blur-2xl" />
            <img
              src={mobile}
              alt="Conversación de chatbot con IA cotizando un paquete turístico por WhatsApp"
              width={800}
              height={1200}
              loading="lazy"
              className="w-full drop-shadow-2xl"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}