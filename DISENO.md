# Teraxware — Documentación de Diseño

Guía completa del sistema de diseño y la arquitectura visual de la landing page de Teraxware
(software para agencias de viajes, tour operadores y DMC).

---

## 1. Concepto visual

- Estética SaaS enterprise premium, referencia: Stripe, Linear, Framer, HubSpot.
- Base clara (blanco) con secciones de alto contraste en gradiente de marca.
- Mucho espacio en blanco, bordes muy redondeados, glassmorphism ligero.
- Mockups realistas (dashboard, móvil, analítica) flotando con sombras profundas.
- Animaciones suaves de entrada y flotación, nunca decorativas en exceso.

## 2. Paleta y tokens

Todos los colores son tokens semánticos en `src/styles.css`, en formato `oklch`.
Nunca se usan colores hardcodeados (`bg-[#...]`, `text-white`) en los componentes.

| Token | Valor | Equivalente | Uso |
| --- | --- | --- | --- |
| `--brand-navy` | `oklch(0.297 0.083 254)` | ≈ `#002B5B` | Color corporativo principal, títulos |
| `--brand-navy-deep` | `oklch(0.22 0.07 256)` | azul casi negro | Inicio del gradiente |
| `--brand-violet` | `oklch(0.52 0.23 292)` | violeta tecnológico | Acentos, halos, hover |
| `--brand-red` | `oklch(0.49 0.201 32)` | ≈ `#B91100` | Cierre del gradiente, destructive |
| `--background` / `--card` | blanco puro | | Fondo general y tarjetas |
| `--muted-foreground` | gris azulado | | Texto secundario |
| `--border` | gris muy claro | | Bordes de tarjetas |

Clases Tailwind derivadas: `text-brand-navy`, `bg-brand-violet`, `border-brand-red`, etc.

### Gradientes

- `--gradient-brand`: `120deg` navy-deep → navy → violeta → rojo. Es la firma de la marca.
- `--gradient-soft`: la misma secuencia al 8–10 % de opacidad, para fondos de sección claros.

### Sombras

- `--shadow-card`: elevación sutil para tarjetas (`shadow-card`).
- `--shadow-float`: sombra amplia y difusa para mockups y CTAs (`shadow-float`).

## 3. Utilidades personalizadas

Definidas con `@utility` en `src/styles.css`:

| Clase | Efecto |
| --- | --- |
| `gradient-brand` | Fondo con el gradiente de marca |
| `gradient-soft` | Fondo con el gradiente atenuado |
| `text-gradient-brand` | Texto recortado sobre el gradiente |
| `shadow-card` / `shadow-float` | Elevaciones del sistema |
| `glass` | Vidrio claro: blanco 65 % + blur 16px + borde navy 10 % |
| `glass-dark` | Vidrio sobre fondo oscuro: blanco 8 % + blur 16px |

## 4. Tipografía

- **Montserrat** (`--font-display`) para `h1`, `h2`, `h3`, con `letter-spacing: -0.025em`.
- **Inter** (`--font-sans`) para el resto del texto y la UI.
- Cargadas mediante `<link>` de Google Fonts en `src/routes/__root.tsx`.

Escala habitual:

| Elemento | Clases |
| --- | --- |
| H1 hero | `text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08]` |
| H2 sección | `text-3xl sm:text-4xl md:text-5xl font-bold` |
| H3 tarjeta | `text-lg font-bold` |
| Párrafo | `text-base leading-relaxed text-muted-foreground` |
| Eyebrow | `text-xs font-semibold uppercase tracking-[0.18em]` |

## 5. Layout y espaciado

- Contenedor estándar: `mx-auto max-w-6xl px-4 sm:px-6`.
- Ritmo vertical de sección: `py-24 sm:py-32`.
- Radios: tarjetas `rounded-3xl`, botones e iconos `rounded-2xl`, chips `rounded-full`.
- Grillas: `sm:grid-cols-2 lg:grid-cols-3` (features) y `lg:grid-cols-4` (KPIs, beneficios).
- Mobile-first: una columna por defecto, se expande en `sm` y `lg`.

## 6. Movimiento

Framer Motion, con curva compartida `[0.16, 1, 0.3, 1]`.

