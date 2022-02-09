module.exports  = {
    mascotas: [{
        tipo: "Perro",nombre: "Shadow0",dueno:"Angel"
    },
    {
        tipo: "Perro",nombre: "Shadow1",dueno:"Angel"
    },
    {
        tipo: "Perro",nombre: "Shadow2",dueno:"Angel"
    }
    ], 
    veterinarias: [
        {
          identificacion:"0001", pais: "Guatemala", nombre: "Angel", apellido:"Roque"
        },
        {
          identificacion:"0034", pais: "Colombia",  nombre: "Jhon", apellido: "Flores"
        }
    ],
    duenos:  [
      {
        identificacion:"0002",  pais: "Guatemala",  nombre: "Angel",  apellido:"Roque"
      },
      {
        identificacion:"0067",  pais: "Colombia",  nombre: "Jhon",  apellido: "Flores"
      }
    ],
    consultas:[
      {
        mascota: 0,
        veterinario: 0,
        fechaCreacion: new Date(),
        fechaEdicion: new Date(),
        historial: '',
        diagnostico: ''
      },
      {
        mascota: 1,
        veterinario: 1,
        encabezado: '',
        fecha: new Date(),
        historial: '',
        diagnostico: ''
      },
    ],

  };