function preload(){
  // put preload code here
}

var socket;

function setup() {
  createCanvas(windowWidth,windowHeight);
  socket = io();

  socket.on("mouseBroadcast", newDrawing);

  function newDrawing(recievedData){

    fill('yellow');
    ellipse(receivedData.x, recievedData.y, 10);

  }

  // function dataReceived()
  background('red');

}

function draw() {
  // put drawing code here
}

function mouseDragged(){
  fill('white');
  ellipse(mouseX, mouseY, 20);

  var sendData = {
    x:mouseX,
    y:mouseY
  }
    socket.emit('mouse', sendData);

}
