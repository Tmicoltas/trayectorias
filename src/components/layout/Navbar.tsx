// src/components/layout/Navbar.tsx

import { Link } from 'react-router-dom'

function Navbar() {

  return (

    <nav
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      px-10
      py-8
      flex
      justify-between
      items-center
      "
    >

      <Link
        to="/"
        className="
        uppercase
        tracking-[0.3em]
        text-xs
        "
      >

        Archivo Vocacional

      </Link>

      <div
        className="
        flex
        gap-8
        text-sm
        uppercase
        tracking-[0.15em]
        "
      >

        <Link to="/inicio">
          Inicio
        </Link>

        <Link to="/transformacion">
          Transformación
        </Link>

        <Link to="/micro-universos">
          Aula
        </Link>

        <Link to="/vocacion">
          Vocación
        </Link>

        <Link to="/voces/daniela">
          Daniela
        </Link>

      </div>

    </nav>
  )
}

export default Navbar