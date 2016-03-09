var express  = require('express');
var app      = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


mongoose.connect('mongodb://localhost/monster');
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());

app.use(express.static('public'));

app.listen(3000, function () {
    console.log('Footmen draait nu op localhost:3000');
});

require('./app/routes')(app);



