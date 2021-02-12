//connected to bluetoothdevice
let connected = false;

//title
const title = document.getElementById('title');

//connect to bluetooth button 
const connectButton = document.getElementById('button');

//arrow buttons
const up = document.getElementById('up');
const left = document.getElementById('left');
const right = document.getElementById('right');
const down = document.getElementById('down');
//array with the arrows
const arrows = [up, left, right, down];

//if connected to device change title
if (connected === false) {
    title.innerHTML = "LightTime-connect";
}
else {
    title.innerHTML = "LightTime";
}

// handles to hide connectButton and display arrows
const hideAndDisplay = () => {
    //hides connectButton and removes event listener
    connectButton.style.display = "none";
    connectButton.removeEventListener('click', connectHandler, false);

    //displays arrows
    arrows.forEach(arrow => {
        arrow.style.display = 'block';
    });
}


//eventhandler function
function connectHandler() {
    connected = true;
    
    hideAndDisplay();

    if (connected === false) {
        title.innerHTML = "LightTime-connect";
    }
    else {
        title.innerHTML = "LightTime";
    }
    
}


connectButton.addEventListener('click', connectHandler, false);






