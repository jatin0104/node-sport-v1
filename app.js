/** REQUIRED PACKAGES **/
const dotenv = require('dotenv');
dotenv.config();

/** IMPORT COMPONENTS **/
const { constantLang } = require('./service/lang/index');

var express = require('express'),
app = express();

var routes = require('./routes/index');
app.use('/auth', routes.Auth)

// Ping route
app.get('/ping', (req, res) => {
    res.status(200).send(`
		<center>
			<h2> ${constantLang.ping_url} </h2>
		</center>
	`);
});

/** MODULE EXPORTS  **/
module.exports = app;
