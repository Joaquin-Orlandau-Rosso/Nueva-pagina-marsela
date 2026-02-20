export const scrollToSection = (target, { delay = 0 } = {}) => {
  const run = () => {
    const el = typeof target === 'string' ? document.querySelector(target) : target;
    if (!el) return;

    const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 80;
    const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  if (delay > 0) {
    window.setTimeout(run, delay);
    return;
  }

  run();
};
