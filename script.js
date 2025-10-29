// Espera a que el contenido del HTML esté completamente cargado y parseado
document.addEventListener('DOMContentLoaded', function () {

    // --- Script de Typed.js ---
    try {
        var typed = new Typed('.typed-text', {
            strings: [
                "Jose Daniel Toledo Zepahua", // Tu nombre aparece primero
                "while(isEmbedded) { code(C); }",
                "public class JavaDeveloper { ... }",
                "SELECT * FROM my_skills;",
                "git commit -m 'New Portfolio Feature'",
                "De Circuitos a la Nube"
            ],
            typeSpeed: 60,
            backSpeed: 30,
            loop: true,
            showCursor: true,
            cursorChar: '_',
            smartBackspace: true
        });
    } catch (e) {
        console.error("Error inicializando Typed.js:", e);
        // Fallback: Muestra el nombre estático si Typed falla
        const typedElement = document.querySelector('.typed-text');
        if (typedElement) {
            typedElement.textContent = "Jose Daniel Toledo Zepahua";
        }
    }

    // --- Script para el Active-Link de la Navbar ---
    try {
        var scrollSpy = new bootstrap.ScrollSpy(document.body, {
            target: '#navbarNav',
            offset: 100
        });
    } catch (e) {
        console.error("Error inicializando Bootstrap ScrollSpy:", e);
    }

}); // Fin del listener DOMContentLoaded