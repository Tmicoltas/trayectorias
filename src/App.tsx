import { Link, Navigate, Route, Routes, useParams } from 'react-router-dom'

import { entrevistadosData, hallazgosData, teoriaData, type Entrevistado } from './data/entrevistadosData'

const assetLinks = {
  classroom: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1600',
  library: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1600',
  notebook: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1600',
  emptyClassroom: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1600',
  archive: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1600',
  map: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1600',
  microscope: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600',
  bridge: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600',
  butterflyBook: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1600',
}

const navItems = [
  ['/', 'Inicio'],
  ['/voces', 'Voces'],
  ['/hallazgos', 'Hallazgos'],
  ['/teoria', 'Teoría'],
  ['/cierre', 'Cierre'],
]

function slugify(value: string) {
  return value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-')
}

function App() {
  return (
    <>
      <div className="site-shell">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/voces" element={<VoicesPage />} />
          <Route path="/voces/:slug" element={<ProfilePage />} />
          <Route path="/hallazgos" element={<FindingsPage />} />
          <Route path="/teoria" element={<TheoryPage />} />
          <Route path="/cierre" element={<ClosingPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  )
}

function Navbar() {
  return (
    <header className="topbar">
      <Link to="/" className="brand">
        <span />
        trayectorias
      </Link>
      <nav className="nav-pills" aria-label="Navegación principal">
        {navItems.map(([to, label]) => (
          <Link key={to} to={to}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  )
}

function HomePage() {
  return (
    <main>
      <section className="hero-page">
        <div className="hero-content">
          <p className="eyebrow">Archivo narrativo de investigación</p>
          <h1>Trayectorias de una vocación que no empezó como deseo.</h1>
          <p className="hero-copy">
            Historias de egresados que entraron a una licenciatura sin imaginarse en la docencia formal, y encontraron allí otra forma de leerse profesionalmente.
          </p>
          <div className="hero-actions">
            <Link to="/voces" className="btn btn-outline">Conocer voces</Link>
            <Link to="/hallazgos" className="btn btn-solid">Ver hallazgos</Link>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <SpeechTile />
          <HeroArchiveImage />
        </div>
      </section>

      <section className="home-grid">
        <InfoCard tone="green" title="Punto de partida" text="La docencia escolar no era el horizonte inicial. La pedagogía aparecía como herramienta, interés social o ruta aún incierta." />
        <InfoCard tone="cream" title="Lo que cambió" text="Cursos, prácticas, voluntariados, aulas hospitalarias y diseño pedagógico movieron la idea de enseñar hacia la experiencia." />
        <InfoCard tone="blue" title="Lo que queda" text="La identidad docente aparece como servicio, cuidado, escucha, Ikigai, investigación y compromiso educativo." />
      </section>
    </main>
  )
}

function VoicesPage() {
  return (
    <main className="page-pad">
      <PageTitle title="Voces" text="Cada perfil funciona como una ruta breve: entrada, tensión, quiebre y resignificación." />
      <section className="voice-grid">
        {entrevistadosData.map((persona) => (
          <Link className="voice-card" key={persona.nombre} to={`/voces/${slugify(persona.pseudonimo)}`}>
            <div className="voice-top">
              <span>{persona.programa}</span>
              <ImageMarker url={persona.ilustracion === 'tejido' ? assetLinks.notebook : assetLinks.library} />
            </div>
            <h2>{persona.nombre}</h2>
            <p>{persona.ocupacionActual}</p>
            <strong>{persona.arquetipo}</strong>
          </Link>
        ))}
      </section>
      <section className="gallery-strip">
        <PhotoCard url={assetLinks.classroom} label="Aula como territorio" />
        <PhotoCard url={assetLinks.notebook} label="Notas de trayectoria" />
        <PhotoCard url={assetLinks.library} label="Formación y memoria" />
      </section>
    </main>
  )
}

function ProfilePage() {
  const { slug } = useParams()
  const persona = entrevistadosData.find((item) => slugify(item.pseudonimo) === slug)

  if (!persona) {
    return <Navigate to="/voces" replace />
  }

  return (
    <main className="profile-page">
      <section className="profile-hero-card">
        <div>
          <p className="eyebrow">Archivo individual</p>
          <h1>{persona.nombre}</h1>
          <p>{persona.fraseCentral}</p>
        </div>
        <ProfileGlyph persona={persona} />
      </section>

      <section className="identity-strip">
        <MetaPill label="Programa" value={persona.programa} />
        <MetaPill label="Trabajo actual" value={persona.ocupacionActual} />
        <MetaPill label="Arquetipo" value={persona.arquetipo} />
      </section>

      <section className="profile-quote-feature">
        <span>Cita de entrada</span>
        <blockquote>{persona.deseosIniciales.frase}</blockquote>
      </section>

      <section className="profile-layout narrative-layout">
        <ProfileBlock tone="blue" title="Antes" label="Deseos iniciales" items={[
          persona.deseosIniciales.ingreso,
          persona.deseosIniciales.rechazo,
          persona.deseosIniciales.imaginabaEnsenando,
        ]} />
        <ProfileBlock tone="green" title="Quiebres" label="Transformación" items={persona.momentosDeQuiebre.map((item) => `${item.titulo}: ${item.descripcion}`)} />
        <ProfileBlock tone="pink" title="Hoy" label="Vocación resignificada" items={[
          persona.definicionVocacion,
          persona.identidadDocente,
          persona.satisfaccionDocente,
        ]} />
      </section>

      <section className="route-board">
        <h2>Ruta de transformación</h2>
        <div>
          {persona.momentosDeQuiebre.map((momento, index) => (
            <article key={momento.titulo}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{momento.titulo}</h3>
              <p>{momento.textura}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="theory-connection">
        {persona.relacionesTeoricas.map((relacion) => (
          <article key={relacion.autor}>
            <span>{relacion.autor}</span>
            <h3>{relacion.concepto}</h3>
            <p>{relacion.relacion}</p>
          </article>
        ))}
      </section>

      <section className="quote-stack editorial-quotes">
        {persona.citasTextuales.map((quote) => (
          <blockquote key={quote}>{quote}</blockquote>
        ))}
      </section>

      <section className="profile-block green">
        <span className="block-label">Análisis</span>
        <h2>Análisis de entrevista</h2>
        <div>
          {persona.analisis.map((parrafo) => (
            <p key={parrafo}>{parrafo}</p>
          ))}
        </div>
      </section>
    </main>
  )
}

function FindingsPage() {
  return (
    <main className="page-pad">
      <PageTitle title="Hallazgos" text="La matriz se presenta como un tablero de investigación: patrones, relaciones y formas visuales tomadas del archivo." />
      <section className="research-board">
        {hallazgosData.map((hallazgo, index) => (
          <article className={`matrix-card tone-${index}`} key={hallazgo.patron}>
            <div className="matrix-visual">
              <FindingIllustration index={index} />
            </div>
            <div className="matrix-copy">
              <p>{hallazgo.participantes}</p>
              <h3>Relación teórica</h3>
              <p>{hallazgo.relacionTeorica}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

function TheoryPage() {
  return (
    <main className="page-pad">
      <PageTitle title="Teoría" text="Tres lentes para leer la vocación como trayectoria, oficio e identidad profesional." />
      <section className="theory-list">
        {teoriaData.map((item, index) => (
          <article key={item.autor} className={`theory-row tone-${index}`}>
            <span>{item.autor}</span>
            <h2>{item.idea}</h2>
            <p>{item.conectadoCon}</p>
          </article>
        ))}
      </section>
    </main>
  )
}

function ClosingPage() {
  return (
    <main className="closing-page">
      <section className="closing-card">
        <p className="eyebrow">Cierre</p>
        <h1>La vocación también puede aparecer tarde.</h1>
        <p>
          En estas historias, enseñar no fue una respuesta inmediata. Fue una forma de ordenar experiencias, vínculos, dudas y deseos de transformar algo con otros.
        </p>
        <p>
          Las entrevistas realizadas muestran que la vocación docente no siempre surge como un deseo inicial de enseñar, sino que puede construirse progresivamente durante la formación académica y profesional. Los casos de Daniela Cortez, Mateo Villegas y Daniela Idarraga evidencian que, aunque ingresaron a sus programas motivados por intereses como la sociología, la antropología, la investigación o la transformación social, terminaron desarrollando una fuerte identidad vinculada con la educación.
        </p>
        <p>
          Un elemento común fue el rechazo inicial hacia ciertos imaginarios de la profesión docente, asociados a estereotipos sobre su valoración social y económica. Sin embargo, las experiencias prácticas en comunidades, instituciones educativas y procesos de acompañamiento transformaron estas percepciones, permitiéndoles descubrir la educación como un espacio de impacto social, aprendizaje y construcción de relaciones significativas.
        </p>
        <p>
          Los tres entrevistados conciben la docencia más allá de la transmisión de conocimientos, destacando el cuidado, la empatía y el compromiso con los estudiantes. Asimismo, presentan altos niveles de satisfacción con la enseñanza, conciencia vocacional y compromiso educativo, aunque ejercen esta vocación desde formas diversas como el acompañamiento estudiantil, la educación superior, la consultoría o el trabajo comunitario.
        </p>
        <p>
          En conjunto, los hallazgos permiten concluir que la vocación docente es un proceso dinámico que se construye a través de experiencias académicas, personales y profesionales, más que una característica innata o una decisión tomada desde el inicio de la formación universitaria.
        </p>
        <Link to="/" className="btn btn-solid">Volver al inicio</Link>
      </section>
    </main>
  )
}

function PageTitle({ title, text }: { title: string; text: string }) {
  return (
    <section className="page-title">
      <p className="eyebrow">trayectorias</p>
      <h1>{title}</h1>
      <p>{text}</p>
    </section>
  )
}

function InfoCard({ title, text, tone }: { title: string; text: string; tone: string }) {
  return (
    <article className={`info-card ${tone}`}>
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  )
}

function MetaPill({ label, value }: { label: string; value: string }) {
  return (
    <article>
      <span>{label}</span>
      <p>{value}</p>
    </article>
  )
}

function ProfileBlock({ title, label, items, tone }: { title: string; label: string; items: string[]; tone: string }) {
  return (
    <article className={`profile-block ${tone}`}>
      <span className="block-label">{label}</span>
      <h2>{title}</h2>
      <div>
        {items.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </article>
  )
}

function PhotoCard({ url, label }: { url: string; label: string }) {
  return (
    <figure className="photo-card">
      <img src={url} alt="" />
      <figcaption>{label}</figcaption>
    </figure>
  )
}

function SpeechTile() {
  return (
    <div className="speech-tile">
      <p>La docencia dejó de ser destino único y se volvió trayectoria.</p>
    </div>
  )
}

function HeroArchiveImage() {
  return (
    <div className="hero-archive-image">
      <img src={assetLinks.archive} alt="" />
    </div>
  )
}

function ImageMarker({ url }: { url: string }) {
  return (
    <span className="image-marker" aria-hidden="true">
      <img src={url} alt="" />
    </span>
  )
}

function ProfileGlyph({ persona }: { persona: Entrevistado }) {
  return (
    <div className="profile-glyph" aria-hidden="true">
      <img src={persona.ilustracion === 'tejido' ? assetLinks.notebook : assetLinks.emptyClassroom} alt="" />
      <span>{persona.pseudonimo.slice(0, 1)}</span>
    </div>
  )
}

function FindingIllustration({ index }: { index: number }) {
  const images = [
    assetLinks.map,
    assetLinks.microscope,
    assetLinks.bridge,
    assetLinks.butterflyBook,
  ]

  return <img src={images[index] ?? images[0]} alt="" />
}

export default App
