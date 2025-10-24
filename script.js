// --- Script de Typed.js ---
// Esto busca la clase ".typed-text" y escribe las palabras
var typed = new Typed('.typed-text', {
    strings: [
        "Ingeniero Embebido",
        "Java Fullstack Developer",
        "Programador en C",
        "De Circuitos a la Nube"
    ],
    typeSpeed: 70,  /* Velocidad de escritura */
    backSpeed: 50,  /* Velocidad de borrado */
    loop: true,
    // Hacemos que mantenga el estilo del subtítulo
    preStringTyped: (arrayPos, self) => {
        self.el.classList.add('hero-subtitle');
    }
});

// --- Script para el Active-Link de la Navbar ---
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbarNav',
    offset: 100 // Ajusta este número si la sección no se ilumina en el momento correcto
});
