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

function showAlert(type, message) {
    const alert = document.getElementById('customAlert');
    const icon = alert.querySelector('.alert-icon');
    const title = alert.querySelector('.alert-title');
    const messageEl = alert.querySelector('.alert-message');

    if (type === 'success') {
        alert.classList.add('alert-success');
        alert.classList.remove('alert-error');
        icon.textContent = '✓';
        title.textContent = 'Succesful';
    } else {
        alert.classList.add('alert-error');
        alert.classList.remove('alert-success');
        icon.textContent = '!';
        title.textContent = 'Error';
    }

    messageEl.textContent = message;
    alert.style.display = 'block';
}

function hideAlert() {
    document.getElementById('customAlert').style.display = 'none';
}

document.querySelector('.alert-button').addEventListener('click', hideAlert);

// Validación y envío del formulario de contacto
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    if (this.checkValidity()) {
        showAlert('success', '¡Gracias por contactarnos! Te responderemos pronto.');
    } else {
        showAlert('error', 'Por favor, completa todos los campos requeridos.');
    }
});

// Validación y envío del formulario de agendar cita
document.getElementById('pedido-form').addEventListener('submit', function(e) {
    e.preventDefault();
    if (this.checkValidity()) {
        showAlert('success', '¡Tu cita ha sido agendada con éxito!');
    } else {
        showAlert('error', 'Por favor, completa todos los campos requeridos.');
    }
});

// Validación en tiempo real
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.querySelectorAll('input, select, textarea').forEach(input => {
        input.addEventListener('blur', function() {
            if (!this.checkValidity()) {
                showAlert('error', `Por favor, completa el campo ${this.name} correctamente.`);
            }
        });
    });
});

function createCircles() {
    const header = document.getElementById('header4');
    const circleCount = 15;
    const colors = ['#F0F8FF', '#FFD1DC', '#E6F3FF', '#FFF0F5'];

    for (let i = 0; i < circleCount; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');

        const size = Math.random() * 100 + 50;
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.left = `${Math.random() * 100}%`;
        circle.style.top = `${Math.random() * 100}%`;
        circle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        circle.style.animationDuration = `${Math.random() * 2 + 3}s`;
        circle.style.animationDelay = `${Math.random() * 2}s`;

        header.appendChild(circle);
    }
}

createCircles();
