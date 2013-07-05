var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var contentBuffer = fs.readFileSync('index.html');
    var contentStr = contentBuffer.toString();
    response.send(contentStr);
//  response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
