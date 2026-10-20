
import './App.css'

const WHATSAPP_NUMBER = '573125382523'

const WHATSAPP_MESSAGE =
  'Hola, vi tu portafolio profesional y me gustaría contactarte para conversar sobre una oportunidad laboral.'

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`

const skills = [
  { name: 'SQL', category: 'Bases de datos', level: 'Consultas y fundamentos' },
  { name: 'Excel', category: 'Análisis de información', level: 'Herramienta de trabajo' },
  { name: 'Python', category: 'Programación', level: 'Fundamentos' },
  { name: 'Java', category: 'Programación', level: 'Fundamentos' },
  { name: 'JavaScript', category: 'Desarrollo web', level: 'Fundamentos' },
  { name: 'HTML & CSS', category: 'Desarrollo web', level: 'Fundamentos' },
]

const experience = [
  'Gestión de procesos de contratación, afiliaciones y novedades laborales.',
  'Elaboración de informes de gestión y seguimiento operativo para apoyar la toma de decisiones.',
  'Organización y actualización de bases de datos y documentación del personal, cuidando la trazabilidad y confidencialidad.',
  'Apoyo a la mejora de procesos mediante análisis de información e indicadores de gestión.',
  'Atención a clientes y colaboradores, elaboración de cotizaciones y comunicaciones empresariales.',
]

const education = [
  {
    period: '2026–ACTUALIDAD',
    title: 'Ingeniería de Sistemas',
    institution: 'Fundación Universitaria Los Libertadores',
    detail: 'Séptimo semestre · En curso',
  },
  {
    period: '2022',
    title: 'Bachiller Académico',
    institution: 'Institución Educativa Ramón de Zubiría',
    detail: 'Educación media',
  },
  {
    period: '2016',
    title: 'Educación primaria',
    institution: 'Colegio Alexander Fleming I.E.D.',
    detail: 'Formación básica primaria',
  },
]

const projects = [
  {
    number: '01',
    title: 'Sistema de reservas hoteleras',
    type: 'PROYECTO ACADÉMICO',
    description:
      'Aplicación desarrollada en el contexto académico para gestionar procesos relacionados con las reservas hoteleras. Incluye funcionalidades de registro e inicio de sesión, administración de habitaciones, gestión de clientes y creación, consulta, modificación y cancelación de reservas. Se aplicaron validaciones para prevenir reservas incorrectas y se implementó la conexión con una base de datos.',
    technologies: ['Node.js', 'Express', 'Sequelize', 'SQLite', 'Docker'],
    details: [
      'Rol: Desarrollador',
      'Estado: Entregado como proyecto académico',
    ],
    link: '',
  },
  {
    number: '02',
    title: 'API de servicios',
    type: 'PROYECTO ACADÉMICO',
    description:
      'Proyecto académico de práctica orientado al desarrollo backend y al trabajo con persistencia de datos. Permite presentar los conocimientos aplicados durante el desarrollo, sin atribuir funcionalidades específicas que aún no se han documentado.',
    technologies: ['Node.js', 'Express', 'Sequelize', 'SQLite', 'Docker'],
    details: [],
    link: '',
  },
  {
    number: '03',
    title: 'Prácticas de programación y datos',
    type: 'PROYECTOS ACADÉMICOS',
    description:
      'Espacio para presentar ejercicios y trabajos académicos relacionados con programación, bases de datos y análisis de información, destacando los problemas abordados y las soluciones desarrolladas a medida que se documenten.',
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

        <nav className="nav-links" aria-label="Navegación principal">
          <a href="#sobre-mi">Perfil</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#formacion">Formación</a>
          <a className="nav-contact" href="#contacto">
            Contacto ↗
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-container" id="inicio">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot" />
              PERFIL JUNIOR · ABIERTO A OPORTUNIDADES
            </div>

            <p className="eyebrow">
              INGENIERÍA DE SISTEMAS · BOGOTÁ, COLOMBIA
            </p>

            <h1>
              Conectando procesos
              <br />
              con <span>soluciones</span>
              <br />
              tecnológicas.
            </h1>

            <p className="hero-description">
              Soy estudiante de séptimo semestre de Ingeniería de Sistemas y
              cuento con experiencia en procesos administrativos, talento
              humano y análisis de información. Me interesa el soporte de
              aplicaciones, la mejora de procesos y la tecnología aplicada a
              las necesidades del negocio.
            </p>

            <div className="hero-actions">
              <a className="button-primary" href="#proyectos">
                Explorar proyectos <span>↗</span>
              </a>
              <a className="button-secondary" href="#contacto">
                Contactarme
              </a>
            </div>

            <div className="hero-note">
              <span className="note-line" />
              Análisis · Organización · Tecnología
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-grid" />

            <div className="photo-frame">
              <div className="photo-label">PERFIL PROFESIONAL / 2026</div>
              <img
                className="profile-photo"
                src="/jimmy-perfil.png.jpeg"
                alt="Fotografía profesional de Jimmy Gomez"
              />
              <div className="photo-caption">
                <span className="caption-dot" />
                <div>
                  <strong>Jimmy Gomez</strong>
                  <small>Ingeniería de Sistemas</small>
                </div>
              </div>
            </div>

            <div className="floating-card floating-card-top">
              <span className="mini-icon">⌘</span>
              <div>
                <strong>Análisis y solución</strong>
                <small>Enfoque analítico</small>
              </div>
            </div>

            <div className="floating-card floating-card-bottom">
              <span className="mini-icon">↗</span>
              <div>
                <strong>Business + Tech</strong>
                <small>Procesos y tecnología</small>
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
              Entender el problema. Analizar la información. Construir una
              solución.
            </p>
            <span className="strip-symbol">✳</span>
          </div>
        </section>

        <section className="content-section section-container" id="sobre-mi">
          <Heading
            number="01"
            label="PERFIL"
            title="Una mirada de procesos."
            accent="Una mentalidad tecnológica."
          />

          <div className="about-grid">
            <div className="about-main">
              <p>
                Mi experiencia en el entorno administrativo y de talento
                humano me ha permitido comprender la importancia de los
                procesos, la organización de la información, la atención a
                las personas y el seguimiento de las necesidades operativas.
              </p>
              <p>
                Actualmente curso séptimo semestre de Ingeniería de Sistemas
                en la Fundación Universitaria Los Libertadores. Busco
                orientar esa experiencia hacia oportunidades junior
                relacionadas con el soporte de aplicaciones, el análisis de
                procesos y la tecnología empresarial.
              </p>
            </div>

            <div className="about-facts">
              <div className="fact">
                <span>OBJETIVO PROFESIONAL</span>
                <strong>Analista Junior de Soporte de Aplicaciones</strong>
                <small>
                  Soporte, análisis y mejora de procesos tecnológicos
                </small>
              </div>

              <div className="fact">
                <span>FORMACIÓN ACTUAL</span>
                <strong>Ingeniería de Sistemas</strong>
                <small>7.º semestre · En curso</small>
              </div>

              <div className="fact">
                <span>EXPERIENCIA</span>
                <strong>Talento Humano y BI</strong>
                <small>
                  Gestión de procesos, informes y datos en 4HOME S.A.S.
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
            accent="Información para decidir."
            description="Experiencia profesional en gestión de personas, información y operación."
          />

          <div className="projects-list">
            <article className="project-card">
              <span className="project-number">2023</span>

              <div className="project-content">
                <span className="project-type">
                  EXPERIENCIA PROFESIONAL · 2023–2026
                </span>
                <h3>Director de Talento Humano y BI</h3>
                <p>
                  4HOME S.A.S. — gestión de talento humano, análisis de
                  información, informes de gestión y seguimiento operativo.
                </p>

                <ul className="experience-list">
                  {experience.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="project-tags">
                  <span>Gestión de procesos</span>
                  <span>Análisis de información</span>
                  <span>Informes de gestión</span>
                  <span>Confidencialidad de datos</span>
                </div>
              </div>

              <span
                className="project-link project-link-muted"
                aria-hidden="true"
              >
                ↗
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
              description="Conocimientos técnicos descritos según el nivel indicado en mi hoja de vida."
            />

            <div className="skills-grid">
              {skills.map((skill, index) => (
                <article className="skill-card" key={skill.name}>
                  <div className="skill-card-top">
                    <span className="skill-index">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="skill-arrow">↗</span>
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
                <span>Análisis y resolución de problemas</span>
                <span>Gestión y organización de la información</span>
                <span>Manejo de documentación confidencial</span>
                <span>Elaboración de informes</span>
                <span>Seguimiento operativo</span>
                <span>Atención al cliente</span>
                <span>Comunicación efectiva</span>
                <span>Trabajo en equipo</span>
                <span>Aprendizaje rápido de herramientas tecnológicas</span>
                <span>Orientación al cumplimiento de objetivos</span>
                <span>Liderazgo</span>
                <span>Gestión del tiempo</span>
                <span>Toma de decisiones</span>
                <span>Pensamiento analítico</span>
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
                <span>Construir con propósito.</span>
              </h2>
            </div>
            <p className="section-description">
              Proyectos académicos desarrollados durante mi formación en
              Ingeniería de Sistemas. Cada uno representa una oportunidad
              para aplicar conocimientos, resolver problemas y fortalecer
              mis habilidades técnicas. Los enlaces se añadirán cuando
              estén disponibles los repositorios.
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
                    ↗
                  </a>
                ) : (
                  <span
                    className="project-link project-link-muted"
                    aria-hidden="true"
                  >
                    ↗
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
            label="FORMACIÓN"
            title="Una base para"
            accent="seguir creciendo."
            description="Formación académica registrada en mi hoja de vida."
          />

          <div className="projects-list">
            {education.map((item) => (
              <article className="project-card" key={item.title}>
                <span className="project-number">{item.period}</span>

                <div className="project-content">
                  <span className="project-type">FORMACIÓN ACADÉMICA</span>
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
              <span>Español</span>
              <span>Inglés</span>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contacto">
          <div className="section-container contact-inner">
            <span className="section-kicker">06 / CONTACTO</span>

            <h2>
              ¿Construimos algo
              <br />
              <span>que genere valor?</span>
            </h2>

            <p>
              Estoy interesado en oportunidades junior donde pueda aportar mi
              experiencia en procesos, fortalecer mis conocimientos técnicos
              y crecer profesionalmente en el área de tecnología.
            </p>

            <div className="contact-actions">
              <a
                className="button-primary"
                href="mailto:jimmy02gomez@gmail.com"
              >
                Escríbeme un correo <span>↗</span>
              </a>

              <a className="button-secondary" href="tel:+573125382523">
                Llamar <span>↗</span>
              </a>

              <a
                className="button-secondary whatsapp-contact"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp"
              >
                <WhatsAppIcon size={19} />
                WhatsApp <span>↗</span>
              </a>
            </div>

            <div className="contact-email">
              jimmy02gomez@gmail.com · 312 538 2523 · Bogotá, Colombia
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-container">
        <a className="brand" href="#inicio">
          JG<span>.</span>
        </a>
        <p>Diseñado y desarrollado con React.</p>
        <span>© {new Date().getFullYear()} Jimmy Gomez</span>
      </footer>

      {/* Botón flotante de WhatsApp */}
      <a
        className="whatsapp-float"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escríbeme por WhatsApp"
        title="Escríbeme por WhatsApp"
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
