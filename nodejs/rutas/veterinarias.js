module.exports = function veterinariasHandler(veterinarias){
    return {
        get: (data, callback) =>{
          if(typeof data.indice !== 'undefined'){
            if(veterinarias[data.indice]){
              return callback(200, veterinarias[data.indice]);
            }
            return callback(404,{mensaje: `veterinaria con indice ${data.indice} no encontrada`,
          });
          }
          callback(200, veterinarias);
        },
        post:(data, callback) =>{
          veterinarias.push(data.payload);
          callback(201, data.payload);
        },
        put: (data, callback) =>{
          if(typeof data.indice !== 'undefined'){
            if(veterinarias[data.indice]){
              veterinarias[data.indice]=data.payload;
              return callback(200, veterinarias[data.indice]);
            }
            return callback(404,{mensaje: `veterinaria con indice ${data.indice} no encontrada`,
          });
          }
          callback(400, {mensaje: 'Indice no enviado'});
        },
        delete: (data, callback) =>{
          if(typeof data.indice !== 'undefined'){
            if(veterinarias[data.indice]){
              veterinarias=veterinarias.filter(
                (_vetinaria, indice)=>indice!=data.indice);
              return callback(204,{mensaje: `veterinaria con indice ${data.indice} elimanda`,
            } );
            }
            return callback(404,{mensaje: `veterinaria con indice ${data.indice} no encontrada`,
          });
          }
          callback(400, {mensaje: 'Indice no enviado'});
        },
      };
} 