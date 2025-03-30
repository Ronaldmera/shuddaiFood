const hamburguer = document.querySelector('.hamburguer');
const enlaces = document.querySelector('#nav-links');

hamburguer.addEventListener('click', () => {
    if (enlaces.classList.contains('active')) {
        enlaces.style.opacity = '0';
        enlaces.style.transform = 'translateX(100%)';
        setTimeout(() => {
            enlaces.classList.remove('active');
            enlaces.style.display = 'none';
        }, 300); // Tiempo de la animación
    } else {
        enlaces.style.display = 'flex';
        setTimeout(() => {
            enlaces.classList.add('active');
            enlaces.style.opacity = '1';
            enlaces.style.transform = 'translateX(0)';
        }, 10);
    }
});

// Cerrar el menú si se hace clic fuera de él
document.addEventListener("click", (event) => {
    if (!enlaces.contains(event.target) && !hamburguer.contains(event.target)) {
        enlaces.style.opacity = '0';
        enlaces.style.transform = 'translateX(100%)';
        setTimeout(() => {
            enlaces.classList.remove('active');
            enlaces.style.display = 'none';
        }, 300);
    }
});

// Cerrar el menú al hacer clic en un enlace
enlaces.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        enlaces.style.opacity = '0';
        enlaces.style.transform = 'translateX(100%)';
        setTimeout(() => {
            enlaces.classList.remove('active');
            enlaces.style.display = 'none';
        }, 300);
    });
});
