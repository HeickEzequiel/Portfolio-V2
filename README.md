# Portfolio v2 — README

## 📌 Descripción

Este proyecto corresponde a la **segunda versión de mi portfolio personal**, construido desde cero con un enfoque más profesional, moderno y orientado a producto.

La nueva versión representa una mejora significativa respecto al portfolio anterior, tanto en arquitectura como en experiencia de usuario, rendimiento y calidad visual.

El objetivo principal fue evolucionar desde un portfolio estático hacia una aplicación frontend moderna, escalable y alineada con prácticas reales de desarrollo.

---

## 🚀 Principales mejoras respecto a la versión anterior

* Rediseño completo del sistema visual (layout consistente, jerarquía y narrativa).
* Arquitectura frontend más limpia y modular.
* Implementación mobile-first real.
* Mejor manejo de assets e imágenes optimizadas.
* Componentes reutilizables y desacoplados.
* Mejora notable en performance percibida.
* Uso de animaciones sutiles orientadas a UX.
* Integración de secciones dinámicas (carouseles, sliders, loops de tecnologías).
* Código más mantenible y escalable.

---

## 🧱 Stack técnico

### Frontend

* React (component architecture)
* Vite (build tool y dev server)
* JavaScript (ES Modules)
* TailwindCSS (utility-first styling)

### UI / UX

* Diseño mobile-first
* Layout basado en container consistente
* Sistema de cards reutilizable
* Gradientes y glassmorphism sutil
* Animaciones de transición y micro-interacciones

### Manejo de imágenes

* Cloudinary para gestión y optimización de assets
* Componente `AdvancedImage`
* Lazy loading implícito
* Optimización de tamaños y formatos

### Interactividad y visualización

* Swiper para:

  * Carouseles de proyectos
  * Loop infinito de certificaciones
  * Tech ticker (marquee de tecnologías)
* Autoplay continuo para secciones de proof visual

---

## 🧩 Arquitectura de componentes

El proyecto sigue una arquitectura basada en secciones independientes:

* Navbar sticky con navegación por scroll
* Hero / Inicio
* Tech Stack ticker
* Experiencia
* Proyectos
* Certificaciones (coverflow slider)
* Contacto

Cada sección funciona como componente aislado, permitiendo evolución futura sin impacto global.

---

## 🎨 Decisiones técnicas relevantes

* Container único (`max-w`) para consistencia visual.
* Separación clara entre secciones principales y componentes de ritmo visual.
* Prioridad en performance percibida sobre efectos pesados.
* Uso de sliders solo donde aportan señal visual (proof).
* Enfoque en portfolio como producto, no como página estática.

---

## ⚡ Performance y optimización

* Vite para builds rápidos.
* Tailwind para reducir CSS innecesario.
* Assets optimizados mediante Cloudinary.
* Animaciones CSS en lugar de librerías pesadas.
* Componentización para evitar renders innecesarios.

---

## 🔮 Próximas mejoras previstas

* Modo oscuro refinado.
* Data-driven content (contenido configurable).
* Analytics de interacción.
* Versión multi-idioma.
* Sección de casos de estudio.
* Posible backend para contenido dinámico.

---

## 👤 Autor

Ezequiel Heick
Full Stack Developer

---

Este portfolio representa una evolución técnica y conceptual importante, marcando el paso de un portfolio inicial a una aplicación frontend moderna orientada a producto.
