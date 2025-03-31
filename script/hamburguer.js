document.addEventListener("DOMContentLoaded", () => {
    const hamburguer = document.querySelector('.hamburguer');
    const enlaces = document.querySelector('#nav-links');

    function showMenu() {
        enlaces.style.display = 'flex';
        setTimeout(() => {
            enlaces.classList.add('active');
            enlaces.style.opacity = '1';
            enlaces.style.transform = 'translateX(0)';
        }, 10);
    }

    function hideMenu() {
        enlaces.style.opacity = '0';
        enlaces.style.transform = 'translateX(100%)';
        setTimeout(() => {
            enlaces.classList.remove('active');
            enlaces.style.display = window.innerWidth >= 768 ? 'flex' : 'none';
        }, 300);
    }

    hamburguer.addEventListener('click', () => {
        if (enlaces.classList.contains('active')) {
            hideMenu();
        } else {
            showMenu();
        }
    });

    document.addEventListener("click", (event) => {
        if (window.innerWidth < 768 && !enlaces.contains(event.target) && !hamburguer.contains(event.target)) {
            hideMenu();
        }
    });

    enlaces.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                hideMenu();
            }
        });
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
            enlaces.style.display = 'flex';
            enlaces.style.opacity = '1';
            enlaces.style.transform = 'translateX(0)';
        } else {
            enlaces.style.display = 'none';
            enlaces.classList.remove('active');
        }
    });
});