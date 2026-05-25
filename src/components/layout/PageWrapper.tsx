// src/components/layout/PageWrapper.tsx

import type { ReactNode } from 'react'

interface Props{
  children:ReactNode
}

function PageWrapper({
  children
}:Props){

  return (

    <main
      className="
      relative
      overflow-hidden
      bg-[#F4F0E8]
      "
    >

      {/* TEXTURA */}

      <div
        className="
        fixed
        inset-0
        opacity-30
        mix-blend-multiply
        pointer-events-none
        "
        style={{
          backgroundImage:
          "url('https://www.transparenttextures.com/patterns/paper.png')"
        }}
      />

      {/* LÍNEAS */}

      <div className="fixed left-[10%] top-0 h-full w-px bg-black/10" />

      <div className="fixed right-[15%] top-0 h-full w-px bg-black/10" />

      {children}

    </main>

  )
}

export default PageWrapper