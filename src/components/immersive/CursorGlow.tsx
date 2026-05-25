import { useEffect, useState } from 'react'

function CursorGlow() {

  const [position, setPosition] = useState({
    x:0,
    y:0,
  })

  useEffect(() => {

    const moveCursor = (e:MouseEvent) => {

      setPosition({
        x:e.clientX,
        y:e.clientY,
      })

    }

    window.addEventListener('mousemove', moveCursor)

    return () => {
      window.removeEventListener(
        'mousemove',
        moveCursor
      )
    }

  }, [])

  return (

    <div
      className="
      fixed
      top-0
      left-0
      pointer-events-none
      z-[9999]
      mix-blend-multiply
      "
      style={{
        transform:
        `translate(${position.x - 100}px, ${position.y - 100}px)`
      }}
    >

      <div
        className="
        w-[200px]
        h-[200px]
        rounded-full
        bg-[#d7c7a3]
        opacity-20
        blur-3xl
        "
      />

    </div>

  )
}

export default CursorGlow