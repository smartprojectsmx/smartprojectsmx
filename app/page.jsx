import {
  ShieldCheck,
  Ambulance,
  HardHat,
  Truck,
  Radio,
  Cpu,
  Cog,
  Package,
  ArrowRight,
  Play,
  Map,
  Users,
  Building2,
  Award,
  Handshake,
  Target,
  Lightbulb,
  CheckCircle2,
  FileCheck2
} from 'lucide-react';

const solutions = [
  {
    icon: ShieldCheck,
    title: 'Seguridad Pública',
    text: 'Equipamiento táctico, patrullas, protección balística, sistemas de apoyo operativo y soluciones para corporaciones.'
  },
  {
    icon: Ambulance,
    title: 'Salud',
    text: 'Ambulancias, equipamiento médico, proyectos hospitalarios y soluciones especializadas para atención integral.'
  },
  {
    icon: HardHat,
    title: 'Protección Civil',
    text: 'Unidades de emergencia, herramientas, rescate, prevención, control y respuesta inmediata.'
  },
  {
    icon: Truck,
    title: 'Vehículos Especiales',
    text: 'Diseño, adaptación y equipamiento de unidades para aplicaciones especiales y operación crítica.'
  },
  {
    icon: Cpu,
    title: 'Tecnología',
    text: 'Videovigilancia, analítica, software, hardware, infraestructura y soluciones tecnológicas de última generación.'
  },
  {
    icon: Radio,
    title: 'Telecomunicaciones',
    text: 'Radiocomunicación, redes, enlaces y conectividad segura para operación confiable.'
  },
  {
    icon: Cog,
    title: 'Ingeniería',
    text: 'Proyectos, instalaciones, integración, mantenimiento y desarrollo de soluciones a la medida.'
  },
  {
    icon: Package,
    title: 'Logística',
    text: 'Suministro, almacenamiento, distribución, soporte operativo y atención nacional.'
  }
];

const stats = [
  { icon: ShieldCheck, value: '+300', label: 'Proyectos', sub: 'Ejecutados' },
  { icon: Users, value: '+100', label: 'Clientes', sub: 'Atendidos' },
  { icon: Map, value: '32', label: 'Estados', sub: 'Cobertura nacional' },
  { icon: Award, value: '+15', label: 'Años', sub: 'De experiencia' }
];

const values = [
  { icon: Award, title: 'Calidad', text: 'Productos y servicios con altos estándares.' },
  { icon: Handshake, title: 'Confianza', text: 'Relaciones sólidas y de largo plazo.' },
  { icon: Lightbulb, title: 'Innovación', text: 'Soluciones creativas y tecnología de vanguardia.' },
  { icon: Target, title: 'Compromiso', text: 'Enfoque total en superar expectativas.' }
];

const projectTypes = [
  'Equipamiento integral para corporaciones policiales',
  'Ambulancias y unidades de atención prehospitalaria',
  'Vehículos especializados y conversiones tácticas',
  'Sistemas de telecomunicación y videovigilancia',
  'Proyectos de protección civil y respuesta inmediata',
  'Suministro, logística y mantenimiento especializado'
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="identity" href="#">
          <img src="/assets/logo-smart-projects.png" alt="Smart Projects" />
          <div>
            <strong>SMART PROJECTS</strong>
            <span>RG&RB SAPI DE CV</span>
          </div>
        </a>

        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#soluciones">Soluciones</a>
          <a href="#gobierno">Gobierno</a>
          <a href="#sectores">Sectores</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a className="quote" href="#contacto">
          Cotiza ahora <ArrowRight size={16} />
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
            <a className="button primary" href="#soluciones">Conoce nuestras soluciones <ArrowRight size={18} /></a>
            <a className="button ghost" href="#catalogo"><Play size={17} /> Ver catálogo</a>
          </div>
        </div>
      </section>

      <section className="stats">
        {stats.map(({icon: Icon, value, label, sub}) => (
          <div className="stat" key={label}>
            <Icon size={38} />
            <div>
              <strong>{value}</strong>
              <span>{label}</span>
              <small>{sub}</small>
            </div>
          </div>
        ))}
      </section>

      <section id="soluciones" className="section">
        <p className="eyebrow blue">Nuestras soluciones</p>
        <h2>Cobertura total para cada necesidad</h2>
        <p className="section-lead">
          Ofrecemos soluciones integrales, innovadoras y confiables para los sectores que mueven a México.
        </p>
        <div className="solutions-grid">
          {solutions.map(({ icon: Icon, title, text }) => (
            <article className="solution-card" key={title}>
              <Icon size={42} />
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="learn">Conocer más <ArrowRight size={16} /></span>
            </article>
          ))}
        </div>
      </section>

      <section id="nosotros" className="about">
        <div className="about-copy">
          <p className="eyebrow blue">Smart Projects</p>
          <h2>Comprometidos con el desarrollo de México</h2>
          <p>
            Somos una empresa mexicana especializada en ofrecer soluciones integrales que combinan
            tecnología, innovación y experiencia para satisfacer las necesidades del sector público y privado.
          </p>
          <p>
            Trabajamos con enfoque técnico, comercial y operativo para contribuir a un país más seguro,
            eficiente y preparado para el futuro.
          </p>
          <a className="button outline" href="#contacto">Conoce más sobre nosotros <ArrowRight size={18} /></a>
        </div>
        <div className="building-card">
          <img src="/assets/logo-smart-projects.png" alt="Smart Projects" />
          <span>Integración nacional</span>
          <strong>Gobierno • Seguridad • Salud • Industria</strong>
        </div>
      </section>

      <section id="gobierno" className="government">
        <div>
          <p className="eyebrow blue">Gobierno y licitaciones</p>
          <h2>Capacidad documental, técnica y operativa</h2>
          <p>
            Preparamos soluciones para procesos institucionales, adquisiciones públicas,
            invitaciones restringidas, adjudicaciones directas y proyectos llave en mano.
          </p>
        </div>
        <div className="gov-list">
          {[
            'Integración de propuestas técnicas',
            'Catálogos y fichas técnicas',
            'Suministro especializado',
            'Cobertura nacional',
            'Atención a requerimientos institucionales'
          ].map(item => (
            <span key={item}><CheckCircle2 size={18} /> {item}</span>
          ))}
        </div>
      </section>

      <section id="catalogo" className="catalog">
        <p className="eyebrow blue">Catálogo estratégico</p>
        <h2>Proyectos que conectan necesidad, tecnología y operación</h2>
        <div className="catalog-grid">
          {projectTypes.map(item => (
            <div className="catalog-item" key={item}>
              <FileCheck2 size={24} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="sectores" className="values">
        {values.map(({icon: Icon, title, text}) => (
          <div key={title}>
            <Icon size={34} />
            <strong>{title}</strong>
            <p>{text}</p>
          </div>
        ))}
      </section>

      <section id="contacto" className="contact">
        <p className="eyebrow blue">Contacto</p>
        <h2>Conversemos sobre tu próximo proyecto</h2>
        <p>
          Solicita información comercial, fichas técnicas, catálogo o una cotización especializada.
        </p>
        <div className="contact-actions">
          <a className="button primary" href="mailto:contacto@smartprojectsmx.com">contacto@smartprojectsmx.com</a>
          <a className="button ghost" href="https://wa.me/525580122333">WhatsApp</a>
        </div>
      </section>

      <footer>
        <img src="/assets/logo-smart-projects.png" alt="Smart Projects" />
        <p>© 2026 Smart Projects RG&RB SAPI DE CV. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}
