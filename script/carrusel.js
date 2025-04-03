document.addEventListener("DOMContentLoaded", function () {
    const box = document.querySelector(".box");
    const inner = document.querySelector(".inner");

    if (!box || !inner) return;

    // Clonar los elementos dentro de inner para crear efecto de loop infinito
    inner.innerHTML += inner.innerHTML;

    let scrollAmount = 0;
    let speed = 1; // Ajusta la velocidad del desplazamiento
    let direction = -1; // -1 para izquierda, 1 para derecha
    let animationFrame;

    function scrollItems() {
        scrollAmount += speed * direction;

        if (scrollAmount <= -inner.scrollWidth / 2) {
            scrollAmount = 0;
        }

        inner.style.transform = `translateX(${scrollAmount}px)`;
        animationFrame = requestAnimationFrame(scrollItems);
    }

    scrollItems(); // Iniciar animación

    inner.addEventListener("mouseenter", function () {
        cancelAnimationFrame(animationFrame);
    });

    inner.addEventListener("mouseleave", function () {
        scrollItems();
    });
});
