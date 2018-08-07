var express = require('express');
var app = express();
var bodyParser = require('body-parser');
 
var PORT = process.env.PORT || 8080;
 
// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))
 
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
 
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT)
});














































// var express = require('express');
// var bodyParser = require('body-parser');

// var app = express();
// var PORT = process.env.PORT || 8080;
 
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
 


// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))
 
// // parse application/json
// app.use(bodyParser.json())
 
// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// })

// app.listen(PORT, function() {
//     console.log("Listening on PORT: " + PORT);
// });


