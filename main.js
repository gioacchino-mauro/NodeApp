var PORT = 8000
/*
// load the http module
var http = require('http');

// configure our HTTP server
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello NodeApp!! \n Jack \n");
});

// listen on localhost:8000
server.listen(PORT);
console.log("Server listening on port", PORT);*/


const express = require("express")
const path = require('path')
const app = express()

// View Engine Setup
app.set("views", path.join(__dirname))
app.set("view engine", "ejs")
  
app.get("/", function(req, response){
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello NodeApp!! \n Jack \n");
})

app.get("/pars/:id/:start/:end", function(req, response){
  
    var user_id = req.params['id']
    var start = req.params['start']
    var end = req.params['end']
    
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Params= User: " + user_id + " Start: " + start + " End= " + end + "\n");
})

app.listen(PORT, function(error){
    if (error) throw error
    console.log("Server created Successfully on PORT", PORT)
})