function fadeInOnScroll() {
  const fadeElements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');  // Add the 'visible' class to trigger fade-in
      } else {
        entry.target.classList.remove('visible');  // Remove the 'visible' class when out of view
      }
    });
  }, { threshold: 0.5 });  // Trigger when 50% of the element is in view

  fadeElements.forEach(element => {
    observer.observe(element);
  });
}

fadeInOnScroll();
