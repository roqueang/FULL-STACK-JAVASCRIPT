let MiArray = [];

for(let i=0; i<10; i++){
  MiArray.push(i)
}

MiArray

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