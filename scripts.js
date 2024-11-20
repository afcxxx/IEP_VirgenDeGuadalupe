// Efecto de transición constante al hacer scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;

        if (sectionTop < window.innerHeight - 100 && sectionBottom > 0) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});
