/**
 * API for reading/writing all site data collections
 * 
 * GET  /api/data?key=paquetes        → Read a collection
 * GET  /api/data?key=all             → Read all collections
 * POST /api/data { key, data }       → Write a collection
 * POST /api/data { collections: [] } → Write multiple collections at once
 */

const VALID_KEYS = ['paquetes', 'explore', 'paquetes-asombrosos', 'resenas', 'config'];
const CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Content-Type': 'application/json'
};

// Simple auth check — uses the same password hash as the admin panel
const ADMIN_HASH = '1d15f6b40d8340c10241704d6020e4f962de2aabea71c136ae7465dd2de87910';

async function sha256(str) {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

async function isAuthorized(request) {
    const auth = request.headers.get('Authorization') || '';
    // Accept "Bearer <hash>" or "Bearer <plaintext-password>"
    const token = auth.replace('Bearer ', '').trim();
    if (!token) return false;
    // If token is already the hash
    if (token === ADMIN_HASH) return true;
    // If token is plaintext password, hash it and compare
    const hashed = await sha256(token);
    return hashed === ADMIN_HASH;
}

// Handle CORS preflight
export async function onRequestOptions() {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
}

// GET — Read data (public, no auth needed)
export async function onRequestGet(context) {
    const db = context.env.DB;
    const url = new URL(context.request.url);
    const key = url.searchParams.get('key');

    try {
        if (key === 'all') {
            // Return all collections
            const results = await db.prepare('SELECT key, data, updated_at FROM collections').all();
            const collections = {};
            for (const row of results.results) {
                collections[row.key] = {
                    data: JSON.parse(row.data),
                    updated_at: row.updated_at
                };
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
    } catch (err) {
        return new Response(JSON.stringify({ ok: false, error: err.message }), {
            status: 500, headers: CORS_HEADERS
        });
    }
}

// POST — Write data (requires auth)
export async function onRequestPost(context) {
    const db = context.env.DB;
    const request = context.request;

    // Auth check
    if (!(await isAuthorized(request))) {
        return new Response(JSON.stringify({ ok: false, error: 'Unauthorized' }), {
            status: 401, headers: CORS_HEADERS
        });
    }

    try {
        const body = await request.json();

        // Batch write: { collections: [{ key, data }, ...] }
        if (body.collections && Array.isArray(body.collections)) {
            const stmt = db.prepare(
                'INSERT OR REPLACE INTO collections (key, data, updated_at) VALUES (?, ?, datetime(\'now\'))'
            );
            const batch = body.collections
                .filter(c => VALID_KEYS.includes(c.key))
                .map(c => stmt.bind(c.key, JSON.stringify(c.data)));

            if (batch.length) {
                await db.batch(batch);
            }

            return new Response(JSON.stringify({ ok: true, saved: batch.length }), { headers: CORS_HEADERS });
        }

        // Single write: { key, data }
        const { key, data } = body;
        if (!key || !VALID_KEYS.includes(key)) {
            return new Response(JSON.stringify({ ok: false, error: 'Invalid key' }), {
                status: 400, headers: CORS_HEADERS
            });
        }

        await db.prepare(
            'INSERT OR REPLACE INTO collections (key, data, updated_at) VALUES (?, ?, datetime(\'now\'))'
        ).bind(key, JSON.stringify(data)).run();

        return new Response(JSON.stringify({ ok: true, key, updated_at: new Date().toISOString() }), {
            headers: CORS_HEADERS
        });
    } catch (err) {
        return new Response(JSON.stringify({ ok: false, error: err.message }), {
            status: 500, headers: CORS_HEADERS
        });
    }
}
