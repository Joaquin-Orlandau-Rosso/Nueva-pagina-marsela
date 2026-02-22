import { useState } from 'react';
import './Testimonials.scss';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const testimonials = [
  {
    id: 1,
    name: 'Laura M.',
    role: 'Cliente desde 2021',
    text: 'Los masajes de Marsela son increíbles. Llegué con mucho estrés y tensión, y salí completamente renovada. Su profesionalismo y calidez hacen que cada sesión sea una experiencia única.',
    stars: 5,
  },
  {
    id: 2,
    name: 'Valentina R.',
    role: 'Cliente desde 2020',
    text: 'La limpieza facial que me hizo Marsela fue la mejor que tuve en mi vida. Mi piel quedó radiante y ella me explicó todo el proceso con mucha paciencia. ¡La recomiendo 100%!',
    stars: 5,
  },
  {
    id: 3,
    name: 'Sofía G.',
    role: 'Cliente desde 2022',
    text: 'El coaching con Marsela cambió mi perspectiva de vida. Me ayudó a encontrar claridad en momentos de confusión y a tomar decisiones importantes con confianza. Es una profesional extraordinaria.',
    stars: 5,
  },
  {
    id: 4,
    name: 'Carolina P.',
    role: 'Cliente desde 2019',
    text: 'Llevo años yendo con Marsela y nunca me decepciona. Sus tratamientos de cosmiatría son de altísima calidad y siempre está actualizada con las últimas técnicas. Un espacio de paz y bienestar.',
    stars: 5,
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [sliderRef, sliderVisible] = useScrollAnimation({ threshold: 0.2 });

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  const t = testimonials[active];

  return (
    <section className="testimonials" id="testimonios">
      <div className="testimonials__container container">
        <div 
          ref={headerRef}
          className={`testimonials__header scroll-animate ${headerVisible ? 'is-visible animate-slide-up' : ''}`}
        >
          <span className="section-label">Lo que dicen</span>
          <h2 className="section-title">Testimonios</h2>
          <div className="gold-line gold-line--center"></div>
        </div>

        <div 
          ref={sliderRef}
          className={`testimonials__slider scroll-animate ${sliderVisible ? 'is-visible animate-scale-in' : ''}`}
        >
          <div className="testimonials__quote">&ldquo;</div>
          <div className="testimonials__content">
            <div className="testimonials__stars">
              {Array.from({ length: t.stars }).map((_, i) => (
                <span key={i} className="testimonials__star">★</span>
              ))}
            </div>
            <p className="testimonials__text">{t.text}</p>
            <div className="testimonials__author">
              <div className="testimonials__author-avatar">
                {t.name.charAt(0)}
              </div>
              <div>
                <span className="testimonials__author-name">{t.name}</span>
                <span className="testimonials__author-role">{t.role}</span>
              </div>
            </div>
          </div>

          <div className="testimonials__controls">
            <button className="testimonials__btn" onClick={prev} aria-label="Anterior">
              ←
            </button>
            <div className="testimonials__dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`testimonials__dot ${i === active ? 'testimonials__dot--active' : ''}`}
                  onClick={() => setActive(i)}
                  aria-label={`Testimonio ${i + 1}`}
                />
              ))}
            </div>
            <button className="testimonials__btn" onClick={next} aria-label="Siguiente">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
