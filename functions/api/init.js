/**
 * POST /api/init
 * Initializes the D1 database tables. Run once.
 */
export async function onRequestPost(context) {
    const db = context.env.DB;

    await db.exec(`
        CREATE TABLE IF NOT EXISTS collections (
            key TEXT PRIMARY KEY,
            data TEXT NOT NULL,
            updated_at TEXT DEFAULT (datetime('now'))
        );
    `);

    return new Response(JSON.stringify({ ok: true, message: 'Database initialized' }), {
        headers: { 'Content-Type': 'application/json' }
    });
}
