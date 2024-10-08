/********************************
* 	ENTRY POINT		*
********************************/

const dotenv = require('dotenv');
dotenv.config();


/** SERVER CONFIGURATION */

var app = require('./app'),
    http = require('http'),
    port = '3201';


/** CREATING SERVER */
app.set('port', port);
console.log("Magic Happens on => ", port); 

var server = http.createServer(app);

/** LISTENING PORT */
server.listen(port);
// server.on('error', onError);
// server.on('listening', onListening);