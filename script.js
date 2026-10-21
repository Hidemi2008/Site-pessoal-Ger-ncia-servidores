// Menu Hamburguer para Celulares
const mobileMenuBtn = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

mobileMenuBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Fechar o menu ao clicar em um link (no celular)
document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
    });
});