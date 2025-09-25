const queries = require('./queries');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/*app.use(
	bodyParser.urlencoded({

		extended: true,
	})
);
*/

// routes
app.get('/', queries.home);
app.get('/users', queries.getUsers);
app.get('/users/:id', queries.getUser);
app.post('/users', queries.createUsers);
app.put('/users/:id', queries.updateUsers);


// port listening 
app.listen(port, () => {
	
	console.log('App running on port ${port}');
});
