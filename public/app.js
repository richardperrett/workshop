// import the modules we need
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');


var app = express();

const router = require('../routes/route');

//define port number

const port = 3000;

//middleware
app.use(cors());
app.use(bodyParser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api', router);

app.get( '/', function (request, response) {

  response.send('yay!');

});

app.listen(port, function() {

  console.log("Server is running on port " + port);

});