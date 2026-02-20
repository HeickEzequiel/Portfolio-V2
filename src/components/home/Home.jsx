import Certifications from "../certifications/Certifications"
import Contact from "../contact/Contact"
import Experience from "../experience/Experience"
import Inicio from "../inicio/Inicio"
import Nav from "../nav/Nav"
import Projects from "../projects/Projects"
import TechStack from "../techStack/TechStack"
import { useRef } from "react"

function Home() {

  const iniRef = useRef(null)
  const expRef = useRef(null)
  const proyRef = useRef(null)
  const certRef = useRef(null)
  const contRef = useRef(null)
 
  return (
    <div className="min-h-screen px-4 bg-transparent text-white md:max-w-7xl md:mx-auto md:px-6 lg:px-8">

        <Nav 
          scrollToIni={()=> iniRef.current?.scrollIntoView({ behavior: "smooth" })}
          scrollToExp={()=> expRef.current?.scrollIntoView({ behavior: "smooth" })}
          scrollToProy={()=> proyRef.current?.scrollIntoView({ behavior: "smooth" })}
          scrollToCert={()=> certRef.current?.scrollIntoView({ behavior: "smooth" })}
          scrollToCont={()=> contRef.current?.scrollIntoView({ behavior: "smooth" })}
        />
        <Inicio iniRef={iniRef} />
        <TechStack/>
        <Experience expRef={expRef} />
        <Projects proyRef={proyRef} />
        <Certifications certRef={certRef} />
        <Contact contRef={contRef} />

    </div>
  )
}

export default Home