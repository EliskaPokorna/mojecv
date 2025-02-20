/* Animace načítání bloků */
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.animation-block');

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
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const heroHeading = document.getElementById("hero-heading");
    const heroText = document.getElementById("hero-text");

    heroHeading.style.visibility = "visible";
    heroText.style.visibility = "visible";

    const headingText = heroHeading.textContent;
    const paragraphText = heroText.textContent;
    heroHeading.textContent = "";
    heroText.textContent = "";

    function typeWriter(element, text, speed, callback) {
      let index = 0;
      function type() {
        if (index < text.length) {
          element.textContent += text.charAt(index);
          index++;
          setTimeout(type, speed);
        } else if (callback) {
          callback();
        }
      }
      type();
    }

    typeWriter(heroHeading, headingText, 80, () => {
      setTimeout(() => {
        typeWriter(heroText, paragraphText, 40);
      }, 300);
    });
  }, 500);
});
