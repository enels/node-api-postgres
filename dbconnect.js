const Pool = require('pg').Pool
const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'api',
	password: '9@$$w07D',
	port: 5432,
});

module.exports = pool;
