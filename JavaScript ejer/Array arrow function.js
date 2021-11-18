let miArray4=[1,2,3,4,5,6,7,8,9]

///opcion1 
function soloPares(numeroActual){
  return numeroActual%2==0
}
let resultado=miArray4.filter(soloPares)

resultado
//opcion2
let resultado2=miArray4.filter((numeroActual)=>numeroActual%2==0)

resultado2
//opcion3
const soloPares2=(numeroActual)=>numeroActual%2==0
let resultado3=miArray4.filter(soloPares2)

resultado3
////////////////

function miFuncion(){
  return function miFuncion2(){
    return this;
  }
}

miFuncion()

const a=miFuncion()

a

function miFuncion(){
  this.miFuncion2=function(){
    return this
  }
}

const c=new miFuncion()


c.miFuncion2()
//////////////////////////////
function miFuncion3(){
  this.miFuncion4=()=>{
    return this
  }
}
const d=new miFuncion3()

d
d.miFuncion4
d.miFuncion4()

const miFuncion5=()=>{
  this.miFuncion6=()=>{
    return this
  }
}
