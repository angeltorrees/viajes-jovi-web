/**
 * api.js — Client-side API layer for Cloudflare D1
 * Replaces localStorage with remote database calls.
 * Falls back to localStorage if API is unavailable.
 */
var JoviAPI = (function () {
    'use strict';

    // Auto-detect API base URL (same origin)
    var BASE_URL = '/api';
    var authToken = null;

    // ── Auth ──────────────────────────────────────────────────────────────────
    function setAuth(token) {
        authToken = token;
    }

    function getHeaders(withAuth) {
        var headers = { 'Content-Type': 'application/json' };
        if (withAuth && authToken) {
            headers['Authorization'] = 'Bearer ' + authToken;
        }
        return headers;
    }

    // ── Initialize DB (run once) ──────────────────────────────────────────────
    async function initDB() {
        try {
            var res = await fetch(BASE_URL + '/init', {
                method: 'POST',
                headers: getHeaders(true)
            });
            return await res.json();
        } catch (e) {
            console.warn('[JoviAPI] initDB failed:', e);
            return { ok: false, error: e.message };
        }
    }

    // ── Read a collection ─────────────────────────────────────────────────────
    async function getData(key) {
        try {
            var res = await fetch(BASE_URL + '/data?key=' + encodeURIComponent(key), {
                headers: getHeaders(false)
            });
            var json = await res.json();
            if (json.ok && json.data) return json.data;
            return null;
        } catch (e) {
            console.warn('[JoviAPI] getData(' + key + ') failed, using localStorage fallback:', e);
            return null; // caller will fall back to localStorage
        }
    }

    // ── Read all collections at once ──────────────────────────────────────────
    async function getAllData() {
        try {
            var res = await fetch(BASE_URL + '/data?key=all', {
                headers: getHeaders(false)
            });
            var json = await res.json();
            if (json.ok && json.collections) return json.collections;
            return null;
        } catch (e) {
            console.warn('[JoviAPI] getAllData failed:', e);
            return null;
        }
    }

    // ── Write a single collection ─────────────────────────────────────────────
    async function saveData(key, data) {
        try {
            var res = await fetch(BASE_URL + '/data', {
                method: 'POST',
                headers: getHeaders(true),
                body: JSON.stringify({ key: key, data: data })
            });
            var json = await res.json();
            return json;
        } catch (e) {
            console.warn('[JoviAPI] saveData(' + key + ') failed:', e);
            return { ok: false, error: e.message };
        }
    }

    // ── Write multiple collections at once ────────────────────────────────────
    async function saveAll(collections) {
        try {
            var res = await fetch(BASE_URL + '/data', {
                method: 'POST',
                headers: getHeaders(true),
                body: JSON.stringify({ collections: collections })
            });
            var json = await res.json();
            return json;
        } catch (e) {
            console.warn('[JoviAPI] saveAll failed:', e);
            return { ok: false, error: e.message };
        }
    }

    // ── Public API ────────────────────────────────────────────────────────────
    return {
        setAuth: setAuth,
        initDB: initDB,
        getData: getData,
        getAllData: getAllData,
        saveData: saveData,
        saveAll: saveAll
    };

})();
