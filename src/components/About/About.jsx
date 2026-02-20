import './About.scss';
import { scrollToSection } from '../../utils/scrollToSection';

const About = () => {
  return (
    <section className="about" id="sobre-mi">
      <div className="about__container container">
        <div className="about__visual">
          <div className="about__image-wrapper">
            <div className="about__image-placeholder">
              <img
                className="about__image"
                src="/mama.jpg"
                alt="Marsela Rosso"
                loading="lazy"
              />
            </div>
            <div className="about__image-frame"></div>
          </div>
          <div className="about__experience-badge">
            <span className="about__experience-number">30+</span>
            <span className="about__experience-text">Años de<br />experiencia</span>
          </div>
        </div>

        <div className="about__content">
          <span className="section-label">Sobre Mí</span>
          <h2 className="about__title">
            Hola, soy <em>Marsela Rosso</em>
          </h2>
          <div className="gold-line"></div>

          <p className="about__text">
            Soy cosmiatra y masajista terapéutica con más de 30 años de experiencia
            dedicada al bienestar integral de mis clientes. Mi pasión es acompañar
            a cada persona en su camino hacia el equilibrio entre cuerpo, mente y espíritu.
          </p>
          <p className="about__text">
            Me especializo en tratamientos faciales avanzados, masajes terapéuticos
            y coaching de vida. Cada sesión es un espacio seguro y personalizado,
            donde el objetivo principal sos vos y tu bienestar.
          </p>

          <div className="about__values">
            {[
              { icon: '◈', title: 'Profesionalismo', desc: 'Formación continua y técnicas actualizadas' },
              { icon: '◇', title: 'Dedicación', desc: 'Atención personalizada en cada sesión' },
              { icon: '✦', title: 'Resultados', desc: 'Cambios reales y duraderos en tu bienestar' },
            ].map(({ icon, title, desc }) => (
              <div className="about__value" key={title}>
                <span className="about__value-icon">{icon}</span>
                <div>
                  <h4 className="about__value-title">{title}</h4>
                  <p className="about__value-desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#contacto"
            className="btn-solid"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#contacto');
            }}
          >
            Conocerme más
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
