var socket;

function setup() {
  socket = io.connect('https://lys-installation-website-32gsd.ondigitalocean.app/');
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
  left.id('left');
  left.class('game-button');
  left.position(screen.width/2 - 180, 240);

  let right = createButton("Right"); 
  right.mousePressed(()=>{sendData("right");});
  right.id('right');
  right.class('game-button');
  right.position(screen.width/2 + 70, 240);

  let up = createButton("Up"); 
  up.mousePressed(()=>{sendData("up");});
  up.id('up');
  up.class('game-button');
  up.position(screen.width/2 - 60, 120);
  
  let down = createButton("Down"); 
  down.mousePressed(()=>{sendData("down");});
  down.id('down');
  down.class('game-button');
  down.position(screen.width/2 - 60, 380);
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


console.log('running...')
