import { AdvancedImage } from "@cloudinary/react" 
import { cm, efset, lider, redes, henry } from "../../config/cloudinary"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

const certifications = [
  { img: cm, alt: "Certificación de Comunicaciones" },
  { img: efset, alt: "Certificación de Inglés EF SET" },
  { img: lider, alt: "Certificación de Liderazgo" },
  { img: redes, alt: "Certificación de Redes" },
  { img: henry, alt: "Certificación de Henry" },
]

function Certifications({ certRef }) {
  return (
    <section
      ref={certRef}
      className="max-w-5xl mx-auto px-4 md:px-12 py-16">

      <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-10 hover:border-violet-500/40 transition">

        {/* title */}
        <h1 className="text-2xl md:text-3xl font-bold mb-8 bg-linear-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
          Certificaciones
        </h1>

        {/* slider */}
        <div className="flex justify-center mb-8">

          <Swiper
            modules={[EffectCoverflow, Autoplay, Pagination]}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 75,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            className="w-full max-w-xl h-52"
          >
            {[...certifications, ...certifications].map((cert, index) => (
              <SwiperSlide key={index} className="w-52! h-52 md:w-80! md:h-80">
                <AdvancedImage
                  cldImg={cert.img}
                  alt={cert.alt}
                  className="w-full h-full object-contain rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>

        </div>

        {/* list modern */}
        <div className="space-y-4 text-sm md:text-base leading-relaxed max-w-3xl">

          <div>
            <p className="font-medium">Soy Henry</p>
            <p className="opacity-80">
              Formación Full Stack: JavaScript, React, Node, Express,
              PostgreSQL y Sequelize.
            </p>
          </div>

          <div>
            <p className="font-medium">EF SET — Inglés C2</p>
            <p className="opacity-80">
              Certificación de nivel avanzado en lectura, escritura y escucha.
            </p>
          </div>

          <div>
            <p className="font-medium">Community Manager</p>
            <p className="opacity-80">
              Especialización en gestión estratégica de redes sociales.
            </p>
          </div>

          <div>
            <p className="font-medium">Programa Liderazgo</p>
            <p className="opacity-80">
              Formación en liderazgo, gobernanza y comunicación en contextos
              complejos.
            </p>
          </div>

          <div>
            <p className="font-medium">Comunicación y Redes</p>
            <p className="opacity-80">
              Uso de datos y comunicación digital aplicada a proyectos.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Certifications