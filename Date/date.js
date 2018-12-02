var express = require('express')
var app = express()
var d = new Date();
var n = d.toDateString();

// GET method route
console.log(d)
console.log(n)
app.get('/service', function (req, res) {
	res.json( d );
})
app.get('/', function(req, res) {
 res.json(d)
 res.status(200);
 res.send(d);
});
app.listen(3000, function(){
 console.log('listening on *:3000');
});


