# WENREI DESIGN — Portfolio

Portfolio personal de Ramón Camacho (WENREI DESIGN), construido en **React + Vite** con **React Router** y **Framer Motion**.

> Designing clarity. Building reality.

---

## Cómo arrancarlo

Necesitas tener instalado **Node.js** (versión 18 o superior).

```bash
# 1. Instalar dependencias
npm install

# 2. Arrancar en modo desarrollo (http://localhost:5173)
npm run dev

# 3. Generar la build de producción (carpeta /dist)
npm run build

# 4. Previsualizar la build de producción
npm run preview
```

---

## Estructura

```
wenrei/
├─ index.html              → entrada HTML, fuentes (Public Sans) y meta tags
├─ public/
│  └─ favicon.svg          → isotipo (3 diagonales) como favicon
├─ src/
│  ├─ main.jsx             → punto de entrada + BrowserRouter
│  ├─ App.jsx              → rutas y scroll restoration
│  ├─ assets/              → imágenes de portada de los casos
│  ├─ components/
│  │  ├─ Logo.jsx          → isotipo SVG + logotipo (reutilizable)
│  │  ├─ Navbar.jsx        → navegación fija, menú móvil, selector idioma
│  │  ├─ Footer.jsx        → CTA de contacto + enlaces
│  │  ├─ CaseCard.jsx      → card de cada caso en el grid de Work
│  │  └─ Reveal.jsx        → animación de aparición al hacer scroll
│  ├─ data/
│  │  └─ cases.js          → CONTENIDO de los 3 casos de estudio
│  ├─ pages/
│  │  ├─ Home.jsx          → Hero + Pillars + Work + About
│  │  ├─ CaseStudy.jsx     → plantilla de caso (las 3 URLs)
│  │  └─ NotFound.jsx      → página 404
│  └─ styles/
│     ├─ global.css        → design tokens (paleta 60/30/10, tipografía)
│     ├─ components.css    → navbar, footer, botones
│     └─ pages.css         → hero, work, about, caso de estudio
```

---

## Rutas

| URL | Página |
|-----|--------|
| `/` | Home (Work + About + Contact por scroll) |
| `/work/cupra-book-an-appointment` | Caso 1 — Booking flow CUPRA |
| `/work/cupra-faq-architecture` | Caso 2 — FAQ architecture CUPRA |
| `/work/gencat-public-procedure` | Caso 3 — Trámite público (Deloitte) |

Al pulsar **"View case"** la navegación ocurre dentro de la misma ventana (sin recargar, sin pestaña nueva), y la URL cambia.

---

## Sistema de marca aplicado

- **Paleta 60/30/10:** Cold White `#F8FAFC` · Near Black `#0F1012` · Fuchsia `#FE35AA` (solo como acento).
- **Tipografía:** Public Sans (cargada desde Google Fonts).
- **Isotipo:** tres diagonales paralelas (Design / Systems / Code), la tercera en fucsia. Está en `src/components/Logo.jsx` como `<Isotype />`. Si tienes el SVG oficial, sustitúyelo ahí y en `public/favicon.svg`.
- **Accesibilidad:** skip-link, focus visible en fucsia, `prefers-reduced-motion`, jerarquía semántica, `alt` en imágenes, navegación por teclado.

---

## Cómo editar el contenido

**Todo el contenido de los casos vive en un solo archivo:** `src/data/cases.js`.
Cada caso es un objeto con su `slug` (la URL), portada, tags, métrica, meta (rol, equipo, etc.) y las `sections` (bloques de texto e imagen). Edita ahí sin tocar el diseño.

Los textos de Home (hero, pilares, about, principios) están en `src/pages/Home.jsx`.

---

## Escalar a futuro

- **Más idiomas (ES):** la estructura ya está pensada para ello. El botón EN/ES del navbar es el punto de entrada. La forma limpia sería extraer los textos a archivos `en.js` / `es.js` y usar el contexto de idioma, o añadir `react-i18next`.
- **Blog u otras secciones:** añade una ruta nueva en `App.jsx` (ej. `/blog` y `/blog/:slug`) replicando el patrón de `CaseStudy.jsx`.
- **Deploy:** la build (`/dist`) es estática. Funciona en Vercel, Netlify o GitHub Pages. **Importante:** al ser una SPA con rutas, configura el *fallback* a `index.html` (en Vercel/Netlify es automático; en otros servidores hay que añadir la regla de rewrite).

---

Hecho con foco en claridad, sistema y accesibilidad.
