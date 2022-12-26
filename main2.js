const paciente = {
    nombreCompleto : "Matias",
    dni : 40477097,
    fechaNacimiento : "5/5/1997",
    mail : "gonzalezzmati@gmail.com",
    tipoTurno : "Traumatologia",
    profesional  : "Martin Rodrigo",
    hora : "15",
    tiempoEspera : 5,
    cantidadPacientes : 0 
}

let opcionMenu = "";
let capacidad = 10;


class Paciente {
    constructor(nombreCompleto,dni,fechaNacimiento,mail,tipoTurno,profesional,hora,tiempoEspera,cantidadPacientes){
        this.nombreCompleto = nombreCompleto;
        this.dni = dni;
        this.fechaNacimiento = fechaNacimiento;
        this.mail = mail;
        this.tipoTurno = tipoTurno;
        this.profesional = profesional;
        this.tiempoEspera = tiempoEspera;
        this.cantidadPacientes = cantidadPacientes;
        this.hora = hora;
    }
}

let listadePacientes = [];

let listadePacientesJson = [];

console.log(listadePacientesJson);

const agregarPaciente = (e) =>{
    let cantidadPacientes = 0;
    cantidadPacientes = cantidadPacientes + 1;
    e.preventDefault();

    let formulario = e.target;
    let nombreCompleto = formulario.children[1].value;
    localStorage.setItem(`nombreCompleto`,nombreCompleto);
    console.log(nombreCompleto);
    let dni= formulario.children[3].value;
    localStorage.setItem(`dni`, dni);
    console.log(dni);

    let fechaNacimiento = formulario.children[5].value;
    localStorage.setItem(`fechaNacimiento`, fechaNacimiento);
    console.log(fechaNacimiento);
    let mail = formulario.children[7].value;
    localStorage.setItem(`fmail`, mail);
    console.log(mail);
    let tipoTurno = formulario.children[9].value;
    localStorage.setItem(`tipoTurno`, tipoTurno);
    
    console.log(tipoTurno);
    let profesional = formulario.children[11].value;
    localStorage.setItem(`profesional`, profesional);
    console.log(profesional);
    let hora = formulario.children[13].value;
    localStorage.setItem(`hora`, hora);
    console.log(hora);
    let tiempoEspera = 5;
    tiempoEspera =  cantidadPacientes * tiempoEspera;
    let pacienteNuevo = new Paciente(nombreCompleto,dni,fechaNacimiento,mail,tipoTurno,profesional,hora,tiempoEspera,cantidadPacientes);
    listadePacientes.push(pacienteNuevo);
    console.log(listadePacientes);
    alert("Paciente Agregado con exito.")
    listadePacientesJson = JSON.stringify(listadePacientes)
    console.log("MUESTRA EN CONSOLA DE ARRAY DE OBJETO CON JSON")
    console.log(listadePacientesJson)
    localStorage.setItem("Lista de pacientes", listadePacientesJson);
    return listadePacientesJson;
}

let miFormulario = document.getElementById("formulario__ingresar__paciente");
miFormulario.addEventListener("submit", agregarPaciente);





const retirarPaciente = (e) =>{
    e.preventDefault();
    let formularioRetiro = e.target;
    let pacienteRetiro = formularioRetiro[0].value;
    console.log("Paciente a retirar : ")
    console.log(pacienteRetiro)
    let arrayNuevo = listadePacientes.filter(Paciente => Paciente.dni != pacienteRetiro);
    alert("Paciente retirado con exito")
    console.log("IMPRIMIMOS EL ARRAY SIN EL DATO")
    console.log(arrayNuevo);
    listadePacientes = arrayNuevo;
    listadePacientesJson = JSON.stringify(listadePacientes)
    console.log(listadePacientes)
    return listadePacientesJson;

}

let retiroPaciente = document.getElementById("formulario__retiro__paciente");
retiroPaciente.addEventListener("submit", retirarPaciente);

const verPacientes = () => {
    alert("Se muestran pacientes en consola")
    console.log(listadePacientes)
    for(const pacienteIterado of listadePacientes){
        console.log(pacienteIterado) 
    }
}


