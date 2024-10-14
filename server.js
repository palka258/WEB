const http = require('http');
const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static("express"));

// URL по умолчанию для сайта
app.use('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/express/index.html'));
    // __dirname: Это путь к папке вашего проекта.
});

const server = http.createServer(app);
const port = 3000;

server.listen(port);
console.debug('Server listening on port ' + port);
