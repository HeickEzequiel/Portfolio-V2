import { AdvancedImage } from "@cloudinary/react"
import { github, linkedin, gmail, whatsapp } from "../../config/cloudinary"

function Contact({ contRef }) {
  return (
    <section
      ref={contRef}
      className="max-w-5xl mx-auto px-4 md:px-12 py-16">

      <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-10 hover:border-violet-500/40 transition">

        {/* title */}
        <h1 className="text-2xl md:text-3xl font-bold mb-6 bg-linear-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
          Contacto
        </h1>

        {/* short text */}
        <p className="text-sm md:text-base opacity-80 max-w-2xl mb-8">
          Estoy abierto a nuevas oportunidades, colaboraciones o conversaciones
          sobre proyectos. Podés escribirme por cualquiera de estos medios.
        </p>

        {/* icons */}
        <div className="flex flex-wrap gap-6 justify-center md:justify-start mb-8">

          <a
            href="https://www.linkedin.com/in/ezequielheick/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/5 border border-white/10 rounded-xl p-4 hover:border-violet-500/40 transition">
            <AdvancedImage cldImg={linkedin} alt="LinkedIn" className="w-10 h-10" />
          </a>

          <a
            href="https://github.com/HeickEzequiel"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/5 border border-white/10 rounded-xl p-4 hover:border-violet-500/40 transition">
            <AdvancedImage cldImg={github} alt="GitHub" className="w-10 h-10" />
          </a>

          <a
            href="mailto:ezequielheick@gmail.com"
            className="group bg-white/5 border border-white/10 rounded-xl p-4 hover:border-violet-500/40 transition">
            <AdvancedImage cldImg={gmail} alt="Email" className="w-10 h-10" />
          </a>

          <a
            href="https://wa.me/5491134637208"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/5 border border-white/10 rounded-xl p-4 hover:border-violet-500/40 transition">
            <AdvancedImage cldImg={whatsapp} alt="WhatsApp" className="w-10 h-10" />
          </a>

        </div>

        {/* direct info card */}
        <div className="bg-violet-500/10 border border-white/10 rounded-lg p-4 max-w-md space-y-1 text-sm md:text-base">
          <p>
            <span className="opacity-70">WhatsApp:</span> 54 9 11 3463-7208
          </p>
          <p>
            <span className="opacity-70">Email:</span> ezequielheick@gmail.com
          </p>
        </div>

      </div>
    </section>
  )
}
export default Contact