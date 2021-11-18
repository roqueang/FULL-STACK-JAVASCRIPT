const ObtenerNombre=()=> "Angel";


const ObtenerApellido=()=>"Roque";

function ObtenerNombreCompleto(){
    const nombre=ObtenerNombre();
    const apellido=ObtenerApellido();
    return `${nombre} ${apellido}`
}

const NombreCompleto= ObtenerNombreCompleto();

console.log("Nombre completo:"+NombreCompleto);