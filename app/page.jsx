import {
  ShieldCheck, Ambulance, HardHat, Car, Laptop, Radio, Cog,
  Building2, Users, Map, Award, Handshake, ArrowRight, FileText,
  ChevronDown, Target, Eye, Gem, Phone, Mail, MapPin, Clock,
  Linkedin, Facebook, Instagram, Youtube, MessageCircle, Menu
} from 'lucide-react';

const whatsappUrl = 'https://wa.me/525581959514?text=Hola,%20me%20interesa%20recibir%20información%20sobre%20las%20soluciones%20de%20SMART%20PROJECTS.';

const solutions = [
  { icon: ShieldCheck, title: 'Seguridad Pública', text: 'Equipamiento táctico, patrullas y tecnología para cuerpos de seguridad.' },
  { icon: Ambulance, title: 'Salud', text: 'Equipo médico, hospitalario y soluciones para la atención integral.' },
  { icon: HardHat, title: 'Protección Civil', text: 'Unidades, equipos y herramientas para salvar vidas y proteger.' },
  { icon: Car, title: 'Vehículos Especiales', text: 'Diseño, equipamiento y conversión de unidades especializadas.' },
  { icon: Laptop, title: 'Tecnología', text: 'Sistemas, software y soluciones tecnológicas de última generación.' },
  { icon: Radio, title: 'Telecomunicaciones', text: 'Radiocomunicación y redes para una conectividad segura y confiable.' },
  { icon: Cog, title: 'Ingeniería', text: 'Proyectos, integración y desarrollo de soluciones a la medida.' }
];

