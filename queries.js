const pool = require('./dbconnect')


/* GET: / */
const home = (request, response) => {
	
	response.status(200).json({info: 'Node.js, Express.js, PostgreSQL'});
};


/* GET: /users */
const getUsers = (request, response) => {
	
	pool.query('SELECT * FROM users', (error, results) => {

		if (error) {
			
			throw error;
		}

		response.status(200).json(results.rows);
	});
};

/* GET: /users/:id */
const getUser = (request, response) => {

	// get the user parameter from the url
	const user_id = parseInt(request.params.id);
	
	pool.query('SELECT * FROM users WHERE id = $1', [user_id], (error, results) => {

		if (error) {
			throw error;
		}

		response.status(200).json(results.rows);
	});

};

/* POST: /users */
const createUsers = (request, resposne) => {

	// get the user parameters from the url
	const {name, email} = request.body;

	pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {

		if (error) {

			throw error;
		}

		resposne.status(201).json({info: "User Created"});
	});
};


/* PUT: /users/:id */
const updateUsers = (request, response) => {

	const user_id = parseInt(request.params.id);
	const {name, email} = request.body;

	pool.query('UPDATE user_id SET name = $2, email = $3 WHERE id = $3', [$name, $email, $user_id], (error, results) => {

		if (error) {
			throw error
		}
		
		response.status(201).send(`User modified with ID: ${user_id}`);
	});
};


module.exports = {home, getUsers, getUser, createUsers}
