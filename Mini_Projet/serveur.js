var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.json())

app.post('/', function(request, response){
	response.send(request.body)
	console.log(request.body)

	var strdata = JSON.stringify(request.body);

  if (fs.existsSync('strdata.json')) {
    fs.readFile('strdata.json', 'utf8', function readFileCallback(err, data){
      if (err){
          console.log(err);
      } else {
        stack = JSON.parse(data);
          var alreadyInFile = false;
          for (var i = 0; i < stack.array.length; i++) {
            if (stack.array[i].ecolelog == request.body.ecolelog) {
              alreadyInFile = true;
            }
          }
          if (alreadyInFile == false) {
            stack.array.push(request.body);
            strdata = JSON.stringify(stack, null, 2);
            fs.writeFileSync('strdata.json', strdata, 'utf8');
          } else {
            console.log("ecole deja noté");
          }
        
    }});
  } else {
    stack = {
      array : []
    }
    stack.array.push(request.body);
    strdata = JSON.stringify(stack, null, 2);
    fs.writeFileSync('strdata.json', strdata, 'utf8'); 
  }

});


app.get('/', function (req, res) {
  if (req.query.oui == "note") {
    res.sendFile(__dirname + "/index.html")
  } else if (req.query.oui == "result") {
    res.sendFile(__dirname + "/result.html")
    }else if (req.query.oui == "data"){
    res.sendFile(__dirname + "/strdata.json")

  } else {
    res.send("error 404");
  }

});



app.listen(1025, function(){
  console.log('listening on *:1025');
});
