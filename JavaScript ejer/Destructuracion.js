let miObjeto = {a:1, b:2, c:'hola', d: function(){
  console.log('soy funcion')
  },e:true
}

miObjeto

/*
let {a,b,c,d,e}= miObjeto
a
b
c
d
e*/

let miArray=[1,2,'hola', ()=>console.log('soy funcion'),true]

miArray

let[numeroUno, numeroDos, Hola, unaFuncion, boolean]=miArray

numeroDos
numeroUno
unaFuncion
Hola
boolean

let{d, ...otros}= miObjeto
d
otros

let [uno, ...elResto]= miArray

uno
elResto
//////////Mutacion
let miObjeto2=miObjeto

miObjeto2.c="Adios"

miObjeto

////Inmutacion
let miObjeto3={...miObjeto}

miObjeto3.c="Nuevo"

miObjeto

/////////////////
let miObjeto1={
  a:1, b:2, c:'hola', d: function(){
    console.log('soy una funcion')
  }, e:true, f:{f1:'soy f1', f2:'soy f2', f3:()=>{}}
}

let miObjeto5={...miObjeto1}

miObjeto5.a=30

miObjeto1

miObjeto5.f.f1="cambie"
miObjeto5

miObjeto1.f.f1