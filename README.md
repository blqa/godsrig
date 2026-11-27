# GodsRig · by God's Plan

Soporte técnico y ensamble de PC: mantenimiento y limpieza, optimización de sistema, upgrades de componentes (RAM, SSD, tarjeta gráfica) y armado de equipos a medida.

**Sitio:** https://rig.godsplan.dev

## Qué incluye

- `index.html`: página principal con servicios estrella y contacto.
- `catalogo.html`: catálogo completo de servicios con precios.
- `ejemplos/`: páginas web de muestra para negocios ficticios (cafetería, taquería, barbería y gimnasio). Cada una es un solo archivo HTML, sin instalación; los colores y tipografías se cambian en el bloque `:root` al inicio del archivo.

## Tecnología

HTML y CSS propios, sin librerías externas. Sigue el sistema de diseño de God's Plan (`DESIGN_SYSTEM.md` en [blqa/godsplan-site](https://github.com/blqa/godsplan-site)):

- `assets/estudio.css`: estilo "estudio" compartido (cápsula flotante, órbita, tarjetas, panel de método, contacto). Es copia de `godsplan.dev/assets/home.css`; si cambia un componente común, se cambia allá primero.
- `assets/rig.css`: lo propio de GodsRig (precios, catálogo, sello "by God's Plan").
- `assets/rig.js`: luz de las tarjetas, órbita y encabezado.
- `assets/gp-kit.js` y `assets/gp-kit.css`: kit compartido de God's Plan (Motion, Embla, Floating UI, buscador Ctrl/⌘+K, avisos, bordes animados). Es copia de `godsplan-site/assets/`; se compila en el repo godsplan-site (`kit/README.md`).
- `assets/rig.js`: fondo del encabezado al hacer scroll y aparición suave de secciones.
- `assets/fonts/`: Montserrat, Inter y Martian Mono alojadas aquí (`.woff2`, licencia OFL).

No necesita instalación. Las rutas empiezan con `/` (por ejemplo `/assets/estudio.css`), así que para verlo en tu compu ábrelo con un servidor local, por ejemplo `python -m http.server` dentro de la carpeta, y entra a `http://localhost:8000`. Las páginas de `ejemplos/` conservan su propio estilo (Tailwind por CDN) porque son demostraciones para cada tipo de negocio.

## Publicación

Se publica con GitHub Pages desde la rama `main`. El dominio `rig.godsplan.dev` se configura en Settings > Pages, con un registro CNAME hacia `blqa.github.io` en el DNS del dominio.

---

Un proyecto de **[God's Plan](https://godsplan.dev)** · agencia de proyectos.
Contacto: [contacto@godsplan.dev](mailto:contacto@godsplan.dev)
