var express = require('express');
var app = express();
var d = new Date;

app.get('/service', function (req, res) {
  if (req.query.type == "iso") {
    res.send(d.toISOString());
  } else if (req.query.type == "date") {
    res.send(d.toDateString());
  } else {
    res.send("ERROR 404");
  }

});

app.listen(8080, function(){
  console.log('listening on *:3000');
});
