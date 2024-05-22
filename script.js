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

  // Função do menu sanduíche
  function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("open");
  }

  // Adiciona evento ao ícone do menu
  const menuIcon = document.querySelector(".menu-icon");
  if (menuIcon) {
    menuIcon.addEventListener("click", toggleMenu);
  }
});
