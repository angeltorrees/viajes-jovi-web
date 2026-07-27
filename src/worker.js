/**
 * Viajes Jovi — Cloudflare Worker
 * Handles API routes for D1 database and serves static assets.
 */

const VALID_KEYS = ['paquetes', 'explore', 'paquetes-asombrosos', 'resenas', 'config'];
const ADMIN_HASH = '1d15f6b40d8340c10241704d6020e4f962de2aabea71c136ae7465dd2de87910';
const CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Content-Type': 'application/json'
};

async function sha256(str) {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

async function isAuthorized(request) {
    const auth = request.headers.get('Authorization') || '';
    const token = auth.replace('Bearer ', '').trim();
    if (!token) return false;
    if (token === ADMIN_HASH) return true;
    const hashed = await sha256(token);
    return hashed === ADMIN_HASH;
}

// ── API: POST /api/init ─────────────────────────────────────────────────────
async function handleInit(db) {
    await db.exec(`
        CREATE TABLE IF NOT EXISTS collections (
            key TEXT PRIMARY KEY,
            data TEXT NOT NULL,
            updated_at TEXT DEFAULT (datetime('now'))
        );
    `);
    return new Response(JSON.stringify({ ok: true, message: 'Database initialized' }), {
        headers: CORS_HEADERS
    });
}

// ── API: GET /api/data ──────────────────────────────────────────────────────
async function handleGetData(db, url) {
    const key = url.searchParams.get('key');

    if (key === 'all') {
        const results = await db.prepare('SELECT key, data, updated_at FROM collections').all();
        const collections = {};
        for (const row of results.results) {
            collections[row.key] = { data: JSON.parse(row.data), updated_at: row.updated_at };
        }
        return new Response(JSON.stringify({ ok: true, collections }), { headers: CORS_HEADERS });
    }

    if (!key || !VALID_KEYS.includes(key)) {
        return new Response(JSON.stringify({ ok: false, error: 'Invalid key. Valid: ' + VALID_KEYS.join(', ') }), {
            status: 400, headers: CORS_HEADERS
        });
    }

    const row = await db.prepare('SELECT data, updated_at FROM collections WHERE key = ?').bind(key).first();
    if (!row) {
        return new Response(JSON.stringify({ ok: true, data: null, exists: false }), { headers: CORS_HEADERS });
    }

    return new Response(JSON.stringify({ ok: true, data: JSON.parse(row.data), updated_at: row.updated_at }), {
        headers: CORS_HEADERS
    });
}

// ── API: POST /api/data ─────────────────────────────────────────────────────
async function handlePostData(db, request) {
    if (!(await isAuthorized(request))) {
        return new Response(JSON.stringify({ ok: false, error: 'Unauthorized' }), {
            status: 401, headers: CORS_HEADERS
        });
    }

    const body = await request.json();

    // Batch write
    if (body.collections && Array.isArray(body.collections)) {
        const stmt = db.prepare(
            "INSERT OR REPLACE INTO collections (key, data, updated_at) VALUES (?, ?, datetime('now'))"
        );
        const batch = body.collections
            .filter(c => VALID_KEYS.includes(c.key))
            .map(c => stmt.bind(c.key, JSON.stringify(c.data)));

        if (batch.length) await db.batch(batch);

        return new Response(JSON.stringify({ ok: true, saved: batch.length }), { headers: CORS_HEADERS });
    }

    // Single write
    const { key, data } = body;
    if (!key || !VALID_KEYS.includes(key)) {
        return new Response(JSON.stringify({ ok: false, error: 'Invalid key' }), {
            status: 400, headers: CORS_HEADERS
        });
    }

    await db.prepare(
        "INSERT OR REPLACE INTO collections (key, data, updated_at) VALUES (?, ?, datetime('now'))"
    ).bind(key, JSON.stringify(data)).run();

    return new Response(JSON.stringify({ ok: true, key, updated_at: new Date().toISOString() }), {
        headers: CORS_HEADERS
    });
}

// ── Main fetch handler ──────────────────────────────────────────────────────
export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);
        const path = url.pathname;

        // CORS preflight
        if (request.method === 'OPTIONS') {
            return new Response(null, { status: 204, headers: CORS_HEADERS });
        }

        // API Routes
        if (path === '/api/init' && request.method === 'POST') {
            try { return await handleInit(env.DB); }
            catch (e) { return new Response(JSON.stringify({ ok: false, error: e.message }), { status: 500, headers: CORS_HEADERS }); }
        }

        if (path === '/api/data') {
            try {
                if (request.method === 'GET') return await handleGetData(env.DB, url);
                if (request.method === 'POST') return await handlePostData(env.DB, request);
            } catch (e) {
                return new Response(JSON.stringify({ ok: false, error: e.message }), { status: 500, headers: CORS_HEADERS });
            }
        }

        // Everything else → serve static assets (handled by Cloudflare assets binding)
        return env.ASSETS.fetch(request);
    }
};
