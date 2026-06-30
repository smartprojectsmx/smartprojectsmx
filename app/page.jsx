import {
  ShieldCheck, Ambulance, HardHat, Car, Laptop, Radio, Cog, Box,
  Building2, Users, Map, Award, Handshake, ArrowRight, Play, ChevronDown
} from 'lucide-react';

const solutions = [
  { icon: ShieldCheck, title: 'Seguridad Pública', text: 'Equipamiento táctico, patrullas y tecnología para cuerpos de seguridad.' },
  { icon: Ambulance, title: 'Salud', text: 'Equipo médico, hospitalario y soluciones para la atención integral.' },
  { icon: HardHat, title: 'Protección Civil', text: 'Unidades, equipos y herramientas para salvar vidas y proteger.' },
  { icon: Car, title: 'Vehículos Especiales', text: 'Diseño, equipamiento y conversión de unidades especializadas.' },
  { icon: Laptop, title: 'Tecnología', text: 'Sistemas, software y soluciones tecnológicas de última generación.' },
  { icon: Radio, title: 'Telecomunicaciones', text: 'Radiocomunicación y redes para conectividad segura y confiable.' },
  { icon: Cog, title: 'Ingeniería', text: 'Proyectos, integración y desarrollo de soluciones a la medida.' },
  { icon: Box, title: 'Logística', text: 'Abastecimiento, distribución y soporte operativo en todo el país.' }
];

const stats = [
  { icon: Building2, value: '+500', title: 'Proyectos', label: 'Realizados' },
  { icon: Users, value: '+120', title: 'Clientes', label: 'Atendidos' },
  { icon: Map, value: '+25', title: 'Estados', label: 'Cubiertos' },
  { icon: Award, value: '+10', title: 'Años de experiencia', label: '' },
  { icon: Handshake, value: 'Compromiso', title: 'Con México', label: '' },
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#inicio">
          <img src="/assets/logo-smart-projects.png" alt="Smart Projects" />
          <div><strong>SMART PROJECTS</strong><span>RG&RB SAPI DE CV</span></div>
        </a>
        <nav className="menu">
          <a href="#inicio" className="active">Inicio</a><a href="#nosotros">Nosotros</a>
          <a href="#soluciones">Soluciones <ChevronDown size={12}/></a>
          <a href="#gobierno">Gobierno y Licitaciones</a>
          <a href="#sectores">Sectores <ChevronDown size={12}/></a>
          <a href="#marcas">Marcas</a><a href="#casos">Casos de Éxito</a><a href="#blog">Blog</a><a href="#contacto">Contacto</a>
        </nav>
        <a className="quote" href="#contacto">Cotiza ahora <ArrowRight size={15}/></a>
      </header>

      <section id="inicio" className="hero">
        <div className="hero-images" aria-hidden="true">
          <div className="hero-panel police"></div><div className="hero-panel officer"></div>
          <div className="hero-panel ambulance"></div><div className="hero-panel civil"></div>
          <div className="hero-panel armored"></div><div className="hero-panel telecom"></div>
        </div>
        <div className="hero-shade"></div>
        <div className="hero-content">
          <h1>Soluciones Integrales</h1>
          <h2>Para Gobierno, Seguridad, Salud e Industria</h2>
          <p>Integramos tecnología, equipo y servicios de clase mundial para fortalecer la seguridad, la operación y el desarrollo de México.</p>
          <div className="actions">
            <a className="btn primary" href="#soluciones">Conoce nuestras soluciones <ArrowRight size={18}/></a>
            <a className="btn secondary" href="#catalogo"><Play size={17}/> Ver video corporativo</a>
          </div>
          <ChevronDown className="down" size={28}/>
        </div>
      </section>

      <section id="soluciones" className="solutions">
        <p className="eyebrow">Nuestras soluciones</p>
        <h2>Cobertura total para cada necesidad</h2>
        <p className="intro">Ofrecemos soluciones integrales, innovadoras y confiables para los sectores que mueven a México.</p>
        <div className="cards">
          {solutions.map(({icon: Icon, title, text}) => (
            <article key={title} className="card"><Icon size={48} strokeWidth={1.45}/><h3>{title}</h3><p>{text}</p><span></span></article>
          ))}
        </div>
      </section>

      <section className="stats">
        {stats.map(({icon: Icon, value, title, label}) => (
          <div className="stat" key={value+title}><Icon size={46} strokeWidth={1.25}/><div><strong>{value}</strong><p>{title}</p>{label && <small>{label}</small>}</div></div>
        ))}
      </section>

      <section id="nosotros" className="about">
        <p className="eyebrow">Smart Projects</p><h2>Compromiso con México</h2>
        <p>Somos una empresa mexicana enfocada en integrar soluciones para instituciones públicas, seguridad, salud, protección civil, industria, logística y proyectos especiales.</p>
      </section>
    </main>
  );
}
