
const whatsappUrl =
  'https://wa.me/525581959514?text=Hola,%20me%20interesa%20recibir%20información%20sobre%20las%20soluciones%20de%20Smart%20Projects.';

const solutions = [
  {
    icon: 'shield',
    title: 'Seguridad Pública',
    text: 'Equipamiento táctico, patrullas, protección balística, sistemas de apoyo operativo y soluciones para corporaciones.'
  },
  {
    icon: 'ambulance',
    title: 'Salud',
    text: 'Ambulancias, equipamiento médico, proyectos hospitalarios y soluciones especializadas para atención integral.'
  },
  {
    icon: 'helmet',
    title: 'Protección Civil',
    text: 'Unidades de emergencia, herramientas, rescate, prevención, control y respuesta inmediata.'
  },
  {
    icon: 'truck',
    title: 'Vehículos Especiales',
    text: 'Diseño, adaptación y equipamiento de unidades para aplicaciones especiales y operación crítica.'
  },
  {
    icon: 'cpu',
    title: 'Tecnología',
    text: 'Videovigilancia, analítica, software, hardware, infraestructura y soluciones tecnológicas de última generación.'
  },
  {
    icon: 'radio',
    title: 'Telecomunicaciones',
    text: 'Radiocomunicación, redes, enlaces y conectividad segura para operación confiable.'
  },
  {
    icon: 'gear',
    title: 'Ingeniería',
    text: 'Proyectos, instalaciones, integración, mantenimiento y desarrollo de soluciones a la medida.'
  }
];

const stats = [
  { icon: 'building', value: '', label: 'Proyectos', sub: 'Exitosos' },
  { icon: 'users', value: '+120', label: 'Clientes', sub: 'Satisfechos' },
  { icon: 'map', value: '+25', label: 'Estados', sub: 'Cobertura nacional' },
  { icon: 'award', value: '+10', label: 'Años', sub: 'De experiencia' },
  { icon: 'handshake', value: '', label: 'Compromiso', sub: 'Con México' }
];

const values = [
  { icon: 'target', title: 'Misión', text: 'Proveer soluciones integrales de alta calidad que fortalezcan la seguridad, la eficiencia operativa y el bienestar de nuestra sociedad.' },
  { icon: 'eye', title: 'Visión', text: 'Ser la empresa líder en México y Latinoamérica en soluciones integrales para gobierno, seguridad, salud e industria.' },
  { icon: 'gem', title: 'Valores', text: 'Integridad, compromiso, innovación, excelencia, trabajo en equipo y responsabilidad social.' },
  { icon: 'check', title: 'Confianza', text: 'Relaciones sólidas, atención profesional y cumplimiento en cada proyecto.' }
];

const projectTypes = [
  'Equipamiento integral para corporaciones policiales',
  'Ambulancias y unidades de atención prehospitalaria',
  'Vehículos especializados y conversiones tácticas',
  'Sistemas de telecomunicación y videovigilancia',
  'Proyectos de protección civil y respuesta inmediata',
  'Mantenimiento especializado y soporte operativo'
];

