// Animation du header au scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Menu mobile
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navList = document.querySelector('.nav-list');
const header = document.querySelector('.header');

// Toggle menu mobile
mobileMenuBtn.addEventListener('click', function(e) {
    e.stopPropagation(); // Empêche la propagation du clic
    navList.classList.toggle('active');
    // Optionnel : Ajouter une classe pour l'animation du bouton
    this.classList.toggle('active');
});

// Fermer le menu lors du clic en dehors
document.addEventListener('click', function(e) {
    if (!navList.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        navList.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    }
});

// Fermer le menu mobile lors du clic sur un lien
document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    });
});

// Fermer le menu mobile lors du scroll
let lastScroll = 0;
window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll) {
        navList.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    }
    lastScroll = currentScroll;
});

