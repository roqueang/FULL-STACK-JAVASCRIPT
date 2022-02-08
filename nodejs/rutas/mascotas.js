module.exports = function mascotasHandler(mascotas){
    return {
        get: (data, callback) =>{
          if(typeof data.indice !== 'undefined'){
            if(mascotas[data.indice]){
              return callback(200, mascotas[data.indice]);
            }
            return callback(404,{mensaje: `mascota con indice ${data.indice} no encontrada`,
          });
          }
          callback(200, mascotas);
        },
        post:(data, callback) =>{
          mascotas.push(data.payload);
          callback(201, data.payload);
        },
        put: (data, callback) =>{
          if(typeof data.indice !== 'undefined'){
            if(mascotas[data.indice]){
              mascotas[data.indice]=data.payload;
              return callback(200, mascotas[data.indice]);
            }
            return callback(404,{mensaje: `mascota con indice ${data.indice} no encontrada`,
          });
          }
          callback(400, {mensaje: 'Indice no enviado'});
        },
        delete: (data, callback) =>{
          if(typeof data.indice !== 'undefined'){
            if(mascotas[data.indice]){
              mascotas=mascotas.filter(
                (_mascota, indice)=>indice!=data.indice);
              return callback(204,{mensaje: `mascota con indice ${data.indice} elimanda`,
            } );
            }
            return callback(404,{mensaje: `mascota con indice ${data.indice} no encontrada`,
          });
          }
          callback(400, {mensaje: 'Indice no enviado'});
        },
      };
} 