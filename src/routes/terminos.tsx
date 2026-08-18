import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/legal/legal-layout";

export const Route = createFileRoute("/terminos")({
  head: () => ({
    meta: [
      { title: "Términos y Condiciones | Teraxware" },
      {
        name: "description",
        content:
          "Términos y condiciones de uso de la plataforma Teraxware para agencias de viajes, tour operadores y DMC en Colombia.",
      },
      { property: "og:title", content: "Términos y Condiciones | Teraxware" },
      {
        property: "og:description",
        content:
          "Condiciones de contratación, uso, pagos, soporte y responsabilidades del servicio Teraxware.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TerminosPage,
});

function TerminosPage() {
  return (
    <LegalLayout
      title="Términos y Condiciones de Uso"
      updatedAt="18 de agosto de 2026"
      intro="Estas condiciones regulan el acceso y uso de la plataforma Teraxware, un software como servicio (SaaS) dirigido a agencias de viajes, tour operadores y DMC. Al registrarte o contratar el servicio aceptas íntegramente este documento."
    >
      <LegalSection index={1} title="Identificación del prestador">
        <p>
          El servicio es prestado por <strong>Teraxware S.A.S.</strong>, sociedad constituida bajo
          las leyes de la República de Colombia, con domicilio en Colombia y correo de contacto{" "}
          <strong>legal@teraxware.com</strong>. Estos términos se rigen por la legislación
          colombiana, incluyendo la Ley 527 de 1999 (comercio electrónico), la Ley 1480 de 2011
          (Estatuto del Consumidor) y la Ley 1581 de 2012 (protección de datos personales).
        </p>
      </LegalSection>

      <LegalSection index={2} title="Definiciones">
        <ul>
          <li>
            <strong>Plataforma:</strong> el software Teraxware, sus módulos de CRM, reservas,
            cotizaciones, automatizaciones, chatbots con IA, marketing y sus integraciones.
          </li>
          <li>
            <strong>Cliente:</strong> la persona natural o jurídica que contrata el servicio.
          </li>
          <li>
            <strong>Usuario:</strong> cada persona autorizada por el Cliente para acceder con
            credenciales propias.
          </li>
          <li>
            <strong>Contenido del Cliente:</strong> datos, archivos y bases de datos que el Cliente
            carga o genera en la Plataforma.
          </li>
        </ul>
      </LegalSection>

      <LegalSection index={3} title="Objeto y licencia de uso">
        <p>
          Teraxware otorga al Cliente una licencia limitada, no exclusiva, intransferible y
          revocable para usar la Plataforma en modalidad de suscripción, únicamente para sus fines
          comerciales internos. La licencia no implica transferencia de propiedad del software.
        </p>
      </LegalSection>

      <LegalSection index={4} title="Registro, cuentas y seguridad">
        <ul>
          <li>El Cliente debe suministrar información veraz, completa y actualizada.</li>
          <li>
            Las credenciales son personales e intransferibles; el Cliente es responsable de toda
            actividad realizada con sus cuentas.
          </li>
          <li>
            Cualquier acceso no autorizado debe reportarse de inmediato a{" "}
            <strong>soporte@teraxware.com</strong>.
          </li>
        </ul>
      </LegalSection>

      <LegalSection index={5} title="Planes, precios y facturación">
        <ul>
          <li>
            Los precios se publican en pesos colombianos (COP) o dólares (USD) según el plan y no
            incluyen IVA ni tributos aplicables, salvo indicación expresa.
          </li>
          <li>
            La suscripción se factura de forma anticipada y se renueva automáticamente por periodos
            iguales, salvo cancelación con al menos 30 días de antelación.
          </li>
          <li>
            La mora superior a 15 días calendario faculta a Teraxware para suspender el servicio
            previa notificación.
          </li>
          <li>
            Los consumos variables (mensajería WhatsApp, créditos de IA, SMS o correos) se facturan
            según uso real reportado por los proveedores.
          </li>
        </ul>
      </LegalSection>

      <LegalSection index={6} title="Derecho de retracto y reversión de pago">
        <p>
          Cuando la contratación se realice por medios electrónicos y el Cliente sea consumidor en
          los términos de la Ley 1480 de 2011, podrá ejercer el derecho de retracto dentro de los
          cinco (5) días hábiles siguientes a la contratación, así como la reversión del pago en los
          casos previstos en el artículo 51 del Estatuto del Consumidor. Estos derechos no aplican a
          contrataciones entre empresas con condiciones negociadas de forma individual.
        </p>
      </LegalSection>

      <LegalSection index={7} title="Uso aceptable">
        <p>El Cliente y sus Usuarios se obligan a no:</p>
        <ul>
          <li>Enviar spam o comunicaciones sin autorización previa del titular del dato.</li>
          <li>
            Incumplir las políticas de WhatsApp Business, Meta u otros proveedores integrados.
          </li>
          <li>Realizar ingeniería inversa, copiar, revender o sublicenciar la Plataforma.</li>
          <li>Cargar contenido ilícito, fraudulento o que vulnere derechos de terceros.</li>
          <li>Afectar la disponibilidad, seguridad o integridad del servicio.</li>
        </ul>
      </LegalSection>

      <LegalSection index={8} title="Servicios de terceros e integraciones">
        <p>
          La Plataforma se integra con servicios de terceros (Meta/WhatsApp Business API, pasarelas
          de pago, motores de reservas, proveedores de IA, correo y analítica). El uso de dichos
          servicios se sujeta además a sus propios términos. Teraxware no responde por
          interrupciones, cambios de política o suspensiones imputables a esos terceros.
        </p>
      </LegalSection>

      <LegalSection index={9} title="Disponibilidad, soporte y mantenimiento">
        <ul>
          <li>Teraxware procurará una disponibilidad mensual objetivo del 99.5%.</li>
          <li>
            Las ventanas de mantenimiento programado se notificarán con al menos 24 horas de
            anticipación.
          </li>
          <li>
            El soporte se presta en español, en días hábiles, por los canales oficiales indicados en
            el plan contratado.
          </li>
        </ul>
      </LegalSection>

      <LegalSection index={10} title="Propiedad intelectual">
        <p>
          El software, marca, código fuente, diseños e interfaces son propiedad exclusiva de
          Teraxware. El Contenido del Cliente sigue siendo de su propiedad; el Cliente otorga a
          Teraxware una licencia limitada para procesarlo con el único fin de prestar el servicio.
        </p>
      </LegalSection>

      <LegalSection index={11} title="Confidencialidad">
        <p>
          Ambas partes se obligan a mantener la confidencialidad de la información comercial,
          técnica y de clientes a la que accedan con ocasión del contrato, durante su vigencia y por
          tres (3) años posteriores a su terminación.
        </p>
      </LegalSection>

      <LegalSection index={12} title="Protección de datos personales">
        <p>
          En el tratamiento de datos personales cargados por el Cliente, este actúa como{" "}
          <strong>Responsable</strong> y Teraxware como <strong>Encargado</strong>, conforme a la
          Ley 1581 de 2012 y el Decreto 1074 de 2015. El detalle se encuentra en la Política de
          Privacidad y Tratamiento de Datos.
        </p>
      </LegalSection>

      <LegalSection index={13} title="Limitación de responsabilidad">
        <p>
          Salvo dolo o culpa grave, la responsabilidad total de Teraxware se limita al valor pagado
          por el Cliente durante los doce (12) meses anteriores al hecho generador. Teraxware no
          responde por lucro cesante, pérdida de oportunidades comerciales o daños indirectos.
        </p>
      </LegalSection>

      <LegalSection index={14} title="Terminación y portabilidad de datos">
        <ul>
          <li>
            Cualquiera de las partes puede terminar el contrato por incumplimiento grave no subsanado
            dentro de los 15 días siguientes al requerimiento.
          </li>
          <li>
            Tras la terminación, el Cliente dispone de treinta (30) días calendario para exportar su
            información; vencido ese plazo los datos podrán ser eliminados de forma segura.
          </li>
        </ul>
      </LegalSection>

      <LegalSection index={15} title="Modificaciones">
        <p>
          Teraxware podrá actualizar estos términos notificando al Cliente por correo electrónico o
          dentro de la Plataforma con al menos quince (15) días de anticipación. El uso continuado
          del servicio implica aceptación de la nueva versión.
        </p>
      </LegalSection>

      <LegalSection index={16} title="Ley aplicable y solución de controversias">
        <p>
          Este contrato se rige por la ley colombiana. Las partes intentarán resolver cualquier
          controversia de forma directa dentro de los treinta (30) días siguientes; de no lograrse,
          se someterán a los jueces competentes de la ciudad de domicilio de Teraxware en Colombia.
          Para clientes internacionales podrán pactarse condiciones específicas en el contrato
          comercial correspondiente.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}