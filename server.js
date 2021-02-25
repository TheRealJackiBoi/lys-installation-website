
console.log("My socket server is running");

var express = require('express');
var app = express();

var server = app.listen(process.env.PORT || 8000, listen);

function listen() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://' + host + ':' + port);
}

app.use(express.static('public'));


let direction = "left";

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/control', function(request, response) {
  response.send(direction);
});



var io = require('socket.io')(server);

io.sockets.on('connection',
  function (socket) {
  
    console.log("We have a new client: " + socket.id);
  
    socket.on('control',
      function(data) {
        console.log("Received new direction: " + data.d);

        direction = data.d;

      }
    );
    
    socket.on('disconnect', function() {
      console.log("Client has disconnected");
    });
  }
);