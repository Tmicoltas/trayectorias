// src/pages/Transformacion.tsx

import Navbar from '../components/layout/Navbar'
import PageWrapper from '../components/layout/PageWrapper'

const moments = [

  {
    title:'Ingreso',
    text:'La licenciatura aparecía como una herramienta, no como destino.',
  },

  {
    title:'Tensión',
    text:'Las experiencias en aula empezaron a cuestionar sus expectativas.',
  },

  {
    title:'Práctica',
    text:'El aula dejó de ser teoría y se convirtió en experiencia humana.',
  },

  {
    title:'Descubrimiento',
    text:'La enseñanza empezó a sentirse como una forma de acompañar.',
  },

  {
    title:'Vocación',
    text:'La identidad docente se construyó desde la experiencia.',
  },

]

function Transformacion() {

  return (

    <PageWrapper>

      <Navbar />

      <section
        className="
        min-h-screen
        px-10
        py-40
        "
      >

        <div className="max-w-5xl mx-auto">

          {moments.map((moment, index) => (

            <section
              key={index}

              className="
              min-h-screen
              flex
              flex-col
              justify-center
              border-l
              border-black/10
              pl-20
              relative
              "
            >

              <div
                className="
                absolute
                left-[-10px]
                top-1/2
                w-5
                h-5
                rounded-full
                bg-black
                "
              />

              <p
                className="
                uppercase
                tracking-[0.3em]
                text-sm
                mb-6
                "
              >

                {moment.title}

              </p>

              <h2
                className="
                text-6xl
                leading-tight
                max-w-3xl
                mb-10
                "
              >

                {moment.text}

              </h2>

              <div
                className="
                border-l-2
                border-[#8A2E2E]
                pl-6
                max-w-md
                text-[#5C5C5C]
                "
              >

                Torres (2022)
                <br />
                Conciencia vocacional

              </div>

            </section>

          ))}

        </div>

      </section>

    </PageWrapper>

  )
}

export default Transformacion