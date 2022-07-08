const http = require('http');
const fs = require("fs");
const path = "/etc/hostname";
const port = 2022;

const requestListener = function (req, res) {
  if (fs.existsSync(path)) {
    const hostname = fs.readFileSync(path);
    res.writeHead(200);
    res.end(hostname);
  } else {
    res.writeHead(404);
    res.end('file hostname not found');
  }
}

const server = http.createServer(requestListener);
server.listen(port);
console.log(`Running server on 127.0.0.1:${port}`);
