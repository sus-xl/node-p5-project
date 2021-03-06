console.log("Server is running");

var express = require("express");

var app = express();

var port = 3000;

app.use(express.static('public'));

var server = app.listen(port);

console.log("http://localhost:" + port);

var socket = require('socket.io');

var io = socket(server);

io.on("connection", newConnection);

function newConnection(socket){
  console.log(socket.id);

  socket.on("mouse", mouseMessage);

  function mouseMessage(recievedData){
    console.log(recievedData);
    socket.broadcast.emit("mouseBroadcast",recievedData);

  }
}
