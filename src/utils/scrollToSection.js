const easeInOutCubic = (t) => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

export const scrollToSection = (target, { delay = 0, duration = 1000 } = {}) => {
  const run = () => {
    const el = typeof target === 'string' ? document.querySelector(target) : target;
    if (!el) return;

    const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 80;
    const targetPosition = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);
      
      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  if (delay > 0) {
    window.setTimeout(run, delay);
    return;
  }

  run();
};