- `Reveal` (`src/components/landing/reveal.tsx`): entrada `opacity 0 → 1`, `y 24 → 0`,
  disparada por `whileInView` con `once: true` y margen `-80px`. Los `delay` escalonados
  (`i * 0.06`–`0.08`) crean el efecto cascada en grillas.
- Hero: entrada más lenta (0.8–1 s) con leve `scale` en el mockup.
- Flotación infinita: mockup móvil y tarjeta de estadística oscilan en `y` (6–7 s, `easeInOut`).
- Hover en tarjetas: `-translate-y-1` + borde violeta al 30 %.

## 7. Arquitectura de componentes

Ruta principal: `src/routes/index.tsx`, que compone en orden:

| Componente | Sección | Nota visual |
| --- | --- | --- |
| `site-nav.tsx` | Navegación fija | `glass`, menú móvil desplegable |
| `hero.tsx` | Hero | Halos violeta/rojo con blur 120px, dashboard + móvil flotante |
| `features.tsx` | Plataforma | 7 tarjetas + 1 tarjeta en `gradient-brand` como cierre |
| `automation.tsx` | Automatización | Flujo Lead → Seguimiento sobre panel `glass` |
| `meta-provider.tsx` | Meta Tech Provider | Sección oscura en `gradient-brand` |
| `chatbots.tsx` | Chatbots IA | Split 2 columnas, mockup móvil con halo `gradient-soft` |
| `marketing.tsx` | Marketing | Dashboard de métricas + lista de servicios |
| `channels.tsx` | Canales | Diagrama de conexiones animadas |
| `results.tsx` | Resultados | 4 KPIs en tarjetas `glass-dark` sobre gradiente |
| `final-cta.tsx` | CTA final + footer | Fondo premium, doble botón, enlaces legales |

Componentes compartidos: `Reveal` y `SectionHeading` (eyebrow + título + descripción, con
variante `tone="dark"` para secciones sobre gradiente).

### Vistas legales

- `src/routes/terminos.tsx` y `src/routes/privacidad.tsx`, sobre
  `src/components/legal/legal-layout.tsx`: tipografía de lectura larga, ancho reducido,
  cabecera con gradiente suave. Contenido alineado a la Ley 1581/2012, el Decreto 1074/2015,
  la SIC y el Estatuto del Consumidor de Colombia, con previsión de GDPR.

## 8. Imágenes

| Archivo | Uso |
| --- | --- |
| `src/assets/dashboard-hero.jpg` | Mockup principal del hero |
| `src/assets/mobile-chat.png` | Chatbot móvil (hero y sección de IA) |
| `src/assets/marketing-dashboard.jpg` | Panel de métricas de marketing |

Siempre importadas como módulos ES, con `width`/`height` explícitos, `alt` descriptivo en
español y `loading="lazy"` salvo en la imagen principal del hero.

## 9. Patrones de botón

| Tipo | Clases base |
| --- | --- |
| Primario | `gradient-brand rounded-2xl px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-float hover:-translate-y-0.5` |
| Secundario | `glass rounded-2xl px-7 py-3.5 text-sm font-semibold text-brand-navy hover:-translate-y-0.5` |
| Sobre gradiente | `glass-dark rounded-xl px-4 py-2 text-sm font-semibold` |

## 10. Accesibilidad y SEO

- Un solo `h1` por página; jerarquía `h2`/`h3` coherente.
- HTML semántico: `header`, `main`, `section`, `article`, `footer`.
- Contraste verificado sobre fondos claros y sobre gradiente (texto en
  `primary-foreground` con opacidades no menores a 70 %).
- `head()` propio por ruta con `title`, `description`, `og:title` y `og:description`.
- Navegación por anclas (`#plataforma`, `#automatizacion`, `#resultados`, `#demo`)
  con desplazamiento suave.

## 11. Reglas al extender el diseño

1. Añadir colores solo como tokens en `:root` + `@theme inline`; nunca inline.
2. Reutilizar `Reveal` y `SectionHeading` para mantener el ritmo de animación.
3. Respetar `max-w-6xl` y `py-24 sm:py-32` en cada nueva sección.
4. Alternar secciones claras y secciones en `gradient-brand` para mantener el contraste.
5. Cualquier tarjeta nueva: `rounded-3xl border border-border bg-card shadow-card`.