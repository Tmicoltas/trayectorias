import { Routes, Route } from 'react-router-dom'

import CursorGlow from './components/immersive/CursorGlow'
import SmoothScroll from './components/immersive/SmoothScroll'

import Home from './pages/Home'
import Inicio from './pages/Inicio'
import Transformacion from './pages/Transformacion'
import Vocacion from './pages/Vocacion'
import MicroUniversos from './pages/MicroUniversos'
import Daniela from './pages/voces/Daniela'

function App() {

  return (

    <>

      <SmoothScroll />

      <CursorGlow />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/inicio" element={<Inicio />} />

        <Route
          path="/transformacion"
          element={<Transformacion />}
        />

        <Route
          path="/micro-universos"
          element={<MicroUniversos />}
        />

        <Route
          path="/vocacion"
          element={<Vocacion />}
        />

        <Route
          path="/voces/daniela"
          element={<Daniela />}
        />

      </Routes>

    </>

  )
}

export default App