/**
 * enhancements.js — Mejoras de funcionalidad para Viajes Jovi
 * - Formulario de contacto → WhatsApp
 * - Compartir paquete por redes
 * - Favoritos/Wishlist con localStorage
 * - Página 404 con sugerencias
 * - Transiciones entre páginas
 * - Botón "compartir" en detalle
 */
(function () {
    'use strict';

    // ═══════════════════════════════════════════════════════
    // 1. FORMULARIO DE CONTACTO → WhatsApp
    // ═══════════════════════════════════════════════════════
    var contactForm = document.querySelector('.contact form, form#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var nombre = (document.getElementById('nombre') || {}).value || '';
            var correo = (document.getElementById('correo') || {}).value || '';
            var asunto = (document.getElementById('asunto') || {}).value || '';
            var mensaje = (document.getElementById('mensaje') || {}).value || '';

            if (!nombre.trim() || !correo.trim()) {
                showToast('Por favor completa al menos tu nombre y correo.', 'warning');
                return;
            }

            var msg = '📩 Mensaje desde la web:\n'
                + '👤 Nombre: ' + nombre.trim() + '\n'
                + '📧 Correo: ' + correo.trim() + '\n'
                + (asunto.trim() ? '📋 Asunto: ' + asunto.trim() + '\n' : '')
                + (mensaje.trim() ? '💬 Mensaje: ' + mensaje.trim() : '');

            window.open('https://wa.me/5214777341974?text=' + encodeURIComponent(msg), '_blank');
            showToast('¡Mensaje preparado! Se abrirá WhatsApp para enviarlo.', 'success');
            contactForm.reset();
        });
    }

    // ═══════════════════════════════════════════════════════
    // 2. COMPARTIR PAQUETE (detalle.html)
    // ═══════════════════════════════════════════════════════
    function initShareButtons() {
        var shareContainer = document.getElementById('share-buttons');
        if (!shareContainer) {
            // Create share buttons in detalle.html
            var ctaCol = document.querySelector('.detalle-cta');
            if (!ctaCol || !document.getElementById('detalle-contenido')) return;

            var shareDiv = document.createElement('div');
            shareDiv.className = 'share-box mt-3';
            shareDiv.innerHTML =
                '<p class="share-label"><i class="fas fa-share-alt me-2"></i>Compartir este paquete</p>' +
                '<div class="share-btns" id="share-buttons">' +
                '  <button class="share-btn share-wa" data-network="whatsapp" title="WhatsApp"><i class="fab fa-whatsapp"></i></button>' +
                '  <button class="share-btn share-fb" data-network="facebook" title="Facebook"><i class="fab fa-facebook-f"></i></button>' +
                '  <button class="share-btn share-tw" data-network="twitter" title="Twitter"><i class="fab fa-twitter"></i></button>' +
                '  <button class="share-btn share-copy" data-network="copy" title="Copiar enlace"><i class="fas fa-link"></i></button>' +
                '</div>';
            ctaCol.appendChild(shareDiv);
        }

        document.addEventListener('click', function (e) {
            var btn = e.target.closest('.share-btn');
            if (!btn) return;

            var url = window.location.href;
            var title = document.querySelector('.detalle-titulo');
            var text = title ? title.textContent.trim() : 'Mira este paquete de Viajes Jovi';

            switch (btn.dataset.network) {
                case 'whatsapp':
                    window.open('https://wa.me/?text=' + encodeURIComponent(text + ' ' + url), '_blank');
                    break;
                case 'facebook':
                    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url), '_blank');
                    break;
                case 'twitter':
                    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(text) + '&url=' + encodeURIComponent(url), '_blank');
                    break;
                case 'copy':
                    if (navigator.clipboard) {
                        navigator.clipboard.writeText(url).then(function () {
                            showToast('¡Enlace copiado al portapapeles!', 'success');
                        });
                    } else {
                        var input = document.createElement('input');
                        input.value = url;
                        document.body.appendChild(input);
                        input.select();
                        document.execCommand('copy');
                        document.body.removeChild(input);
                        showToast('¡Enlace copiado!', 'success');
                    }
                    break;
            }
        });
    }

    // ═══════════════════════════════════════════════════════
    // 3. FAVORITOS / WISHLIST
    // ═══════════════════════════════════════════════════════
    var FAV_KEY = 'jovi-favorites';

    function getFavorites() {
        try { return JSON.parse(localStorage.getItem(FAV_KEY) || '[]'); }
        catch (e) { return []; }
    }

    function toggleFavorite(id) {
        var favs = getFavorites();
        var idx = favs.indexOf(id);
        if (idx > -1) {
            favs.splice(idx, 1);
            showToast('Eliminado de favoritos', 'info');
        } else {
            favs.push(id);
            showToast('¡Agregado a favoritos! ❤️', 'success');
        }
        localStorage.setItem(FAV_KEY, JSON.stringify(favs));
        updateFavButtons();
    }

    function isFavorite(id) {
        return getFavorites().indexOf(id) > -1;
    }

    function updateFavButtons() {
        document.querySelectorAll('[data-fav-id]').forEach(function (btn) {
            var id = btn.dataset.favId;
            var icon = btn.querySelector('i');
            if (isFavorite(id)) {
                btn.classList.add('is-fav');
                if (icon) icon.className = 'fas fa-heart';
            } else {
                btn.classList.remove('is-fav');
                if (icon) icon.className = 'far fa-heart';
            }
        });
    }

    function injectFavButtons() {
        // Add to escape cards
        document.querySelectorAll('.escape-card').forEach(function (card) {
            var link = card.querySelector('a[href*="detalle.html?id="]');
            if (!link) return;
            var id = new URLSearchParams(link.href.split('?')[1]).get('id');
            if (!id || card.querySelector('[data-fav-id]')) return;

            var btn = document.createElement('button');
            btn.className = 'fav-btn';
            btn.setAttribute('data-fav-id', id);
            btn.setAttribute('aria-label', 'Agregar a favoritos');
            btn.innerHTML = '<i class="' + (isFavorite(id) ? 'fas' : 'far') + ' fa-heart"></i>';
            btn.addEventListener('click', function (e) {
                e.stopPropagation();
                e.preventDefault();
                toggleFavorite(id);
            });
            card.style.position = 'relative';
            card.appendChild(btn);
        });

        // Add to detalle page
        var ctaWa = document.getElementById('cta-whatsapp');
        if (ctaWa && document.getElementById('detalle-contenido')) {
            var params = new URLSearchParams(window.location.search);
            var pId = params.get('id');
            if (pId && !document.querySelector('[data-fav-id="' + pId + '"]')) {
                var favBtn = document.createElement('button');
                favBtn.className = 'btn-fav-detalle mb-3';
                favBtn.setAttribute('data-fav-id', pId);
                favBtn.innerHTML = '<i class="' + (isFavorite(pId) ? 'fas' : 'far') + ' fa-heart"></i> <span>' + (isFavorite(pId) ? 'En favoritos' : 'Agregar a favoritos') + '</span>';
                favBtn.addEventListener('click', function () {
                    toggleFavorite(pId);
                    var icon = favBtn.querySelector('i');
                    var span = favBtn.querySelector('span');
                    if (isFavorite(pId)) {
                        icon.className = 'fas fa-heart';
                        span.textContent = 'En favoritos';
                    } else {
                        icon.className = 'far fa-heart';
                        span.textContent = 'Agregar a favoritos';
                    }
                });
                ctaWa.parentNode.insertBefore(favBtn, ctaWa.nextSibling);
            }
        }
    }

    // ═══════════════════════════════════════════════════════
    // 4. PAGE TRANSITIONS (fade-in suave)
    // ═══════════════════════════════════════════════════════
    function initPageTransitions() {
        document.body.classList.add('jovi-page-enter');
        requestAnimationFrame(function () {
            document.body.classList.add('jovi-page-visible');
        });

        // Intercept internal navigation
        document.addEventListener('click', function (e) {
            var link = e.target.closest('a[href]');
            if (!link) return;
            var href = link.getAttribute('href');
            if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel') || link.target === '_blank') return;

            e.preventDefault();
            document.body.classList.remove('jovi-page-visible');
            document.body.classList.add('jovi-page-exit');
            setTimeout(function () {
                window.location.href = href;
            }, 250);
        });
    }

    // ═══════════════════════════════════════════════════════
    // 5. TOAST UTILITY
    // ═══════════════════════════════════════════════════════
    function showToast(message, type) {
        var existing = document.querySelector('.jovi-enh-toast');
        if (existing) existing.remove();

        var toast = document.createElement('div');
        toast.className = 'jovi-enh-toast jovi-enh-toast--' + (type || 'info');
        toast.innerHTML = '<span>' + message + '</span>';
        document.body.appendChild(toast);

        requestAnimationFrame(function () {
            toast.classList.add('show');
        });

        setTimeout(function () {
            toast.classList.remove('show');
            setTimeout(function () { toast.remove(); }, 300);
        }, 3000);
    }

    // ═══════════════════════════════════════════════════════
    // INIT
    // ═══════════════════════════════════════════════════════
    document.addEventListener('DOMContentLoaded', function () {
        initPageTransitions();
        initShareButtons();
        injectFavButtons();
        updateFavButtons();
    });

})();
