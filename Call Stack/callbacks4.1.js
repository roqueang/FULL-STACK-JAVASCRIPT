const funcion4=()=>{
    console.log("ejecucion4"); 
}

const funcion3=()=>{
    console.log("ejecucion3");
    setTimeout(funcion4,800);   
}

const funcion2=()=>{
    console.log("ejecucion2");
    setTimeout(funcion3,1000);  
}

const funcion1=()=>{
    console.log("ejecucion1");
    setTimeout(funcion2,2000);
}

setTimeout(funcion1,3000);