import { useState } from "react";


function Nav({ scrollToIni, scrollToExp, scrollToProy, scrollToCert, scrollToCont }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isClose, setIsClose] = useState(false)

  const closeMenu = () => {
    setIsClose(true)
    setTimeout(() => {
      setIsOpen(false)
      setIsClose(false)
    }, 700)
  }

  return (
    <section className="sticky top-0 z-50 bg-white/5 backdrop-blur-md border-b border-white/10">

      {/* wrapper alineado con el resto del sitio */}
      <div className="max-w-5xl mx-auto px-4 md:px-12 py-4 md:py-6 flex items-center justify-between">

        {/* left */}
        <button
          onClick={scrollToIni}
          className="px-4 py-2 rounded-lg hover:bg-[#7c3aed]/20 transition font-medium">
          Inicio
        </button>

        {/* burger */}
        <button
          className={`md:hidden text-xl font-bold text-violet-300 ${isClose ? "" : "animate-fade-in-left"}`}
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? null : "☰"}
        </button>

        {/* desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={scrollToExp} className="px-4 py-2 rounded-lg hover:bg-[#7c3aed]/20 transition">Experiencia</button>
          <button onClick={scrollToProy} className="px-4 py-2 rounded-lg hover:bg-[#7c3aed]/20 transition">Proyectos</button>
          <button onClick={scrollToCert} className="px-4 py-2 rounded-lg hover:bg-[#7c3aed]/20 transition">Certificaciones</button>
          <button onClick={scrollToCont} className="px-4 py-2 rounded-lg hover:bg-[#7c3aed]/20 transition">Contacto</button>
        </div>

      </div>

      {/* mobile menu */}
      {isOpen && (
        <div className={`md:hidden absolute grid right-0 top-full w-2/3 bg-[#7c3aed]/90 p-6 space-y-4 ${isClose ? "animate-fade-out-right" : "animate-fade-in-left"}`}>

          <button className="absolute top-2 right-4 text-2xl" onClick={closeMenu}>✕</button>

          <button onClick={scrollToExp}>Experiencia</button>
          <button onClick={scrollToProy}>Proyectos</button>
          <button onClick={scrollToCert}>Certificaciones</button>
          <button onClick={scrollToCont}>Contacto</button>

        </div>
      )}
    </section>
  )
}

export default Nav