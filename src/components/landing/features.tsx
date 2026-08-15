import {
  Users,
  CalendarCheck,
  FileText,
  Luggage,
  Building2,
  Receipt,
  LayoutDashboard,
} from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";

const features = [
  {
    icon: Users,
    title: "CRM Turístico",
    text: "Pipeline comercial por destino, temporada y asesor con historial completo de cada viajero.",
  },
  {
    icon: CalendarCheck,
    title: "Gestión de Reservas",
    text: "Vuelos, hoteles, traslados y tours en una sola línea de tiempo operativa.",
  },
  {
    icon: FileText,
    title: "Cotizaciones Inteligentes",
    text: "Propuestas con itinerario, márgenes y precios dinámicos en menos de dos minutos.",
  },
  {
    icon: Luggage,
    title: "Gestión de Pasajeros",
    text: "Documentos, visas, vencimientos y preferencias centralizados por expediente.",
  },
  {
    icon: Building2,
    title: "Gestión de Proveedores",
    text: "Tarifarios, cupos y confirmaciones con control de costos en tiempo real.",
  },
  {
    icon: Receipt,
    title: "Facturación",
    text: "Pagos, saldos y comprobantes conciliados automáticamente con cada reserva.",
  },
  {
    icon: LayoutDashboard,
    title: "Portal de Clientes",
    text: "Tu marca, sus viajes: itinerarios, pagos y documentos disponibles 24/7.",
  },
];

export function Features() {
  return (
    <section id="plataforma" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Plataforma"
          title="Todo lo que necesita una agencia moderna"
          description="Módulos conectados entre sí para que la operación, las ventas y la administración dejen de vivir en hojas de cálculo."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06}>
              <article className="group h-full rounded-3xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-violet/30">
                <div className="gradient-brand grid h-12 w-12 place-items-center rounded-2xl text-primary-foreground shadow-card">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-brand-navy">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </article>
            </Reveal>
          ))}

          <Reveal delay={0.42}>
            <article className="gradient-brand flex h-full flex-col justify-between rounded-3xl p-7 text-primary-foreground shadow-float">
              <h3 className="text-lg font-bold">Un ecosistema, cero integraciones frágiles</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">
                Todos los módulos comparten la misma base de datos y las mismas automatizaciones.
              </p>
              <a
                href="#demo"
                className="glass-dark mt-6 inline-flex w-fit rounded-xl px-4 py-2 text-sm font-semibold"
              >
                Solicitar Demo
              </a>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}