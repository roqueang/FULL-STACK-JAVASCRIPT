function sumar(num1,num2){
    return num1+num2;
}

function restar(num1,num2){
    return num1-num2;
}

function multiplicar(num1,num2){
    return num1*num2;
}

function multiFuncion(num1,num2,operacion){
    const resultado=operacion(num1,num2);
    console.log(resultado);
}

multiFuncion(5,6,sumar);
multiFuncion(6,3,restar);
multiFuncion(4,6,multiplicar);