const stats = [
  { icon: Building2, title: 'Proyectos Exitosos', text: 'Soluciones entregadas con éxito en todo México.' },
  { icon: Users, title: 'Clientes Satisfechos', text: 'Instituciones y empresas que confían en nosotros.' },
  { icon: Map, title: 'Cobertura Nacional', text: 'Presencia en todo el país para atenderte mejor.' },
  { icon: Award, title: 'Experiencia Comprobada', text: 'Años de trayectoria y resultados que respaldan nuestro compromiso.' },
  { icon: Handshake, title: 'Compromiso con México', text: 'Trabajamos cada día por un país más seguro y competitivo.' }
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#inicio">
          <img src="/assets/logo-smart-projects.png" alt="Smart Projects" />
        </a>

        <nav className="nav">
          <a className="active" href="#inicio">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#soluciones">Soluciones <ChevronDown size={12} /></a>
          <a href="#gobierno">Gobierno y Licitaciones</a>
          <a href="#sectores">Sectores <ChevronDown size={12} /></a>
          <a href="#marcas">Marcas</a>
          <a href="#casos">Casos de Éxito</a>
          <a href="#blog">Blog</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a className="quote" href={whatsappUrl} target="_blank" rel="noreferrer">
          Cotiza ahora <MessageCircle size={16} />
        </a>

        <button className="mobile-menu" aria-label="Menú"><Menu size={28} /></button>
      </header>

      <section id="inicio" className="hero">
        <div className="hero-grid">
          <div className="hero-panel police-car" />
          <div className="hero-panel officer" />
          <div className="hero-panel ambulance-img" />
          <div className="hero-panel civil" />
          <div className="hero-panel tactical" />
          <div className="hero-panel telecom" />
        </div>
        <div className="hero-overlay" />

        <div className="hero-content">
          <h1>Soluciones Integrales</h1>
          <h2>Para Gobierno, Seguridad, Salud e Industria</h2>
          <p>
            Integramos tecnología, equipo y servicios de clase mundial para fortalecer
            la seguridad, la operación y el desarrollo de México.
          </p>

          <div className="hero-actions">
            <a href="#soluciones" className="btn primary">
              Conoce nuestras soluciones <ArrowRight size={18} />
            </a>
            <a href="#catalogo" className="btn secondary">
              <FileText size={17} /> Ver catálogo corporativo
            </a>
          </div>

          <div className="dots">
            <span className="active" />
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>

      <section id="soluciones" className="solutions">
        <p className="eyebrow">Nuestras soluciones</p>
        <h2>Cobertura total para cada necesidad</h2>
        <p className="intro">
          Ofrecemos soluciones integrales, innovadoras y confiables para los sectores que mueven a México.
        </p>

        <div className="cards seven">
          {solutions.map(({ icon: Icon, title, text }) => (
            <article className="card" key={title}>
              <Icon size={50} strokeWidth={1.45} />
              <h3>{title}</h3>
              <p>{text}</p>
              <span />
            </article>
          ))}
        </div>
      </section>

      <section className="stats">
        {stats.map(({ icon: Icon, title, text }) => (
          <div className="stat" key={title}>
            <Icon size={48} strokeWidth={1.25} />
            <div>
              <strong>{title}</strong>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </section>

      <section id="nosotros" className="about">
        <div className="about-intro">
          <p className="eyebrow">Nosotros</p>
          <h2>Líderes en soluciones que transforman</h2>
          <p>
            En Smart Projects integramos tecnología, equipo y servicios de clase mundial
            para gobiernos, corporaciones e instituciones que buscan resultados,
            confiabilidad y compromiso.
          </p>
          <a className="outline" href="#contacto">
            Conoce más sobre nosotros <ArrowRight size={17} />
          </a>
        </div>

        <article className="about-card">
          <Target size={42} />
          <h3>Misión</h3>
          <p>
            Proveer soluciones integrales de alta calidad que fortalezcan la seguridad,
            la eficiencia operativa y el bienestar de nuestra sociedad, mediante tecnología,
            innovación y servicio excepcional.
          </p>
        </article>

        <article className="about-card">
          <Eye size={42} />
          <h3>Visión</h3>
          <p>
            Ser la empresa líder en México y Latinoamérica en soluciones integrales para
            gobierno, seguridad, salud e industria, reconocida por nuestra innovación,
            compromiso y excelencia.
          </p>
        </article>

        <article className="about-card">
          <Gem size={42} />
          <h3>Valores</h3>
          <ul>
            <li>Integridad</li>
            <li>Compromiso</li>
            <li>Innovación</li>
            <li>Excelencia</li>
            <li>Trabajo en equipo</li>
            <li>Responsabilidad social</li>
          </ul>
        </article>
      </section>

      <footer id="contacto" className="footer">
        <div className="footer-brand">
          <img src="/assets/logo-smart-projects.png" alt="Smart Projects" />
          <p>Soluciones integrales de clase mundial para gobierno, seguridad, salud e industria.</p>
          <div className="social">
            <Linkedin size={17} />
            <Facebook size={17} />
            <Instagram size={17} />
            <Youtube size={17} />
          </div>
        </div>

        <div>
          <h4>Enlaces rápidos</h4>
          <a>Inicio</a><a>Nosotros</a><a>Soluciones</a><a>Gobierno y Licitaciones</a><a>Sectores</a><a>Marcas</a><a>Casos de Éxito</a><a>Blog</a><a>Contacto</a>
        </div>

        <div>
          <h4>Soluciones</h4>
          <a>Seguridad Pública</a><a>Salud</a><a>Protección Civil</a><a>Vehículos Especiales</a><a>Tecnología</a><a>Telecomunicaciones</a><a>Ingeniería</a>
        </div>

        <div>
          <h4>Contacto</h4>
          <p><Phone size={17} /> +52 55 8195 9514</p>
          <p><Mail size={17} /> ventas@smartprojectsmx.com</p>
          <p><MapPin size={17} /> Ciudad de México, México</p>
          <p><Clock size={17} /> Lun - Vie: 9:00 a.m. - 6:00 p.m.</p>
        </div>

        <div>
          <h4>Suscríbete</h4>
          <p>Recibe noticias y actualizaciones de nuestras soluciones.</p>
          <div className="subscribe">
            <input placeholder="Tu correo electrónico" />
            <button><ArrowRight size={18} /></button>
          </div>
        </div>

        <div className="legal">
          © 2024 Smart Projects RG&RB SAPI DE CV. Todos los derechos reservados.
          <span>Aviso de Privacidad</span>
          <span>Términos y Condiciones</span>
        </div>
      </footer>

      <a className="whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
        <span>Cotiza ahora<br />por WhatsApp</span>
        <MessageCircle size={40} />
      </a>
    </main>
  );
}
