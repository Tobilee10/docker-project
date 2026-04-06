const http = require("http");

const hostname =("0.0.0.0");

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode =200;
    res.setHeader =("Content-Type", 'text/plain');
    res.end("15 Docker Project For Absolute Beginner....Project5!\n");
})

server.listen(3000, '0.0.0.0', () => {
    console.log('server running on port 3000');
});