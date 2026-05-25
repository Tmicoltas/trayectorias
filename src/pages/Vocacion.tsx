// src/pages/Vocacion.tsx

import Navbar from '../components/layout/Navbar'
import PageWrapper from '../components/layout/PageWrapper'

const phrases = [

  'La vocación no fue inmediata.',

  'Aprendí a escuchar.',

  'Ser docente también es acompañar.',

  'Nunca dejé de ser aprendiente.',

]

function Vocacion() {

  return (

    <PageWrapper>

      <Navbar />

      <section
        className="
        min-h-screen
        bg-black
        text-white
        px-10
        py-40
        flex
        flex-col
        justify-center
        "
      >

        <div className="max-w-5xl mx-auto">

          {phrases.map((phrase, index) => (

            <h2
              key={index}

              className="
              text-[clamp(2.5rem,5vw,5rem)]
              leading-tight
              mb-20
              opacity-80
              "
            >

              {phrase}

            </h2>

          ))}

          <div
            className="
            border-l-2
            border-white/30
            pl-8
            mt-40
            max-w-2xl
            "
          >

            <p
              className="
              uppercase
              tracking-[0.3em]
              text-sm
              mb-6
              "
            >

              Torres (2022)
            </p>

            <p
              className="
              text-2xl
              leading-relaxed
              text-white/80
              "
            >

              La vocación docente se configura
              como parte de la identidad profesional.

            </p>

          </div>

          <h3
            className="
            text-5xl
            mt-40
            leading-tight
            max-w-4xl
            "
          >

            ¿En qué momento una profesión empieza
            a convertirse en identidad?

          </h3>

        </div>

      </section>

    </PageWrapper>

  )
}

export default Vocacion