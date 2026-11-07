(() => {
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const elements = document.querySelectorAll('.sg-sales-grid > figure, .sg-past-feature .sg-sales-grid > div');
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('sg-in-view');
        observer.unobserve(entry.target);
      }
    }
  }, {threshold: .15});
  for (const element of elements) {
    element.classList.add('sg-reveal');
    observer.observe(element);
  }
  document.documentElement.classList.add('sg-motion-ready');
})();
