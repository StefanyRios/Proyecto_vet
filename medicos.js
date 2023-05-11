let tablaMedicos = document.getElementById ("tabla-medico")
let cuerpoTabla = tablaMedicos.querySelector("tbody");

class Doctor{
    constructor(Nombre,Apellido,Cedula,Especialidad,Consultorio,Correo,Paciente){
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Cedula = Cedula;
        this.Especialidad = Especialidad;
        this.Consultorio = Consultorio;
        this.Correo = Correo;
        this.Paciente = Paciente;
    }
}

//Objetos 

let doctor1 = new Doctor ("Ana","Rios","123456","Medicina General","1","eje@gmail.com","morita")
let doctor2 = new Doctor ("Maria","Rios","789456","Medicina General","3","eje2@gmail.com","Saltin")

let doctores =[doctor1,doctor2]


for (let i = 0; i < doctores.length; i++ ){

    let medicos = doctores [i];

    let fila = cuerpoTabla.insertRow();
    let celdaNombre = fila.insertCell();
    let celdaApellido = fila.insertCell();
    let celdaCedula = fila.insertCell();
    let celdaEspecialidad = fila.insertCell();
    let celdaConsultorio = fila.insertCell();
    let celdaCorreo = fila.insertCell();
    let celdaPaciente = fila.insertCell();

    celdaNombre.textContent = medicos.Nombre;
    celdaApellido.textContent =medicos.Apellido;
    celdaCedula.textContent= medicos.Cedula;
    celdaEspecialidad.textContent = medicos.Especialidad;
    celdaConsultorio.textContent=medicos.Consultorio;
    celdaCorreo.textContent = medicos.Correo;
    celdaPaciente.textContent = medicos.Paciente;
}