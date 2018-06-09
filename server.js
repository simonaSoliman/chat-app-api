var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  User = require('./api/models/user'), //created model loading here
  Message = require('./api/models/message'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Chatapp');

const db = mongoose.connection;
//check for database connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
   console.log(`Connected to the Chatapp database`);
}) 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/routers'); //importing route
routes(app); //register the route


app.listen(port);

console.log('chat app RESTful API server started on: ' + port);