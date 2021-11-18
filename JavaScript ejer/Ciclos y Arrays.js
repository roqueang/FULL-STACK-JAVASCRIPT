//////ejemplo 1 LOOPS o Ciclos
let MiArray = [];

for(let i=0; i<10; i++){
  MiArray.push(i)
}

MiArray
//////ejemplo2
let miArray2=[]
let control=0;

while(control<100){
  miArray2.push(control)
  if(control%5===0){
    control=control+2
  }else{
    control=control+1
  }
}

miArray2
/////////////////////////////////ejemplo3
let miArray3 = ['Hola','como estas','adios']

/*function convertirMayusculas(texto){
  const repuesta= texto.toUpperCase()
  console.log(repuesta)
}

miArray3.forEach(convertirMayusculas)*/

///como funciona el forEach

function miForEach(array, funcionAejecutar){
  funcionAejecutar(array[0])
  funcionAejecutar(array[1])
  funcionAejecutar(array[2])
}

miForEach(miArray3, convertirMayusculas)
////ejemplo4
function convertirMayusculas(actual,indice,arrayCompleto){
  const repuesta= actual.toUpperCase()
  console.log(repuesta)
  console.log(indice)
  console.log(arrayCompleto)
}

let miVar= miArray3.forEach(convertirMayusculas)

///////ejemplo5
function convertirMayusculas(actual,indice,arrayCompleto){
  const repuesta= actual.toUpperCase()
  return repuesta
}

miArray3.map(convertirMayusculas)