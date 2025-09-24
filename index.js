const queries = require('./queries');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;


app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({

		extended: true,
	})
);


// routes
app.get('/', queries.home);
app.get('/users', queries.getUsers);


// listening port
app.listen(port, () => {
	
	console.log('App running on port ${port}');
});
