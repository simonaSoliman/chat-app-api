var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  http = require('http').Server(app),
  io = require('socket.io')(http),
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
// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/', function(req, res){
  res.send('chat app');
});

var routes = require('./api/routes/routers'); //importing route
routes(app); //register the route

//connection test for socket io
// io.on('connect', (socket) => {
//             console.log('Connected client on port %s.', this.port);
//             socket.on('message', ( Message) => {
//                 console.log('[server](message): %s', JSON.stringify(Message));
//                 this.io.emit('message', Message);
//             });

//             socket.on('disconnect', () => {
//                 console.log('Client disconnected');
//             });
//         });



app.listen(port);

console.log('chat app RESTful API server started on: ' + port);
io.on('connection', function(socket){
  console.log('a user connected');
});
