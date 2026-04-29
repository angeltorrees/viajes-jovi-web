// ── Render dinámico del carrusel y sección Escápate desde PAQUETES ────────────
(function () {
    'use strict';

    function escHtml(str) {
        return String(str || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    function getPrecioDisplay(p) {
        if (p.segmentosPrecio && p.segmentosPrecio.length) {
            return escHtml(p.segmentosPrecio[0].precio);
        }
        return escHtml(p.precio || '');
    }

    function getTipoPrecioLabel(p) {
        if (p.tipoPrecio === 'por-grupo') return 'Precio por grupo (noches incluidas)';
        if (p.tipoPrecio === 'por-persona') return 'Por persona (noches incluidas)';
        return escHtml(p.formaPrecio || '');
    }

    function renderCarousel(items) {
        var indicators = document.getElementById('carousel-indicators');
        var inner      = document.getElementById('carousel-inner');
        if (!inner || !items.length) return;

        inner.innerHTML = '';
        if (indicators) indicators.innerHTML = '';

        items.forEach(function (p, i) {
            // Indicator dot
            if (indicators) {
                var li = document.createElement('li');
                li.setAttribute('data-bs-target', '#carouselId');
                li.setAttribute('data-bs-slide-to', String(i));
                if (i === 0) li.className = 'active';
                indicators.appendChild(li);
            }

            // Slide
            var slide = document.createElement('div');
            slide.className = 'carousel-item jovi-hero-slide' + (i === 0 ? ' active' : '');
            slide.style.backgroundImage = "url('" + escHtml(p.imagen) + "')";
            slide.setAttribute('aria-label', escHtml(p.nombre));
            slide.innerHTML =
                '<div class="jovi-hero-overlay"></div>' +
                '<div class="carousel-caption">' +
                '  <div class="jovi-hero-content text-center">' +
                '    <h2 class="jovi-hero-title mb-3">' + escHtml(p.nombre) + '</h2>' +
                '    <div class="jovi-price-box mb-3">' +
                '      <div class="jovi-price-main">' +
                '        <span class="jovi-price-label d-block">Desde</span>' +
                '        <span class="jovi-price-amount d-block">' + getPrecioDisplay(p) + '</span>' +
                '        <span class="jovi-price-text d-block">' + getTipoPrecioLabel(p) + '</span>' +
                '      </div>' +
                '      <span class="jovi-price-badge">' + escHtml(p.duracion) + '</span>' +
                '    </div>' +
                '    <div class="jovi-hero-actions d-flex flex-column flex-sm-row justify-content-center">' +
                '      <a href="' + escHtml(p.whatsapp) + '" class="btn jovi-btn-primary me-sm-2 mb-2 mb-sm-0" target="_blank" rel="noopener">Cotiza ahora</a>' +
                '      <a href="detalle.html?id=' + escHtml(p.id) + '" class="btn jovi-btn-secondary ms-sm-2">Detalles</a>' +
                '    </div>' +
                '  </div>' +
                '</div>';
            inner.appendChild(slide);
        });
    }

    function renderEscape(items) {
        var container = document.getElementById('escape-cards-container');
        if (!container || !items.length) return;

        container.innerHTML = '';
        items.forEach(function (p, i) {
            var article = document.createElement('article');
            article.className = 'escape-card';
            article.style.cursor = 'pointer';
            article.setAttribute('aria-label', 'Escapada: ' + escHtml(p.nombre));
            article.addEventListener('click', function(e) {
                if (e.target.closest('a')) return;
                window.location.href = 'detalle.html?id=' + p.id;
            });
            article.innerHTML =
                '<div class="escape-card-image-wrapper">' +
                '  <img src="' + escHtml(p.imagen) + '" alt="' + escHtml(p.nombre) + '" class="escape-card-image">' +
                '  <span class="escape-badge">Recomendado</span>' +
                '</div>' +
                '<span class="escape-number">' + (i + 1) + '</span>' +
                '<div class="escape-card-body">' +
                '  <h3 class="escape-destination">' + escHtml(p.nombre) + '</h3>' +
                '  <p class="escape-duration">' + escHtml(p.duracion) + '</p>' +
                '  <p class="escape-price">Desde ' + getPrecioDisplay(p) + '</p>' +
                '  <a href="detalle.html?id=' + escHtml(p.id) + '" class="escape-button">Ver detalles</a>' +
                '</div>';
            container.appendChild(article);
        });
    }

    function renderExploreTour(data) {
        var nacEl = document.getElementById('explore-nacionales-container');
        var intEl = document.getElementById('explore-internacionales-container');

        if (nacEl && data.nacionales && data.nacionales.length) {
            nacEl.innerHTML = '';
            data.nacionales.forEach(function (item) {
                var ofertaHtml = (item.oferta && item.ofertaColor)
                    ? '<div class="tour-offer ' + escHtml(item.ofertaColor) + '">' + escHtml(item.oferta) + '</div>'
                    : '';
                var col = document.createElement('div');
                col.className = 'col-md-6 col-lg-4';
                col.innerHTML =
                    '<div class="national-item">' +
                    '  <img src="' + escHtml(item.imagen) + '" class="img-fluid w-100 rounded" alt="' + escHtml(item.titulo) + '">' +
                    '  <div class="national-content">' +
                    '    <div class="national-info">' +
                    '      <h5 class="text-white text-uppercase mb-2">' + escHtml(item.titulo) + '</h5>' +
                    '      <a href="' + ('https://wa.me/5214777920736?text=' + encodeURIComponent('Hola! Me interesa el tour: ' + (item.titulo || ''))) + '" target="_blank" rel="noopener" class="btn-hover text-white"><i class="fab fa-whatsapp me-1"></i> Cotizar <i class="fa fa-arrow-right ms-2"></i></a>' +
                    '    </div>' +
                    '  </div>' +
                    ofertaHtml +
                    '  <div class="national-plus-icon">' +
                    '    <a href="' + ('https://wa.me/5214777920736?text=' + encodeURIComponent('Hola! Me interesa el tour: ' + (item.titulo || ''))) + '" target="_blank" rel="noopener" class="my-auto"><i class="fab fa-whatsapp fa-2x text-white"></i></a>' +
                    '  </div>' +
                    '</div>';
                nacEl.appendChild(col);
            });
        }

        if (intEl && data.internacionales && data.internacionales.length) {
            intEl.innerHTML = '';
            data.internacionales.forEach(function (item) {
                var ofertaHtml = (item.oferta && item.ofertaColor)
                    ? '<div class="tour-offer ' + escHtml(item.ofertaColor) + '">' + escHtml(item.oferta) + '</div>'
                    : '';
                var div = document.createElement('div');
                div.className = 'international-item';
                div.innerHTML =
                    '<img src="' + escHtml(item.imagen) + '" class="img-fluid w-100 rounded" alt="' + escHtml(item.titulo) + '">' +
                    '<div class="international-content">' +
                    ofertaHtml +
                    '  <div class="international-info">' +
                    '    <h5 class="text-white text-uppercase mb-2">' + escHtml(item.titulo) + '</h5>' +
                    '    <a href="' + escHtml(item.link || '#') + '" class="btn-hover text-white me-4"><i class="fas fa-map-marker-alt me-1"></i> ' + escHtml(item.ciudades) + '</a>' +
                    '    <a href="' + ('https://wa.me/5214777920736?text=' + encodeURIComponent('Hola! Me interesa el tour internacional: ' + (item.titulo || '') + ' (' + (item.ciudades || '') + ')')) + '" target="_blank" rel="noopener" class="btn-hover text-white"><i class="fab fa-whatsapp me-1"></i> Cotizar</a>' +
                    '  </div>' +
                    '</div>' +
                    '<div class="international-plus-icon">' +
                    '  <a href="' + ('https://wa.me/5214777920736?text=' + encodeURIComponent('Hola! Me interesa el tour: ' + (item.titulo || ''))) + '" target="_blank" rel="noopener" class="my-auto"><i class="fab fa-whatsapp fa-2x text-white"></i></a>' +
                    '</div>';
                intEl.appendChild(div);
            });
        }
    }

    function renderPaquetesAsombrosos(items) {
        var container = document.getElementById('paquetes-asombrosos-container');
        if (!container || !items.length) return;
        container.innerHTML = '';
        items.forEach(function (p) {
            var div = document.createElement('div');
            div.className = 'packages-item';
            div.style.cursor = 'pointer';
            div.addEventListener('click', function(e) {
                if (e.target.closest('a')) return;
                window.open('https://wa.me/5214777920736?text=' + encodeURIComponent('Hola! Me interesa el paquete: ' + (p.titulo || '') + ' - ' + (p.destino || '') + ' (' + (p.precio || '') + ')'), '_blank');
            });
            div.innerHTML =
                '<div class="packages-img">' +
                '  <img src="' + escHtml(p.imagen) + '" class="img-fluid w-100 rounded-top" alt="Imagen">' +
                '  <div class="packages-info d-flex border border-start-0 border-end-0 position-absolute" style="width:100%;bottom:0;left:0;z-index:5;">' +
                '    <small class="flex-fill text-center border-end py-2"><i class="fa fa-map-marker-alt me-2"></i>' + escHtml(p.destino) + '</small>' +
                '    <small class="flex-fill text-center border-end py-2"><i class="fa fa-calendar-alt me-2"></i>' + escHtml(p.dias) + '</small>' +
                '    <small class="flex-fill text-center py-2"><i class="fa fa-user me-2"></i>' + escHtml(p.personas) + '</small>' +
                '  </div>' +
                '  <div class="packages-price py-2 px-4">' + escHtml(p.precio) + '</div>' +
                '</div>' +
                '<div class="packages-content bg-light">' +
                '  <div class="p-4 pb-0">' +
                '    <h5 class="mb-0">' + escHtml(p.titulo) + '</h5>' +
                '    <small class="text-uppercase">' + escHtml(p.subtitulo) + '</small>' +
                '    <div class="mb-3">' +
                '      <small class="fa fa-star text-primary"></small>' +
                '      <small class="fa fa-star text-primary"></small>' +
                '      <small class="fa fa-star text-primary"></small>' +
                '      <small class="fa fa-star text-primary"></small>' +
                '      <small class="fa fa-star text-primary"></small>' +
                '    </div>' +
                '    <p class="mb-4">' + escHtml(p.descripcion) + '</p>' +
                '  </div>' +
                '  <div class="row bg-primary rounded-bottom mx-0">' +
                '    <div class="col-6 text-start px-0">' +
                '      <a href="detalle.html?id=' + escHtml(p.id) + '" class="btn-hover btn text-white py-2 px-4">Leer Más</a>' +
                '    </div>' +
                '    <div class="col-6 text-end px-0">' +
                '      <a href="' + ('https://wa.me/5214777920736?text=' + encodeURIComponent('Hola! Me interesa el paquete: ' + (p.titulo || '') + ' - ' + (p.destino || '') + ' (' + (p.precio || '') + ')')) + '" target="_blank" rel="noopener" class="btn-hover btn text-white py-2 px-4"><i class="fab fa-whatsapp me-1"></i> Cotizar</a>' +
                '    </div>' +
                '  </div>' +
                '</div>';
            container.appendChild(div);
        });
    }

    // Synchronous calls — must run before main.js initialises owl carousel
    renderExploreTour(window.EXPLORE_DATA || window.EXPLORE_DEFAULT || { nacionales: [], internacionales: [] });
    renderPaquetesAsombrosos(window.PAQUETES_ASOMBROSOS || window.PAQUETES_ASOMBROSOS_DEFAULT || []);

    document.addEventListener('DOMContentLoaded', function () {
        var paquetes = window.PAQUETES || window.PAQUETES_DEFAULT || [];
        renderCarousel(paquetes.slice(0, 5));
        renderEscape(paquetes.slice(5, 10));
    });
})();


// ── Render reseñas de viajeros ───────────────────────────────────────────────
(function () {
    function esc(s) { return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

    function renderResenas(items) {
        var container = document.querySelector('.jovi-reviews-grid');
        if (!container || !items || !items.length) return;
        container.innerHTML = '';
        items.forEach(function (r) {
            var stars = '';
            for (var i = 1; i <= 5; i++) {
                stars += '<i class="' + (i <= (r.estrellas || 5) ? 'fas' : 'far') + ' fa-star"></i>';
            }
            var card = document.createElement('div');
            card.className = 'jovi-review-card jovi-reveal';
            card.innerHTML =
                '<img src="' + esc(r.imagen) + '" alt="' + esc(r.destino) + '" class="jovi-review-img" loading="lazy">' +
                '<div class="jovi-review-body">' +
                '  <div class="jovi-review-stars">' + stars + '</div>' +
                '  <p class="jovi-review-text">"' + esc(r.texto) + '"</p>' +
                '  <div class="jovi-review-footer">' +
                '    <div>' +
                '      <div class="jovi-review-author">' + esc(r.autor) + '</div>' +
                '      <div class="jovi-review-dest"><i class="fas fa-map-marker-alt me-1"></i>' + esc(r.destino) + '</div>' +
                '    </div>' +
                '    <div class="jovi-review-date">' + esc(r.fecha) + '</div>' +
                '  </div>' +
                '</div>';
            container.appendChild(card);
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        renderResenas(window.RESENAS || window.RESENAS_DEFAULT || []);
    });
})();
