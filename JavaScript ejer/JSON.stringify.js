
let miObjeto= {
    a:1, b:2, c:'hola', d:function(){
        console.log("soy una funcion")
    },e:true, f:{f1:'soy f1',f2:'soy f2', f:()=>{}}
}

console.log(miObjeto)

let miObjeto2= JSON.stringify(miObjeto)

console.log(miObjeto2)

