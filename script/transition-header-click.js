gsap.registerPlugin(ScrollToPlugin);

// Selecciona todos los enlaces dentro del header y la clase btn
document.querySelectorAll('header a, .btn a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    // Obtén el destino del desplazamiento del atributo href del enlace
    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      // Desplaza la ventana hacia el destino con un desplazamiento suave
      gsap.to(window, {
        scrollTo: { y: target, offsetY: 65 }, 
        duration: 0.8,
        ease: "power2.out"
      });
    }
  });
});

// Resaltar enlace activo según la sección visible
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header a');

const setActiveLink = () => {
  let index = sections.length;

  // Encuentra la sección visible más cercana
  while (--index && window.scrollY + 150 < sections[index].offsetTop) {}

  // Remueve la clase activa de todos los enlaces y la agrega al correspondiente
  navLinks.forEach(link => link.classList.remove('active'));
  navLinks[index]?.classList.add('active');
};

// Actualiza el enlace activo al hacer scroll
window.addEventListener('scroll', setActiveLink);
