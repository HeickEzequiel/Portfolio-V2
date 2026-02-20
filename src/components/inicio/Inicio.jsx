import { AdvancedImage } from "@cloudinary/react"
import { ezequiel } from "../../config/cloudinary"


function Inicio({ iniRef }) {
  return (
    <section
      ref={iniRef}
      className="max-w-5xl mx-auto px-4 md:px-12 py-16">

      <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-10 hover:border-violet-500/40 transition">

        {/* layout */}
        <div className="flex flex-col md:flex-row md:items-center gap-8">

          {/* image */}
          <AdvancedImage
            cldImg={ezequiel}
            className="w-40 h-40 md:w-52 md:h-52 rounded-2xl object-cover"
          />

          {/* text */}
          <div className="space-y-4">

            <h1 className="text-2xl md:text-3xl font-bold">
              Hola, soy Ezequiel Heick
            </h1>

            <p className="text-base md:text-lg opacity-90">
              Desarrollador Web Full Stack enfocado en construir aplicaciones claras,
              escalables y orientadas a resolver problemas reales. Trabajo
              principalmente con JavaScript, React y Node.js.
            </p>

            <p className="text-sm md:text-base opacity-80">
              Vengo de una base sólida en Soporte IT y liderazgo de equipos,
              lo que me dio una forma de trabajar práctica, ordenada y centrada
              en el usuario.
            </p>

          </div>
        </div>

        {/* description blocks */}
        <div className="mt-8 space-y-4 text-sm md:text-base leading-relaxed max-w-3xl">

          <p>
            Me apasiona crear aplicaciones que no solo funcionen bien, sino que
            también ofrezcan una experiencia de usuario intuitiva y agradable.
            Disfruto diseñando soluciones robustas, modelando bases de datos y
            optimizando flujos de trabajo.
          </p>

          <p>
            Trabajo con React, Zustand, Redux, TailwindCSS, Node.js, Express y
            PostgreSQL, aplicando buenas prácticas, Git y metodologías ágiles.
          </p>

          <p className="opacity-80">
            Estoy enfocado en seguir creciendo como desarrollador y contribuir a
            productos que aporten valor real.
          </p>

        </div>

      </div>
    </section>
  )
}

export default Inicio