function Icon({ name, size = 24 }) {
  const paths = {
    shield: <path d="M12 3 5 6v5c0 4.2 2.9 7.8 7 9 4.1-1.2 7-4.8 7-9V6l-7-3Zm-3 9 2 2 4-5" />,
    ambulance: <path d="M4 16V8h9l3 4h4v4M7 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM8 10v4m-2-2h4" />,
    helmet: <path d="M4 15a8 8 0 0 1 16 0M3 15h18M7 15v3h10v-3M12 7v5" />,
    truck: <path d="M3 7h11v10H3zM14 11h4l3 3v3h-7zM7 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />,
    cpu: <path d="M8 8h8v8H8zM4 10h2m-2 4h2m12-4h2m-2 4h2M10 4v2m4-2v2m-4 12v2m4-2v2" />,
    radio: <path d="M8 7h10v13H8zM11 11h4M11 15h1M15 15h1M8 7 5 3" />,
    gear: <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm8 4h2m-20 0h2m13.7-5.7 1.4-1.4M4.9 19.1l1.4-1.4m0-11.4L4.9 4.9m14.2 14.2-1.4-1.4" />,
    building: <path d="M4 21V5l8-3 8 3v16M8 9h2m4 0h2M8 13h2m4 0h2M8 17h2m4 0h2" />,
    users: <path d="M16 11a4 4 0 1 0-8 0m8 0a4 4 0 1 0 6 3.5M8 11a4 4 0 1 1-6 3.5M4 21v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2" />,
    map: <path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3V6Zm6-3v15m6-12v15" />,
    award: <path d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm-3 0-2 6 5-3 5 3-2-6" />,
    handshake: <path d="M8 12 3 17l4 4 5-5m4-4 5 5-4 4-5-5m-4-4 3-3 2 2 3-3 2 2" />,
    target: <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-4a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />,
    eye: <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Zm10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />,
    gem: <path d="M6 3h12l4 6-10 12L2 9l4-6Zm-4 6h20M6 3l6 18 6-18" />,
    check: <path d="m4 12 5 5L20 6" />,
    arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
    play: <path d="M8 5v14l11-7-11-7Z" />,
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1L8 9.5a16 16 0 0 0 6.5 6.5l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.6.5 2.5.6A2 2 0 0 1 22 16.9Z" />,
    mail: <path d="M4 4h16v16H4zM4 7l8 6 8-6" />,
    message: <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z" />,
    file: <path d="M6 3h9l3 3v15H6zM14 3v4h4M9 11h6M9 15h6" />
  };

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name] || paths.check}
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="identity" href="#inicio">
          <img src="/assets/logo-smart-projects.png" alt="Smart Projects" />
        </a>

        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#soluciones">Soluciones</a>
          <a href="#gobierno">Gobierno</a>
          <a href="#sectores">Sectores</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a className="quote" href={whatsappUrl} target="_blank" rel="noreferrer">
          Cotiza ahora <Icon name="message" size={16} />
        </a>
      </header>

      <section id="inicio" className="hero">
        <div className="hero-grid" aria-hidden="true">
          <div className="tile police"></div>
          <div className="tile officer"></div>
          <div className="tile ambulance"></div>
          <div className="tile civil"></div>
          <div className="tile armored"></div>
          <div className="tile telecom"></div>
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="eyebrow">Integración • Gobierno • Industria • Seguridad</p>
          <h1>Soluciones Integrales</h1>
          <h2>Para Gobierno, Seguridad, Salud e Industria</h2>
          <p>
            Integramos tecnología, equipo y servicios de clase mundial para fortalecer
            la seguridad, la operación y el desarrollo de México.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#soluciones">Conoce nuestras soluciones <Icon name="arrow" size={18} /></a>
            <a className="button ghost" href="#catalogo"><Icon name="file" size={17} /> Ver catálogo corporativo</a>
          </div>
        </div>
      </section>

      <section id="soluciones" className="section">
        <p className="eyebrow blue">Nuestras soluciones</p>
        <h2>Cobertura total para cada necesidad</h2>
        <p className="section-lead">
          Ofrecemos soluciones integrales, innovadoras y confiables para los sectores que mueven a México.
        </p>

        <div className="solutions-grid">
          {solutions.map(({icon, title, text}) => (
            <article className="solution-card" key={title}>
              <Icon name={icon} size={46} />
              <h3>{title}</h3>
              <p>{text}</p>
              <a className="learn" href="#contacto">Conocer más <Icon name="arrow" size={16} /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="stats">
        {stats.map(({icon, value, label, sub}) => (
          <div className="stat" key={label}>
            <Icon name={icon} size={38} />
            <div>
              {value && <strong>{value}</strong>}
              <span>{label}</span>
              <small>{sub}</small>
            </div>
          </div>
        ))}
      </section>

      <section id="nosotros" className="about">
        <div className="about-copy">
          <p className="eyebrow blue">Nosotros</p>
          <h2>Líderes en soluciones que transforman</h2>
          <p>
            En Smart Projects integramos tecnología, equipo y servicios de clase mundial para gobiernos,
            corporaciones e instituciones que buscan resultados, confiabilidad y compromiso.
          </p>
          <a className="button outline" href="#contacto">Conoce más sobre nosotros <Icon name="arrow" size={17} /></a>
        </div>

        <div className="building-card">
          <img src="/assets/logo-smart-projects.png" alt="Smart Projects" />
          <span>Smart Projects</span>
          <strong>RG&RB SAPI DE CV</strong>
        </div>
      </section>

      <section className="values">
        {values.map(({icon, title, text}) => (
          <div key={title}>
            <Icon name={icon} size={40} />
            <strong>{title}</strong>
            <p>{text}</p>
          </div>
        ))}
      </section>

      <section id="gobierno" className="government">
        <div>
          <p className="eyebrow blue">Gobierno y licitaciones</p>
          <h2>Aliados estratégicos del sector público</h2>
          <p>
            Desarrollamos propuestas técnicas, integración de soluciones, catálogos corporativos,
            anexos técnicos y acompañamiento para proyectos institucionales.
          </p>
        </div>
        <div className="gov-list">
          {projectTypes.map((item) => (
            <span key={item}><Icon name="check" size={22} /> {item}</span>
          ))}
        </div>
      </section>

      <section id="catalogo" className="catalog">
        <p className="eyebrow blue">Catálogo</p>
        <h2>Soluciones listas para presentar</h2>
        <p className="section-lead">
          Portafolio corporativo para áreas de compras, administración, seguridad, salud e infraestructura.
        </p>
        <div className="catalog-grid">
          {solutions.map(({icon, title}) => (
            <div className="catalog-item" key={title}>
              <Icon name={icon} size={32} />
              <span>{title}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="contacto" className="contact">
        <p className="eyebrow blue">Contacto</p>
        <h2>Estamos para servirte</h2>
        <p>Solicita información, cotización o una presentación personalizada para tu proyecto.</p>
        <div className="contact-actions">
          <a className="button primary" href={whatsappUrl} target="_blank" rel="noreferrer"><Icon name="message" size={18} /> Cotizar por WhatsApp</a>
          <a className="button ghost" href="mailto:ventas@smartprojectsmx.com"><Icon name="mail" size={18} /> ventas@smartprojectsmx.com</a>
        </div>
      </section>

      <footer>
        <img src="/assets/logo-smart-projects.png" alt="Smart Projects" />
        <span>© 2024 Smart Projects RG&RB SAPI DE CV. Todos los derechos reservados.</span>
      </footer>

      <a className="whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
        <span>Cotiza ahora<br />por WhatsApp</span>
        <Icon name="message" size={44} />
      </a>
    </main>
  );
}
