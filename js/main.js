(function ($) {
    "use strict";

    // Spinner
    setTimeout(function () {
        if ($('#spinner').length > 0) $('#spinner').removeClass('show');
    }, 1);

    // Owl Carousels
    $(".InternationalTour-carousel").owlCarousel({
        autoplay: true, smartSpeed: 1000, center: false, dots: true, loop: true, margin: 25,
        nav: false, responsiveClass: true,
        responsive: { 0:{items:1}, 768:{items:2}, 992:{items:2}, 1200:{items:3} }
    });
    $(".packages-carousel").owlCarousel({
        autoplay: true, smartSpeed: 1000, center: false, dots: false, loop: true, margin: 25,
        nav: true, navText: ['<i class="bi bi-arrow-left"></i>','<i class="bi bi-arrow-right"></i>'],
        responsiveClass: true,
        responsive: { 0:{items:1}, 768:{items:2}, 992:{items:2}, 1200:{items:3} }
    });
    $(".testimonial-carousel").owlCarousel({
        autoplay: true, smartSpeed: 1000, center: true, dots: true, loop: true, margin: 25,
        nav: true, navText: ['<i class="bi bi-arrow-left"></i>','<i class="bi bi-arrow-right"></i>'],
        responsiveClass: true,
        responsive: { 0:{items:1}, 768:{items:2}, 992:{items:2}, 1200:{items:3} }
    });

    // Back to top
    $(window).scroll(function () {
        $(this).scrollTop() > 300 ? $('.back-to-top').fadeIn('slow') : $('.back-to-top').fadeOut('slow');
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

})(jQuery);

// ── Smooth scroll for # links ────────────────────────────────────────────────
document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href="#"]');
    if (a && !a.classList.contains('back-to-top')) {
        e.preventDefault();
    }
});

// ── Image fallback for broken images ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('img').forEach(function (img) {
        img.addEventListener('error', function () {
            if (!img.dataset.fallback) {
                img.dataset.fallback = '1';
                img.style.opacity = '0.3';
                img.alt = 'Imagen no disponible';
            }
        });
    });
});

// ── Scroll Reveal (Intersection Observer) ────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
    var els = document.querySelectorAll('.jovi-reveal, .jovi-reveal-left, .jovi-reveal-right');
    if (!els.length) return;
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('jovi-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    els.forEach(function (el) { observer.observe(el); });
});

// ── WhatsApp Flotante ────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
    var wa = document.createElement('a');
    wa.href = 'https://wa.me/5214777920736?text=Hola!%20Me%20interesa%20conocer%20sus%20paquetes%20de%20viaje';
    wa.target = '_blank';
    wa.rel = 'noopener';
    wa.className = 'jovi-whatsapp-float';
    wa.setAttribute('aria-label', 'Contactar por WhatsApp');
    wa.innerHTML = '<i class="fab fa-whatsapp"></i><span class="jovi-wa-tooltip">¡Cotiza ahora!</span>';
    document.body.appendChild(wa);
});

// ── Barra de progreso de lectura (solo en detalle.html) ──────────────────────
document.addEventListener('DOMContentLoaded', function () {
    if (!document.getElementById('detalle-contenido')) return;
    var bar = document.createElement('div');
    bar.className = 'jovi-progress-bar';
    document.body.prepend(bar);
    window.addEventListener('scroll', function () {
        var docHeight = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = docHeight > 0 ? (window.scrollY / docHeight * 100) + '%' : '0%';
    }, { passive: true });
});

