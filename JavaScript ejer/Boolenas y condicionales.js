const persona = {
  nombre: 'Maria',
  apellido: 'Eillish',
  edad: 17
}

if(persona.edad<18){
  console.log('no puede tomar cerveza')
} else{
  console.log('si puede tomar cerveza')
}

const persona2 = {
  nombre: 'Juan',
  apellido: 'Perez',
  edad: 19
}

if(persona2.edad >18){
  console.log('toma cerveza')
} else if(persona.nombre=='Billie'){
  console.log('Canta')
}else{
    console.log('no cantan y no toman cerveza')
}

if(persona.apellido=='Eillish' && persona2.nombre=='Juan'){
  console.log('Hola Eillish y Jose')
}else{
  console.log('Hola extraños')
}
