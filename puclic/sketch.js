function preload(){
  // put preload code here
}
var socket;

function setup() {
  createCanvas(windowWidth,windowHeight);

  socket = io();

socket.on("mouseBroadcast",newDrawing);

function newDrawing(receiveData){

  fill('yellow');
  ellipse(receiveData.x,receiveData.y,10);
}


  background('red');

}



function draw() {
  // ellipse(mouseX,mouseY,20);
  // put drawing code here
}

function mouseDragged(){
  fill('white');
  ellipse(mouseX,mouseY,20);

  var sendData = {

    x:mouseX,
    y:mouseY
  }
  socket.emit('mouse',sendData);

}
