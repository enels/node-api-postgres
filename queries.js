const pool = require('./dbconnect')


const home = (request, response) => {
	
	response.status(200).json({info: 'Node.js, Express.js, PostgreSQL'});
};

const getUsers = (request, response) => {
	
	pool.query('SELECT * FROM users', (error, results) => {

		if (error) {
			
			throw error;
		}

		response.status(200).json(results.rows);
	});
};

module.exports = {home, getUsers}
