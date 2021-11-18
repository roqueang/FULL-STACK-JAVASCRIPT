function miObjeto(nombre,apellido){
    this.nombre=nombre
    this.apellido=apellido
    this.getNombreCompleto = function(){
        return `${this.nombre} ${this.apellido}`
    }
}


function miObjeto(){
    this.getNombreCompleto=function(){
        return `${this.nombre} ${this.apellido}`
    }
    setNombre=function(nombre){
        this.nombre=nombre
    }
    setApellido=function(apellido){
        this.apellido=apellido
    }
}

let objeto1= new miObjeto()

miObjeto.prototype.nombre="vacio"
miObjeto.prototype.apellido="vacio"

console.log(objeto1)
console.log(objeto1.nombre)