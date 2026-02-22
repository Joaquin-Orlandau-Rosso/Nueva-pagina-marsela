import './Services.scss';
import { scrollToSection } from '../../utils/scrollToSection';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const services = [
  {
    id: 1,
    icon: '✦',
    category: 'Cuerpo',
    title: 'Masajes Terapéuticos',
    description:
      'Técnicas especializadas de masoterapia para aliviar tensiones, mejorar la circulación y restaurar el equilibrio energético de tu cuerpo.',
    items: ['Masaje Relajante', 'Masaje Descontracturante', 'Masaje con Piedras Calientes', 'Drenaje Linfático'],
  },
  {
    id: 2,
    icon: '◈',
    category: 'Rostro',
    title: 'Cosmiatría Avanzada',
    description:
      'Tratamientos faciales profesionales con productos de alta gama para rejuvenecer, nutrir e iluminar tu piel de manera visible y duradera.',
    items: ['Limpieza Facial Profunda', 'Extracción de Comedones', 'Hidratación Intensiva', 'Tratamiento Anti-edad'],
  },
  {
    id: 3,
    icon: '◇',
    category: 'Mente',
    title: 'Coaching de Vida',
    description:
      'Acompañamiento personalizado para descubrir tu potencial, superar bloqueos y construir la vida que merecés con herramientas concretas.',
    items: ['Coaching Individual', 'Gestión Emocional', 'Definición de Objetivos', 'Mindfulness & Bienestar'],
  },
  {
    id: 4,
    icon: '❀',
    category: 'Emociones',
    title: 'Flores de Bach',
    description:
      'Armonización emocional a través de esencias florales. Un acompañamiento suave y natural para transitar momentos de estrés, cambios y estados de ánimo.',
    items: ['Equilibrio Emocional', 'Estrés & Ansiedad', 'Acompañamiento en Procesos', 'Mejor Descanso'],
  },
];

const Services = () => {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [gridRef, gridVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="services" id="servicios">
      <div className="services__container container">
        <div 
          ref={headerRef}
          className={`services__header scroll-animate ${headerVisible ? 'is-visible animate-slide-up' : ''}`}
        >
          <span className="section-label">Lo que ofrezco</span>
          <h2 className="section-title">Mis Servicios</h2>
          <div className="gold-line"></div>
          <p className="section-subtitle">
            Cada tratamiento está diseñado para brindarte una experiencia única de bienestar,
            combinando técnicas profesionales con un trato personalizado.
          </p>
        </div>

        <div 
          ref={gridRef}
          className="services__grid"
        >
          {services.map((service, index) => (
            <div 
              className={`services__card scroll-animate ${gridVisible ? `is-visible animate-slide-up animate-delay-${index + 1}` : ''}`}
              key={service.id}
            >
              <div className="services__card-top">
                <span className="services__card-icon">{service.icon}</span>
                <span className="services__card-category">{service.category}</span>
              </div>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-desc">{service.description}</p>
              <ul className="services__card-list">
                {service.items.map((item) => (
                  <li key={item} className="services__card-item">
                    <span className="services__card-dot"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className="services__card-btn"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contacto');
                }}
              >
                Consultar
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
