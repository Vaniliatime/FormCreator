const http = require('http');
const ws = require('ws');
const server = http.createServer((req, res) => {
    res.end("I'm connected");
});
const socket = new ws.Server({server});
socket.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });

    ws.send('something');
});
server.listen(8080);
