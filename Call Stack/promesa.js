const miPromesa = new Promise((resolve, reject)=>{
    const tiempoRejected=  Math.floor(Math.random() * 1000) + 1000;
    const tiempoResolved=Math.floor(Math.random() * 1000) + 1000;
    console.log("tiempoRejected",tiempoRejected);
    console.log("tiempoResolved",tiempoResolved);
    setTimeout(()=>{
       reject("la promesa falló");
   },tiempoRejected);

   setTimeout(()=>{
    resolve("promesa satisfecha");
    },tiempoResolved);
});

miPromesa.then((repuesta)=>console.log(repuesta),
(razon)=>console.log(razon));