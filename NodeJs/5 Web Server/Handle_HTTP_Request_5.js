/*
Handel http request as per url 
*/

var http = require('http'); // Import Node.js core module
var server = http.createServer(function (req, res) {   //create web server
		
		if(req.url == "/")
		{
			res.writeHead(200, { 'Content-Type': 'text/html' }); 
			res.write('<html><body><h1>This is home Page.</h1></body></html>');
			res.end();
		}
		else if(req.url == "/about")
		{
			res.writeHead(200, { 'Content-Type': 'text/html' }); 
			res.write('<html><body><h1>This is About Page.</h1></body></html>');
			res.end();
		}
		else if(req.url == "/service")
		{
			res.writeHead(200, { 'Content-Type': 'text/html' }); 
			res.write('<html><body><h1>This is Service Page.</h1></body></html>');
			res.end();
		}
		else if(req.url == "/blog")
		{
			res.writeHead(200, { 'Content-Type': 'text/html' }); 
			res.write('<html><body><h1>This is Blog Page.</h1></body></html>');
			res.end();
		}
		else
		{
			res.writeHead(200, { 'Content-Type': 'text/html' }); 
			res.write('<html><body><h1>Page Not Found.</h1></body></html>');
			res.end();
		}
});
server.listen(5000); //6 - listen for any incoming requests
console.log('Node.js web server at port 5000 is running..')