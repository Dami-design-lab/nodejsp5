console.log("server is running.");
// var a = 10;
// a += 15;
// console.log(a);

var express = require("express");

var app = express();

var port = 3000;

app.use(express.static('puclic'));

var server = app.listen(port);

console.log("http://localhost:" + port);

var socket = require('socket.io');

var io = socket(server);

io.on("connection",newConnection);

function newConnection(socket){
  console.log(socket.id);

  socket.on("mouse",mouseMessage);

  function mouseMessage(receiveData){
    console.log(receiveData);

    socket.broadcast.emit("mouseBroadcast",receiveData);

  }


}
