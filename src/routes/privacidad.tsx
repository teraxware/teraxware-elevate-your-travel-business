import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/legal/legal-layout";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: "Política de Privacidad y Tratamiento de Datos | Teraxware" },
      {
        name: "description",
        content:
          "Política de tratamiento de datos personales de Teraxware conforme a la Ley 1581 de 2012 de Colombia y estándares internacionales como el GDPR.",
      },
      {
        property: "og:title",
        content: "Política de Privacidad y Tratamiento de Datos | Teraxware",
      },
      {
        property: "og:description",
        content:
          "Cómo Teraxware recolecta, usa, almacena y protege los datos personales de usuarios y viajeros.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacidadPage,
});

function PrivacidadPage() {
  return (
    <LegalLayout
      title="Política de Privacidad y Tratamiento de Datos Personales"
      updatedAt="18 de agosto de 2026"
      intro="Política adoptada por Teraxware S.A.S. en cumplimiento de la Ley 1581 de 2012, el Decreto 1074 de 2015 y demás normas concordantes de Colombia, con alineación a estándares internacionales como el GDPR para clientes fuera del país."
    >
      <LegalSection index={1} title="Responsable del tratamiento">
        <p>
          <strong>Teraxware S.A.S.</strong>, domiciliada en Colombia. Correo para ejercicio de
          derechos: <strong>datos@teraxware.com</strong>. El área de Protección de Datos atiende las
          consultas y reclamos de los titulares.
        </p>
      </LegalSection>

      <LegalSection index={2} title="Alcance y roles">
        <ul>
          <li>
            <strong>Teraxware como Responsable:</strong> datos de prospectos, clientes, usuarios de
            la web y personal de contacto.
          </li>
          <li>
            <strong>Teraxware como Encargado:</strong> datos de viajeros y clientes finales que las
            agencias cargan en la Plataforma. En ese caso la agencia es la Responsable y define las
            finalidades.
          </li>
        </ul>
      </LegalSection>

      <LegalSection index={3} title="Datos que recolectamos">
        <ul>
          <li>
            <strong>Identificación y contacto:</strong> nombre, documento, correo, teléfono, empresa,
            cargo, país.
          </li>
          <li>
            <strong>Datos de viaje:</strong> itinerarios, reservas, cotizaciones, preferencias,
            acompañantes y fechas.
          </li>
          <li>
            <strong>Datos transaccionales:</strong> facturación, plan contratado y estado de pagos
            (no almacenamos números completos de tarjetas; el pago se procesa por pasarelas
            certificadas PCI-DSS).
          </li>
          <li>
            <strong>Datos de conversación:</strong> mensajes de WhatsApp, chat web y correo
            gestionados por la Plataforma.
          </li>
          <li>
            <strong>Datos técnicos:</strong> IP, dispositivo, navegador, registros de acceso y
            cookies.
          </li>
        </ul>
        <p>
          No solicitamos datos sensibles ni de menores de edad. Si por la naturaleza del viaje una
          agencia debe registrar datos de salud, alimentación especial o menores, deberá contar con
          autorización expresa del titular o de su representante legal.
        </p>
      </LegalSection>

      <LegalSection index={4} title="Finalidades del tratamiento">
        <ul>
          <li>Prestar, operar, mantener y mejorar la Plataforma y sus módulos.</li>
          <li>Gestionar cotizaciones, reservas, pagos, soporte y facturación.</li>
          <li>
            Enviar comunicaciones comerciales, novedades de producto e invitaciones a demos, con
            posibilidad de darse de baja en cualquier momento.
          </li>
          <li>Prevenir fraude, garantizar la seguridad y cumplir obligaciones legales.</li>
          <li>Generar estadísticas y analítica agregada o anonimizada.</li>
        </ul>
      </LegalSection>

      <LegalSection index={5} title="Autorización del titular">
        <p>
          La autorización se obtiene de forma previa, expresa e informada mediante formularios web,
          casillas de verificación, aceptación en la Plataforma, mensajes de opt-in en WhatsApp o
          documentos firmados. Conservamos evidencia de dicha autorización conforme al artículo 2.2.2.25.2.4
          del Decreto 1074 de 2015.
        </p>
      </LegalSection>

      <LegalSection index={6} title="Derechos del titular (Habeas Data)">
        <ul>
          <li>Conocer, actualizar y rectificar sus datos personales.</li>
          <li>Solicitar prueba de la autorización otorgada.</li>
          <li>Ser informado sobre el uso dado a sus datos.</li>
          <li>
            Presentar quejas ante la Superintendencia de Industria y Comercio (SIC) por infracciones.
          </li>
          <li>Revocar la autorización y/o solicitar la supresión del dato cuando proceda.</li>
          <li>Acceder gratuitamente a sus datos.</li>
        </ul>
      </LegalSection>

      <LegalSection index={7} title="Procedimiento para consultas y reclamos">
        <ul>
          <li>
            Envía tu solicitud a <strong>datos@teraxware.com</strong> indicando nombre, documento,
            descripción del requerimiento y datos de contacto.
          </li>
          <li>
            <strong>Consultas:</strong> respuesta máxima en diez (10) días hábiles, prorrogables por
            cinco (5) más.
          </li>
          <li>
            <strong>Reclamos:</strong> respuesta máxima en quince (15) días hábiles, prorrogables por
            ocho (8) más. Si el reclamo está incompleto, se solicitará su corrección dentro de los
            cinco (5) días siguientes.
          </li>
        </ul>
      </LegalSection>

      <LegalSection index={8} title="Encargados y transferencias internacionales">
        <p>
          Para operar utilizamos proveedores de infraestructura, mensajería, IA, pagos y analítica
          que pueden estar ubicados fuera de Colombia (por ejemplo, en Estados Unidos o la Unión
          Europea). En esos casos exigimos cláusulas contractuales de protección equivalentes al
          estándar colombiano y, cuando aplica, cláusulas contractuales tipo del GDPR. Al aceptar
          esta política, el titular autoriza dichas transferencias y transmisiones.
        </p>
      </LegalSection>

      <LegalSection index={9} title="Cookies y tecnologías similares">
        <p>
          Usamos cookies necesarias para el funcionamiento del sitio y cookies analíticas para medir
          el desempeño. Puedes configurar tu navegador para bloquearlas; algunas funciones podrían
          verse afectadas.
        </p>
      </LegalSection>

      <LegalSection index={10} title="Seguridad de la información">
        <p>
          Aplicamos cifrado en tránsito (TLS) y en reposo, control de acceso por roles, registros de
          auditoría, copias de respaldo periódicas y pruebas de seguridad. Ningún sistema es
          infalible; ante un incidente que comprometa datos personales notificaremos a los
          responsables afectados y a la SIC cuando la ley lo exija.
        </p>
      </LegalSection>

      <LegalSection index={11} title="Conservación de los datos">
        <p>
          Los datos se conservan mientras exista la relación contractual y, posteriormente, durante
          los términos legales de tipo comercial, contable y tributario. Cumplidos esos plazos se
          eliminan o anonimizan de forma segura.
        </p>
      </LegalSection>

      <LegalSection index={12} title="Usuarios internacionales">
        <p>
          Para titulares ubicados en la Unión Europea o el Reino Unido reconocemos adicionalmente los
          derechos de portabilidad, limitación y oposición al tratamiento previstos en el GDPR. Las
          solicitudes se atienden por el mismo canal indicado en esta política.
        </p>
      </LegalSection>

      <LegalSection index={13} title="Vigencia">
        <p>
          Esta política rige desde su publicación y las bases de datos se conservarán durante la
          vigencia de las finalidades descritas. Cualquier cambio sustancial será comunicado por los
          canales oficiales antes de su entrada en vigor.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}