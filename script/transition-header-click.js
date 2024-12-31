
gsap.registerPlugin(ScrollToPlugin);

// Selecciona todos los enlaces dentro del header y la clase btn
document.querySelectorAll('header a, .btn a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    // Obtén el destino del desplazamiento del atributo href del enlace
    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      // Desplaza la ventana hacia el destino con un desplazamiento suave
      gsap.to(window, {
        scrollTo: { y: target, offsetY: 100}, // Puedes ajustar el offsetY según sea necesario
        duration: .8, // Ajusta la duración del desplazamiento para mayor suavidad
        ease: "power2.out" // Utiliza una función de ease para suavizar el movimiento
      });
    }
  });
});
