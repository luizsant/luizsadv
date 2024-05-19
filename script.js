document.addEventListener("DOMContentLoaded", function () {
  // Função de animação fade-in
  const elementsToAnimate = document.querySelectorAll(".fade-in");

  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  elementsToAnimate.forEach((element) => {
    observer.observe(element);
  });

  // Carrossel automático
  const carousel = document.querySelector(".testimonial-carousel-inner");
  const cards = document.querySelectorAll(".testimonial-card");
  let index = 0;
  const numCardsVisible =
    window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;

  function moveCarousel() {
    index += numCardsVisible; // Mover conforme o número de cards visíveis
    if (index >= cards.length) {
      index = 0;
    }
    carousel.style.transform = `translateX(${
      -index * (100 / numCardsVisible)
    }%)`;
  }

  setInterval(moveCarousel, 3000); // Muda o card a cada 3 segundos
});
