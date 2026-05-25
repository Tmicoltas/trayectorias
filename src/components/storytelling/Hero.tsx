// src/components/storytelling/Hero.tsx

import { motion } from 'framer-motion'

function Hero() {

  return (

    <section
      className="
      relative
      min-h-screen
      overflow-hidden
      flex
      items-center
      px-10
      md:px-24
      "
    >

      {/* FONDO */}

      <div
        className="
        absolute
        inset-0
        "
      >

        {/* FOTO 1 */}

        <div
          className="
          absolute
          top-0
          left-0
          w-[55%]
          h-[70%]
          bg-cover
          bg-center
          grayscale
          opacity-30
          mix-blend-multiply
          "
          style={{
            backgroundImage:
            "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1974')"
          }}
        />

        {/* FOTO 2 */}

        <div
          className="
          absolute
          bottom-0
          right-0
          w-[45%]
          h-[60%]
          bg-cover
          bg-center
          grayscale
          opacity-20
          rotate-[-4deg]
          mix-blend-multiply
          "
          style={{
            backgroundImage:
            "url('https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=2070')"
          }}
        />

        {/* PAPEL */}

        <div
          className="
          absolute
          inset-0
          opacity-40
          mix-blend-multiply
          "
          style={{
            backgroundImage:
            "url('https://www.transparenttextures.com/patterns/paper.png')"
          }}
        />

      </div>

      {/* LÍNEAS */}

      <div className="absolute left-[10%] top-0 h-full w-px bg-black/10" />
      <div className="absolute right-[15%] top-0 h-full w-px bg-black/10" />

      {/* CONTENIDO */}

      <motion.div

        initial={{
          opacity:0,
          y:100
        }}

        animate={{
          opacity:1,
          y:0
        }}

        transition={{
          duration:1.5
        }}

        className="
        relative
        z-10
        max-w-5xl
        "
      >

        <p
          className="
          uppercase
          tracking-[0.4em]
          text-xs
          mb-6
          text-[#5C5C5C]
          "
        >

          Archivo etnográfico digital

        </p>

        <h1
          className="
          text-[clamp(4rem,9vw,9rem)]
          leading-[0.9]
          tracking-[-0.05em]
          mb-8
          "
        >

          Algunos nunca quisieron ser docentes.

        </h1>

        <motion.p

          initial={{
            opacity:0
          }}

          animate={{
            opacity:1
          }}

          transition={{
            delay:.8,
            duration:1.5
          }}

          className="
          text-xl
          leading-loose
          max-w-2xl
          text-[#3f3f3f]
          "
        >

          Pero algo cambió en el camino.

        </motion.p>

        {/* SCROLL */}

        <motion.div

          animate={{
            y:[0,12,0]
          }}

          transition={{
            repeat:Infinity,
            duration:2
          }}

          className="
          mt-24
          flex
          items-center
          gap-4
          "
        >

          <div className="w-20 h-px bg-black" />

          <span
            className="
            uppercase
            tracking-[0.2em]
            text-sm
            "
          >

            Explorar trayectorias

          </span>

        </motion.div>

      </motion.div>

    </section>

  )
}

export default Hero