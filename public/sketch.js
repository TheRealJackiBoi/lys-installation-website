var socket;

function setup() {
  socket = io.connect('http://localhost:8000');
  /*socket.on('mouse',
    function(data) {
      console.log("Got: " + data.x + " " + data.y);
      fill(0,0,255);
      noStroke();
      ellipse(data.x, data.y, 20, 20);
    }
  );*/


  let left = createButton("Left"); 
  left.mousePressed(()=>{sendData("left");});
  
  let right = createButton("Right"); 
  right.mousePressed(()=>{sendData("right");});
  
  let up = createButton("Up"); 
  up.mousePressed(()=>{sendData("up");});
  
  let down = createButton("Down"); 
  down.mousePressed(()=>{sendData("down");});
}

function draw() {
  // Nothing
}


// Function for sending to the socket
function sendData(d) {
  
  // Make a little object with  and y
  var data = {
    d: d,
  };

  // Send that object to the socket
  socket.emit('control',data);
}
