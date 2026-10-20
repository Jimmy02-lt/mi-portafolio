
import './App.css'

const WHATSAPP_NUMBER = '573125382523'

const WHATSAPP_MESSAGE =
  'Hola, vi tu portafolio profesional y me gustarÃ­a contactarte para conversar sobre una oportunidad laboral.'

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`

const skills = [
  { name: 'SQL', category: 'Bases de datos', level: 'Consultas y fundamentos' },
  { name: 'Excel', category: 'AnÃ¡lisis de informaciÃ³n', level: 'Herramienta de trabajo' },
  { name: 'Python', category: 'ProgramaciÃ³n', level: 'Fundamentos' },
  { name: 'Java', category: 'ProgramaciÃ³n', level: 'Fundamentos' },
  { name: 'JavaScript', category: 'Desarrollo web', level: 'Fundamentos' },
  { name: 'HTML & CSS', category: 'Desarrollo web', level: 'Fundamentos' },
]

const experience = [
  'GestiÃ³n de procesos de contrataciÃ³n, afiliaciones y novedades laborales.',
  'ElaboraciÃ³n de informes de gestiÃ³n y seguimiento operativo para apoyar la toma de decisiones.',
  'OrganizaciÃ³n y actualizaciÃ³n de bases de datos y documentaciÃ³n del personal, cuidando la trazabilidad y confidencialidad.',
  'Apoyo a la mejora de procesos mediante anÃ¡lisis de informaciÃ³n e indicadores de gestiÃ³n.',
  'AtenciÃ³n a clientes y colaboradores, elaboraciÃ³n de cotizaciones y comunicaciones empresariales.',
]

const education = [
  {
    period: '2026â€“ACTUALIDAD',
    title: 'IngenierÃ­a de Sistemas',
    institution: 'FundaciÃ³n Universitaria Los Libertadores',
    detail: 'SÃ©ptimo semestre Â· En curso',
  },
  {
    period: '2022',
    title: 'Bachiller AcadÃ©mico',
    institution: 'InstituciÃ³n Educativa RamÃ³n de ZubirÃ­a',
    detail: 'EducaciÃ³n media',
  },
  {
    period: '2016',
    title: 'EducaciÃ³n primaria',
    institution: 'Colegio Alexander Fleming I.E.D.',
    detail: 'FormaciÃ³n bÃ¡sica primaria',
  },
]

const projects = [
  {
    number: '01',
    title: 'Sistema de reservas hoteleras',
    type: 'PROYECTO ACADÃ‰MICO',
    description:
      'AplicaciÃ³n desarrollada en el contexto acadÃ©mico para gestionar procesos relacionados con las reservas hoteleras. Incluye funcionalidades de registro e inicio de sesiÃ³n, administraciÃ³n de habitaciones, gestiÃ³n de clientes y creaciÃ³n, consulta, modificaciÃ³n y cancelaciÃ³n de reservas. Se aplicaron validaciones para prevenir reservas incorrectas y se implementÃ³ la conexiÃ³n con una base de datos.',
    technologies: ['Node.js', 'Express', 'Sequelize', 'SQLite', 'Docker'],
    details: [
      'Rol: Desarrollador',
      'Estado: Entregado como proyecto acadÃ©mico',
    ],
    link: '',
  },
  {
    number: '02',
    title: 'API de servicios',
    type: 'PROYECTO ACADÃ‰MICO',
    description:
      'Proyecto acadÃ©mico de prÃ¡ctica orientado al desarrollo backend y al trabajo con persistencia de datos. Permite presentar los conocimientos aplicados durante el desarrollo, sin atribuir funcionalidades especÃ­ficas que aÃºn no se han documentado.',
    technologies: ['Node.js', 'Express', 'Sequelize', 'SQLite', 'Docker'],
    details: [],
    link: '',
  },
  {
    number: '03',
    title: 'PrÃ¡cticas de programaciÃ³n y datos',
    type: 'PROYECTOS ACADÃ‰MICOS',
    description:
      'Espacio para presentar ejercicios y trabajos acadÃ©micos relacionados con programaciÃ³n, bases de datos y anÃ¡lisis de informaciÃ³n, destacando los problemas abordados y las soluciones desarrolladas a medida que se documenten.',
    technologies: ['SQL', 'Python', 'Java', 'JavaScript'],
    details: [],
    link: '',
  },
]

function Heading({ number, label, title, accent, description }) {
  return (
    <div className="section-heading">
      <span className="section-kicker">
        {number} / {label}
      </span>
      <h2>
        {title}
        <br />
        <span>{accent}</span>
      </h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}

function WhatsAppIcon({ size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.5 11.7a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.4-4.9a8.4 8.4 0 1 1 16.1-3.9Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 8.1c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4-.1.6l-.6.7c-.2.2-.2.4 0 .6.5.9 1.2 1.6 2.1 2.1.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.7.8c.3.1.4.3.4.5 0 .4-.2 1-.6 1.3-.4.4-1 .6-1.6.5-1-.1-2.2-.7-3.5-1.8-1.2-1-2.1-2.3-2.5-3.5-.3-1 .1-2.1.3-2.6Z"
        fill="currentColor"
      />
    </svg>
  )
}

function App() {
  return (
    <div className="portfolio">
      <header className="navbar">
        <a className="brand" href="#inicio" aria-label="Ir al inicio">
          JG<span>.</span>
        </a>

        <nav className="nav-links" aria-label="NavegaciÃ³n principal">
          <a href="#sobre-mi">Perfil</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#formacion">FormaciÃ³n</a>
          <a className="nav-contact" href="#contacto">
            Contacto â†—
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-container" id="inicio">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot" />
              PERFIL JUNIOR Â· ABIERTO A OPORTUNIDADES
            </div>

            <p className="eyebrow">
              INGENIERÃA DE SISTEMAS Â· BOGOTÃ, COLOMBIA
            </p>

            <h1>
              Conectando procesos
              <br />
              con <span>soluciones</span>
              <br />
              tecnolÃ³gicas.
            </h1>

            <p className="hero-description">
              Soy estudiante de sÃ©ptimo semestre de IngenierÃ­a de Sistemas y
              cuento con experiencia en procesos administrativos, talento
              humano y anÃ¡lisis de informaciÃ³n. Me interesa el soporte de
              aplicaciones, la mejora de procesos y la tecnologÃ­a aplicada a
              las necesidades del negocio.
            </p>

            <div className="hero-actions">
              <a className="button-primary" href="#proyectos">
                Explorar proyectos <span>â†—</span>
              </a>
              <a className="button-secondary" href="#contacto">
                Contactarme
              </a>
            </div>

            <div className="hero-note">
              <span className="note-line" />
              AnÃ¡lisis Â· OrganizaciÃ³n Â· TecnologÃ­a
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-grid" />

            <div className="photo-frame">
              <div className="photo-label">PERFIL PROFESIONAL / 2026</div>
              <img
                className="profile-photo"
                src={`${import.meta.env.BASE_URL}jimmy-perfil.png.jpeg`}
                alt="FotografÃ­a profesional de Jimmy Gomez"
              />
              <div className="photo-caption">
                <span className="caption-dot" />
                <div>
                  <strong>Jimmy Gomez</strong>
                  <small>IngenierÃ­a de Sistemas</small>
                </div>
              </div>
            </div>

            <div className="floating-card floating-card-top">
              <span className="mini-icon">âŒ˜</span>
              <div>
                <strong>AnÃ¡lisis y soluciÃ³n</strong>
                <small>Enfoque analÃ­tico</small>
              </div>
            </div>

            <div className="floating-card floating-card-bottom">
              <span className="mini-icon">â†—</span>
              <div>
                <strong>Business + Tech</strong>
                <small>Procesos y tecnologÃ­a</small>
              </div>
            </div>

            <span className="visual-orbit orbit-one" />
            <span className="visual-orbit orbit-two" />
          </div>

          <div className="hero-index">
            <span>01</span>
            <span className="index-line" />
            <span>06</span>
          </div>
        </section>

        <section className="intro-strip">
          <div className="section-container strip-inner">
            <span>MI ENFOQUE</span>
            <p>
              Entender el problema. Analizar la informaciÃ³n. Construir una
              soluciÃ³n.
            </p>
            <span className="strip-symbol">âœ³</span>
          </div>
        </section>

        <section className="content-section section-container" id="sobre-mi">
          <Heading
            number="01"
            label="PERFIL"
            title="Una mirada de procesos."
            accent="Una mentalidad tecnolÃ³gica."
          />

          <div className="about-grid">
            <div className="about-main">
              <p>
                Mi experiencia en el entorno administrativo y de talento
                humano me ha permitido comprender la importancia de los
                procesos, la organizaciÃ³n de la informaciÃ³n, la atenciÃ³n a
                las personas y el seguimiento de las necesidades operativas.
              </p>
              <p>
                Actualmente curso sÃ©ptimo semestre de IngenierÃ­a de Sistemas
                en la FundaciÃ³n Universitaria Los Libertadores. Busco
                orientar esa experiencia hacia oportunidades junior
                relacionadas con el soporte de aplicaciones, el anÃ¡lisis de
                procesos y la tecnologÃ­a empresarial.
              </p>
            </div>

            <div className="about-facts">
              <div className="fact">
                <span>OBJETIVO PROFESIONAL</span>
                <strong>Analista Junior de Soporte de Aplicaciones</strong>
                <small>
                  Soporte, anÃ¡lisis y mejora de procesos tecnolÃ³gicos
                </small>
              </div>

              <div className="fact">
                <span>FORMACIÃ“N ACTUAL</span>
                <strong>IngenierÃ­a de Sistemas</strong>
                <small>7.Âº semestre Â· En curso</small>
              </div>

              <div className="fact">
                <span>EXPERIENCIA</span>
                <strong>Talento Humano y BI</strong>
                <small>
                  GestiÃ³n de procesos, informes y datos en 4HOME S.A.S.
                </small>
              </div>
            </div>
          </div>
        </section>

        <section
          className="content-section section-container"
          id="experiencia"
        >
          <Heading
            number="02"
            label="EXPERIENCIA"
            title="Procesos reales."
            accent="InformaciÃ³n para decidir."
            description="Experiencia profesional en gestiÃ³n de personas, informaciÃ³n y operaciÃ³n."
          />

          <div className="projects-list">
            <article className="project-card">
              <span className="project-number">2023</span>

              <div className="project-content">
                <span className="project-type">
                  EXPERIENCIA PROFESIONAL Â· 2023â€“2026
                </span>
                <h3>Director de Talento Humano y BI</h3>
                <p>
                  4HOME S.A.S. â€” gestiÃ³n de talento humano, anÃ¡lisis de
                  informaciÃ³n, informes de gestiÃ³n y seguimiento operativo.
                </p>

                <ul className="experience-list">
                  {experience.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="project-tags">
                  <span>GestiÃ³n de procesos</span>
                  <span>AnÃ¡lisis de informaciÃ³n</span>
                  <span>Informes de gestiÃ³n</span>
                  <span>Confidencialidad de datos</span>
                </div>
              </div>

              <span
                className="project-link project-link-muted"
                aria-hidden="true"
              >
                â†—
              </span>
            </article>
          </div>
        </section>

        <section className="content-section skills-section" id="habilidades">
          <div className="section-container">
            <Heading
              number="03"
              label="HABILIDADES"
              title="Herramientas para"
              accent="resolver problemas."
              description="Conocimientos tÃ©cnicos descritos segÃºn el nivel indicado en mi hoja de vida."
            />

            <div className="skills-grid">
              {skills.map((skill, index) => (
                <article className="skill-card" key={skill.name}>
                  <div className="skill-card-top">
                    <span className="skill-index">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="skill-arrow">â†—</span>
                  </div>
                  <h3>{skill.name}</h3>
                  <p>{skill.category}</p>
                  <span className="skill-level">{skill.level}</span>
                </article>
              ))}
            </div>

            <div className="competencies">
              <p className="section-kicker">COMPETENCIAS PROFESIONALES</p>
              <div className="project-tags">
                <span>AnÃ¡lisis y resoluciÃ³n de problemas</span>
                <span>GestiÃ³n y organizaciÃ³n de la informaciÃ³n</span>
                <span>Manejo de documentaciÃ³n confidencial</span>
                <span>ElaboraciÃ³n de informes</span>
                <span>Seguimiento operativo</span>
                <span>AtenciÃ³n al cliente</span>
                <span>ComunicaciÃ³n efectiva</span>
                <span>Trabajo en equipo</span>
                <span>Aprendizaje rÃ¡pido de herramientas tecnolÃ³gicas</span>
                <span>OrientaciÃ³n al cumplimiento de objetivos</span>
                <span>Liderazgo</span>
                <span>GestiÃ³n del tiempo</span>
                <span>Toma de decisiones</span>
                <span>Pensamiento analÃ­tico</span>
              </div>
            </div>
          </div>
        </section>

        <section
          className="content-section section-container"
          id="proyectos"
        >
          <div className="section-heading projects-heading">
            <div>
              <span className="section-kicker">04 / PROYECTOS</span>
              <h2>
                Aprender haciendo.
                <br />
                <span>Construir con propÃ³sito.</span>
              </h2>
            </div>
            <p className="section-description">
              Proyectos acadÃ©micos desarrollados durante mi formaciÃ³n en
              IngenierÃ­a de Sistemas. Cada uno representa una oportunidad
              para aplicar conocimientos, resolver problemas y fortalecer
              mis habilidades tÃ©cnicas. Los enlaces se aÃ±adirÃ¡n cuando
              estÃ©n disponibles los repositorios.
            </p>
          </div>

          <div className="projects-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <span className="project-number">{project.number}</span>

                <div className="project-content">
                  <span className="project-type">{project.type}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  {project.details.length > 0 && (
                    <div className="project-tags">
                      {project.details.map((detail) => (
                        <span key={detail}>{detail}</span>
                      ))}
                    </div>
                  )}

                  <div className="project-tags">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>

                {project.link ? (
                  <a
                    className="project-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Ver proyecto ${project.title}`}
                  >
                    â†—
                  </a>
                ) : (
                  <span
                    className="project-link project-link-muted"
                    aria-hidden="true"
                  >
                    â†—
                  </span>
                )}
              </article>
            ))}
          </div>
        </section>

        <section
          className="content-section section-container"
          id="formacion"
        >
          <Heading
            number="05"
            label="FORMACIÃ“N"
            title="Una base para"
            accent="seguir creciendo."
            description="FormaciÃ³n acadÃ©mica registrada en mi hoja de vida."
          />

          <div className="projects-list">
            {education.map((item) => (
              <article className="project-card" key={item.title}>
                <span className="project-number">{item.period}</span>

                <div className="project-content">
                  <span className="project-type">FORMACIÃ“N ACADÃ‰MICA</span>
                  <h3>{item.title}</h3>
                  <p>{item.institution}</p>
                  <div className="project-tags">
                    <span>{item.detail}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="competencies languages-block">
            <p className="section-kicker">IDIOMAS</p>
            <div className="project-tags">
              <span>EspaÃ±ol</span>
              <span>InglÃ©s</span>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contacto">
          <div className="section-container contact-inner">
            <span className="section-kicker">06 / CONTACTO</span>

            <h2>
              Â¿Construimos algo
              <br />
              <span>que genere valor?</span>
            </h2>

            <p>
              Estoy interesado en oportunidades junior donde pueda aportar mi
              experiencia en procesos, fortalecer mis conocimientos tÃ©cnicos
              y crecer profesionalmente en el Ã¡rea de tecnologÃ­a.
            </p>

            <div className="contact-actions">
              <a
                className="button-primary"
                href="mailto:jimmy02gomez@gmail.com"
              >
                EscrÃ­beme un correo <span>â†—</span>
              </a>

              <a className="button-secondary" href="tel:+573125382523">
                Llamar <span>â†—</span>
              </a>

              <a
                className="button-secondary whatsapp-contact"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp"
              >
                <WhatsAppIcon size={19} />
                WhatsApp <span>â†—</span>
              </a>
            </div>

            <div className="contact-email">
              jimmy02gomez@gmail.com Â· 312 538 2523 Â· BogotÃ¡, Colombia
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-container">
        <a className="brand" href="#inicio">
          JG<span>.</span>
        </a>
        <p>DiseÃ±ado y desarrollado con React.</p>
        <span>Â© {new Date().getFullYear()} Jimmy Gomez</span>
      </footer>

      {/* BotÃ³n flotante de WhatsApp */}
      <a
        className="whatsapp-float"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="EscrÃ­beme por WhatsApp"
        title="EscrÃ­beme por WhatsApp"
        style={{
          position: 'fixed',
          right: '24px',
          bottom: '24px',
          zIndex: 1000,
          width: '58px',
          height: '58px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#25D366',
          color: '#ffffff',
          boxShadow: '0 8px 28px rgba(37, 211, 102, 0.35)',
          textDecoration: 'none',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        }}
      >
        <WhatsAppIcon size={29} />
      </a>
    </div>
  )
}

export default App

