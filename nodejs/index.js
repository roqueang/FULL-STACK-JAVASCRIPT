const http = require("http");

const callbackDelServidor =(req,res) => {
  res.end('Hola mundo es mi primer servidor');
};

const server = http.createServer(callbackDelServidor);

server.listen(5000,()=>{
    console.log("el servidor |esta escuchando http://localhost:5000/");
});