const tomarTurno = (e) => {
    e.preventDefault();
    let tomarturnoNuevo = e.target;
    let pacienteBusqueda = tomarturnoNuevo[0].value;
    pacienteBusqueda = pacienteBusqueda.toUpperCase();
    if(pacienteBusqueda == "A" || pacienteBusqueda== "N" ){
        if (pacienteBusqueda == "A"){
            let dniPacienteBusqueda = parseInt(prompt("Ingrese el dni del paciente a asignar turno : "));
            let pacienteTurnoNuevo = listadePacientes.filter(Paciente => Paciente.dni == dniPacienteBusqueda);
            console.log("---------------------------")
            console.log(pacienteTurnoNuevo);
            console.log(pacienteTurnoNuevo[0].tipoTurno);
            let turnoNuevo = prompt("Ingrese la especialidad  del turno a asignar : (Ej : Traumatologia)");
            pacienteTurnoNuevo[0].tipoTurno = turnoNuevo;
            console.log(pacienteTurnoNuevo[0].tipoTurno);
            let profesionaNuevo = prompt("Ingrese el profesional con el que desea el turno : ")
            pacienteTurnoNuevo[0].profesional = profesionaNuevo;
            let horaNueva = prompt("Ingrese el horario del turno : ")
            pacienteTurnoNuevo[0].hora = horaNueva;
            alert("Turno agregado con exito");

        }else if(pacienteBusqueda == "N"){
            agregarPaciente();
        }
    }else{
        alert("Ingreso un dato incorrecto, intente nuevamente");
        tomarTurno();
    }
     
}

let tomarTurnoExistente= document.getElementById("formulario__tomar__turno__existente");
tomarTurnoExistente.addEventListener("submit", tomarTurno);

const buscarPaciente = (e) => {
    e.preventDefault();
    let formPacienteBusqueda = e.target;
    let pacienteBuscado = formPacienteBusqueda.children[1].value;
    console.log(pacienteBuscado)
    let resultadoPaciente = listadePacientes.some(Paciente => Paciente.dni == pacienteBuscado);
    if (resultadoPaciente == true){
        let muestraPaciente = listadePacientes.filter(Paciente => Paciente.dni == pacienteBuscado);
        console.log(muestraPaciente);
        alert(`Paciente : ${muestraPaciente[0].nombreCompleto}- Dni : ${muestraPaciente[0].dni}- Fecha de nacimiento :${muestraPaciente[0].fechaNacimiento}- Email : ${muestraPaciente[0].mail}- Especialidad : ${muestraPaciente[0].tipoTurno}- Profesional : ${muestraPaciente[0].profesional}- Hora : ${muestraPaciente[0].hora}`)
        alert("Se muestra paciente en consola")

    }else{
        alert("El paciente no esta en la base de datos, vuelva a intentarlo");
        buscarPaciente();
    }
}

let busquedaPaciente = document.getElementById("formulario__busqueda__paciente");
busquedaPaciente.addEventListener("submit", buscarPaciente);

const cancelarTurno = () => {
    let dniPacienteACancelar = prompt("Ingrese el dni del paciente a cancelar turno : ")
    let pacienteACancelar = listadePacientes.filter(Paciente => Paciente.dni == dniPacienteACancelar);
    alert(`El paciente ${pacienteACancelar[0].nombreCompleto} tiene turno  en ${pacienteACancelar[0].tipoTurno} con el profesional ${pacienteACancelar[0].profesional}`)
    pacienteACancelar[0].tipoTurno = "";
    pacienteACancelar[0].profesional = "";
    pacienteACancelar[0].hora = "";
    alert("Su turno se cancelo con exito")
    alert(pacienteACancelar[0].tipoTurno)
    console.log(pacienteACancelar[0].tipoTurno);
}


/*
function menu(){
    let opcionMenu = prompt("Ingrese la opcion que desea a continuacion : Ingresar paciente (I) Retirar paciente(R) Ver pacientes (V) Salir(S) Buscar Paciente (B) Tomar un turno (T) Cancelar turno(C)");
    opcionMenu = opcionMenu.toUpperCase();
    if(opcionMenu == "I" || opcionMenu == "R" || opcionMenu == "V" || opcionMenu == "B" || opcionMenu == "T" || opcionMenu == "C"){
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
        }else if(opcionMenu == "C"){
            cancelarTurno();
        }
    }else{
        alert("Usted ingreso mal la opcion, vuelva a intentarlo");
        menu();
    }
     
}
    
menu();
*/