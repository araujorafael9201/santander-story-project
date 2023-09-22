const pg = require('pg');
const Pool = pg.Pool;

function db() {
	if (global.connection) {
		return global.connection.connect();
	}

	const pool = new Pool({
		connectionString: process.env.PG,
		max: 5
	});

	global.connection = pool;
	return pool.connect();
}

module.exports = db;
