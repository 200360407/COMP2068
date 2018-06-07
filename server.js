// first node page to load in brower

// reference http library
var http  = require('http');

// start http server
http.createServer(function(request, response){
// send a response
response.writeHead(200); // 200 means https status is "OKAY"
response.write('<h1>My first node page <h1>');
response.end();
}).listen(3000);

// display a message to the console
console.log('Server running on port 3000');
