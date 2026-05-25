// src/pages/Inicio.tsx

import Navbar from '../components/layout/Navbar'
import PageWrapper from '../components/layout/PageWrapper'

const fragments = [

  "No me veía en un salón.",

  "Entré por herramientas pedagógicas.",

  "Mi interés era social, no escolar.",

  "La docencia no era mi plan.",

  "Quería comprender comunidades.",

]

function Inicio() {

  return (

    <PageWrapper>

      <Navbar />

      <section
        className="
        min-h-screen
        px-10
        py-40
        relative
        overflow-hidden
        "
      >

        <div className="max-w-6xl mx-auto">

          <h1
            className="
            text-[clamp(3rem,7vw,7rem)]
            leading-none
            mb-24
            "
          >

            Antes de la licenciatura
          </h1>

          <div
            className="
            relative
            min-h-[1200px]
            "
          >

            {fragments.map((text, index) => (

              <div

                key={index}

                className="
                absolute
                bg-[#F8F5EF]
                border
                border-black/10
                shadow-lg
                p-8
                max-w-sm
                rotate-[-2deg]
                hover:rotate-0
                transition-all
                duration-700
                "

                style={{
                  top:`${index * 180}px`,
                  left:`${(index % 2) * 400}px`
                }}
              >

                <p
                  className="
                  text-2xl
                  leading-relaxed
                  "
                >

                  “{text}”

                </p>

                <div
                  className="
                  mt-6
                  flex
                  gap-3
                  "
                >

                  <span
                    className="
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    border
                    border-black/20
                    px-3
                    py-1
                    "
                  >

                    Social

                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </PageWrapper>

  )
}

export default Inicio