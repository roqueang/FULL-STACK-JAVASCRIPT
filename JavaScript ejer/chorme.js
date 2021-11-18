function miObjeto(nombre,apellido){
    this.nombre=nombre
    this.apellido=apellido
    this.getNombreCompleto = function(){
        return `${this.nombre} ${this.apellido}`
    }
}
undefined
miObjeto
ƒ miObjeto(nombre,apellido){
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
"vacio"
objeto1
miObjeto {getNombreCompleto: ƒ}getNombreCompleto: ƒ ()__proto__: Object
objeto1.nombre
"vacio"
