const http = require("http");
const recursos = require('./recursos.js');
const requestHandler = require('./request-handler');

global.recursos = recursos;
const server = http.createServer(requestHandler);

server.listen(5000,()=>{
    console.log("el servidor |esta escuchando http://localhost:5000/");
});