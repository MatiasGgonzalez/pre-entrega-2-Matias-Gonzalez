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
        console.log(pacienteIterado) 
    }
    menu();
}


const tomarTurno = () => {
    let pacienteBusqueda = (prompt("Ingrese la opcion que desea a continuacion : Designar turno a un paciente ya existente (A). Agregar turno a paciente nuevo : (N)"));
    pacienteBusqueda = pacienteBusqueda.toUpperCase();
    if(pacienteBusqueda == "A" || pacienteBusqueda== "N" ){
        if (pacienteBusqueda == "A"){
            let dniPacienteBusqueda = parseInt(prompt("Ingrese el dni del paciente a asignar turno : "));
            let pacienteTurnoNuevo = listadePacientes.filter(Paciente => Paciente.dni == dniPacienteBusqueda);
            console.log("---------------------------")
            console.log(pacienteTurnoNuevo);
            console.log(pacienteTurnoNuevo[0].tipoTurno);
            let turnoNuevo = prompt("Ingrese el tipo de turno a asignar : (Ej : Traumatologia)");
            pacienteTurnoNuevo[0].tipoTurno = turnoNuevo;
            console.log(pacienteTurnoNuevo[0].tipoTurno);
            alert("Turno agregado con exito");
            menu();
        }else if(pacienteBusqueda == "N"){
            agregarPaciente();
        }
    }else{
        alert("Ingreso un dato incorrecto, intente nuevamente");
        tomarTurno();
    }
     
}

const buscarPaciente = () => {
    let pacienteBuscado = parseInt(prompt("Ingrese el dni del paciente a buscar : "));
    let resultadoPaciente = listadePacientes.some(Paciente => Paciente.dni == pacienteBuscado);
    if (resultadoPaciente == true){
        let muestraPaciente = listadePacientes.filter(Paciente => Paciente.dni == pacienteBuscado);
        console.log(muestraPaciente);
        alert("Se muestra paciente en consola")
        menu();
    }else{
        alert("El paciente no esta en la base de datos, vuelva a intentarlo");
        buscarPaciente();
    }
}



function menu(){
    let opcionMenu = prompt("Ingrese la opcion que desea a continuacion : Ingresar paciente (I) Retirar paciente(R) Ver pacientes (V) Salir(S) Buscar Paciente (B) Tomar un turno (T)");
    opcionMenu = opcionMenu.toUpperCase();
    if(opcionMenu == "I" || opcionMenu == "R" || opcionMenu == "V" || opcionMenu == "B" || opcionMenu == "T"){
        if (opcionMenu == "I"){
            agregarPaciente();
        }else if (opcionMenu == "R"){
            retirarPaciente();
    
        }else if (opcionMenu == "V"){
            verPacientes();
        }else if(opcionMenu == "B"){
            buscarPaciente();
        }else if(opcionMenu == "T"){
            tomarTurno();
        }
    }else{
        alert("Usted ingreso mal la opcion, vuelva a intentarlo");
        menu();
    }
     
}
    
menu();
