let texto = "Comida rápida que sí vale la pena";
let index = 0;

let mostrarTexto = () => {
  if (index < texto.length) {
    document.querySelector("#welcome-title").textContent += texto[index];
    index++;
    setTimeout(mostrarTexto, 80);
  }
};

mostrarTexto();
//  manejo del icono del boton del Navbar en movil
const mainElement = document.querySelector("main");
let btnNav = document.querySelector(".navbar-toggler");
let ico = document.querySelector(".ico");
btnNav.addEventListener("click", () => {
  ico.classList.toggle("navbar-toggler-icon-close");
  mainElement.classList.toggle("overlay-active"); //agregando o eliminando overlay al main
});
// cerrar el menu en movil al dar click en nav-links
let navbar = document.querySelector("#navbarNavDropdown");
let navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    navbar.classList.remove("show");
    ico.classList.toggle("navbar-toggler-icon-close");
    mainElement.classList.toggle("overlay-active"); //agregando o eliminando overlay al main
  });
});

// animacione scrollReveal
ScrollReveal({ reset: false }).reveal(".text-animation", {
  delay: 300,
  distance: "40px",
  duration: 800,
  easing: "ease-out",
  origin: "left",
});
ScrollReveal({ reset: false }).reveal(".text-animation2", {
  delay: 300,
  distance: "40px",
  duration: 800,
  easing: "ease-out",
  origin: "right",
});
ScrollReveal({ reset: false }).reveal(".text-animation-fade", {
  delay: 300,
});
// año dinamico en el footer
let dateContainer = document.querySelector("#date");
let year = new Date().getFullYear();
dateContainer.textContent = year;
