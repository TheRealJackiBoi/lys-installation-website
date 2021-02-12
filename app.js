const http = require('http');
const fs = require('fs')
var path = require('path');
var express = require('express');
var router = express.Router();



const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.writeHead(200, { 'content-type': 'text/html' })
  
  res.end();
});

router.get('/', function (req, res) {
    fs.createReadStream('index.html').pipe(res)
  })


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});