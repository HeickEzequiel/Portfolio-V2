import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import { html, css, js, node, express, react, vite, zustand, tanstack, json, tailwind, sequelize, postgre, redux } from "../../config/cloudinary"
import "swiper/css"
import { AdvancedImage } from "@cloudinary/react"

const techStackImages = [
  { img: html, alt: "HTML" },
  { img: css, alt: "CSS" },
  { img: js, alt: "JavaScript" },
  { img: node, alt: "Node.js" },
  { img: express, alt: "Express.js" },
  { img: json, alt: "JSON" },
  { img: postgre, alt: "PostgreSQL" },
  { img: sequelize, alt: "Sequelize" },
  { img: vite, alt: "Vite" },
  { img: react, alt: "React" },
  { img: zustand, alt: "Zustand" },
  { img: tanstack, alt: "TanStack Query" },
  { img: redux, alt: "Redux Toolkit" },
  { img: tailwind, alt: "Tailwind CSS" }
]

function TechStack() {
  return (
    <section className="max-w-5xl mx-auto px-4 md:px-12 py-12">


      <p className="text-xs uppercase tracking-widest opacity-50 mb-6">
        Tecnologías principales
      </p>


      <div className="relative overflow-hidden">


        
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-linear-to-r from-black to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-linear-to-l from-black to-transparent z-10" />

        <Swiper
          modules={[Autoplay]}
          loop
          slidesPerView="auto"
          spaceBetween={48}
          speed={4000}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          grabCursor={false}
          allowTouchMove={false}
        >
          {[...techStackImages, ...techStackImages].map((tech, index) => (
            <SwiperSlide key={index} className="w-auto!">
              <AdvancedImage
                cldImg={tech.img}
                alt={tech.alt}
                className="w-28 h-28 md:w-32 md:h-32 object-contain opacity-80 hover:opacity-100 transition"
              />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  )
}

export default TechStack