let texto = "Comida rápida que sí vale la pena";
let index = 0;

let mostrarTexto = () => {
    if (index < texto.length) {
        document.querySelector('#welcome-title').textContent += texto[index];
        index++;
        setTimeout(mostrarTexto, 80);
    }
};

mostrarTexto();


//  manejo del icono del boton del Navbar en movil
let btnNav = document.querySelector(".navbar-toggler")
let ico = document.querySelector(".ico")
btnNav.addEventListener('click',()=>{
    ico.classList.toggle("navbar-toggler-icon-close");
})