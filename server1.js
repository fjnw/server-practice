var http = require("http");

var PORT = 7000;

function handleRequest(request, response) {
	response.end("Something good about themselves");
}

var server = http.createServer(handleRequest);
sever.listen(PORT, function(){
	console.log("port 7000")
});