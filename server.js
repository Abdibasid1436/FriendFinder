var express = require('require');
var app = express();
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 8080;

//create application/json parser
var jsonParser = bodyParser.json();

//create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false})

//parser various different customs JSON types as JSON
app.use(bodyParser.json ({ type: 'application/**json' }))

//parser some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

//parse an HTML body into a string
app.use(bodyParser, Text({ type: 'text/html '}))

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT)
});