let texto = "¡Bienvenidos a El Shuddai Food!";
let index = 0;

let mostrarTexto = () => {
    if (index < texto.length) {
        document.querySelector('#welcome-title').textContent += texto[index];
        index++;
        setTimeout(mostrarTexto, 80);
    }
};

mostrarTexto();
