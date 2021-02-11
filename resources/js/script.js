
let connected = false;



const title = document.getElementById('title');
const connectButton = document.getElementById('button');

if (connected === false) {
    title.innerHTML = "LightTime-connect";
}
else {
    title.innerHTML = "LightTime";
}





function connectHandler() {
    connected = true;
    if (connected === false) {
        title.innerHTML = "LightTime-connect";
    }
    else {
        title.innerHTML = "LightTime";
    }
    connectButton.style.display = "none";
    connectButton.removeEventListener('click', connectHandler, false);
    console.log('clicked');
}

connectButton.addEventListener('click', connectHandler, false);
