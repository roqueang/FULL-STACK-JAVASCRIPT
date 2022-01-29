const http = require("http");
const url = require("url");
const StringDecoder = require('string_decoder').StringDecoder;

const callbackDelServidor =(req,res) => {
  
  //1. obtener url desde el objeto request
  const urlActual = req.url;
  const urlParseada = url.parse(urlActual, true);

  //2. obtener la ruta
  const ruta = urlParseada.pathname;

  //3. quitar slash
  const rutaLimpia = ruta.replace(/^\/+|\/+$/g, '');

  //3.1 obtener método http
  const metodo = req.method.toLowerCase();

  //3.2 obtener variables del query url
  const { query = {} } = urlParseada;
  console.log(query);

  //3.3 obtener headers
  const { headers = {}} = req;

  //3.4 obtener payload, en el caso que haya uno
  const decoder = new StringDecoder('utf-8');
  let buffer = '';

  //3.4.1 ir acomulando la data cuanto request reciba un payload
  req.on('data', (data) => {
    buffer += decoder.write(data);
  });

  //3.4.2 terminar de acomular datos y decirle al decoder que finalice.
  req.on('end', () => {
    buffer += decoder.end();
  
  //3.5 ordenar la data del request
  const data = {
    ruta: rutaLimpia,
    query,
    metodo,
    headers,
    payload: buffer
  };

    //4. enviar una respuesta dependiendo de la ruta
  switch(rutaLimpia){
    case 'ruta':
      res.end('Estas en la ruta correcata');
      break;
    default:
      res.end('Desconocido');
    }
  });
};

const enrutador ={
  ruta: (data, callback) =>{
    callback(200,{mensaje: 'estas en /ruta'} );
  },
  noEncontrado: (data, callback) =>{
    callback(404,{mensaje: 'no encontrado'});
  }
}

const server = http.createServer(callbackDelServidor);

server.listen(5000,()=>{
    console.log("el servidor |esta escuchando http://localhost:5000/");
});