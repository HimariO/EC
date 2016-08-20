var ip   = "0.0.0.0",
    port = 1337,
    http = require('http');

function onRequest(request, response) {
  console.log("Request received.");
  response.writeHead(200, {"Content-Type": "application/json"});
  response.write("{\"message\": \"login!\"}");
  response.end();
}
http.createServer(onRequest).listen(port, ip);
console.log("Server has started.");
