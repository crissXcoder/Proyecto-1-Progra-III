// Agregar un listener para el evento de desplazamiento
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    // Si el usuario ha bajado más de 50px, aplica la clase 'scroll-active'
    if (window.scrollY > 10) {
        navbar.classList.add('scroll-active');
    } else {
        navbar.classList.remove('scroll-active');
    }
});
