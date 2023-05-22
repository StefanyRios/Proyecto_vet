let tablaMascotas = document.getElementById("tabla-mascotas");
let cuerpoTabla = tablaMascotas.querySelector("tbody");

fetch('datos_mascotas.json')
    .then(Response => Response.json())
    .then(mascotas =>{
        for (let i = 0; i < mascotas.length; i++) {
            let mascota = mascotas[i];
            let fila = cuerpoTabla.insertRow();
            let celdaNombreMascota = fila.insertCell();
            let celdaNombreDueño = fila.insertCell();
            let celdaCedulaDueño = fila.insertCell();
            let celdaedadMascota = fila.insertCell();
            let celdatelefonoDueño = fila.insertCell();
            let celdaespecialidad = fila.insertCell();
            let celdamedico = fila.insertCell();
        
            celdaNombreMascota.textContent = mascota.nombreMascotas;
            celdaNombreDueño.textContent = mascota.nombreDueño;
            celdaCedulaDueño.textContent = mascota.cedulaDueño;
            celdaedadMascota.textContent = mascota.edadMascota;
            celdatelefonoDueño.textContent = mascota.telefonoDueño;
            celdaespecialidad.textContent = mascota.especialidad;
            celdamedico.textContent = mascota.medico;
        }

    })





//Clase

// class Mascota {
//     constructor(nombreMascotas, nombreDueño, cedulaDueño, edadMascota, telefonoDueño, especialidad, medico) {
//         this.nombreMascotas = nombreMascotas;
//         this.nombreDueño = nombreDueño;
//         this.cedulaDueño = cedulaDueño;
//         this.edadMascota = edadMascota;
//         this.telefonoDueño = telefonoDueño;
//         this.especialidad = especialidad;
//         this.medico = medico;


//     }
// } 

// //Objeto
// let mascota1=new Mascota ("luna","Ana","1","5 año","3105678","Veterinan Conductual","Jorge")
// let mascota2=new Mascota ("orion","Jorge","2","2 meses","31055555","Medicina Interna","Daniela")

// let mascotas=[mascota1,mascota2] 


