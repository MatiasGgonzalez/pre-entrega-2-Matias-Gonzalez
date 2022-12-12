const paciente = {
    nombreCompleto : "Matias",
    dni : 40477097,
    fechaNacimiento : "5/5/1997",
    mail : "gonzalezzmati@gmail.com",
    tipoTurno : "Traumatologia",
    profesional  : "Martin Rodrigo",
    tiempoEspera : 5,
    cantidadPacientes : 0 
}

let opcionMenu = "";
let capacidad = 10;


class Paciente {
    constructor(nombreCompleto,dni,fechaNacimiento,mail,tipoTurno,profesional,tiempoEspera,cantidadPacientes){
        this.nombreCompleto = nombreCompleto;
        this.dni = dni;
        this.fechaNacimiento = fechaNacimiento;
        this.mail = mail;
        this.tipoTurno = tipoTurno;
        this.profesional = profesional;
        this.tiempoEspera = tiempoEspera;
        this.cantidadPacientes = cantidadPacientes;
    }
}

let listadePacientes = [];

const agregarPaciente = () =>{
    let cantidadPacientes = 0;
    cantidadPacientes = cantidadPacientes + 1;
    let nombreCompleto = prompt("indique el nombre completo del paciente :").toUpperCase();
    let dni= prompt("Indique el dni del paciente :")
    let fechaNacimiento = prompt("Indique la fecha de nacimiento del paciente. Ej : (5/5/1997) : ")
    let mail = prompt("Indique el mail del paciente : ")
    let tipoTurno = prompt("Indique la especialidad para la que desea el turno. Ej (Traumatologo) : ")
    let profesional = prompt("Indique el profesional con el que desea el turno : ")
    let tiempoEspera = 5;
    tiempoEspera =  cantidadPacientes * tiempoEspera;
    let pacienteNuevo = new Paciente(nombreCompleto,dni,fechaNacimiento,mail,tipoTurno,profesional,tiempoEspera,cantidadPacientes);
    listadePacientes.push(pacienteNuevo);
    console.log(listadePacientes);
    alert("Paciente Agregado con exito.")
    menu();
    return listadePacientes;
    
}

const retirarPaciente = () =>{
    let pacienteRetiro = parseInt(prompt("Ingrese el dni del paciente a retirar : "));
    let arrayNuevo = listadePacientes.filter(Paciente => Paciente.dni != pacienteRetiro);
    alert("Paciente retirado con exito")
    console.log("IMPRIMIMOS EL ARRAY SIN EL DATO")
    console.log(arrayNuevo);
    console.log(arrayNuevo[0][1])
    listadePacientes = arrayNuevo;
    console.log(listadePacientes)
    menu();
    return listadePacientes;
}

const verPacientes = () => {
    alert("Se muestran pacientes en consola")
    console.log(listadePacientes)
    for(const pacienteIterado of listadePacientes){
        console.log("SE MUESRA A LOS PACIENTES EN CONSOLA")
        console.log(pacienteIterado) 
    }
    menu();
    alert(`${pacienteIterado}`)
    
}


const tomarTurno = () => {
    let pacienteBusqueda = (prompt("Ingrese la opcion que desea a continuacion : Designar turno a un paciente ya existente (A). Agregar turno a paciente nuevo : (N)"));

    pacienteBusqueda = pacienteBusqueda.toUpperCase();
    if (pacienteBusqueda != "A" || pacienteBusqueda != "B"){
        alert("Ingreso un dato incorrecto, intente nuevamente");
        tomarTurno();
    }else if (pacienteBusqueda == "A"){
        let dniPacienteBusqueda = parseInt(prompt("Ingrese el dni del paciente a asignar turno : "));

        let arrayNuevo = listadePacientes.filter(Paciente => Paciente.dni != pacienteRetiro);
    }
    let arrayNuevo = listadePacientes.filter(Paciente => Paciente.dni != pacienteBusqueda);
}


    /*
    let pacienteRetiro = prompt("Ingrese el paciente a retirar : ").toUpperCase();
    console.log(pacienteRetiro);
    console.log(listadePacientes.join("-"))
    console.log(listadePacientes.includes(pacienteRetiro));
    posicionElemento = listadePacientes.indexOf(pacienteRetiro);
    console.log(posicionElemento);
    menu();
    return listadePacientes;
    */





function menu(){
    let opcionMenu = prompt("Ingrese la opcion que desea a continuacion : Ingresar paciente (I) Retirar paciente(R) Ver pacientes (V) Salir(S)");
    opcionMenu = opcionMenu.toUpperCase();
    if(opcionMenu == "I" || opcionMenu == "R" || opcionMenu == "V"){
        if (opcionMenu == "I"){
            agregarPaciente();
        }else if (opcionMenu == "R"){
            retirarPaciente();
    
        }else if (opcionMenu == "V"){
            verPacientes();
        }
    }else{
        alert("Usted ingreso mal la opcion, vuelva a intentarlo");
        menu();
    }
     


}
    
menu();

/*
const paciente1 = new Paciente("jose gonzalez", 17312974, "5/5/1997", "gonzalezzmati@gmail.com");

console.log(paciente1);


function ingresarPaciente(){
    cantidadPacientes = cantidadPacientes + 1;
    tiempoEsperaTotal = cantidadPacientes * tiempoEspera;
    nombrePaciente = prompt("Ingrese el nombre completo del paciente : ")
    dniPaciente = prompt("Ingrese el dni del paciente : ");
    fechaNacimientoPaciente = prompt("Ingrese la fecha de nacimiento  del paciente. Ej = (5/5/1997): ");
    mailPaciente = prompt("Ingrese el mail del paciente : ");
    alert(`El paciente ${nombrePaciente} tiene ${tiempoEsperaTotal} minutos de espera. Cantidad de pacientes en el consultorio : ${cantidadPacientes}`);
    alert(`Paciente ingresado con exito`);
}

ingresarPaciente();

function retirarPaciente(){
    
}

function verPacientes(){

}
*/