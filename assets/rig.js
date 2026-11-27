/* GodsRig · interacciones (mismas piezas que la portada de godsplan.dev, sin dependencias) */
(function () {
    var doc = document.documentElement;
    var motion = doc.classList.contains('motion');
    var header = document.getElementById('header');

    // Encabezado: más opaco al hacer scroll
    function onScroll() { if (header) header.classList.toggle('is-scrolled', window.scrollY > 8); }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    var fine = window.matchMedia('(pointer: fine)').matches;

    // Portada: el chip y los componentes siguen un poco al mouse
    var orbit = document.querySelector('.orbit');
    if (motion && orbit && fine) {
        var hero = orbit.closest('.hero') || orbit;
        hero.addEventListener('pointermove', function (e) {
            var r = orbit.getBoundingClientRect();
            var x = (e.clientX - (r.left + r.width / 2)) / (window.innerWidth / 2);
            var y = (e.clientY - (r.top + r.height / 2)) / (window.innerHeight / 2);
            orbit.style.setProperty('--mx', Math.max(-1, Math.min(1, x)).toFixed(3));
            orbit.style.setProperty('--my', Math.max(-1, Math.min(1, y)).toFixed(3));
        });
        hero.addEventListener('pointerleave', function () {
            orbit.style.setProperty('--mx', 0);
            orbit.style.setProperty('--my', 0);
        });
    }

    // Tarjetas: la luz sigue al mouse
    if (fine) {
        document.querySelectorAll('.card__link').forEach(function (card) {
            card.addEventListener('pointermove', function (e) {
                var r = card.getBoundingClientRect();
                card.style.setProperty('--sx', (e.clientX - r.left) + 'px');
                card.style.setProperty('--sy', (e.clientY - r.top) + 'px');
            });
        });
    }

    // La aparición al bajar y la barra de progreso las hace gp-kit.js (Motion)
})();
