import Navbar from '../components/layout/Navbar'
import PageWrapper from '../components/layout/PageWrapper'

const nodes = [

  {
    title:'empatía',
    text:'Escuchar antes de enseñar.',
  },

  {
    title:'cuidado',
    text:'Acompañar también es pedagogía.',
  },

  {
    title:'frustración',
    text:'No todas las experiencias transforman igual.',
  },

  {
    title:'diversidad',
    text:'Cada aula contiene múltiples mundos.',
  },

  {
    title:'escucha',
    text:'La relación pedagógica comienza ahí.',
  },

  {
    title:'tensión',
    text:'Las fronteras sociales entran al salón.',
  },

]

function MicroUniversos() {

  return (

    <PageWrapper>

      <Navbar />

      <main
        className="
        min-h-screen
        bg-[#111]
        text-white
        relative
        overflow-hidden
        "
      >

        {/* TEXTURA */}

        <div
          className="
          absolute
          inset-0
          opacity-20
          mix-blend-screen
          "
          style={{
            backgroundImage:
            "url('https://www.transparenttextures.com/patterns/asfalt-light.png')"
          }}
        />

        {/* MANCHAS */}

        <div
          className="
          absolute
          top-20
          left-20
          w-96
          h-96
          rounded-full
          bg-[#8A2E2E]
          opacity-20
          blur-3xl
          "
        />

        <div
          className="
          absolute
          bottom-20
          right-20
          w-[500px]
          h-[500px]
          rounded-full
          bg-[#d7c7a3]
          opacity-10
          blur-3xl
          "
        />

        {/* HERO */}

        <section
          className="
          min-h-screen
          flex
          flex-col
          justify-center
          px-10
          md:px-24
          relative
          z-10
          "
        >

          <p
            className="
            uppercase
            tracking-[0.35em]
            text-xs
            mb-8
            text-white/60
            "
          >

            Sociología emocional del aula
          </p>

          <h1
            className="
            text-[clamp(4rem,9vw,9rem)]
            leading-[0.9]
            tracking-[-0.05em]
            max-w-5xl
            "
          >

            Las aulas son
            micro universos sociales.
          </h1>

        </section>

        {/* NODOS */}

        <section
          className="
          min-h-screen
          px-10
          md:px-24
          py-40
          relative
          z-10
          "
        >

          <div
            className="
            grid
            md:grid-cols-2
            gap-20
            "
          >

            {nodes.map((node, index) => (

              <div

                key={index}

                className="
                relative
                border
                border-white/10
                p-14
                hover:bg-white
                hover:text-black
                transition-all
                duration-1000
                group
                overflow-hidden
                "
              >

                {/* FONDO */}

                <div
                  className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-20
                  transition-all
                  duration-1000
                  bg-cover
                  bg-center
                  grayscale
                  "
                  style={{
                    backgroundImage:
                    "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1932')"
                  }}
                />

                <div className="relative z-10">

                  <p
                    className="
                    uppercase
                    tracking-[0.25em]
                    text-xs
                    mb-8
                    "
                  >

                    dimensión emocional

                  </p>

                  <h2
                    className="
                    text-5xl
                    mb-8
                    "
                  >

                    {node.title}

                  </h2>

                  <p
                    className="
                    text-xl
                    leading-loose
                    opacity-80
                    "
                  >

                    {node.text}

                  </p>

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* CIERRE */}

        <section
          className="
          min-h-screen
          flex
          items-center
          px-10
          md:px-24
          relative
          z-10
          "
        >

          <div className="max-w-4xl">

            <p
              className="
              uppercase
              tracking-[0.35em]
              text-xs
              mb-8
              text-white/60
              "
            >

              Reflexión
            </p>

            <h2
              className="
              text-[clamp(3rem,7vw,7rem)]
              leading-[0.92]
              tracking-[-0.04em]
              "
            >

              Comprender el aula
              también implica
              comprender las emociones,
              tensiones y vínculos
              que la atraviesan.
            </h2>

          </div>

        </section>

      </main>

    </PageWrapper>

  )
}

export default MicroUniversos