// ── Escápate con Jovi - Carrusel horizontal ──────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
    var carousel = document.querySelector('[data-escape-carousel]');
    if (!carousel) return;

    var cards = Array.from(carousel.querySelectorAll('.escape-card'));
    var prevBtn = document.querySelector('.escape-arrow--prev');
    var nextBtn = document.querySelector('.escape-arrow--next');
    var dotsContainer = document.querySelector('.escape-dots');
    if (!cards.length || !prevBtn || !nextBtn || !dotsContainer) return;

    var currentIndex = 0, autoSlideId = null;

    function scrollToCard(index, smooth) {
        var target = cards[index];
        if (!target) return;
        carousel.scrollTo({ left: target.offsetLeft - carousel.offsetLeft, behavior: smooth !== false ? 'smooth' : 'auto' });
        currentIndex = index;
        updateDots();
    }
    function createDots() {
        dotsContainer.innerHTML = '';
        cards.forEach(function (_, i) {
            var btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'escape-dot';
            btn.setAttribute('aria-label', 'Ir a la escapada ' + (i + 1));
            btn.addEventListener('click', function () { scrollToCard(i); });
            dotsContainer.appendChild(btn);
        });
    }
    function updateDots() {
        dotsContainer.querySelectorAll('.escape-dot').forEach(function (dot, i) {
            dot.classList.toggle('is-active', i === currentIndex);
        });
    }
    function move(dir) {
        var next = currentIndex + dir;
        if (next < 0) next = cards.length - 1;
        if (next >= cards.length) next = 0;
        scrollToCard(next);
    }
    function startAuto() { stopAuto(); autoSlideId = setInterval(function () { move(1); }, 5000); }
    function stopAuto() { if (autoSlideId) { clearInterval(autoSlideId); autoSlideId = null; } }

    prevBtn.addEventListener('click', function () { move(-1); startAuto(); });
    nextBtn.addEventListener('click', function () { move(1); startAuto(); });

    var scrollT;
    carousel.addEventListener('scroll', function () {
        clearTimeout(scrollT);
        scrollT = setTimeout(function () {
            var cx = carousel.getBoundingClientRect().left + carousel.offsetWidth / 2;
            var best = 0, bestD = Infinity;
            cards.forEach(function (c, i) {
                var d = Math.abs(c.getBoundingClientRect().left + c.offsetWidth / 2 - cx);
                if (d < bestD) { bestD = d; best = i; }
            });
            currentIndex = best;
            updateDots();
        }, 120);
    });

    carousel.addEventListener('mouseenter', stopAuto);
    carousel.addEventListener('mouseleave', startAuto);
    createDots();
    scrollToCard(0, false);
    startAuto();
});

// ── Flatpickr datepickers (buscador hero) ────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
    if (typeof flatpickr === 'undefined') return;
    var opts = { dateFormat: 'd/m/Y', altInput: true, altFormat: 'd M Y', allowInput: false, locale: 'es' };
    var checkin = document.querySelector('#jovi-checkin');
    var checkout = document.querySelector('#jovi-checkout');
    if (checkin) {
        flatpickr(checkin, Object.assign({}, opts, {
            minDate: 'today',
            onChange: function (sel) {
                if (sel.length && checkout && checkout._flatpickr) checkout._flatpickr.set('minDate', sel[0]);
            }
        }));
    }
    if (checkout) {
        flatpickr(checkout, Object.assign({}, opts, { minDate: 'today' }));
    }
});


// ── Animated counters ────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
    var counters = document.querySelectorAll('.jovi-counter-num[data-target]');
    if (!counters.length) return;
    var animated = false;
    var observer = new IntersectionObserver(function (entries) {
        if (animated) return;
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                animated = true;
                counters.forEach(function (el) {
                    var target = parseInt(el.dataset.target, 10);
                    var duration = 1800;
                    var start = 0;
                    var startTime = null;
                    function step(ts) {
                        if (!startTime) startTime = ts;
                        var progress = Math.min((ts - startTime) / duration, 1);
                        var eased = 1 - Math.pow(1 - progress, 3);
                        el.textContent = Math.floor(eased * target) + '+';
                        if (progress < 1) requestAnimationFrame(step);
                    }
                    requestAnimationFrame(step);
                });
                observer.disconnect();
            }
        });
    }, { threshold: 0.3 });
    observer.observe(counters[0].closest('.jovi-counter-row') || counters[0]);
});


// ── Clickable cards: destinations → destination.html, blogs → blog.html ──────
document.addEventListener('DOMContentLoaded', function () {
    // Destinos
    document.querySelectorAll('.destination-img').forEach(function (card) {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function (e) {
            if (e.target.closest('a')) return;
            window.location.href = 'destination.html';
        });
    });
    // Blog
    document.querySelectorAll('.blog-item').forEach(function (card) {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function (e) {
            if (e.target.closest('a')) return;
            window.location.href = 'blog.html';
        });
    });
    // Guías/Agentes
    document.querySelectorAll('.guide-item').forEach(function (card) {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function (e) {
            if (e.target.closest('a')) return;
            window.location.href = 'guides.html';
        });
    });
});
