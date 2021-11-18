const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const pais = document.getElementById('pais');
const identificacion= document.getElementById('identificacion');
const indice = document.getElementById('indice');
const form = document.getElementById('form');
const btnGuardar = document.getElementById('btn-guardar');
const listaVeterinario = document.getElementById('lista-veterinarios');

let veterinarios = [
  {
    identificacion:"0001",
    pais: "Guatemala",
    nombre: "Angel",
    apellido:"Roque"
  },
  {
    identificacion:"0034",
    pais: "Colombia",
    nombre: "Jhon",
    apellido: "Flores"
  }
];


function listarVeterinario() {
  const htmlVeterinario = veterinarios.map((veterinario, index)=>`<tr>
      <th scope="row">${index}</th>
      <td>${veterinario.identificacion}</td>
      <td>${veterinario.pais}</td>
      <td>${veterinario.nombre}</td>
      <td>${veterinario.apellido}</td>
      <td>
          <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-info editar"><i class="fas fa-edit"></i></button>
              <button type="button" class="btn btn-danger eliminar"><i class="far fa-trash-alt"></i></button>
          </div>
      </td>
    </tr>`).join("");
    listaVeterinario.innerHTML = htmlVeterinario;
    Array.from(document.getElementsByClassName('editar')).forEach((botonEditar, index)=>botonEditar.onclick = editar(index));
    Array.from(document.getElementsByClassName('eliminar')).forEach((botonEliminar, index)=>botonEliminar.onclick = eliminar(index));
}

function enviarDatos(evento) {
  evento.preventDefault();
  const datos = {
    identificacion: identificacion.value,
    pais: pais.value,
    nombre: nombre.value,
    apellido: apellido.value
  };
  const accion = btnGuardar.innerHTML;
  switch(accion) {
    case 'Editar':
      veterinarios[indice.value] = datos;
      break;
    default:
      veterinarios.push(datos);
      break;
  }
  listarVeterinario();
  resetModal();
}

function editar(index) {
  return function cuandoCliqueo() {
    btnGuardar.innerHTML = 'Editar'
    $('#exampleModalCenter').modal('toggle');
    const veterinario = veterinarios[index];
    identificacion.value= veterinario.identificacion;
    pais.value = veterinario.pais;
    nombre.value = veterinario.nombre;
    apellido.value = veterinario.apellido;
    indice.value = index;
  }
}

function resetModal() {
  
  identificacion.value= '';
  pais.value = '';
  nombre.value = '';
  apellido.value = '';
  indice.value = '';
  btnGuardar.innerHTML = 'Crear'
}

function eliminar(index) {
  return function clickEnEliminar() {
    veterinarios = veterinarios.filter((veterinario, indiceVeterinario)=>indiceVeterinario !== index);
    listarVeterinario();
  }
}

listarVeterinario();

form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;