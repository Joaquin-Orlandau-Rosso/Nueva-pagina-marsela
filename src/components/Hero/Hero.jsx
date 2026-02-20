import './Hero.scss';
import { scrollToSection } from '../../utils/scrollToSection';

const Hero = () => {
  const handleScroll = (e, target) => {
    e.preventDefault();
    scrollToSection(target);
  };

  return (
    <section className="hero" id="inicio">
      <div className="hero__bg">
        <div className="hero__overlay"></div>
      </div>

      <div className="hero__content">
        <div className="hero__text">
          <span className="hero__label">Bienestar Integral</span>
          <h1 className="hero__title">
            Descubrí el arte<br />
            del <em>cuidado personal</em>
          </h1>
          <div className="hero__line"></div>
          <p className="hero__subtitle">
            Masajes terapéuticos, cosmiatría avanzada y coaching de vida.<br />
            Un espacio dedicado a tu bienestar y transformación.
          </p>
          <div className="hero__actions">
            <a
              href="#servicios"
              className="hero__btn hero__btn--primary"
              onClick={(e) => handleScroll(e, '#servicios')}
            >
              Ver Servicios
            </a>
            <a
              href="#contacto"
              className="hero__btn hero__btn--outline"
              onClick={(e) => handleScroll(e, '#contacto')}
            >
              Reservar Turno
            </a>
          </div>
        </div>

        <div className="hero__badges">
          <div className="hero__badge">
            <span className="hero__badge-number">30+</span>
            <span className="hero__badge-text">Años de experiencia</span>
          </div>
          <div className="hero__badge-divider"></div>
          <div className="hero__badge">
            <span className="hero__badge-number">700+</span>
            <span className="hero__badge-text">Clientes satisfechas</span>
          </div>
          <div className="hero__badge-divider"></div>
          <div className="hero__badge">
            <span className="hero__badge-number">5</span>
            <span className="hero__badge-text">Especialidades</span>
          </div>
        </div>
      </div>

      <a
        href="#servicios"
        className="hero__scroll"
        onClick={(e) => handleScroll(e, '#servicios')}
        aria-label="Scroll down"
      >
        <span className="hero__scroll-line"></span>
        <span className="hero__scroll-text">Scroll</span>
      </a>
    </section>
  );
};

export default Hero;
