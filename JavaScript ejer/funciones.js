function sumar(num1, num2){
  console.log(arguments)
  const resultado=num1 + num2;
  return resultado;
}

const r=sumar(3,2)
const z=sumar(5,9)

const y=sumar(r,z)

const a=sumar(z,y)

a

const persona ={
  nombre: 'Maria',
  apellido: 'Morales',
  id:4,
  nombrecompleto: function(){
    console.log(arguments)
    return `${this.nombre} ${this.apellido}`
  }
}
persona.nombrecompleto()









