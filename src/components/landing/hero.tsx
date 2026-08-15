import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, ShieldCheck } from "lucide-react";
import dashboard from "@/assets/dashboard-hero.jpg";
import mobile from "@/assets/mobile-chat.png";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-36 sm:pt-44">
      <div className="gradient-soft pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute -left-40 top-10 -z-10 h-[420px] w-[420px] rounded-full bg-brand-violet/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-40 -z-10 h-[380px] w-[380px] rounded-full bg-brand-red/15 blur-[120px]" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-brand-navy">
            <ShieldCheck className="h-3.5 w-3.5" />
            Meta Tech Provider oficial
          </span>
          <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.08] text-brand-navy sm:text-5xl md:text-6xl">
            Centraliza toda tu operación turística en{" "}
            <span className="text-gradient-brand">una sola plataforma.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Gestiona reservas, cotizaciones, clientes, automatizaciones, marketing y comunicación
            desde un único ecosistema diseñado para agencias de viajes, operadores turísticos y DMC.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#demo"
              className="gradient-brand group inline-flex w-full items-center justify-center gap-2 rounded-2xl px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-float transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              Solicitar Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#plataforma"
              className="glass inline-flex w-full items-center justify-center gap-2 rounded-2xl px-7 py-3.5 text-sm font-semibold text-brand-navy transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              <PlayCircle className="h-4 w-4" />
              Ver Plataforma
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div className="overflow-hidden rounded-3xl shadow-float">
            <img
              src={dashboard}
              alt="Dashboard Teraxware con reservas, CRM turístico, cotizaciones, WhatsApp y estadísticas"
              width={1600}
              height={1104}
              className="w-full"
            />
          </div>

          <motion.img
            src={mobile}
            alt="Aplicación móvil de Teraxware con chatbot de cotización por WhatsApp"
            width={800}
            height={1200}
            loading="lazy"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -right-2 hidden w-36 drop-shadow-2xl sm:block md:-right-10 md:w-52"
          />

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -left-4 bottom-10 hidden rounded-2xl px-4 py-3 shadow-card md:block"
          >
            <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              Reservas hoy
            </p>
            <p className="text-xl font-bold text-brand-navy">148</p>
          </motion.div>
        </motion.div>

        <div className="mt-24 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          <span>Agencias de viajes</span>
          <span>Tour operadores</span>
          <span>DMC</span>
          <span>Mayoristas</span>
        </div>
      </div>
    </section>
  );
}