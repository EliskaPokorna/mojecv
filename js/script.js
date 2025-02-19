/* Animace načítání bloků */
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.offer-item');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 1 });

  items.forEach(item => {
    observer.observe(item);
  });
});

/* Animace šipky */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.scroll-down').forEach(arrow => {
    arrow.addEventListener('click', () => {
      const nextSection = document.querySelector(arrow.getAttribute('data-next'));
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

/* Animace načítání textu */
document.addEventListener("DOMContentLoaded", function () {
  function typeEffect(element, text, speed) {
    let i = 0;
    element.textContent = "";
    element.style.opacity = 1;
    let timer = setInterval(function () {
      element.textContent += text.charAt(i);
      i++;
      if (i === text.length) {
        clearInterval(timer);
      }
    }, speed);
  }

  const subtextEl = document.getElementById("animated-subtext");
  const subtextText = subtextEl.textContent;

  typeEffect(subtextEl, subtextText, 50);
});

