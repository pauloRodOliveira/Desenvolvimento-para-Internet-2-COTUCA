const http = require('http');

http.createServer(function(req, res) {
  res.end("Hello World! Welcome to
   my website");
}).listen(3000);

console.log("O servidor está rodando! ");
