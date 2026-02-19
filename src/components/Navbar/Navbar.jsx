import { useState, useEffect } from 'react';
import './Navbar.scss';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, target) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(target);
    if (el) {
      const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 80;
      const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <a href="#inicio" className="navbar__logo" onClick={(e) => handleNavClick(e, '#inicio')}>
          <svg className="navbar__logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
            <path d="M20 6 C20 6 14 12 14 18 C14 21.3 16.7 24 20 24 C23.3 24 26 21.3 26 18 C26 12 20 6 20 6Z" fill="currentColor" opacity="0.9"/>
            <path d="M10 14 C10 14 8 20 12 24 C14 26 17 26.5 19 25 C17 23 15.5 20.5 15.5 18 C15.5 16 16 14 17 12.5 C14 12 10 14 10 14Z" fill="currentColor" opacity="0.6"/>
            <path d="M30 14 C30 14 26 12 23 12.5 C24 14 24.5 16 24.5 18 C24.5 20.5 23 23 21 25 C23 26.5 26 26 28 24 C32 20 30 14 30 14Z" fill="currentColor" opacity="0.6"/>
            <path d="M20 24 C20 24 20 30 20 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
            <path d="M16 30 C16 30 18 31 20 34 C22 31 24 30 24 30" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
          </svg>
          <span className="navbar__logo-main">Marsela</span>
          <span className="navbar__logo-accent">Rosso</span>
        </a>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {[
            { href: '#inicio', label: 'Inicio' },
            { href: '#servicios', label: 'Servicios' },
            { href: '#sobre-mi', label: 'Sobre Mí' },
            { href: '#testimonios', label: 'Testimonios' },
            { href: '#contacto', label: 'Contacto' },
          ].map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="navbar__link"
                onClick={(e) => handleNavClick(e, href)}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contacto"
              className="navbar__cta"
              onClick={(e) => handleNavClick(e, '#contacto')}
            >
              Reservar Turno
            </a>
          </li>
        </ul>

        <button
          className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
