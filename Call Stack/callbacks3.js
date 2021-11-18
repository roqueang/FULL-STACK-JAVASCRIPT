const miBoton= document.getElementById("miBoton");

const  ejecutarCuandoDeClick=evento=>{
    console.log(evento);
    alert("diste click en el boton");
};

miBoton.addEventListener("click",ejecutarCuandoDeClick);