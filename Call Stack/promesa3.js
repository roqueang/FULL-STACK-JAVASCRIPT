const fabricaDePromesas =(indice)=> 
new Promise((resolve, reject)=>{
    const tiempoRejected=  Math.floor(Math.random() * 1000) + 1000;
    const tiempoResolved=Math.floor(Math.random() * 1000) + 1000;
    /*console.log("tiempoRejected",tiempoRejected);
    console.log("tiempoResolved",tiempoResolved);*/
    setTimeout(()=>{
       reject(`la promesa  ${indice} falló`);
   },tiempoRejected);

   setTimeout(()=>{
    resolve(`promesa  ${indice} satisfecha`);
    },tiempoResolved);
});

let misPromesas=[];
for(i=0; i<10;i++){
    misPromesas=[...misPromesas,fabricaDePromesas(i)];
}

//imprime todas cuando estan satifechas si una fallo ahi termina el proceso
//Promise.all(misPromesas).then(respuesta=>console.log(respuesta)).catch((razon)=>console.log(razon));

//imprime las todas las promesas solicitadas no importa sin son satisfechas o fallidas
Promise.allSettled(misPromesas).then(respuesta=>console.log(respuesta)).catch((razon)=>console.log(razon));

//esta imprime solo una no importa si es satisfecha o fallida
//Promise.race(misPromesas).then(respuesta=>console.log(respuesta)).catch((razon)=>console.log(razon));