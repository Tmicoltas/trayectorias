// src/pages/voces/Daniela.tsx

import Navbar from '../../components/layout/Navbar'
import PageWrapper from '../../components/layout/PageWrapper'

import ArchiveQuote from '../../components/storytelling/ArchiveQuote'
import SectionTitle from '../../components/storytelling/SectionTitle'

function Daniela() {

  return (

    <PageWrapper>

      <Navbar />

      {/* HERO */}

      <section
        className="
        min-h-screen
        flex
        items-center
        px-10
        md:px-24
        relative
        overflow-hidden
        "
      >

        {/* FOTO */}

        <div
          className="
          absolute
          right-0
          top-0
          w-[45vw]
          h-screen
          bg-cover
          bg-center
          grayscale
          opacity-20
          mix-blend-multiply
          "
          style={{
            backgroundImage:
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071')"
          }}
        />

        {/* MANCHA */}

        <div
          className="
          absolute
          top-20
          left-20
          w-72
          h-72
          rounded-full
          bg-[#d7c7a3]
          opacity-20
          blur-3xl
          "
        />

        <div className="max-w-5xl relative z-10">

          <p
            className="
            uppercase
            tracking-[0.35em]
            text-xs
            mb-8
            "
          >

            Archivo individual · Daniela Cortez
          </p>

          <h1
            className="
            text-[clamp(4rem,10vw,9rem)]
            leading-[0.9]
            tracking-[-0.05em]
            mb-10
            "
          >

            Daniela no quería ser profesora.
          </h1>

          <p
            className="
            text-2xl
            leading-relaxed
            max-w-2xl
            text-[#444]
            "
          >

            Su interés inicial estaba en la sociología,
            el trabajo comunitario y la comprensión
            de los grupos sociales desde una mirada humana.

          </p>

        </div>

      </section>

      {/* PLAN ORIGINAL */}

      <section
        className="
        py-40
        px-10
        md:px-24
        "
      >

        <SectionTitle

          label="Trayectoria inicial"

          title="El plan original"

          description="
          La licenciatura aparecía como una herramienta
          pedagógica para fortalecer procesos sociales,
          comunitarios y humanos.
          "

        />

        <div
          className="
          grid
          md:grid-cols-2
          gap-24
          items-start
          "
        >

          <ArchiveQuote

            quote="
            Aprender a leer el contexto.
            "

            author="Daniela Cortez"

            theory="
            Motivación instrumental · Lortie (1975)
            "

          />

          <div
            className="
            flex
            flex-col
            gap-12
            "
          >

            <p
              className="
              text-xl
              leading-loose
              text-[#444]
              "
            >

              La docencia no aparecía todavía
              como un proyecto identitario.
              Su ingreso a la licenciatura
              respondía a una necesidad de
              herramientas humanas y pedagógicas.

            </p>

            <div
              className="
              border-l-2
              border-[#8A2E2E]
              pl-8
              text-[#555]
              leading-loose
              "
            >

              La decisión profesional estaba
              vinculada inicialmente a procesos
              sociales y comunitarios más amplios
              que el aula tradicional.

            </div>

          </div>

        </div>

      </section>

      {/* QUIEBRE */}

      <section
        className="
        min-h-screen
        px-10
        md:px-24
        flex
        items-center
        relative
        overflow-hidden
        "
      >

        {/* LÍNEAS */}

        <div className="absolute left-[18%] top-0 h-full w-px bg-[#8A2E2E]/30" />

        <div className="absolute left-[52%] top-0 h-full w-px bg-black/10" />

        <div className="absolute left-[74%] top-0 h-full w-px bg-[#8A2E2E]/20" />

        {/* FOTO */}

        <div
          className="
          absolute
          inset-0
          bg-cover
          bg-center
          grayscale
          opacity-10
          mix-blend-multiply
          "
          style={{
            backgroundImage:
            "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1932')"
          }}
        />

        <div className="max-w-5xl relative z-10">

          <p
            className="
            uppercase
            tracking-[0.35em]
            text-xs
            mb-6
            "
          >

            Fronteras invisibles
          </p>

          <h2
            className="
            text-[clamp(3rem,7vw,7rem)]
            leading-[0.95]
            tracking-[-0.04em]
            mb-12
            "
          >

            El aula empezó
            a parecerse
            al mundo exterior.
          </h2>

          <p
            className="
            text-2xl
            leading-loose
            max-w-3xl
            text-[#444]
            "
          >

            Las tensiones sociales,
            los prejuicios y las desigualdades
            aparecían dentro del salón de clase
            como pequeños universos emocionales
            y políticos.

          </p>

        </div>

      </section>

      {/* EXPERIENCIA */}

      <section
        className="
        py-40
        px-10
        md:px-24
        "
      >

        <div
          className="
          grid
          md:grid-cols-2
          gap-24
          "
        >

          <div
            className="
            sticky
            top-40
            self-start
            "
          >

            <SectionTitle

              label="Transformación"

              title="
              Aprender a acompañar
              "

              description="
              La práctica docente comenzó
              a entenderse como una experiencia
              profundamente humana.
              "

            />

          </div>

          <div
            className="
            flex
            flex-col
            gap-24
            "
          >

            <ArchiveQuote

              quote="
              El aula no era simplemente
              dar la espalda y escribir
              en el tablero.
              "

              author="Daniela Cortez"

              theory="
              Conciencia vocacional · Torres (2022)
              "

            />

            <ArchiveQuote

              quote="
              El cuidado también
              hace parte de enseñar.
              "

              author="Daniela Cortez"

              theory="
              Compromiso educativo · Torres (2022)
              "

            />

            <ArchiveQuote

              quote="
              Nunca dejé de ser
              aprendiente y enseñante.
              "

              author="Daniela Cortez"

              theory="
              Identidad profesional docente
              "

            />

          </div>

        </div>

      </section>

      {/* CIERRE */}

      <section
        className="
        min-h-screen
        bg-black
        text-white
        flex
        items-center
        px-10
        md:px-24
        relative
        overflow-hidden
        "
      >

        <div
          className="
          absolute
          inset-0
          opacity-10
          mix-blend-screen
          "
          style={{
            backgroundImage:
            "url('https://www.transparenttextures.com/patterns/asfalt-light.png')"
          }}
        />

        <div className="max-w-5xl relative z-10">

          <p
            className="
            uppercase
            tracking-[0.35em]
            text-xs
            mb-8
            text-white/60
            "
          >

            Reflexión final
          </p>

          <h2
            className="
            text-[clamp(3rem,8vw,8rem)]
            leading-[0.92]
            tracking-[-0.05em]
            mb-16
            "
          >

            La vocación
            no apareció
            de inmediato.
          </h2>

          <p
            className="
            text-2xl
            leading-loose
            max-w-3xl
            text-white/75
            "
          >

            Se construyó lentamente,
            entre experiencias,
            tensiones,
            cuidado,
            escucha
            y acompañamiento.

          </p>

        </div>

      </section>

    </PageWrapper>

  )
}

export default Daniela