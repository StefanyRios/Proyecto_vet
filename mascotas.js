
let tablaMascotas = document.getElementById("tabla-mascotas")
let cuerpoTabla = tablaMascotas.querySelector("tbody");

fetch('datos_mascotas.json') //solicitud 
    .then(Response => Response.json())// la respuesta de la solicitud -- objeto 
    //objeto que se convirtio 
    .then(mascotas => {
        for (let i = 0; i < mascotas.longitud; i++) {
            let mascota = mascotas[i];

            let fila = cuerpoTabla.insertRow();
            let celdaNombreMascota = fila.insertCell();
            let celdaNombreDueño = fila.insertCell();
            let celdaCedulaDueño = fila.insertCell();
            let celdaEdadMascota = fila.insertCell();
            let celdaTelefonoDueño = fila.insertCell();
            let celdaEspecialidad = fila.insertCell();
            let celdaMedico = fila.insertCell();

            celdaNombreMascota.textContent = mascota.nombreMascota;
            celdaNombreDueño.textContent = mascota.nombreDueño;
            celdaCedulaDueño.textContent = mascota.cedulaDueño;
            celdaEdadMascota.textContent = mascota.edadMascota;
            celdaTelefonoDueño.textContent = mascota.telefonoDueño;
            celdaEspecialidad.textContent = mascota.especialidad;
            celdaMedico.textContent = mascota.medico;
        }
    })//control de errores 
    .catch(console.log("No encontro el documento"));
  