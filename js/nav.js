/**
 * nav.js — Jovi Nav: scroll, drawer, dropdown, theme toggle, active page
 */
(function () {
    'use strict';

    // ── Scroll detection ─────────────────────────────────────
    var nav = document.getElementById('joviNav');
    if (nav) {
        var onScroll = function () {
            nav.classList.toggle('jovi-nav--scrolled', window.scrollY > 60);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    // ── Hamburger + Drawer ───────────────────────────────────
    var hamburger = document.getElementById('joviHamburger');
    var drawer    = document.getElementById('joviDrawer');
    var overlay   = document.getElementById('joviOverlay');
    var closeBtn  = document.getElementById('joviDrawerClose');

    function openDrawer() {
        if (!drawer) return;
        hamburger && hamburger.classList.add('is-open');
        hamburger && hamburger.setAttribute('aria-expanded', 'true');
        drawer.classList.add('is-open');
        drawer.setAttribute('aria-hidden', 'false');
        overlay && overlay.classList.add('is-open');
        document.body.style.overflow = 'hidden';
    }
    function closeDrawer() {
        if (!drawer) return;
        hamburger && hamburger.classList.remove('is-open');
        hamburger && hamburger.setAttribute('aria-expanded', 'false');
        drawer.classList.remove('is-open');
        drawer.setAttribute('aria-hidden', 'true');
        overlay && overlay.classList.remove('is-open');
        document.body.style.overflow = '';
    }

    hamburger && hamburger.addEventListener('click', function () {
        drawer.classList.contains('is-open') ? closeDrawer() : openDrawer();
    });
    closeBtn && closeBtn.addEventListener('click', closeDrawer);
    overlay && overlay.addEventListener('click', closeDrawer);

    // ── Desktop dropdown ─────────────────────────────────────
    function closeAllDropdowns() {
        document.querySelectorAll('.jovi-has-dropdown.is-open').forEach(function (el) {
            el.classList.remove('is-open');
        });
    }
    document.querySelectorAll('.jovi-has-dropdown').forEach(function (li) {
        var trigger = li.querySelector('.jovi-drop-trigger');
        if (!trigger) return;
        trigger.addEventListener('click', function (e) {
            e.stopPropagation();
            var wasOpen = li.classList.contains('is-open');
            closeAllDropdowns();
            if (!wasOpen) li.classList.add('is-open');
        });
    });
    document.addEventListener('click', closeAllDropdowns);

    // ESC key closes drawer + dropdown
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') { closeDrawer(); closeAllDropdowns(); }
    });

    // ── Theme toggle ─────────────────────────────────────────
    var themeBtn  = document.getElementById('themeToggle');
    var themeIcon = document.getElementById('themeIcon');

    function applyTheme(dark) {
        if (dark) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
        localStorage.setItem('jovi-theme', dark ? 'dark' : 'light');
        if (themeIcon) themeIcon.className = dark ? 'fas fa-sun' : 'fas fa-moon';
        if (themeBtn) themeBtn.title = dark ? 'Modo claro' : 'Modo oscuro';
    }

    var stored = localStorage.getItem('jovi-theme');
    var isDark = stored === 'dark' || (stored === null && window.matchMedia('(prefers-color-scheme: dark)').matches);
    applyTheme(isDark);

    themeBtn && themeBtn.addEventListener('click', function () {
        applyTheme(document.documentElement.getAttribute('data-theme') !== 'dark');
    });

    // ── Active page marking ──────────────────────────────────
    var currentPage = location.pathname.split('/').pop().replace('.html', '') || 'index';
    document.querySelectorAll('[data-page]').forEach(function (link) {
        if (link.dataset.page === currentPage) link.classList.add('is-active');
    });

})();
