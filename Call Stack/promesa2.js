const fabricaDePromesas =(indice)=> 
new Promise((resolve, reject)=>{
    const tiempoRejected=  Math.floor(Math.random() * 1000) + 1000;
    const tiempoResolved=Math.floor(Math.random() * 1000) + 1000;
    //console.log("tiempoRejected",tiempoRejected);
    //console.log("tiempoResolved",tiempoResolved);
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

misPromesas.forEach((promesaActual)=>
promesaActual
.then((respuesta)=>console.log(respuesta))
.catch((razon)=>console.log(razon))
);

