const pg = require('pg');
const Pool = pg.Pool;

if (global.connection) {
	return global.connection;
}

const pool = new Pool({
	connectionString: process.env.PG,
	// Max connections on elephantsql.com free tier
	max: 5
});

// const client = await pool.connect();
global.connection = pool;

module.exports = pool;
