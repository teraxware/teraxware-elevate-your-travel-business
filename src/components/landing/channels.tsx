import { motion } from "framer-motion";
import {
  MessageCircle,
  Facebook,
  Instagram,
  Users,
  Mail,
  Globe,
  Plug,
  Sparkles,
} from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";

const nodes = [
  { icon: MessageCircle, label: "WhatsApp" },
  { icon: Sparkles, label: "Meta" },
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Facebook" },
  { icon: Users, label: "CRM" },
  { icon: Mail, label: "Email" },
  { icon: Globe, label: "Sitio Web" },
  { icon: Plug, label: "API externas" },
];

export function Channels() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Integraciones"
          title="Una plataforma, múltiples canales"
          description="Cada canal alimenta el mismo núcleo de datos: una sola verdad sobre cada viajero."
        />

        <Reveal delay={0.1}>
          <div className="relative mx-auto mt-16 aspect-square w-full max-w-xl">
            <svg
              viewBox="0 0 400 400"
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              {nodes.map((_, i) => {
                const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
                const x = 200 + Math.cos(angle) * 155;
                const y = 200 + Math.sin(angle) * 155;
                return (
                  <motion.line
                    key={i}
                    x1={200}
                    y1={200}
                    x2={x}
                    y2={y}
                    stroke="url(#lineGrad)"
                    strokeWidth={1.5}
                    strokeDasharray="6 8"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.08 }}
                  />
                );
              })}
              <defs>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="var(--brand-navy)" />
                  <stop offset="60%" stopColor="var(--brand-violet)" />
                  <stop offset="100%" stopColor="var(--brand-red)" />
                </linearGradient>
              </defs>
            </svg>

            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="gradient-brand absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-3xl text-center text-sm font-bold text-primary-foreground shadow-float"
            >
              Teraxware
            </motion.div>

            {nodes.map((n, i) => {
              const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
              const left = 50 + Math.cos(angle) * 38.75;
              const top = 50 + Math.sin(angle) * 38.75;
              return (
                <div
                  key={n.label}
                  style={{ left: `${left}%`, top: `${top}%` }}
                  className="glass absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-2xl px-3 py-2 shadow-card"
                >
                  <n.icon className="h-4 w-4 text-brand-violet" />
                  <span className="text-xs font-semibold text-brand-navy">{n.label}</span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}