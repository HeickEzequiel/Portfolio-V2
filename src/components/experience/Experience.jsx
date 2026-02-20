function Experience({ expRef }) {
  return (
    <section
      ref={expRef}
      className="max-w-5xl mx-auto px-4 md:px-12 py-16">


      <h1 className="text-2xl md:text-3xl font-bold mb-10 bg-linear-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
        Experiencia
      </h1>

      <div className="space-y-6">


        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-violet-500/40 transition">
          <h2 className="font-medium text-lg md:text-xl">
            Desarrollador Web Freelance
          </h2>

          <p className="text-sm opacity-70 mb-3">
            2023 — Actualidad
          </p>

          <p className="mb-3">
            Desarrollo de aplicaciones web end-to-end: análisis, desarrollo, testing y despliegue.
          </p>

          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Landing estudio jurídico (SEO + responsive)</li>
            <li>UlBakuya — sistema de academias</li>
            <li>EventApp — plataforma de eventos</li>
          </ul>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-violet-500/40 transition">
          <h2 className="font-medium text-lg md:text-xl">
            Instructor de Taekwondo
          </h2>

          <p className="text-sm opacity-70 mb-3">
            2015 — Actualidad
          </p>

          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Liderazgo y formación de grupos</li>
            <li>Coordinación de eventos</li>
            <li>Gestión de experiencia del alumno</li>
            <li>Comunicación y trabajo en equipo</li>
          </ul>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-violet-500/40 transition">
          <h2 className="font-medium text-lg md:text-xl">
            Soporte IT — YPF / Aegis
          </h2>

          <p className="text-sm opacity-70 mb-3">
            2012 — 2014
          </p>

          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Soporte sistemas críticos</li>
            <li>Resolución de incidentes</li>
            <li>BackOffice</li>
            <li>Redes y telefonía IP</li>
          </ul>
        </div>

      </div>
    </section>
  )
}

export default Experience