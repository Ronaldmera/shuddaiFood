const hamburguer = document.querySelector('.hamburguer');
const enlaces = document.querySelector('#nav-links');

hamburguer.addEventListener('click', () => {
    enlaces.classList.toggle('show');

});
// Cerrar el menú si se hace clic fuera de él
document.addEventListener("click", function (event) {
    if (!enlaces.contains(event.target) && !hamburguer.contains(event.target)) {
        enlaces.classList.remove("show");
    }
});
//al tocar dar click en un enlcace se cierra el menu esto es ya que es una sola vista o pagina estatica
enlaces.addEventListener('click', () => {
    enlaces.classList.remove('show');
});