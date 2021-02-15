const http = require('http');
const fs = require('fs')
var path = require('path');
const express = require('express');
const server = express();


const hostname = '127.0.0.1';
const port = 8080;

server.set('port', process.env.PORT || port);

server.get('/', (req, res) =>{
  res.send('index.html')
});

server.use((req, res) => {
  res.type('text/plain');
  res.status(505);
  res.send('Error page');
})




server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});