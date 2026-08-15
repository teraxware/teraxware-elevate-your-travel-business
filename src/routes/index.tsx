import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/landing/site-nav";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { Automation } from "@/components/landing/automation";
import { MetaProvider } from "@/components/landing/meta-provider";
import { Chatbots } from "@/components/landing/chatbots";
import { Marketing } from "@/components/landing/marketing";
import { Channels } from "@/components/landing/channels";
import { Results } from "@/components/landing/results";
import { FinalCta, SiteFooter } from "@/components/landing/final-cta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Teraxware | Software para agencias de viajes, tour operadores y DMC" },
      {
        name: "description",
        content:
          "Centraliza reservas, cotizaciones, CRM, WhatsApp, chatbots con IA y marketing en una sola plataforma para empresas turísticas.",
      },
      {
        property: "og:title",
        content: "Teraxware | Toda tu operación turística en una plataforma",
      },
      {
        property: "og:description",
        content:
          "CRM turístico, reservas, cotizaciones inteligentes, automatización con WhatsApp y Meta Tech Provider oficial.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <Hero />
        <Features />
        <Automation />
        <MetaProvider />
        <Chatbots />
        <Marketing />
        <Channels />
        <Results />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
