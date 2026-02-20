import { AdvancedImage } from "@cloudinary/react"
import { portfoliov, ulbakuya } from "../../config/cloudinary"

function Projects({ proyRef }) {
  return (
    <section
      ref={proyRef}
      className="max-w-5xl mx-auto px-4 md:px-12 py-16">

      {/* title */}
      <h1 className="text-2xl md:text-3xl font-bold mb-10 bg-linear-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
        Proyectos
      </h1>

      {/* grid */}
      <div className="grid gap-6 md:grid-cols-2">

        {/* card ulbakuya */}
        <a
          href="https://ulbakuya.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-violet-500/40 transition">

          {/* image */}
          <AdvancedImage
            cldImg={ulbakuya}
            className="w-full h-44 object-cover group-hover:scale-[1.02] transition"
          />

          {/* content */}
          <div className="p-5 space-y-2">
            <h2 className="font-medium text-lg">
              Ul Bakuya
            </h2>

            <p className="text-sm opacity-80">
              Plataforma de gestión para academias: usuarios, alumnos,
              asistencias y calendario.
            </p>

            <p className="text-xs opacity-60">
              React · Node · PostgreSQL
            </p>
          </div>

        </a>

        {/* card portfolio*/}
        <a
          href="https://portfolio-wheat-seven-30.vercel.app/#/"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-violet-500/40 transition">

          {/* image */}
          <AdvancedImage
            cldImg={portfoliov}
            className="w-full h-44 object-cover group-hover:scale-[1.02] transition"
          />

          {/* content */}
          <div className="p-5 space-y-2">
            <h2 className="font-medium text-lg">
              Primer Porfolio
            </h2>

            <p className="text-sm opacity-80">
              Mi primer portfolio personal: presentación, experiencia, proyectos y contacto.
            </p>

            <p className="text-xs opacity-60">
              React · Vite · TailwindCss
            </p>
          </div>

        </a>

      </div>
    </section>
  )
}

export default Projects